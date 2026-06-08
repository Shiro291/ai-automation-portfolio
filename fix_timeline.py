
import json

files = ['C:/Users/fatha/OneDrive/Desktop/Jobstreet/Ai automation porto/src/locales/en.json', 'C:/Users/fatha/OneDrive/Desktop/Jobstreet/Ai automation porto/src/locales/id.json']

original_en_timeline = [
    {
        'id': 'pgsd',
        'year': '2021 - 2025',
        'title': 'Educational Facilitator & Learning Architect',
        'organization': 'University of Muhammadiyah Prof. Dr. HAMKA',
        'description': 'Specialized in Pedagogical Architectures & Cognitive Development Psychology. Designed and executed immersive lesson plans, evaluating live learning metrics against national curriculum standards.'
    },
    {
        'id': 'rpl',
        'year': '2018 - 2021',
        'title': 'Software Engineering Foundation',
        'organization': 'Vocational Highschool 2 Gambir Jakarta Pusat',
        'description': 'Engineered a foundational background in core programming logic, database structuring, and UI/UX design architecture, laying the groundwork for complex infrastructure development.'
    }
]

original_id_timeline = [
    {
        'id': 'pgsd',
        'year': '2021 - 2025',
        'title': 'Fasilitator Pendidikan & Arsitek Pembelajaran',
        'organization': 'Universitas Muhammadiyah Prof. Dr. HAMKA',
        'description': 'Mengkhususkan diri dalam Arsitektur Pedagogis & Psikologi Perkembangan Kognitif. Merancang dan melaksanakan rencana pembelajaran imersif, mengevaluasi metrik pembelajaran langsung terhadap standar kurikulum nasional.'
    },
    {
        'id': 'rpl',
        'year': '2018 - 2021',
        'title': 'Dasar Rekayasa Perangkat Lunak',
        'organization': 'SMK Negeri 2 Gambir Jakarta Pusat',
        'description': 'Merekayasa latar belakang dasar dalam logika pemrograman inti, penataan basis data, dan arsitektur desain UI/UX, meletakkan dasar untuk pengembangan infrastruktur kompleks.'
    }
]

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    if 'en.json' in file:
        data['Timeline']['events'] = original_en_timeline
    else:
        data['Timeline']['events'] = original_id_timeline
        
    with open(file, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4)

