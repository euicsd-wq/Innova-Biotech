export type MolecularTest = {
    name: string;
    slug: string;
    description: string;
    target: string;
    image: string;
    kitType: 'RealTime' | 'Agarose' | 'Extraction';
    performance: {
        sensitivity: string;
    };
    orderingInfo: {
        testsPerKit: string;
        catNo: string;
    }[];
    featured?: boolean;
};

export type MolecularTestCategory = {
    category: string;
    tests: MolecularTest[];
};

const images = [
    "https://i.imgur.com/gxtRI3N.png",
    "https://i.imgur.com/sI8xG7p.png",
    "https://i.imgur.com/JQLwH2D.png",
    "https://i.imgur.com/mpxa33S.png",
];

let imageIndex = 0;
const getNextImage = () => {
    const img = images[imageIndex];
    imageIndex = (imageIndex + 1) % images.length;
    return img;
};

const toSlug = (name: string) => name.toLowerCase().replace(/[\s&/+,]+/g, '-').replace(/[^\w-]+/g, '');

export const molecularTestData: MolecularTestCategory[] = [
    {
        category: "Hepatitis Viruses",
        tests: [
            {
                name: "Precision Premier HAV Real-TM Qual",
                slug: toSlug("Precision Premier HAV Real-TM Qual"),
                description: "A Real-Time PCR test for the qualitative detection of Hepatitis A Virus (HAV) RNA, providing reliable results for early-stage infection diagnostics.",
                target: "Hepatitis A Virus (HAV) RNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 5 x 10² copies/ml" },
                orderingInfo: [
                    { testsPerKit: "50 Tests", catNo: "TV4-50FRT" },
                ]
            },
            {
                name: "Precision Premier HBV Real-TM Quant DX",
                slug: toSlug("Precision Premier HBV Real-TM Quant DX"),
                description: "A CE-IVD marked Real-Time PCR kit for the quantitative detection of Hepatitis B Virus (HBV) DNA, designed for high precision and a wide linear range.",
                target: "Hepatitis B Virus (HBV) DNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Linearity: 7-10⁸ IU/ml" },
                orderingInfo: [{ testsPerKit: "96 Tests", catNo: "V5-96/3FRT" }],
                featured: true,
            },
            {
                name: "Precision Premier HBV Genotype A, B, C, D Real-TM",
                slug: toSlug("Precision Premier HBV Genotype A, B, C, D Real-TM"),
                description: "A Real-Time PCR amplification kit for the genotyping of Hepatitis B Virus (HBV) into genotypes A, B, C, and D, aiding in clinical management.",
                target: "HBV Genotyping for A, B, C, D",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Qualitative Genotyping" },
                orderingInfo: [{ testsPerKit: "50 Tests", catNo: "R5-Gen" }],
            },
            {
                name: "Precision Premier HCV Real-TM Quant DX",
                slug: toSlug("Precision Premier HCV Real-TM Quant DX"),
                description: "A CE-IVD marked Real-Time PCR kit for the quantitative detection of Hepatitis C Virus (HCV) RNA, offering excellent sensitivity and a broad linear range.",
                target: "Hepatitis C Virus (HCV) RNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Linearity: 13-10⁸ IU/ml" },
                orderingInfo: [{ testsPerKit: "96 Tests", catNo: "V1-96/3FRT" }]
            },
            {
                name: "Precision Premier HCV Genotype Plus Real-TM",
                slug: toSlug("Precision Premier HCV Genotype Plus Real-TM"),
                description: "A Real-Time PCR kit for the qualitative detection and differentiation of Hepatitis C Virus (HCV) genotypes 1a, 1b, 2, 3a, 4, 5a, and 6.",
                target: "HCV Genotyping for 1a, 1b, 2, 3a, 4, 5a, 6",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 1 x 10² IU/mL" },
                orderingInfo: [{ testsPerKit: "48 Tests", catNo: "R1-Gen-6" }],
            },
            {
                name: "Precision Premier HDV Real-TM Quant",
                slug: toSlug("Precision Premier HDV Real-TM Quant"),
                description: "A Real-Time PCR kit for the quantitative detection of Hepatitis D Virus (HDV) RNA, crucial for monitoring co-infections with HBV.",
                target: "Hepatitis D Virus (HDV) RNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 1 x 10² copies/mL" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "V3-100/2FRT" }]
            },
            {
                name: "Precision Premier HGV Real-TM",
                slug: toSlug("Precision Premier HGV Real-TM"),
                description: "A Real-Time PCR kit for the qualitative detection of Hepatitis G Virus (HGV) RNA.",
                target: "Hepatitis G Virus (HGV) RNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 5 x 10² copies/mL" },
                orderingInfo: [{ testsPerKit: "50 Tests", catNo: "TV2-50FRT" }]
            }
        ]
    },
    {
        category: "Human Immunodeficiency Virus",
        tests: [
            {
                name: "Precision Premier HIV Real-TM Quant Dx",
                slug: toSlug("Precision Premier HIV Real-TM Quant Dx"),
                description: "A CE-IVD marked Real-Time PCR kit for the quantitative detection (viral load) of Human Immunodeficiency Virus (HIV-1) RNA.",
                target: "HIV-1 RNA Quantification",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Linearity: 48 - 1 x 10⁷ IU/mL" },
                orderingInfo: [{ testsPerKit: "96 Tests", catNo: "V0-96/3FRT" }],
            },
            {
                name: "Precision Premier HIV DNA Real-TM Qual",
                slug: toSlug("Precision Premier HIV DNA Real-TM Qual"),
                description: "A Real-Time PCR kit for the qualitative detection of HIV-1 proviral DNA, essential for early infant diagnosis.",
                target: "HIV-1 DNA Qualitative Detection",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 1 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "TR-V1-D" }],
            },
            {
                name: "Precision Premier HLA B*5701 Real-TM",
                slug: toSlug("Precision Premier HLA B*5701 Real-TM"),
                description: "A Real-Time PCR test to detect the HLA-B*5701 allele, used to screen for risk of hypersensitivity reaction to the antiretroviral drug abacavir.",
                target: "HLA B*5701 Allele for Abacavir Hypersensitivity",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 1 x 10³ cells/ml" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "H53-100FRT" }],
            },
            {
                name: "Precision Premier Pneumocystis jirovecii Real-TM",
                slug: toSlug("Precision Premier Pneumocystis jirovecii Real-TM"),
                description: "A Real-Time PCR kit for the detection of Pneumocystis jirovecii (carinii) DNA, a common opportunistic infection in immunocompromised individuals.",
                target: "Pneumocystis jirovecii (carinii) DNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 5 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "50 Tests", catNo: "P2-50FRT" }],
            },
            {
                name: "Precision Premier HCV/HBV/HIV Real-TM",
                slug: toSlug("Precision Premier HCV-HBV-HIV Real-TM"),
                description: "A multiplex Real-Time PCR kit for the simultaneous detection and differentiation of HCV RNA, HBV DNA, and HIV RNA, ideal for blood screening.",
                target: "Multiplex detection of HCV, HBV, and HIV",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 10/5/20 IU/mL" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "V50-100FRT" }],
            },
        ]
    },
    {
        category: "Human Papilloma Virus",
        tests: [
            {
                name: "Precision Premier HPV 14 Screening & 16,18,45 Typing",
                slug: toSlug("Precision Premier HPV 14 Screening & 16,18,45 Typing"),
                description: "An in-vitro Real Time amplification test for quantitative detection of 14 high-risk HPV types and specific genotyping of HPV 16, 18, and 45.",
                target: "Quantitative screening of 14 high-risk HPV types and genotyping of 16, 18, 45",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 5 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "V31-100/F FRT" }],
            },
            {
                name: "Precision Premier HPV Genotypes 14 Real-TM Quant",
                slug: toSlug("Precision Premier HPV Genotypes 14 Real-TM Quant"),
                description: "An in-vitro multiplex Real Time amplification test for qualitative detection and genotyping of up to 14 high-risk genotypes of Human Papillomavirus.",
                target: "Qualitative detection and genotyping of 14 high-risk HPV genotypes",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 5 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "V67-100FRT" }],
            },
            {
                name: "Precision Premier HPV 6/11 Real-TM",
                slug: toSlug("Precision Premier HPV 6-11 Real-TM"),
                description: "A Real-Time PCR amplification kit for the qualitative detection of low-carcinogenic risk HPV genotypes 6 and 11.",
                target: "Qualitative detection of low-risk HPV genotypes 6 and 11",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 5 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "V11-100FRT" }],
            }
        ]
    },
    {
        category: "Sexually Transmitted Diseases",
        tests: [
            {
                name: "Precision Premier Chlamydia trachomatis Real-TM",
                slug: toSlug("Precision Premier Chlamydia trachomatis Real-TM"),
                description: "A Real-Time PCR amplification kit for the qualitative detection of Chlamydia trachomatis DNA.",
                target: "Chlamydia trachomatis DNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 5 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "B1-100FRT" }]
            },
            {
                name: "Precision Premier Ureaplasma & Mycoplasma Panel",
                slug: toSlug("Precision Premier Ureaplasma & Mycoplasma Panel"),
                description: "A quantitative Real-Time PCR kit for the detection and differentiation of Ureaplasma parvum, Ureaplasma urealyticum, and Mycoplasma hominis.",
                target: "U. parvum, U. urealyticum, M. hominis",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 5 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "B75-100FRT Q" }]
            },
            {
                name: "Precision Premier Neisseria gonorrhoeae Real-TM",
                slug: toSlug("Precision Premier Neisseria gonorrhoeae Real-TM"),
                description: "A Real-Time PCR amplification kit for the qualitative detection of Neisseria gonorrhoeae DNA.",
                target: "Neisseria gonorrhoeae DNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 5 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "B5-100FRT" }]
            },
            {
                name: "Precision Premier Trichomonas vaginalis Real-TM",
                slug: toSlug("Precision Premier Trichomonas vaginalis Real-TM"),
                description: "A Real-Time PCR amplification kit for the qualitative detection of Trichomonas vaginalis DNA.",
                target: "Trichomonas vaginalis DNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 5 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "B6-100FRT" }]
            },
            {
                name: "Precision Premier Candida Panel Real-TM",
                slug: toSlug("Precision Premier Candida Panel Real-TM"),
                description: "A Real-Time PCR amplification kit for the detection of Candida albicans, Candida glabrata, and Candida krusei.",
                target: "C. albicans, C. glabrata, C. krusei",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 1 x 10³ copies/ml" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "F3-100FRT" }]
            },
            {
                name: "Precision Premier Treponema pallidum Real-TM",
                slug: toSlug("Precision Premier Treponema pallidum Real-TM"),
                description: "A Real-Time PCR amplification kit for the qualitative detection of Treponema pallidum DNA, the causative agent of syphilis.",
                target: "Treponema pallidum (Syphilis) DNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 5 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "B20-100FRT" }]
            },
            {
                name: "Precision Premier STD Multiplex Panel 1",
                slug: toSlug("Precision Premier STD Multiplex Panel 1"),
                description: "A multiplex Real-Time PCR kit for the simultaneous detection of Chlamydia trachomatis, Ureaplasma spp., Mycoplasma hominis, and Mycoplasma genitalium.",
                target: "C.trachomatis, Ureaplasma, M.hominis, M.genitalium",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 5 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "B60-100FRT" }]
            },
            {
                name: "Precision Premier HSV I/II & Syphilis Multiplex",
                slug: toSlug("Precision Premier HSV I-II & Syphilis Multiplex"),
                description: "A multiplex Real-Time PCR kit for the simultaneous detection of Herpes Simplex Virus Type 1, Herpes Simplex Virus Type 2, and Treponema pallidum.",
                target: "Herpes Simplex Virus 1/2 & Treponema pallidum DNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 5 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "B87-100FRT" }],
                featured: true,
            },
            {
                name: "Precision Premier Bacterial Vaginosis Panel",
                slug: toSlug("Precision Premier Bacterial Vaginosis Panel"),
                description: "A multiplex Real-Time PCR kit for the quantitative detection of Gardnerella vaginalis, Atopobium vaginae, and Lactobacillus spp. to aid in the diagnosis of bacterial vaginosis.",
                target: "G. vaginalis, A. vaginae, Lactobacillus spp.",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 2.5 x 10³ copies/ml" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "B74-100FRT" }]
            }
        ]
    },
    {
        category: "Herpes Virus Infections",
        tests: [
            {
                name: "Precision Premier CMV Real-TM Quant",
                slug: toSlug("Precision Premier CMV Real-TM Quant"),
                description: "A Real-Time PCR kit for the quantitative detection of Cytomegalovirus (CMV) DNA.",
                target: "Cytomegalovirus (CMV) DNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 2 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "V7-100/2FRT" }]
            },
            {
                name: "Precision Premier EBV Real-TM Quant",
                slug: toSlug("Precision Premier EBV Real-TM Quant"),
                description: "A Real-Time PCR kit for the quantitative detection of Epstein-Barr virus (EBV) DNA.",
                target: "Epstein-Barr virus (EBV) DNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 2 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "50 Tests", catNo: "V9-50FRT" }]
            },
            {
                name: "Precision Premier HSV 1/2 Typing Real-TM",
                slug: toSlug("Precision Premier HSV 1-2 Typing Real-TM"),
                description: "A Real-Time PCR kit for the detection and differentiation of Herpes simplex virus type 1 and type 2 DNA.",
                target: "Herpes simplex virus 1 and 2 DNA differentiation",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 5 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "V38-100FRT" }]
            },
            {
                name: "Precision Premier HHV6 Real-TM Quant",
                slug: toSlug("Precision Premier HHV6 Real-TM Quant"),
                description: "A Real-Time PCR kit for the quantitative detection of Human herpesvirus 6 (HHV-6) DNA.",
                target: "Human herpesvirus 6 (HHV-6) DNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 2 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "V10-100FRT" }]
            },
            {
                name: "Precision Premier HHV7 Real-TM Quant",
                slug: toSlug("Precision Premier HHV7 Real-TM Quant"),
                description: "A new Real-Time PCR amplification kit for the quantitative detection of Human herpesvirus 7 (HHV-7) DNA.",
                target: "Human herpesvirus 7 (HHV-7) DNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "High sensitivity detection" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "V17-100FRT" }],
                featured: true,
            },
            {
                name: "Precision Premier CMV/EBV/HHV6 Real-TM Quant",
                slug: toSlug("Precision Premier CMV-EBV-HHV6 Real-TM Quant"),
                description: "A multiplex Real-Time PCR kit for the simultaneous quantitative detection of CMV, EBV, and HHV6 DNA.",
                target: "Multiplex detection of CMV, EBV, HHV6",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 2 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "V48-100FRT" }]
            },
        ]
    },
    {
        category: "TORCH Infections",
        tests: [
            {
                name: "Precision Premier Rubella Real-TM",
                slug: toSlug("Precision Premier Rubella Real-TM"),
                description: "A Real-Time PCR amplification kit for the detection of Rubella virus RNA.",
                target: "Rubella virus RNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 1 x 10³ copies/ml" },
                orderingInfo: [{ testsPerKit: "50 Tests", catNo: "V24-50FRT" }]
            },
            {
                name: "Precision Premier Toxoplasma gondii Real-TM",
                slug: toSlug("Precision Premier Toxoplasma gondii Real-TM"),
                description: "A Real-Time PCR amplification kit for the detection of Toxoplasma gondii DNA.",
                target: "Toxoplasma gondii DNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 4 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "50 Tests", catNo: "P1-50FRT" }]
            },
            {
                name: "Precision Premier Parvovirus B19 Real-TM",
                slug: toSlug("Precision Premier Parvovirus B19 Real-TM"),
                description: "A Real-Time PCR amplification kit for the detection of Parvovirus B19 DNA.",
                target: "Parvovirus B19 DNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 2 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "50 Tests", catNo: "V49-50FRT" }]
            }
        ]
    },
    {
        category: "Respiratory Infections",
        tests: [
            {
                name: "Precision Premier ARVI Screen Real-TM",
                slug: toSlug("Precision Premier ARVI Screen Real-TM"),
                description: "A multiplex Real-Time PCR kit for the detection and identification of 11 common respiratory pathogens, including human parainfluenza viruses, coronaviruses, rhinovirus, adenovirus, and bocavirus.",
                target: "11 respiratory pathogens (hPiv, hCov, hRv, hAdv, hBov)",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "High sensitivity multiplex detection" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "V57-100FRT" }],
                featured: true,
            },
            {
                name: "Precision Premier Influenza A/B Real-TM",
                slug: toSlug("Precision Premier Influenza A-B Real-TM"),
                description: "A Real-Time PCR kit for the detection and differentiation of Influenza A and Influenza B virus RNA.",
                target: "Influenza A and B Virus RNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 1 x 10³ copies/ml" },
                orderingInfo: [{ testsPerKit: "50 Tests", catNo: "V36-50FRT" }]
            },
            {
                name: "Precision Premier hRSV Real-TM",
                slug: toSlug("Precision Premier hRSV Real-TM"),
                description: "A Real-Time PCR amplification kit for the detection of human respiratory syncytial virus (hRSV) RNA.",
                target: "Human respiratory syncytial virus RNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 5 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "50 Tests", catNo: "V37-50FRT" }]
            },
            {
                name: "Precision Premier C. & M. pneumoniae Real-TM",
                slug: toSlug("Precision Premier C-M-pneumoniae Real-TM"),
                description: "A Real-Time PCR amplification kit for the simultaneous detection of Chlamydophila pneumoniae and Mycoplasma pneumoniae DNA.",
                target: "Chlamydophila & Mycoplasma pneumoniae DNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 5 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "B42-4-100FRT" }]
            },
            {
                name: "Precision Premier MERS & SARS-CoV Real-TM",
                slug: toSlug("Precision Premier MERS-SARS-CoV Real-TM"),
                description: "A Real-Time PCR amplification kit for the detection and differentiation of MERS-CoV and SARS-CoV.",
                target: "Differentiation of MERS-CoV and SARS-CoV",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "High sensitivity detection" },
                orderingInfo: [{ testsPerKit: "50 Tests", catNo: "V65-50FRT" }]
            },
            {
                name: "Precision Premier Tuberculosis (MTB) Real-TM",
                slug: toSlug("Precision Premier Tuberculosis-MTB-Real-TM"),
                description: "A Real-Time PCR amplification kit for the detection of Mycobacterium tuberculosis complex DNA.",
                target: "Mycobacterium tuberculosis complex DNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 2 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "50 Tests", catNo: "B15-50FRT" }]
            },
            {
                name: "Precision Premier Bordetella pertussis Panel",
                slug: toSlug("Precision Premier Bordetella pertussis Panel"),
                description: "A multiplex Real-Time PCR kit for the detection and differentiation of Bordetella pertussis, Bordetella parapertussis, and Bordetella bronchiseptica.",
                target: "B. pertussis, B. parapertussis, B. bronchiseptica",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 1 x 10³ copies/ml" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "B84-100FRT" }]
            }
        ]
    },
    {
        category: "Neurological Infections",
        tests: [
            {
                name: "Precision Premier Enterovirus Real-TM",
                slug: toSlug("Precision Premier Enterovirus Real-TM"),
                description: "A Real-Time PCR kit for the qualitative detection of Enterovirus RNA in clinical specimens.",
                target: "Enterovirus RNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 1 x 10³ copies/ml" },
                orderingInfo: [{ testsPerKit: "50 Tests", catNo: "V16-50FRT" }]
            },
            {
                name: "Precision Premier NHS Meningitidis Panel",
                slug: toSlug("Precision Premier NHS Meningitidis Panel"),
                description: "A multiplex Real-Time PCR test for the detection and differentiation of Neisseria meningitidis, Haemophilus influenzae, and Streptococcus pneumoniae.",
                target: "N.meningitidis, H.influenzae, Str.pneumoniae",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 5 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "50 Tests", catNo: "B25-50FRT" }]
            },
            {
                name: "Precision Premier Listeria monocytogenes Real-TM Quant",
                slug: toSlug("Precision Premier Listeria monocytogenes Real-TM Quant"),
                description: "A quantitative Real-Time PCR kit for the detection of Listeria monocytogenes DNA.",
                target: "Listeria monocytogenes DNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 1 x 10³ copies/ml" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "B-14-100FRT" }]
            },
            {
                name: "Precision Premier JCV/BKV Virus Real-TM",
                slug: toSlug("Precision Premier JCV-BKV Virus Real-TM"),
                description: "A new Real-Time PCR amplification kit for the detection of JC Virus and BK Virus DNA.",
                target: "JC Virus and BK Virus DNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 5 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "50 Tests", catNo: "V71-50FRT" }],
                featured: true,
            }
        ]
    },
    {
        category: "Intestinal Infections",
        tests: [
             {
                name: "Precision Premier Rotavirus/Norovirus/Astrovirus Real-TM",
                slug: toSlug("Precision Premier Rotavirus-Norovirus-Astrovirus Real-TM"),
                description: "A multiplex Real-Time PCR kit for the simultaneous detection of Rotavirus, Norovirus, and Astrovirus RNA.",
                target: "Rotavirus, Norovirus, Astrovirus RNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 5 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "50 Tests", catNo: "V40-50FRT" }]
            },
            {
                name: "Precision Premier Shigella/Salmonella/Campylobacter Real-TM",
                slug: toSlug("Precision Premier Shigella-Salmonella-Campylobacter Real-TM"),
                description: "A multiplex Real-Time PCR kit for the simultaneous detection of Shigella spp., Salmonella spp., and Campylobacter spp. DNA.",
                target: "Shigella, Salmonella, Campylobacter DNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 5 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "50 Tests", catNo: "B44-50FRT" }]
            },
            {
                name: "Precision Premier Helicobacter Pylori Real-TM",
                slug: toSlug("Precision Premier Helicobacter Pylori Real-TM"),
                description: "A Real-Time PCR amplification kit for the qualitative detection of Helicobacter Pylori DNA.",
                target: "Helicobacter Pylori DNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 1 x 10³ copies/ml" },
                orderingInfo: [{ testsPerKit: "50 Tests", catNo: "B9-50FRT" }]
            }
        ]
    },
    {
        category: "Dangerous Infections",
        tests: [
            {
                name: "Precision Premier Ebola Zaire Real-TM",
                slug: toSlug("Precision Premier Ebola Zaire Real-TM"),
                description: "A Real-Time PCR kit for the detection of Ebola Zaire virus RNA, designed for rapid response to potential outbreaks.",
                target: "Ebola Zaire virus",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "High sensitivity detection" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "V69-100FRT" }]
            },
            {
                name: "Precision Premier Dengue Genotype Real-TM",
                slug: toSlug("Precision Premier Dengue Genotype Real-TM"),
                description: "A Real-Time PCR kit for the detection and differentiation of Dengue Virus genotypes 1, 2, 3, and 4.",
                target: "Dengue Virus genotypes 1, 2, 3 and 4",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 500 copies/ml" },
                orderingInfo: [{ testsPerKit: "50 Tests", catNo: "V63-G-50FRT" }]
            },
            {
                name: "Precision Premier Zika Virus Real-TM",
                slug: toSlug("Precision Premier Zika Virus Real-TM"),
                description: "A new Real-Time PCR amplification kit for the qualitative detection of Zika Virus RNA.",
                target: "Zika Virus RNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 5 x 10² copies/ml" },
                orderingInfo: [{ testsPerKit: "50 Tests", catNo: "V73-50FRT" }],
                featured: true,
            },
            {
                name: "Precision Premier Tick-Borne Encephalitis Panel",
                slug: toSlug("Precision Premier Tick-Borne Encephalitis Panel"),
                description: "A multiplex Real-Time PCR kit for the detection of Tick-Borne Encephalitis Virus (TBEV), Borrelia burgdorferi, Anaplasma phagocytophilum, and Ehrlichia chaffeensis/muris.",
                target: "TBEV, B.burgdorferi, A.phagocytophilum, E.chaffeensis",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 1 x 10³ copies/ml" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "V59-100FRT" }]
            },
            {
                name: "Precision Premier Brucella Real-TM",
                slug: toSlug("Precision Premier Brucella Real-TM"),
                description: "A Real-Time PCR amplification kit for the detection of Brucella spp. DNA.",
                target: "Brucella spp. DNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 1 x 10³ copies/ml" },
                orderingInfo: [{ testsPerKit: "50 Tests", catNo: "B10-50FRT" }]
            },
            {
                name: "Precision Premier Borrelia miyamotoi Real-TM",
                slug: toSlug("Precision Premier Borrelia miyamotoi Real-TM"),
                description: "A new Real-Time PCR amplification kit for the detection of Borrelia miyamotoi DNA.",
                target: "Borrelia miyamotoi DNA",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "Sensitivity: 1 x 10³ copies/ml" },
                orderingInfo: [{ testsPerKit: "50 Tests", catNo: "B38-50FRT" }],
                featured: true,
            }
        ]
    },
    {
        category: "Bacterial Drug Resistance",
        tests: [
            {
                name: "Precision Premier MRSA Quant Real-TM",
                slug: toSlug("Precision Premier MRSA Quant Real-TM"),
                description: "A quantitative Real-Time PCR kit for the detection of Methicillin-resistant Staphylococcus aureus (MRSA).",
                target: "Methicillin-resistant Staphylococcus aureus",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "High sensitivity detection" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "B78-100FRT" }]
            },
            {
                name: "Precision Premier MDR MBL (VIM, IMP, NDM) Real-TM",
                slug: toSlug("Precision Premier MDR MBL-VIM-IMP-NDM-Real-TM"),
                description: "A Real-Time PCR kit for the detection of Metallo-beta-lactamase genes (VIM, IMP, NDM) associated with carbapenem resistance.",
                target: "Carbapenemase genes VIM, IMP, NDM",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "High sensitivity detection" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "C1-100FRT" }]
            },
            {
                name: "Precision Premier MDR KPC/OXA Real-TM",
                slug: toSlug("Precision Premier MDR KPC-OXA Real-TM"),
                description: "A Real-Time PCR kit for the detection of carbapenemase genes KPC, OXA-48, and OXA-162.",
                target: "Carbapenemase genes KPC, OXA-48, OXA-162",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "High sensitivity detection" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "C2-100FRT" }]
            }
        ]
    },
    {
        category: "Molecular Genetics & Oncology",
        tests: [
             {
                name: "Precision Premier Cardio Trombophilia Panel",
                slug: toSlug("Precision Premier Cardio Trombophilia Panel"),
                description: "A convenient strip-format RT-PCR kit for the detection of 8 key mutations associated with an increased risk of cardiovascular diseases and thrombosis.",
                target: "8 mutations for cardiovascular disease risk",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "12 x 8 strip format" },
                orderingInfo: [{ testsPerKit: "12 Tests", catNo: "T01001-96-S" }]
            },
            {
                name: "Precision Premier Woman's Health / Miscarriage Panel",
                slug: toSlug("Precision Premier Woman's Health-Miscarriage Panel"),
                description: "A comprehensive set of SNP screening tests to investigate genetic factors associated with inheritable thrombophilia, which can lead to complications in pregnancy.",
                target: "Key mutations for coagulation, fibrinolysis, and metabolism",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "SNP Screening" },
                orderingInfo: [{ testsPerKit: "Multiple", catNo: "Various" }]
            },
            {
                name: "Precision Premier Hemochromatosis Real-TM",
                slug: toSlug("Precision Premier Hemochromatosis Real-TM"),
                description: "A new Real-Time PCR test panel for the detection of HFE gene mutations associated with hereditary hemochromatosis.",
                target: "HFE gene mutations",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "High sensitivity detection" },
                orderingInfo: [{ testsPerKit: "50 Tests", catNo: "HM-1-50FRT" }],
                featured: true,
            },
            {
                name: "Precision Premier Warfarin Sensitivity Panel",
                slug: toSlug("Precision Premier Warfarin Sensitivity Panel"),
                description: "A set of SNP screening tests for key mutations in CYP2C9 and VKORC1 genes to help predict patient sensitivity to warfarin.",
                target: "CYP2C9*2, CYP2C9*3, VKORC1 mutations",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: " SNP Screening" },
                orderingInfo: [
                    { testsPerKit: "60 Tests", catNo: "T01104-50-T" },
                ]
            },
            {
                name: "Precision Premier HLA B27 Real-TM",
                slug: toSlug("Precision Premier HLA B27 Real-TM"),
                description: "A Real-Time PCR kit for the detection of Human Leukocyte Antigen (HLA) B27, strongly associated with ankylosing spondylitis and other inflammatory diseases.",
                target: "Human Leukocyte Antigen (HLA) B27",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "High sensitivity detection" },
                orderingInfo: [{ testsPerKit: "48 Tests", catNo: "R116-50FRT" }]
            },
            {
                name: "Precision Premier CML (Mbcr-abl) FRT Real-TM",
                slug: toSlug("Precision Premier CML-Mbcr-abl-FRT-Real-TM"),
                description: "A Real-Time PCR kit for the detection of the BCR-ABL fusion gene translocation, the hallmark genetic abnormality of Chronic Myelogenous Leukemia (CML).",
                target: "BCR-ABL fusion gene translocation",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "High sensitivity detection" },
                orderingInfo: [{ testsPerKit: "100 Tests", catNo: "R-01" }]
            },
             {
                name: "Precision Premier Oncogenetics BRCA Panel Real-TM",
                slug: toSlug("Precision Premier Oncogenetics BRCA Panel Real-TM"),
                description: "A Real-Time PCR amplification kit for the detection of key mutations in the BRCA1 and BRCA2 tumor suppressor genes associated with hereditary breast and ovarian cancer.",
                target: "Key mutations in BRCA1 and BRCA2 genes",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "High sensitivity detection" },
                orderingInfo: [{ testsPerKit: "48 Tests", catNo: "R-27/P-48FRT" }],
                featured: true,
            }
        ]
    },
    {
        category: "Periodontitis",
        tests: [
            {
                name: "Precision Premier PeriodontScreen Real-TM",
                slug: toSlug("Precision Premier PeriodontScreen Real-TM"),
                description: "A strip-format RT-PCR kit for the detection of 7 key periodontal pathogens, including Porphyromonas gingivalis and Tannerella forsythia.",
                target: "7 key periodontal pathogens",
                kitType: "RealTime",
                image: getNextImage(),
                performance: { sensitivity: "12 x 8 strip format" },
                orderingInfo: [{ testsPerKit: "12 Tests", catNo: "T01707-96-S" }]
            }
        ]
    },
    {
        category: "Extraction Kits",
        tests: [
            {
                name: "Precision NucliPure Direct PCR Extraction Kit",
                slug: toSlug("NucliPure Direct PCR Extraction Kit"),
                description: "Designed for rapid DNA extraction for direct use in PCR applications, bypassing lengthy purification steps. Ideal for high-throughput screening from swabs, saliva, and other simple samples.",
                target: "Genomic DNA for Direct PCR",
                kitType: "Extraction",
                image: getNextImage(),
                performance: { sensitivity: "Format: 96 tests" },
                orderingInfo: [{ testsPerKit: "96", catNo: "NP-DPCR-96" }]
            },
            {
                name: "Precision NucliPure Viral DNA/RNA Kit (Magnetic Beads)",
                slug: toSlug("NucliPure Viral DNA-RNA Kit Magnetic Beads"),
                description: "High-throughput magnetic bead-based kit for the rapid and efficient purification of viral nucleic acids from cell-free body fluids like serum, plasma, and swabs.",
                target: "Viral DNA/RNA",
                kitType: "Extraction",
                image: getNextImage(),
                performance: { sensitivity: "Format: 96 tests" },
                orderingInfo: [{ testsPerKit: "96", catNo: "NP-VRM-96" }]
            },
            {
                name: "Precision NucliPure Viral DNA/RNA Kit (Spin Column)",
                slug: toSlug("NucliPure Viral DNA-RNA Kit Spin Column"),
                description: "Versatile spin column-based kit for the purification of high-quality viral DNA and RNA from a wide range of biological samples.",
                target: "Viral DNA/RNA",
                kitType: "Extraction",
                image: getNextImage(),
                performance: { sensitivity: "Format: 96 tests" },
                orderingInfo: [{ testsPerKit: "96", catNo: "NP-VRS-96" }]
            },
            {
                name: "Precision NucliPure Universal Kit (Magnetic Beads)",
                slug: toSlug("NucliPure Universal Kit Magnetic Beads"),
                description: "A universal magnetic bead-based system for the extraction of viral DNA/RNA, genomic DNA from whole blood, and tissue samples. One kit for multiple sample types.",
                target: "Viral DNA/RNA, gDNA (Blood, Tissue)",
                kitType: "Extraction",
                image: getNextImage(),
                performance: { sensitivity: "Format: 96 tests" },
                orderingInfo: [{ testsPerKit: "96", catNo: "NP-UNIM-96" }]
            },
            {
                name: "Precision NucliPure Universal Kit (Spin Column)",
                slug: toSlug("NucliPure Universal Kit Spin Column"),
                description: "A universal spin column-based system for the extraction of viral DNA/RNA, genomic DNA from whole blood, and tissue samples. Highly versatile for labs with diverse needs.",
                target: "Viral DNA/RNA, gDNA (Blood, Tissue)",
                kitType: "Extraction",
                image: getNextImage(),
                performance: { sensitivity: "Format: 96 tests" },
                orderingInfo: [{ testsPerKit: "96", catNo: "NP-UNIS-96" }]
            },
            {
                name: "Precision NucliPure Viral RNA Kit (Magnetic Beads)",
                slug: toSlug("NucliPure Viral RNA Kit Magnetic Beads"),
                description: "Optimized magnetic bead-based kit specifically for the high-purity extraction of viral RNA, ideal for applications like RT-qPCR for respiratory viruses.",
                target: "Viral RNA",
                kitType: "Extraction",
                image: getNextImage(),
                performance: { sensitivity: "Format: 96 tests" },
                orderingInfo: [{ testsPerKit: "96", catNo: "NP-VRNAM-96" }]
            },
            {
                name: "Precision NucliPure Viral RNA Kit (Spin Column)",
                slug: toSlug("NucliPure Viral RNA Kit Spin Column"),
                description: "An efficient spin column-based kit designed for the rapid purification of viral RNA from various cell-free samples.",
                target: "Viral RNA",
                kitType: "Extraction",
                image: getNextImage(),
                performance: { sensitivity: "Format: 96 tests" },
                orderingInfo: [{ testsPerKit: "96", catNo: "NP-VRNAS-96" }]
            },
            {
                name: "Precision NucliPure Whole Blood DNA Kit (Magnetic Beads)",
                slug: toSlug("NucliPure Whole Blood DNA Kit Magnetic Beads"),
                description: "High-throughput magnetic bead-based kit for the automated extraction of high-quality genomic DNA from whole blood samples.",
                target: "Genomic DNA from Whole Blood",
                kitType: "Extraction",
                image: getNextImage(),
                performance: { sensitivity: "Format: 96 tests" },
                orderingInfo: [{ testsPerKit: "96", catNo: "NP-WBM-96" }]
            },
            {
                name: "Precision NucliPure Whole Blood DNA Kit (Spin Column)",
                slug: toSlug("NucliPure Whole Blood DNA Kit Spin Column"),
                description: "A classic spin column kit for the reliable and simple purification of genomic DNA from whole blood, suitable for manual or automated processing.",
                target: "Genomic DNA from Whole Blood",
                kitType: "Extraction",
                image: getNextImage(),
                performance: { sensitivity: "Format: 96 tests" },
                orderingInfo: [{ testsPerKit: "96", catNo: "NP-WBS-96" }]
            },
        ]
    }
];