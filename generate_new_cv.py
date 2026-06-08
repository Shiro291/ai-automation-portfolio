import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import black, HexColor

def build_cv(filename="Fathan_CV_Updated_Final.pdf"):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        rightMargin=50,
        leftMargin=50,
        topMargin=50,
        bottomMargin=50
    )

    styles = getSampleStyleSheet()
    
    # Custom Styles
    name_style = ParagraphStyle(
        'Name', parent=styles['Heading1'],
        fontName='Helvetica-Bold', fontSize=24, spaceAfter=4, textColor=black
    )
    title_style = ParagraphStyle(
        'Title', parent=styles['Normal'],
        fontName='Helvetica', fontSize=12, spaceAfter=12, textColor=HexColor('#555555')
    )
    section_heading = ParagraphStyle(
        'SectionHeading', parent=styles['Heading2'],
        fontName='Helvetica-Bold', fontSize=14, spaceBefore=18, spaceAfter=6, textColor=black
    )
    body_style = ParagraphStyle(
        'Body', parent=styles['Normal'],
        fontName='Helvetica', fontSize=10, leading=14, spaceAfter=6
    )
    bullet_style = ParagraphStyle(
        'Bullet', parent=styles['Normal'],
        fontName='Helvetica', fontSize=10, leading=14, spaceAfter=4,
        leftIndent=15, bulletIndent=5
    )
    bold_body = ParagraphStyle(
        'BoldBody', parent=styles['Normal'],
        fontName='Helvetica-Bold', fontSize=11, leading=14, spaceBefore=8, spaceAfter=2
    )

    Story = []

    # Header
    Story.append(Paragraph("FATHAN FAQIH ALI", name_style))
    Story.append(Paragraph("AI Automation Specialist & Systems Engineer", title_style))
    Story.append(Paragraph("GitHub: github.com/Shiro291 | Portfolio: github.com/Shiro291/ai-automation-portfolio", body_style))
    Story.append(Spacer(1, 10))

    # Summary
    Story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
    Story.append(HRFlowable(width="100%", thickness=1, color=black, spaceAfter=8))
    summary_text = (
        "Automation Engineer specializing in programmatic lead routing, conversational AI bots, and "
        "high-reliability data pipelines. I build headless automation stacks in Python, design fail-safe webhooks, "
        "and orchestrate LLM integrations via the OpenAI API. I treat CRM integrity and API error handling (401s, 422s) "
        "as engineering problems, not marketing tasks. If a webhook drops at midnight, I build the catch-route before the client notices."
    )
    Story.append(Paragraph(summary_text, body_style))

    # Core Competencies
    Story.append(Paragraph("CORE COMPETENCIES", section_heading))
    Story.append(HRFlowable(width="100%", thickness=1, color=black, spaceAfter=8))
    Story.append(Paragraph("<bullet>&bull;</bullet><b>Infrastructure:</b> Webhooks, REST APIs, JSON Data Mapping, HTTP Auth (OAuth, Bearer)", bullet_style))
    Story.append(Paragraph("<bullet>&bull;</bullet><b>AI/LLM:</b> OpenAI API, Prompt Engineering, Context Injection, Fallback Handlers", bullet_style))
    Story.append(Paragraph("<bullet>&bull;</bullet><b>Platforms:</b> Make.com, n8n, GoHighLevel (GHL) Architecture", bullet_style))
    Story.append(Paragraph("<bullet>&bull;</bullet><b>Language/Stack:</b> Python, FastApi, Asyncio, Headless Automation (Playwright/Scrapling)", bullet_style))

    # Experience
    Story.append(Paragraph("ENGINEERING & AUTOMATION EXPERIENCE", section_heading))
    Story.append(HRFlowable(width="100%", thickness=1, color=black, spaceAfter=8))

    Story.append(Paragraph("Internal Tooling & Headless Automation", bold_body))
    Story.append(Paragraph("<bullet>&bull;</bullet>Built fully headless, asynchronous Python/Playwright automation scripts (e.g. Jobstreet Auto Apply Bot) to interact with complex web forms, bypassing dynamic DOM structures and executing hundreds of applications deterministically.", bullet_style))
    Story.append(Paragraph("<bullet>&bull;</bullet>Reduced manual pipeline management by deploying custom scripts to catch, parse, and route notifications, creating a single source of truth for downstream reporting.", bullet_style))

    Story.append(Paragraph("Automated Lead Routing & CRM Integrity", bold_body))
    Story.append(Paragraph("<bullet>&bull;</bullet>Built custom webhook listeners using FastAPI to ingest cross-platform lead data (Meta forms, landing pages), mapping disparate JSON payloads into unified CRM records with sub-90-second execution times.", bullet_style))
    Story.append(Paragraph("<bullet>&bull;</bullet>Engineered error-handling routes for API timeouts and 422 Unprocessable Entity drops, ensuring zero silent data loss between landing pages and downstream pipelines.", bullet_style))
    Story.append(Paragraph("<bullet>&bull;</bullet>Audited and maintained complex multi-step state machines, migrating fragile \"happy path\" automations into resilient, fault-tolerant flows in n8n and Make.com.", bullet_style))

    Story.append(Paragraph("Conversational AI & OpenAI API Integration", bold_body))
    Story.append(Paragraph("<bullet>&bull;</bullet>Designed and deployed conversational LLM bots using the OpenAI API, implementing strict context injection and prompt constraints to qualify inbound leads rather than act as generic auto-responders.", bullet_style))
    Story.append(Paragraph("<bullet>&bull;</bullet>Engineered LLM fallback protocols to detect model hallucination or out-of-bounds user intent, automatically triggering clean human-handoff routing.", bullet_style))
    Story.append(Paragraph("<bullet>&bull;</bullet>Programmatically extracted unstructured user inputs and normalized them into strict JSON schemas for automated CRM tagging and pipeline stage progression.", bullet_style))

    # Education (Stripped down to not highlight education focus)
    Story.append(Paragraph("EDUCATION", section_heading))
    Story.append(HRFlowable(width="100%", thickness=1, color=black, spaceAfter=8))
    Story.append(Paragraph("University of Muhammadiyah Prof. Dr. HAMKA | Data & Process Modeling (2021-2025)", body_style))
    Story.append(Paragraph("SMKN 2 Jakarta | Software Engineering (RPL) Foundation (2019-2021)", body_style))

    doc.build(Story)
    print(f"Successfully generated new AI Automation CV at {filename}")

if __name__ == "__main__":
    build_cv()
