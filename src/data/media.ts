const toSlug = (title: string) => title.toLowerCase().replace(/[\s&]+/g, '-').replace(/[^\w-]+/g, '');

const allArticles = [
    { 
        title: "The Future of Decentralized Testing: An Interview with Our CEO", 
        date: "May 15, 2025", 
        category: "Interview", 
        excerpt: "Our leadership discusses the company's vision and the impact of our technology on global health equity.", 
        image: "https://cdn.innovadx.com/images/ceo-interview.jpg",
        featured: true,
        content: `In an exclusive interview, our CEO, Dr. Evelyn Reed, sits down to discuss the driving forces behind InnovaDx and the future of diagnostic medicine. Dr. Reed elaborates on the company’s core mission to democratize diagnostics, making high-quality health insights accessible to every corner of the globe. "The traditional model of centralized laboratory testing, while powerful, creates inherent delays and logistical barriers," Dr. Reed explains. "Our goal is to break down those barriers. By engineering platforms like the DX-1, we empower clinicians to make critical decisions right at the patient's side, dramatically accelerating the path from symptom to diagnosis to treatment."

Looking ahead, Dr. Reed highlights the pivotal role of connected diagnostics in building resilient healthcare systems. "It's not just about the speed of a single test; it's about the power of networked data. When point-of-care results are seamlessly integrated into digital health ecosystems, we unlock unprecedented potential for real-time epidemiological surveillance, personalized medicine, and more efficient healthcare delivery. That's the future we are building at InnovaDx—a future where data flows as freely and as securely as the care it enables."`
    },
    { 
        title: "InnovaDx Announces Breakthrough in Rapid Diagnostic Technology", 
        date: "May 20, 2025", 
        category: "Press Release", 
        excerpt: "Our new platform reduces testing time by over 50%, a significant leap forward for point-of-care diagnostics.", 
        image: "https://cdn.innovadx.com/images/breakthrough-technology.jpg",
        featured: false,
        content: `LONDON, UK – InnovaDx today announced a significant technological breakthrough with the upcoming launch of its next-generation DX-2 analyzer. The new platform leverages advanced microfluidics and a proprietary signal amplification method to reduce average assay times from 15 minutes to under 7 minutes, without compromising the analytical sensitivity or specificity that defines the company's TRFIA technology.

This development represents a major step forward in the field of point-of-care testing (POCT), where speed is a critical factor in clinical decision-making, particularly in emergency and critical care settings. "Shortening the time-to-result by more than half is a game-changer," said Dr. Marcus Chen, Chief Technology Officer. "For conditions like acute myocardial infarction or sepsis, every minute counts. This innovation will empower clinicians to act with even greater confidence and speed." The DX-2 platform is expected to undergo regulatory review later this year.`
    },
    { 
        title: "InnovaDx Platform Receives ISO 13485 Certification", 
        date: "May 11, 2025", 
        category: "Company News", 
        excerpt: "Achieving this key quality management standard underscores our commitment to excellence and regulatory compliance.", 
        image: "https://cdn.innovadx.com/images/quality-certification.jpg",
        featured: false,
        content: `InnovaDx is proud to announce that its manufacturing facilities and quality management system have received ISO 13485:2016 certification. This internationally recognized standard is a critical milestone, demonstrating our robust quality controls and commitment to meeting the highest regulatory requirements for medical device design, development, and manufacturing.

"Achieving ISO 13485 certification is a testament to the dedication and rigor of our entire team," stated the Head of Quality Assurance. "It formalizes our deep-rooted commitment to quality and provides our partners and customers with the highest level of confidence in the safety, reliability, and performance of our diagnostic solutions. This is a foundational element of our global growth strategy and our promise to deliver products that clinicians can trust."`
    },
    { 
        title: "A Comparative Study on Point-of-Care Cardiac Markers", 
        date: "May 2, 2025", 
        category: "Research", 
        excerpt: "New data highlights the superior sensitivity and specificity of our TRFIA-based assays compared to conventional methods.", 
        image: "https://cdn.innovadx.com/images/cardiac-marker-research.jpg",
        featured: false,
        content: `A recent study published in the Journal of Clinical Diagnostics has demonstrated the superior analytical performance of InnovaDx's Time-Resolved Fluorescent Immunoassay (TRFIA) for the detection of high-sensitivity cardiac Troponin I (hs-cTnI) compared to traditional lateral flow methods. The study, which analyzed over 500 clinical samples, found that the DX-1 platform exhibited a significantly lower limit of detection (LoD) and improved precision at the 99th percentile upper reference limit.

"The data confirms that our TRFIA technology successfully bridges the gap between rapid, point-of-care testing and the high sensitivity required for modern cardiac risk stratification," said Dr. Lena Petrova, Chief Scientific Officer. "This allows for greater diagnostic accuracy in emergency settings, potentially reducing misdiagnosis rates for acute coronary syndrome." The findings further validate the clinical utility of our platform in demanding healthcare environments.`
    },
    { 
        title: "A Deep Dive into Our Dry Fluorescence Immunoassay Platform", 
        date: "April 28, 2025", 
        category: "Technology", 
        excerpt: "Exploring the science behind our innovative diagnostic analyzers and their real-world applications.", 
        image: "https://cdn.innovadx.com/images/abstract-biotech-background.jpg",
        featured: false,
        content: `At the heart of our point-of-care solutions is a sophisticated yet robust technology: Time-Resolved Fluorescent Immunoassay (TRFIA). This article explores the core principles that set our platform apart. Unlike conventional fluorescence, which is often hampered by background noise from biological samples, TRFIA utilizes long-lifetime Europium nanoparticle labels.

The process is elegant in its simplicity and power. An internal UV light source excites the nanoparticles. The system then waits a few hundred microseconds for any short-lived background fluorescence to decay completely. Only then does it measure the long-lived, stable signal from the Europium labels, resulting in a virtually noise-free measurement. This leads to a superior signal-to-noise ratio, enabling the detection of analytes at much lower concentrations than is possible with standard rapid tests.`
    },
    { 
        title: "InnovaDx Partners with Global Health Initiative", 
        date: "April 15, 2025", 
        category: "Partnerships", 
        excerpt: "This collaboration aims to deploy our diagnostic tools in low-resource settings, improving access to healthcare.", 
        image: "https://cdn.innovadx.com/images/global-health-partnership.jpg",
        featured: false,
        content: `InnovaDx has entered into a strategic partnership with the Global Health Access Initiative (GHAI) to deploy our DX-1 platform and a panel of infectious disease tests in underserved communities across Southeast Asia and Sub-Saharan Africa. The collaboration will focus on improving the diagnosis of febrile illnesses such as malaria and dengue, as well as supporting maternal health programs with rapid, on-site testing.

"This partnership aligns perfectly with our core mission," said CEO Dr. Evelyn Reed. "Our technology was designed to be robust, portable, and easy to use, making it ideal for the very settings where GHAI operates. By combining our technology with their logistical and on-the-ground expertise, we can make a real, measurable impact on health equity and save lives." The initial phase will see the deployment of 500 analyzers and 100,000 test kits over the next 18 months.`
    },
];

export const mediaData = allArticles.map(article => ({
    ...article,
    link: `/media-center/${toSlug(article.title)}`
}));