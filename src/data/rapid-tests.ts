
export type RapidTest = {
    name: string;
    slug: string;
    brand: 'Precision Q';
    category: string;
    description: string;
    target?: string;
    specimen: string;
    formats: string[];
    testingTime: string;
    storage: string;
    image: string;
    performance: {
        reference?: string;
        sensitivity?: string;
        specificity?: string;
        cutOff?: string;
    };
    orderingInfo: {
        format: string;
        packSize: string;
        catNo: string;
    }[];
    featured?: boolean;
};

export type RapidTestCategory = {
    category: string;
    tests: RapidTest[];
};

const images = [
    "https://i.imgur.com/8Q6g8Jz.png",
    "https://i.imgur.com/Q2xQyhq.png",
    "https://i.imgur.com/j4g2k2L.png",
    "https://i.imgur.com/eZg3Z2d.png",
    "https://i.imgur.com/D4kO1zS.png",
    "https://i.imgur.com/Y3wG1bH.png",
];

let imageIndex = 0;
const getNextImage = () => {
    const img = images[imageIndex];
    imageIndex = (imageIndex + 1) % images.length;
    return img;
};

const toSlug = (name: string) => name.toLowerCase().replace(/[\s&/+,().]+/g, '-').replace(/[^\w-]+/g, '');

