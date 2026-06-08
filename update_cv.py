import fitz

def main():
    input_pdf = "Fathan Faqih Ali CV Inst.pdf"
    output_pdf = "Fathan_CV_Updated.pdf"
    
    # Portfolio Link Placeholder (user forgot to attach it in prompt)
    portfolio_url = "https://portofolio-ffa.vercel.app/en"
    
    print(f"Opening {input_pdf}")
    doc = fitz.open(input_pdf)
    page = doc[0]
    
    # --- 1. Add Portfolio Link ---
    # From diagnostic, LinkedIn is at: Rect(81.0, 43.72, 113.99, 53.69)
    # We will append " | Portfolio" next to it
    link_x = 116.0
    link_y = 52.0  # Slightly adjust baseline
    
    text_to_insert = " | Portfolio"
    # Use built-in Times-Roman, matching standard serif fonts
    fontsize = 9.5
    
    page.insert_text(fitz.Point(link_x, link_y), text_to_insert, fontname="times-roman", fontsize=fontsize, color=(0, 0, 1))
    
    # Create the hyperlink annotation
    text_w = fitz.get_text_length(text_to_insert, fontname="times-roman", fontsize=fontsize)
    link_rect = fitz.Rect(link_x, link_y - 10, link_x + text_w, link_y + 2)
    page.insert_link({"kind": fitz.LINK_URI, "uri": portfolio_url, "from": link_rect})
    print("Added Portfolio link.")
    
    # --- 2. Add Portfolio Items at the Bottom ---
    # Original last block ended around Y=689
    y_start = 689.69 + 25
    x_start = 81.0 # align with the rest of the text
    
    # Based on the requested 5 core skills and project context from plan: Use authoritative tone
    item_header = "PORTFOLIO & PROJECTS"
    item_body = (
        "• Interactive EdTech Learning Module: Developed a scalable interactive learning module deployed to increase\n"
        "  engagement based on differentiated learning principles. (React, Tailwind, Zustand)\n"
        "• Pedagogical Technology Consulting (Primary Education): Designed and executed immersive lesson plans managing\n"
        "  real-time student engagement, integrating cognitive load theory with modern tech stacks."
    )
    
    # Insert Header
    page.insert_text(fitz.Point(x_start, y_start), item_header, fontname="times-roman", fontsize=10, color=(0,0,0))
    # Insert Body
    page.insert_text(fitz.Point(x_start, y_start + 15), item_body, fontname="times-roman", fontsize=9, color=(0,0,0))
    print("Added Portfolio items.")
    
    # --- 3. Crop empty space ---
    # Re-calculate text bounds to include the new text
    rects = []
    for block in page.get_text("blocks"):
        rects.append(fitz.Rect(block[:4]))
        
    if rects:
        union_rect = rects[0]
        for r in rects[1:]:
            union_rect |= r
            
        # Add padding (30 points) around the content
        padding = 30
        crop_rect = union_rect + (-padding, -padding, padding, padding)
        
        # Ensure crop_rect doesn't go out of original page bounds
        crop_rect.intersect(page.rect)
        page.set_cropbox(crop_rect)
        print(f"Cropped page to {crop_rect}")
    
    # Save output
    doc.save(output_pdf)
    print(f"Saved optimized PDF as {output_pdf}")

if __name__ == "__main__":
    main()
