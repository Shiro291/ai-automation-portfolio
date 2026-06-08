import os
from io import BytesIO
from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas
from reportlab.lib.colors import black, blue

def create_overlay():
    packet = BytesIO()
    c = canvas.Canvas(packet, pagesize=(612.0, 792.0))

    # The phone number in fitz was at Rect(278.68, 96.85, 333.72, 106.90)
    # The right edge is at X = 333.72
    # The bottom edge is at Y = 106.90 (top-down). In reportlab (bottom-up), this is 792 - 106.90 = 685.1
    # We will use Y = 686.0 for the baseline.
    
    text_x = 333.72 + 5.0
    text_y = 686.0
    
    # The CV Maker uses Lato or standard sans-serif usually. We'll use Helvetica.
    c.setFont("Helvetica", 9)
    c.setFillColor(black)
    c.drawString(text_x, text_y, " | ")
    
    # Calculate width of " | " to place "Portfolio" right after it
    link_x = text_x + c.stringWidth(" | ", "Helvetica", 9)
    c.setFillColor(blue)
    c.drawString(link_x, text_y, "Portfolio")
    
    # Add hyperlink
    link_width = c.stringWidth("Portfolio", "Helvetica", 9)
    portfolio_url = "https://portofolio-ffa.vercel.app/en"
    
    # The linkRect: (x1, y1, x2, y2)
    c.linkURL(portfolio_url, (link_x, text_y - 2, link_x + link_width, text_y + 10))
    
    c.save()
    packet.seek(0)
    return packet

def main():
    original_pdf = r"C:\Users\fatha\OneDrive\Desktop\CV Maker\resume.pdf"
    output_pdf = r"C:\Users\fatha\OneDrive\Desktop\CV Maker\resume_updated.pdf"
    
    reader = PdfReader(original_pdf)
    
    overlay_packet = create_overlay()
    overlay_reader = PdfReader(overlay_packet)
    overlay_page = overlay_reader.pages[0]
    
    writer = PdfWriter()
    
    for i, page in enumerate(reader.pages):
        if i == 0:
            page.merge_page(overlay_page)
        writer.add_page(page)
        
    with open(output_pdf, "wb") as out_f:
        writer.write(out_f)
        
    print(f"Done! Saved to {output_pdf}")

if __name__ == "__main__":
    main()
