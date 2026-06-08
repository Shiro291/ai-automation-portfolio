import fitz

doc = fitz.open(r'C:\Users\fatha\OneDrive\Desktop\CV Maker\resume.pdf')
page = doc[0]

# Print page rect
print(f"Page rect: {page.rect}")

phone = "08972148815"
text_instances = page.search_for(phone)
if text_instances:
    for inst in text_instances:
        print(f"Found phone number at: {inst}")
else:
    print("Phone number not found directly. Printing all text blocks containing 0897:")
    for b in page.get_text("blocks"):
        if "0897" in b[4] or "8815" in b[4]:
            print(b)
