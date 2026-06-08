import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import black, HexColor, blue
from reportlab.lib.units import inch

def build_cv(filename="Fathan_CV_Updated_Final.pdf"):
    # Use tighter margins to fit 1 page
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        rightMargin=40,
        leftMargin=40,
        topMargin=40,
        bottomMargin=40
    )

    styles = getSampleStyleSheet()
    
    # Define exact styles to match the original "clean/minimal" format
    name_style = ParagraphStyle(
        'Name', parent=styles['Normal'],
        fontName='Times-Bold', fontSize=18, spaceAfter=2, textColor=black
    )
    contact_style = ParagraphStyle(
        'Contact', parent=styles['Normal'],
        fontName='Times-Roman', fontSize=10, spaceAfter=2, textColor=black
    )
    link_style = ParagraphStyle(
        'Link', parent=styles['Normal'],
        fontName='Times-Roman', fontSize=10, spaceAfter=10, textColor=blue
    )
    section_heading = ParagraphStyle(
        'SectionHeading', parent=styles['Normal'],
        fontName='Times-Bold', fontSize=11, spaceBefore=12, spaceAfter=6, textColor=black,
        textTransform='uppercase'
    )
    
    # Body text
    body_style = ParagraphStyle(
        'Body', parent=styles['Normal'],
        fontName='Times-Roman', fontSize=9.5, leading=12, spaceAfter=4
    )
    bullet_style = ParagraphStyle(
        'Bullet', parent=styles['Normal'],
        fontName='Times-Roman', fontSize=9.5, leading=12, spaceAfter=4,
        leftIndent=12, bulletIndent=6, bulletFontName='Times-Roman', bulletText='•'
    )
    
    # Job Title (equivalent to "- Student Teacher" in original)
    job_title = ParagraphStyle(
        'JobTitle', parent=styles['Normal'],
        fontName='Times-Bold', fontSize=10, leading=12, spaceBefore=6, spaceAfter=2
    )

    Story = []

    # --- Header ---
    # Fathan Faqih Ali
    # fathanfaqih86@gmail.com
    # LinkedIn | GitHub | Portfolio
    Story.append(Paragraph("Fathan Faqih Ali", name_style))
    Story.append(Paragraph("fathanfaqih86@gmail.com", contact_style))
    Story.append(Paragraph('<a href="https://github.com/Shiro291" color="blue">GitHub</a> | <a href="https://github.com/Shiro291/ai-automation-portfolio" color="blue">Portfolio</a>', link_style))
    
    # --- SUMMARY ---
    Story.append(Paragraph("SUMMARY", section_heading))
    Story.append(HRFlowable(width="100%", thickness=0.5, color=black, spaceAfter=6))
    summary_text = (
        "Automation Engineer specializing in programmatic lead routing, conversational AI bots, and "
        "high-reliability data pipelines. I build headless automation stacks in Python, design fail-safe webhooks, "
        "and orchestrate LLM integrations via the OpenAI API. I treat CRM integrity and API error handling (401s, 422s) "
        "as engineering problems, not marketing tasks. If a webhook drops at midnight, I build the catch-route before the client notices."
    )
    Story.append(Paragraph(summary_text, body_style))

    # --- EXPERIENCE ---
    Story.append(Paragraph("EXPERIENCE", section_heading))
    Story.append(HRFlowable(width="100%", thickness=0.5, color=black, spaceAfter=6))

    # Job 1
    # Use a table to put Date on the right, like the original
    def job_header(title, date_str):
        p1 = Paragraph(f"- {title}", job_title)
        p2 = Paragraph(date_str, ParagraphStyle('Date', fontName='Times-Roman', fontSize=9.5, alignment=2))
        t = Table([[p1, p2]], colWidths=['70%', '30%'])
        t.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'BOTTOM'),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('BOTTOMPADDING', (0,0), (-1,-1), 2),
            ('TOPPADDING', (0,0), (-1,-1), 0),
        ]))
        return t

    Story.append(job_header("AI Automation Specialist", "2024 - Present"))
    Story.append(Paragraph("Designed and deployed conversational LLM bots using the OpenAI API, implementing strict context injection and prompt constraints to qualify inbound leads rather than act as generic auto-responders.", bullet_style))
    Story.append(Paragraph("Engineered LLM fallback protocols to detect model hallucination or out-of-bounds user intent, automatically triggering clean human-handoff routing.", bullet_style))
    Story.append(Paragraph("Programmatically extracted unstructured user inputs and normalized them into strict JSON schemas for automated CRM tagging and pipeline stage progression.", bullet_style))

    Story.append(job_header("Lead Backend Engineer (Headless Automation)", "2022 - 2024"))
    Story.append(Paragraph("Built fully headless, asynchronous Python/Playwright automation scripts (e.g. Jobstreet Auto Apply Bot) to interact with complex web forms, bypassing dynamic DOM structures and executing hundreds of applications deterministically.", bullet_style))
    Story.append(Paragraph("Reduced manual pipeline management by deploying custom scripts to catch, parse, and route notifications, creating a single source of truth for downstream reporting.", bullet_style))
    
    Story.append(job_header("Systems Engineer & API Integration", "2021 - 2022"))
    Story.append(Paragraph("Built custom webhook listeners using FastAPI to ingest cross-platform lead data (Meta forms, landing pages), mapping disparate JSON payloads into unified CRM records with sub-90-second execution times.", bullet_style))
    Story.append(Paragraph("Engineered error-handling routes for API timeouts and 422 Unprocessable Entity drops, ensuring zero silent data loss between landing pages and downstream pipelines.", bullet_style))
    Story.append(Paragraph("Audited and maintained complex multi-step state machines, migrating fragile 'happy path' automations into resilient, fault-tolerant flows in n8n and Make.com.", bullet_style))

    # --- SKILLS ---
    Story.append(Paragraph("SKILLS", section_heading))
    Story.append(HRFlowable(width="100%", thickness=0.5, color=black, spaceAfter=6))
    
    Story.append(Paragraph("<b>Infrastructure & Backend:</b> Webhooks, REST APIs, JSON Data Mapping, HTTP Auth (OAuth, Bearer), FastAPI", body_style))
    Story.append(Paragraph("<b>AI & LLM Orchestration:</b> OpenAI API, Prompt Engineering, Context Injection, Strict JSON Schema enforcement, Fallback Handlers", body_style))
    Story.append(Paragraph("<b>Workflow Platforms:</b> Make.com (Integromat), n8n, GoHighLevel (GHL) Architecture, Zapier", body_style))
    Story.append(Paragraph("<b>Languages & Tools:</b> Python, Asyncio, Playwright, Scrapling, Next.js, Node.js", body_style))

    # --- EDUCATION ---
    Story.append(Paragraph("EDUCATION", section_heading))
    Story.append(HRFlowable(width="100%", thickness=0.5, color=black, spaceAfter=6))
    Story.append(job_header("Universitas Muhammadiyah Prof. Dr. HAMKA", "2021 - 2025"))
    Story.append(Paragraph("Data & Process Modeling / Instructional Architecture", body_style))
    Story.append(job_header("Vocational Highschool 2 Gambir Jakarta Pusat", "2018 - 2021"))
    Story.append(Paragraph("Software Engineering Foundation (RPL)", body_style))

    doc.build(Story)
    print(f"Successfully generated 1-page CV at {filename}")

if __name__ == "__main__":
    build_cv()
