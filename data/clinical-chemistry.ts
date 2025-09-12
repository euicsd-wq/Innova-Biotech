export type ChemTest = {
    name: string;
    slug: string;
    description: string;
    target: string;
    sampleType: string;
    method: string;
    image: string;
    linearity: string;
    orderingInfo: {
        format: string;
        catNo: string;
    }[];
    featured?: boolean;
};

export type ChemCategory = {
    category: string;
    tests: ChemTest[];
};

const images = [
    "https://i.imgur.com/8Q6g8Jz.png",
    "https://i.imgur.com/Q2xQyhq.png",
    "https://i.imgur.com/j4g2k2L.png",
    "https://i.imgur.com/eZg3Z2d.png",
];

let imageIndex = 0;
const getNextImage = () => {
    const img = images[imageIndex];
    imageIndex = (imageIndex + 1) % images.length;
    return img;
};

const toSlug = (name: string) => name.toLowerCase().replace(/[\s&/+,().]+/g, '-').replace(/[^\w-]+/g, '');

export const clinicalChemistryData: ChemCategory[] = [
    {
        category: "Substrates",
        tests: [
            {
                name: "Precision Premier Glucose",
                slug: toSlug("Precision Premier Glucose"),
                description: "A liquid-stable reagent for the quantitative determination of glucose in serum, plasma, or urine. Utilizes the GOD-PAP method for high accuracy and minimal interference.",
                target: "Glucose",
                sampleType: "Serum, Plasma, Urine",
                method: "Enzymatic, Colorimetric (GOD-PAP)",
                image: getNextImage(),
                linearity: "Up to 600 mg/dL",
                orderingInfo: [{ format: "R1: 4x80mL, R2: 4x20mL", catNo: "CC-GLU-100" }],
                featured: true,
            },
            {
                name: "Precision Premier Creatinine",
                slug: toSlug("Precision Premier Creatinine"),
                description: "For the quantitative determination of creatinine concentration in serum, plasma, or urine, based on the Jaffé method without deproteinization.",
                target: "Creatinine",
                sampleType: "Serum, Plasma, Urine",
                method: "Colorimetric (Jaffé)",
                image: getNextImage(),
                linearity: "Up to 20 mg/dL",
                orderingInfo: [{ format: "R1: 2x100mL, R2: 2x100mL", catNo: "CC-CREA-101" }],
            },
            {
                name: "Precision Premier Urea/BUN",
                slug: toSlug("Precision Premier Urea-BUN"),
                description: "An enzymatic UV method for the quantitative determination of urea in serum, plasma or urine. Based on the urease/GLDH method.",
                target: "Urea (BUN)",
                sampleType: "Serum, Plasma, Urine",
                method: "Enzymatic, UV (Urease/GLDH)",
                image: getNextImage(),
                linearity: "Up to 300 mg/dL",
                orderingInfo: [{ format: "R1: 4x60mL, R2: 4x15mL", catNo: "CC-UREA-102" }],
            },
        ],
    },
    {
        category: "Enzymes",
        tests: [
            {
                name: "Precision Premier ALT (GPT)",
                slug: toSlug("Precision Premier ALT-GPT"),
                description: "An optimized UV test according to IFCC recommendations for the determination of Alanine Aminotransferase (ALT/GPT) activity in serum or plasma.",
                target: "Alanine Aminotransferase (ALT)",
                sampleType: "Serum, Plasma",
                method: "Kinetic, UV (IFCC)",
                image: getNextImage(),
                linearity: "Up to 1000 U/L",
                orderingInfo: [{ format: "R1: 4x50mL, R2: 4x12.5mL", catNo: "CC-ALT-200" }],
            },
            {
                name: "Precision Premier AST (GOT)",
                slug: toSlug("Precision Premier AST-GOT"),
                description: "An optimized UV test according to IFCC recommendations for the determination of Aspartate Aminotransferase (AST/GOT) activity in serum or plasma.",
                target: "Aspartate Aminotransferase (AST)",
                sampleType: "Serum, Plasma",
                method: "Kinetic, UV (IFCC)",
                image: getNextImage(),
                linearity: "Up to 1000 U/L",
                orderingInfo: [{ format: "R1: 4x50mL, R2: 4x12.5mL", catNo: "CC-AST-201" }],
                featured: true,
            },
        ],
    },
    {
        category: "Lipids",
        tests: [
            {
                name: "Precision Premier Total Cholesterol",
                slug: toSlug("Precision Premier Total Cholesterol"),
                description: "A liquid-stable enzymatic colorimetric test for the quantitative determination of total cholesterol in serum and plasma.",
                target: "Total Cholesterol",
                sampleType: "Serum, Plasma",
                method: "Enzymatic, Colorimetric (CHOD-PAP)",
                image: getNextImage(),
                linearity: "Up to 750 mg/dL",
                orderingInfo: [{ format: "R1: 4x80mL", catNo: "CC-CHOL-300" }],
            },
            {
                name: "Precision Premier Triglycerides",
                slug: toSlug("Precision Premier Triglycerides"),
                description: "A liquid-stable enzymatic colorimetric test for the quantitative determination of triglycerides in serum and plasma using the GPO-PAP method.",
                target: "Triglycerides",
                sampleType: "Serum, Plasma",
                method: "Enzymatic, Colorimetric (GPO-PAP)",
                image: getNextImage(),
                linearity: "Up to 1000 mg/dL",
                orderingInfo: [{ format: "R1: 4x60mL", catNo: "CC-TRIG-301" }],
            },
        ],
    },
     {
        category: "Specific Proteins",
        tests: [
            {
                name: "Precision Premier C-Reactive Protein (CRP)",
                slug: toSlug("Precision Premier C-Reactive Protein-CRP"),
                description: "A highly sensitive immunoturbidimetric assay for the quantitative determination of C-Reactive Protein (CRP) in serum and plasma.",
                target: "C-Reactive Protein (CRP)",
                sampleType: "Serum, Plasma",
                method: "Immunoturbidimetric",
                image: getNextImage(),
                linearity: "0.1 - 320 mg/L",
                orderingInfo: [{ format: "R1: 1x50mL, R2: 1x15mL", catNo: "CC-CRP-400" }],
            },
        ],
    },
];