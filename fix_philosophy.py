
import json

files = ['C:/Users/fatha/OneDrive/Desktop/Jobstreet/Ai automation porto/src/locales/en.json', 'C:/Users/fatha/OneDrive/Desktop/Jobstreet/Ai automation porto/src/locales/id.json']

original_en_philosophy = {
    'badge': 'The Dual-Threat Advantage',
    'title': 'Pedagogy Meets Architecture',
    'tech_heading': 'Systems Engineer',
    'tech_copy': 'I build robust, scalable architectures with zero technical debt using modern React, TypeScript, and state management solutions.',
    'edu_heading': 'Learning Architect',
    'edu_copy': 'I apply Cognitive Load Theory and differentiated instruction principles to design interfaces that maximize learning retention.'
}

original_id_philosophy = {
    'badge': 'Keunggulan Ganda',
    'title': 'Simbiose Pedagogi dan Arsitektur',
    'tech_heading': 'Systems Engineer',
    'tech_copy': 'Saya membangun arsitektur sistem yang tangguh dan terukur tanpa utang teknis menggunakan React, TypeScript, dan state management modern.',
    'edu_heading': 'Learning Architect',
    'edu_copy': 'Saya mengaplikasikan Teori Beban Kognitif dan prinsip instruksi berdiferensiasi untuk merancang antarmuka yang memaksimalkan retensi materi.'
}

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    if 'en.json' in file:
        data['Philosophy'] = original_en_philosophy
    else:
        data['Philosophy'] = original_id_philosophy
        
    with open(file, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4)