const allTests: Omit<RapidTest, 'slug' | 'brand' | 'image' | 'description'>[] = [
    // Women's Health
    { category: "Women's Health", name: "hCG Pregnancy Test", target: "hCG", specimen: "Urine, Serum, WB/S/P", formats: ["Cassette", "Dipstick", "Midstream"], testingTime: "5 mins", storage: "2-30°C", performance: { cutOff: "10, 20, 25 mIU/mL" }, orderingInfo: [{ format: "Cassette", packSize: "25/40 T", catNo: "FHC-A202" }] },
    { category: "Women's Health", name: "LH Ovulation Test", target: "Luteinizing Hormone (LH)", specimen: "Urine", formats: ["Cassette", "Dipstick", "Midstream"], testingTime: "10 mins", storage: "2-30°C", performance: { cutOff: "20-40 mIU/mL" }, orderingInfo: [{ format: "Cassette", packSize: "40 T", catNo: "FLH-102" }] },
    { category: "Women's Health", name: "FSH Menopause Test", target: "Follicle-Stimulating Hormone (FSH)", specimen: "Urine", formats: ["Cassette", "Dipstick", "Midstream"], testingTime: "10 mins", storage: "2-30°C", performance: { cutOff: "25 mIU/mL" }, orderingInfo: [{ format: "Cassette", packSize: "40 T", catNo: "FFS-102" }] },
    { category: "Women's Health", name: "TORCH Panel (Toxo, Rubella, CMV, HSV)", target: "Toxo, Rubella, CMV, HSV 1/2 Antibodies", specimen: "S/P, WB/S/P", formats: ["Cassette"], testingTime: "15 mins", storage: "2-30°C", performance: {}, orderingInfo: [{ format: "Combo Cassette", packSize: "25 T", catNo: "ITOGM-345" }] },
    { category: "Women's Health", name: "fFN (Fetal Fibronectin) Test", target: "Fetal Fibronectin (fFN)", specimen: "Vaginal Secretion", formats: ["Cassette"], testingTime: "15 mins", storage: "2-30°C", performance: {}, orderingInfo: [{ format: "Cassette", packSize: "25 T", catNo: "FFF-502" }] },

    // Infectious Disease
    { category: "Infectious Disease", name: "H. pylori Antibody Test", target: "H. pylori Antibodies", specimen: "WB/S/P", formats: ["Cassette"], testingTime: "10 mins", storage: "2-30°C", performance: {}, orderingInfo: [{ format: "Cassette", packSize: "25/40 T", catNo: "IHP-N402" }], featured: true },
    { category: "Infectious Disease", name: "H. pylori Antigen Test", target: "H. pylori Antigen", specimen: "Feces", formats: ["Cassette", "Dipstick"], testingTime: "10 mins", storage: "2-30°C", performance: {}, orderingInfo: [{ format: "Cassette", packSize: "25 T", catNo: "IHP-602" }] },
    { category: "Infectious Disease", name: "Rotavirus & Adenovirus Combo Test", target: "Rotavirus & Adenovirus Antigens", specimen: "Feces", formats: ["Cassette"], testingTime: "10 mins", storage: "2-30°C", performance: {}, orderingInfo: [{ format: "Cassette", packSize: "25 T", catNo: "IRAC-N625" }] },
    { category: "Infectious Disease", name: "Strep A Test", target: "Group A Streptococcus Antigen", specimen: "Throat Swab", formats: ["Cassette", "Dipstick"], testingTime: "5 mins", storage: "2-30°C", performance: {}, orderingInfo: [{ format: "Cassette", packSize: "20 T", catNo: "IST-N502" }] },
    { category: "Infectious Disease", name: "Malaria P.f/Pan Ag Test", target: "Malaria P.f (HRP-II) & Pan-malarial (pLDH) Antigens", specimen: "Whole Blood", formats: ["Cassette", "Dipstick"], testingTime: "15 mins", storage: "2-30°C", performance: {}, orderingInfo: [{ format: "Cassette", packSize: "25 T", catNo: "IMPN-402" }] },
    { category: "Infectious Disease", name: "Dengue NS1 Ag & IgG/IgM Combo Test", target: "Dengue NS1 Ag, IgG/IgM Ab", specimen: "WB/S/P", formats: ["Cassette"], testingTime: "15 mins", storage: "2-30°C", performance: {}, orderingInfo: [{ format: "Cassette", packSize: "25 T", catNo: "IDEC-425" }], featured: true },
    { category: "Infectious Disease", name: "COVID-19 & Flu A+B Antigen Combo Test", target: "SARS-CoV-2, Influenza A, Influenza B Antigens", specimen: "Nasal/NP Swab", formats: ["Cassette"], testingTime: "15 mins", storage: "2-30°C", performance: {}, orderingInfo: [{ format: "Cassette", packSize: "20/25 T", catNo: "ISIN-525H" }] },
    { category: "Infectious Disease", name: "Hepatitis Panel (HBsAg, HCV)", target: "HBsAg, HCV Antibodies", specimen: "S/P, WB/S/P", formats: ["Cassette"], testingTime: "15 mins", storage: "2-30°C", performance: {}, orderingInfo: [{ format: "Combo Cassette", packSize: "25 T", catNo: "IHBC-325" }] },
    { category: "Infectious Disease", name: "HIV 1/2 & Syphilis Combo Test", target: "HIV 1/2 Antibodies, Syphilis Antibodies", specimen: "S/P, WB/S/P", formats: ["Cassette"], testingTime: "15 mins", storage: "2-30°C", performance: {}, orderingInfo: [{ format: "Combo Cassette", packSize: "25 T", catNo: "IMID-325" }] },

    // Drugs of Abuse
    { category: "Drugs of Abuse", name: "Multi-Drug Urine Test Cup (2-22 drugs)", target: "Multiple Drugs & Metabolites", specimen: "Urine", formats: ["Cup"], testingTime: "5 mins", storage: "2-30°C", performance: { cutOff: "Standard SAMHSA cutoffs" }, orderingInfo: [{ format: "1-Step Cup", packSize: "25 T", catNo: "DOA-127~1227-A" }], featured: true },
    { category: "Drugs of Abuse", name: "Multi-Drug Oral Fluid Test (2-16 drugs)", target: "Multiple Drugs & Metabolites", specimen: "Oral Fluid", formats: ["Cup", "Device"], testingTime: "10 mins", storage: "2-30°C", performance: { cutOff: "Various cutoffs" }, orderingInfo: [{ format: "Test Cup", packSize: "20 T", catNo: "DSD-827~8167-C" }] },
    { category: "Drugs of Abuse", name: "Multi-Drug Hair Test (2-13 drugs)", target: "Multiple Drugs & Metabolites", specimen: "Hair", formats: ["Cassette"], testingTime: "10 mins", storage: "2-30°C", performance: { cutOff: "e.g., COC 0.5 ng/mg" }, orderingInfo: [{ format: "Cassette", packSize: "10 T", catNo: "DOA-H925~H9135" }] },

    // Tumor Markers
    { category: "Tumor Markers", name: "PSA Test (Semi-Quantitative)", target: "Prostate Specific Antigen (PSA)", specimen: "WB/S/P", formats: ["Cassette"], testingTime: "10 mins", storage: "2-30°C", performance: { cutOff: "3-10 ng/mL" }, orderingInfo: [{ format: "Cassette", packSize: "10 T", catNo: "TPS-402" }], featured: true },
    { category: "Tumor Markers", name: "FOB Test", target: "Fecal Occult Blood (Hemoglobin)", specimen: "Feces", formats: ["Cassette", "Dipstick"], testingTime: "10 mins", storage: "2-30°C", performance: { cutOff: "10-100 ng/mL" }, orderingInfo: [{ format: "Cassette", packSize: "25 T", catNo: "TFO-602" }] },
    { category: "Tumor Markers", name: "AFP Test", target: "Alpha-Fetoprotein (AFP)", specimen: "WB/S/P", formats: ["Cassette"], testingTime: "15 mins", storage: "2-30°C", performance: { cutOff: "10 ng/ml" }, orderingInfo: [{ format: "Cassette", packSize: "40 T", catNo: "TAF-402" }] },
    { category: "Tumor Markers", name: "CEA Test", target: "Carcinoembryonic Antigen (CEA)", specimen: "WB/S/P", formats: ["Cassette"], testingTime: "15 mins", storage: "2-30°C", performance: { cutOff: "5 ng/ml" }, orderingInfo: [{ format: "Cassette", packSize: "40 T", catNo: "TCE-402" }] },

    // Cardiac Markers
    { category: "Cardiac Markers", name: "Cardiac Combo Test (cTnI, CK-MB, Myo)", target: "cTnI, CK-MB, Myoglobin", specimen: "WB/S/P", formats: ["Cassette"], testingTime: "15 mins", storage: "2-30°C", performance: { cutOff: "cTnI: 0.5ng/mL, CK-MB: 5ng/mL, Myo: 50ng/mL" }, orderingInfo: [{ format: "Cassette", packSize: "10 T", catNo: "CMA-435" }] },
    { category: "Cardiac Markers", name: "NT-proBNP Test", target: "NT-proBNP", specimen: "WB/S/P", formats: ["Cassette"], testingTime: "15 mins", storage: "2-30°C", performance: { cutOff: "0.45 ng/mL" }, orderingInfo: [{ format: "Cassette", packSize: "10 T", catNo: "CBN-402" }] },
    { category: "Cardiac Markers", name: "D-Dimer Test", target: "D-Dimer", specimen: "WB/P", formats: ["Cassette"], testingTime: "15 mins", storage: "2-30°C", performance: { cutOff: "500 ng/mL" }, orderingInfo: [{ format: "Cassette", packSize: "10 T", catNo: "CDM-402" }] },

    // Others
    { category: "Others", name: "Vitamin D Test", target: "25-hydroxy Vitamin D", specimen: "WB", formats: ["Cassette"], testingTime: "10 mins", storage: "2-30°C", performance: { cutOff: "10-30-100 ng/mL" }, orderingInfo: [{ format: "Cassette", packSize: "10 T", catNo: "OVD-402" }] },
    { category: "Others", name: "Ferritin Test (Semi-Quantitative)", target: "Ferritin", specimen: "WB/S/P", formats: ["Cassette"], testingTime: "10 mins", storage: "2-30°C", performance: { cutOff: "13-30 ng/mL" }, orderingInfo: [{ format: "Cassette", packSize: "10 T", catNo: "OFE-T402" }] },
    { category: "Others", name: "CRP Test (Semi-Quantitative)", target: "C-reactive Protein (CRP)", specimen: "WB/S/P", formats: ["Cassette", "Dipstick"], testingTime: "10 mins", storage: "2-30°C", performance: { cutOff: "10-40-80 µg/mL" }, orderingInfo: [{ format: "Cassette", packSize: "10 T", catNo: "CCR-U402" }] },
];

export const rapidTestData: RapidTestCategory[] = allTests.reduce((acc, test) => {
    let categoryObj = acc.find(c => c.category === test.category);
    if (!categoryObj) {
        categoryObj = { category: test.category, tests: [] };
        acc.push(categoryObj);
    }
    
    const fullTest: RapidTest = {
        ...test,
        brand: 'Precision Q',
        slug: toSlug(test.name),
        image: getNextImage(),
        description: `The Precision Q ${test.name} is a rapid chromatographic immunoassay for the qualitative detection of ${test.target || test.name} in ${test.specimen} samples. It is intended for professional in-vitro diagnostic use to aid in the diagnosis of related conditions.`
    };

    categoryObj.tests.push(fullTest);
    return acc;
}, [] as RapidTestCategory[]);
