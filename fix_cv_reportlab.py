import os
from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from reportlab.platypus import Paragraph, Frame
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import white, black, blue
from io import BytesIO

def create_overlay():
    packet = BytesIO()
    c = canvas.Canvas(packet, pagesize=(612.0, 792.0))
    
    # 1. Draw a white rectangle at the bottom to cover the grey background
    # Top of white box in PyMuPDF is 0, bottom is 716.25
    # So in standard bottom-up coords, the white box is from Y=75.75 to Y=792
    # We want to cover from Y=0 to Y=75.75
    c.setFillColor(white)
    c.setStrokeColor(white)
    # Give a bit of overlap so no grey line shows -> height=80
    c.rect(70.5, 0.0, 471.0, 80.0, fill=1, stroke=0)
    
    # 2. Add Portfolio Text
    styles = getSampleStyleSheet()
    header_style = ParagraphStyle(
        'PortfolioHeader',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=10,
        textColor=black,
        spaceAfter=4,
    )
    body_style = ParagraphStyle(
        'PortfolioBody',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=9,
        textColor=black,
        leading=11,
    )
    
    header_text = "PORTFOLIO & PROJECTS"
    body_text = (
        "• <b>Interactive EdTech Learning Module:</b> Developed a scalable interactive learning module deployed to increase "
        "engagement based on differentiated learning principles. (React, Tailwind, Zustand)<br/>"
        "• <b>Pedagogical Technology Consulting (Primary Ed):</b> Designed and executed immersive lesson plans managing "
        "real-time student engagement, integrating cognitive load theory with modern tech stacks."
    )
    
    # Draw header
    p_head = Paragraph(header_text, header_style)
    p_body = Paragraph(body_text, body_style)
    
    # Create a frame for the text in the newly added white space
    # X=81 to align with original text
    # Y goes from 0 to 75. We'll put it from Y=5 to Y=75
    f = Frame(81.0, 5.0, 450.0, 70.0, leftPadding=0, bottomPadding=0, rightPadding=0, topPadding=0)
    f.addFromList([p_head, p_body], c)
    
    # 3. Add Portfolio Link at the top
    # LinkedIn is around Y=738 in bottom-up coords.
    c.setFont("Times-Roman", 9.5)
    c.setFillColor(blue)
    c.drawString(116.0, 739.0, " | Portfolio")
    
    # We can add a clickable link annotation in reportlab:
    c.linkURL("https://portofolio-ffa.vercel.app/en", (116.0, 739.0 - 2, 160.0, 739.0 + 10))
    
    c.save()
    packet.seek(0)
    return packet

def main():
    original_pdf = "Fathan Faqih Ali CV Inst.pdf"
    output_pdf = "Fathan_CV_Updated_Final.pdf"
    
    reader = PdfReader(original_pdf)
    page = reader.pages[0]
    
    # Merge overlay
    overlay_packet = create_overlay()
    overlay_reader = PdfReader(overlay_packet)
    overlay_page = overlay_reader.pages[0]
    
    page.merge_page(overlay_page)
    
    # Crop the page to only the white area to remove all grey!
    # left=70.5, right=541.5, bottom=0.0, top=792.0
    page.mediabox.left = 70.5
    page.mediabox.right = 541.5
    page.mediabox.bottom = 0.0
    page.mediabox.top = 792.0
    
    # Write output
    writer = PdfWriter()
    writer.add_page(page)
    
    with open(output_pdf, "wb") as out_f:
        writer.write(out_f)
    print("Done! Saved to", output_pdf)

if __name__ == "__main__":
    main()
