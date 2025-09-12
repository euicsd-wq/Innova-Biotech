
export type ElisaTest = {
    name: string;
    slug: string;
    description: string;
    target: string;
    sampleType: string;
    assayFormat: string;
    image: string;
    sensitivity: string;
    specificity: string;
    orderingInfo: {
        kitSize: string;
        catNo: string;
    }[];
    featured?: boolean;
};

export type ElisaTestCategory = {
    category: string;
    tests: ElisaTest[];
};

const images = [
    "https://i.imgur.com/lO3bL9A.png", // ELISA kit box
    "https://i.imgur.com/3jL3n5s.png",
    "https://i.imgur.com/M6J0f6A.png",
    "https://i.imgur.com/K3b2w8h.png",
];

let imageIndex = 0;
const getNextImage = () => {
    const img = images[imageIndex];
    imageIndex = (imageIndex + 1) % images.length;
    return img;
};

const toSlug = (name: string) => name.toLowerCase().replace(/[\s&/+,().]+/g, '-').replace(/[^\w-]+/g, '');

export const elisaTestData: ElisaTestCategory[] = [
    {
        category: "Thyroid",
        tests: [
            {
                name: "Precision E TSH ELISA Kit",
                slug: toSlug("Precision E TSH ELISA Kit"),
                description: "A solid-phase enzyme-linked immunosorbent assay (ELISA) for the quantitative measurement of Thyroid Stimulating Hormone (TSH) in human serum or plasma.",
                target: "Thyroid Stimulating Hormone (TSH)",
                sampleType: "Serum, Plasma",
                assayFormat: "Sandwich ELISA",
                image: getNextImage(),
                sensitivity: "0.1 µIU/mL",
                specificity: "> 99%",
                orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-TSH-96" }],
                featured: true,
            },
            {
                name: "Precision E Total T3 ELISA Kit",
                slug: toSlug("Precision E Total T3 ELISA Kit"),
                description: "An ELISA for the quantitative determination of Total Triiodothyronine (T3) in human serum or plasma.",
                target: "Total Triiodothyronine (T3)",
                sampleType: "Serum, Plasma",
                assayFormat: "Competitive ELISA",
                image: getNextImage(),
                sensitivity: "0.2 ng/mL",
                specificity: "> 99%",
                orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-T3-96" }],
            },
            {
                name: "Precision E Total T4 ELISA Kit",
                slug: toSlug("Precision E Total T4 ELISA Kit"),
                description: "An ELISA for the quantitative determination of Total Thyroxine (T4) in human serum or plasma.",
                target: "Total Thyroxine (T4)",
                sampleType: "Serum, Plasma",
                assayFormat: "Competitive ELISA",
                image: getNextImage(),
                sensitivity: "0.4 µg/dL",
                specificity: "> 99%",
                orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-T4-96" }],
            },
            {
                name: "Precision E Free T3 (FT3) ELISA Kit",
                slug: toSlug("Precision E Free T3 ELISA Kit"),
                description: "An ELISA for the quantitative determination of free Triiodothyronine (fT3) in human serum or plasma.",
                target: "Free Triiodothyronine (fT3)",
                sampleType: "Serum, Plasma",
                assayFormat: "Competitive ELISA",
                image: getNextImage(),
                sensitivity: "0.5 pg/mL",
                specificity: "> 99%",
                orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-FT3-96" }],
            },
            {
                name: "Precision E Free T4 (FT4) ELISA Kit",
                slug: toSlug("Precision E Free T4 ELISA Kit"),
                description: "An ELISA for the quantitative determination of free Thyroxine (fT4) in human serum or plasma.",
                target: "Free Thyroxine (fT4)",
                sampleType: "Serum, Plasma",
                assayFormat: "Competitive ELISA",
                image: getNextImage(),
                sensitivity: "0.1 ng/dL",
                specificity: "> 99%",
                orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-FT4-96" }],
            },
        ],
    },
    {
        category: "Fertility",
        tests: [
            { name: "Precision E AMH ELISA Kit", slug: toSlug("AMH"), description: "Quantitative measurement of Anti-Müllerian Hormone.", target: "Anti-Müllerian Hormone (AMH)", sampleType: "Serum, Plasma", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: "0.05 ng/mL", specificity: ">99%", orderingInfo: [{ kitSize: "48 Tests", catNo: "PE-AMH-48" }] },
            { name: "Precision E LH ELISA Kit", slug: toSlug("LH"), description: "Quantitative measurement of Luteinizing Hormone.", target: "Luteinizing Hormone (LH)", sampleType: "Serum, Plasma", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: "1.0 mIU/mL", specificity: ">99%", orderingInfo: [{ kitSize: "48 Tests", catNo: "PE-LH-48" }] },
            { name: "Precision E FSH ELISA Kit", slug: toSlug("FSH"), description: "Quantitative measurement of Follicle-Stimulating Hormone.", target: "Follicle-Stimulating Hormone (FSH)", sampleType: "Serum, Plasma", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: "1.0 mIU/mL", specificity: ">99%", orderingInfo: [{ kitSize: "48 Tests", catNo: "PE-FSH-48" }] },
            { name: "Precision E Prolactin ELISA Kit", slug: toSlug("Prolactin"), description: "Quantitative measurement of Prolactin.", target: "Prolactin", sampleType: "Serum, Plasma", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: "1.0 ng/mL", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-PRL-96" }] },
            { name: "Precision E Progesterone ELISA Kit", slug: toSlug("Progesterone"), description: "Quantitative measurement of Progesterone.", target: "Progesterone", sampleType: "Serum, Plasma", assayFormat: "Competitive ELISA", image: getNextImage(), sensitivity: "0.1 ng/mL", specificity: ">99%", orderingInfo: [{ kitSize: "48 Tests", catNo: "PE-PROG-48" }] },
            { name: "Precision E Testosterone ELISA Kit", slug: toSlug("Testosterone"), description: "Quantitative measurement of Testosterone.", target: "Testosterone", sampleType: "Serum, Plasma", assayFormat: "Competitive ELISA", image: getNextImage(), sensitivity: "0.1 ng/mL", specificity: ">99%", orderingInfo: [{ kitSize: "48 Tests", catNo: "PE-TESTO-48" }] },
            { name: "Precision E Estradiol (E2) ELISA Kit", slug: toSlug("E2"), description: "Quantitative measurement of Estradiol (E2).", target: "Estradiol (E2)", sampleType: "Serum, Plasma", assayFormat: "Competitive ELISA", image: getNextImage(), sensitivity: "10 pg/mL", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-E2-96" }] },
            { name: "Precision E hCG ELISA Kit", slug: toSlug("hCG"), description: "Quantitative measurement of human Chorionic Gonadotropin.", target: "hCG", sampleType: "Serum, Plasma", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: "5 mIU/mL", specificity: ">99%", orderingInfo: [{ kitSize: "48 Tests", catNo: "PE-HCG-48" }] },
        ],
    },
    {
        category: "Anemia",
        tests: [
            { name: "Precision E Ferritin ELISA Kit", slug: toSlug("Ferritin"), description: "Quantitative measurement of Ferritin.", target: "Ferritin", sampleType: "Serum, Plasma", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: "1.0 ng/mL", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-FER-96" }], featured: true },
            { name: "Precision E Vitamin B12 ELISA Kit", slug: toSlug("Vitamin B12"), description: "Quantitative measurement of Vitamin B12.", target: "Vitamin B12", sampleType: "Serum, Plasma", assayFormat: "Competitive ELISA", image: getNextImage(), sensitivity: "50 pg/mL", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-VB12-96" }] },
            { name: "Precision E Folate ELISA Kit", slug: toSlug("Folate"), description: "Quantitative measurement of Folate.", target: "Folate", sampleType: "Serum, Plasma", assayFormat: "Competitive ELISA", image: getNextImage(), sensitivity: "0.2 ng/mL", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-FOL-96" }] },
        ],
    },
    {
        category: "Bone Metabolism",
        tests: [
            { name: "Precision E 25-OH Vitamin D ELISA Kit", slug: toSlug("25-OH Vitamin D"), description: "Quantitative measurement of 25-hydroxyvitamin D.", target: "25-OH Vitamin D", sampleType: "Serum, Plasma", assayFormat: "Competitive ELISA", image: getNextImage(), sensitivity: "2.0 ng/mL", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-VITD-96" }] },
        ],
    },
    {
        category: "Tumor Markers",
        tests: [
            { name: "Precision E CEA ELISA Kit", slug: toSlug("CEA"), description: "Quantitative measurement of Carcinoembryonic Antigen.", target: "Carcinoembryonic Antigen (CEA)", sampleType: "Serum, Plasma", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: "0.5 ng/mL", specificity: ">99%", orderingInfo: [{ kitSize: "48 Tests", catNo: "PE-CEA-48" }] },
            { name: "Precision E AFP ELISA Kit", slug: toSlug("AFP"), description: "Quantitative measurement of Alpha-Fetoprotein.", target: "Alpha-Fetoprotein (AFP)", sampleType: "Serum, Plasma", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: "1.0 IU/mL", specificity: ">99%", orderingInfo: [{ kitSize: "48 Tests", catNo: "PE-AFP-48" }] },
            { name: "Precision E Total PSA ELISA Kit", slug: toSlug("PSA total"), description: "Quantitative measurement of Total Prostate-Specific Antigen.", target: "Total Prostate-Specific Antigen (PSA)", sampleType: "Serum, Plasma", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: "0.1 ng/mL", specificity: ">99%", orderingInfo: [{ kitSize: "48 Tests", catNo: "PE-TPSA-48" }] },
            { name: "Precision E Free PSA ELISA Kit", slug: toSlug("PSA free"), description: "Quantitative measurement of Free Prostate-Specific Antigen.", target: "Free Prostate-Specific Antigen (PSA)", sampleType: "Serum, Plasma", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: "0.05 ng/mL", specificity: ">99%", orderingInfo: [{ kitSize: "48 Tests", catNo: "PE-FPSA-48" }] },
            { name: "Precision E CA-125 ELISA Kit", slug: toSlug("CA-125"), description: "Quantitative measurement of Cancer Antigen 125.", target: "CA-125", sampleType: "Serum, Plasma", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: "1.0 U/mL", specificity: ">99%", orderingInfo: [{ kitSize: "48 Tests", catNo: "PE-CA125-48" }] },
            { name: "Precision E CA-15-3 ELISA Kit", slug: toSlug("CA-15-3"), description: "Quantitative measurement of Cancer Antigen 15-3.", target: "CA-15-3", sampleType: "Serum, Plasma", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: "1.0 U/mL", specificity: ">99%", orderingInfo: [{ kitSize: "48 Tests", catNo: "PE-CA153-48" }] },
        ],
    },
    {
        category: "Inflammation",
        tests: [
            { name: "Precision E PCT ELISA Kit", slug: toSlug("PCT"), description: "Quantitative measurement of Procalcitonin.", target: "Procalcitonin (PCT)", sampleType: "Serum, Plasma", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: "0.1 ng/mL", specificity: ">99%", orderingInfo: [{ kitSize: "48 Tests", catNo: "PE-PCT-48" }] },
            { name: "Precision E CRP ELISA Kit", slug: toSlug("CRP"), description: "Quantitative measurement of C-Reactive Protein.", target: "C-Reactive Protein (CRP)", sampleType: "Serum, Plasma", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: "0.5 mg/L", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-CRP-96" }] },
            { name: "Precision E IL-6 ELISA Kit", slug: toSlug("IL-6"), description: "Quantitative measurement of Interleukin-6.", target: "Interleukin-6 (IL-6)", sampleType: "Serum, Plasma", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: "2 pg/mL", specificity: ">99%", orderingInfo: [{ kitSize: "48 Tests", catNo: "PE-IL6-48" }] },
        ],
    },
    {
        category: "TORCH",
        tests: [
            { name: "Precision E Toxo IgG ELISA Kit", slug: toSlug("Toxo IgG"), description: "Qualitative detection of IgG antibodies to Toxoplasma gondii.", target: "Toxoplasma gondii IgG", sampleType: "Serum, Plasma", assayFormat: "Indirect ELISA", image: getNextImage(), sensitivity: ">99%", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-TOXG-96" }] },
            { name: "Precision E Toxo IgM ELISA Kit", slug: toSlug("Toxo IgM"), description: "Qualitative detection of IgM antibodies to Toxoplasma gondii.", target: "Toxoplasma gondii IgM", sampleType: "Serum, Plasma", assayFormat: "Capture ELISA", image: getNextImage(), sensitivity: ">99%", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-TOXM-96" }] },
            { name: "Precision E Rubella IgG ELISA Kit", slug: toSlug("Rubella IgG"), description: "Qualitative detection of IgG antibodies to Rubella virus.", target: "Rubella virus IgG", sampleType: "Serum, Plasma", assayFormat: "Indirect ELISA", image: getNextImage(), sensitivity: ">99%", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-RUBG-96" }] },
            { name: "Precision E Rubella IgM ELISA Kit", slug: toSlug("Rubella IgM"), description: "Qualitative detection of IgM antibodies to Rubella virus.", target: "Rubella virus IgM", sampleType: "Serum, Plasma", assayFormat: "Capture ELISA", image: getNextImage(), sensitivity: ">99%", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-RUBM-96" }] },
            { name: "Precision E CMV IgG ELISA Kit", slug: toSlug("CMV IgG"), description: "Qualitative detection of IgG antibodies to Cytomegalovirus.", target: "Cytomegalovirus (CMV) IgG", sampleType: "Serum, Plasma", assayFormat: "Indirect ELISA", image: getNextImage(), sensitivity: ">99%", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-CMVG-96" }] },
            { name: "Precision E CMV IgM ELISA Kit", slug: toSlug("CMV IgM"), description: "Qualitative detection of IgM antibodies to Cytomegalovirus.", target: "Cytomegalovirus (CMV) IgM", sampleType: "Serum, Plasma", assayFormat: "Capture ELISA", image: getNextImage(), sensitivity: ">99%", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-CMVM-96" }] },
            { name: "Precision E HSV-1 IgG ELISA Kit", slug: toSlug("HSV-I IgG"), description: "Qualitative detection of IgG antibodies to Herpes Simplex Virus 1.", target: "Herpes Simplex Virus 1 IgG", sampleType: "Serum, Plasma", assayFormat: "Indirect ELISA", image: getNextImage(), sensitivity: ">99%", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-HSV1G-96" }] },
            { name: "Precision E HSV-1 IgM ELISA Kit", slug: toSlug("HSV-I IgM"), description: "Qualitative detection of IgM antibodies to Herpes Simplex Virus 1.", target: "Herpes Simplex Virus 1 IgM", sampleType: "Serum, Plasma", assayFormat: "Capture ELISA", image: getNextImage(), sensitivity: ">99%", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-HSV1M-96" }] },
            { name: "Precision E HSV-2 IgG ELISA Kit", slug: toSlug("HSV-II IgG"), description: "Qualitative detection of IgG antibodies to Herpes Simplex Virus 2.", target: "Herpes Simplex Virus 2 IgG", sampleType: "Serum, Plasma", assayFormat: "Indirect ELISA", image: getNextImage(), sensitivity: ">99%", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-HSV2G-96" }] },
            { name: "Precision E HSV-2 IgM ELISA Kit", slug: toSlug("HSV-II IgM"), description: "Qualitative detection of IgM antibodies to Herpes Simplex Virus 2.", target: "Herpes Simplex Virus 2 IgM", sampleType: "Serum, Plasma", assayFormat: "Capture ELISA", image: getNextImage(), sensitivity: ">99%", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-HSV2M-96" }] },
            { name: "Precision E HSV-1+2 IgG ELISA Kit", slug: toSlug("HSV 1+2 IgG"), description: "Qualitative detection of IgG antibodies to Herpes Simplex Virus 1 and 2.", target: "Herpes Simplex Virus 1+2 IgG", sampleType: "Serum, Plasma", assayFormat: "Indirect ELISA", image: getNextImage(), sensitivity: ">99%", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-HSV12G-96" }] },
            { name: "Precision E HSV-1+2 IgM ELISA Kit", slug: toSlug("HSV 1+2 IgM"), description: "Qualitative detection of IgM antibodies to Herpes Simplex Virus 1 and 2.", target: "Herpes Simplex Virus 1+2 IgM", sampleType: "Serum, Plasma", assayFormat: "Capture ELISA", image: getNextImage(), sensitivity: ">99%", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-HSV12M-96" }] },
        ],
    },
    {
        category: "Infectious Diseases",
        tests: [
            { name: "Precision E HAV IgM ELISA Kit", slug: toSlug("HAV IgM"), description: "Qualitative detection of IgM antibodies to Hepatitis A Virus.", target: "Hepatitis A Virus IgM", sampleType: "Serum, Plasma", assayFormat: "Capture ELISA", image: getNextImage(), sensitivity: ">99%", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-HAVM-96" }] },
            { name: "Precision E HEV IgM ELISA Kit", slug: toSlug("HEV IgM"), description: "Qualitative detection of IgM antibodies to Hepatitis E Virus.", target: "Hepatitis E Virus IgM", sampleType: "Serum, Plasma", assayFormat: "Capture ELISA", image: getNextImage(), sensitivity: ">99%", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-HEVM-96" }] },
            { name: "Precision E HBsAg ELISA Kit", slug: toSlug("HBsAg"), description: "Qualitative detection of Hepatitis B Surface Antigen.", target: "Hepatitis B Surface Antigen (HBsAg)", sampleType: "Serum, Plasma", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: "0.1 IU/mL", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-HBSAG-96" }], featured: true },
            { name: "Precision E HBsAb ELISA Kit", slug: toSlug("HBsAb"), description: "Quantitative measurement of antibodies to Hepatitis B Surface Antigen.", target: "Hepatitis B Surface Antibody (HBsAb)", sampleType: "Serum, Plasma", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: "10 mIU/mL", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-HBSAB-96" }] },
            { name: "Precision E HBcAb ELISA Kit", slug: toSlug("HBcAb"), description: "Qualitative detection of antibodies to Hepatitis B Core Antigen.", target: "Hepatitis B Core Antibody (HBcAb)", sampleType: "Serum, Plasma", assayFormat: "Competitive ELISA", image: getNextImage(), sensitivity: ">99%", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-HBCAB-96" }] },
            { name: "Precision E HBcAb IgM ELISA Kit", slug: toSlug("HBcAb IgM"), description: "Qualitative detection of IgM antibodies to Hepatitis B Core Antigen.", target: "Hepatitis B Core IgM (HBcAb IgM)", sampleType: "Serum, Plasma", assayFormat: "Capture ELISA", image: getNextImage(), sensitivity: ">99%", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-HBCM-96" }] },
            { name: "Precision E HBeAg ELISA Kit", slug: toSlug("HBeAg"), description: "Qualitative detection of Hepatitis B e-Antigen.", target: "Hepatitis B e-Antigen (HBeAg)", sampleType: "Serum, Plasma", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: ">99%", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-HBEAG-96" }] },
            { name: "Precision E HBeAb ELISA Kit", slug: toSlug("HBeAb"), description: "Qualitative detection of antibodies to Hepatitis B e-Antigen.", target: "Hepatitis B e-Antibody (HBeAb)", sampleType: "Serum, Plasma", assayFormat: "Competitive ELISA", image: getNextImage(), sensitivity: ">99%", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-HBEAB-96" }] },
            { name: "Precision E HCV IgG ELISA Kit", slug: toSlug("HCV IgG"), description: "Qualitative detection of IgG antibodies to Hepatitis C Virus.", target: "Hepatitis C Virus IgG", sampleType: "Serum, Plasma", assayFormat: "Indirect ELISA", image: getNextImage(), sensitivity: ">99%", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-HCVG-96" }] },
            { name: "Precision E HIV 1+2 Ab ELISA Kit", slug: toSlug("HIV 1+2 Ab"), description: "Qualitative detection of antibodies to HIV-1 and HIV-2.", target: "HIV-1/2 Antibodies", sampleType: "Serum, Plasma", assayFormat: "Indirect ELISA", image: getNextImage(), sensitivity: ">99.9%", specificity: ">99.9%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-HIVAB-96" }] },
            { name: "Precision E HIV 1+2 Ag/Ab ELISA Kit", slug: toSlug("HIV 1+2 Ag-Ab"), description: "4th generation ELISA for simultaneous detection of HIV p24 antigen and antibodies to HIV-1/2.", target: "HIV p24 Antigen & HIV-1/2 Antibodies", sampleType: "Serum, Plasma", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: ">99.9%", specificity: ">99.9%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-HIVAGAB-96" }], featured: true },
            { name: "Precision E Syphilis TP ELISA Kit", slug: toSlug("Syphilis TP"), description: "Qualitative detection of antibodies to Treponema pallidum.", target: "Treponema pallidum Antibodies", sampleType: "Serum, Plasma", assayFormat: "Indirect ELISA", image: getNextImage(), sensitivity: ">99%", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-SYP-96" }] },
            { name: "Precision E H.Pylori IgG ELISA Kit", slug: toSlug("H.Pylori IgG"), description: "Qualitative detection of IgG antibodies to Helicobacter pylori.", target: "Helicobacter pylori IgG", sampleType: "Serum, Plasma", assayFormat: "Indirect ELISA", image: getNextImage(), sensitivity: ">98%", specificity: ">98%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-HPG-96" }] },
            { name: "Precision E H.Pylori Ag ELISA Kit", slug: toSlug("H.Pylori Ag"), description: "Qualitative detection of Helicobacter pylori antigen in stool samples.", target: "Helicobacter pylori Antigen", sampleType: "Stool", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: ">98%", specificity: ">98%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-HPAG-96" }] },
            { name: "Precision E Chagas IgG ELISA Kit", slug: toSlug("Chagas IgG"), description: "Qualitative detection of IgG antibodies to Trypanosoma cruzi.", target: "Trypanosoma cruzi IgG", sampleType: "Serum, Plasma", assayFormat: "Indirect ELISA", image: getNextImage(), sensitivity: ">99%", specificity: ">99%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-CHG-96" }] },
            { name: "Precision E Dengue IgM ELISA Kit", slug: toSlug("Dengue IgM"), description: "Qualitative detection of IgM antibodies to Dengue virus.", target: "Dengue virus IgM", sampleType: "Serum, Plasma", assayFormat: "Capture ELISA", image: getNextImage(), sensitivity: ">98%", specificity: ">98%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-DENM-96" }] },
            { name: "Precision E Dengue IgG ELISA Kit", slug: toSlug("Dengue IgG"), description: "Qualitative detection of IgG antibodies to Dengue virus.", target: "Dengue virus IgG", sampleType: "Serum, Plasma", assayFormat: "Indirect ELISA", image: getNextImage(), sensitivity: ">98%", specificity: ">98%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-DENG-96" }] },
            { name: "Precision E Dengue Ag ELISA Kit", slug: toSlug("Dengue Ag"), description: "Qualitative detection of Dengue NS1 antigen.", target: "Dengue NS1 Antigen", sampleType: "Serum, Plasma", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: ">98%", specificity: ">98%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-DENAG-96" }] },
            { name: "Precision E Chikungunya IgM ELISA Kit", slug: toSlug("CHIK IgM"), description: "Qualitative detection of IgM antibodies to Chikungunya virus.", target: "Chikungunya virus IgM", sampleType: "Serum, Plasma", assayFormat: "Capture ELISA", image: getNextImage(), sensitivity: ">98%", specificity: ">98%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-CHIKM-96" }] },
            { name: "Precision E Zika IgM ELISA Kit", slug: toSlug("ZIKA IgM"), description: "Qualitative detection of IgM antibodies to Zika virus.", target: "Zika virus IgM", sampleType: "Serum, Plasma", assayFormat: "Capture ELISA", image: getNextImage(), sensitivity: ">95%", specificity: ">95%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-ZIKM-96" }] },
            { name: "Precision E Leptospira IgM ELISA Kit", slug: toSlug("Leptospira IgM"), description: "Qualitative detection of IgM antibodies to Leptospira.", target: "Leptospira IgM", sampleType: "Serum, Plasma", assayFormat: "Capture ELISA", image: getNextImage(), sensitivity: ">95%", specificity: ">95%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-LEPM-96" }] },
            { name: "Precision E Malaria Ag ELISA Kit", slug: toSlug("Malaria Ag"), description: "Qualitative detection of Plasmodium antigens.", target: "Plasmodium antigens (pLDH/HRP-II)", sampleType: "Whole Blood", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: ">98%", specificity: ">98%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-MALAG-96" }] },
        ],
    },
    {
        category: "Allergy & Autoimmunity",
        tests: [
            { name: "Precision E Total IgE ELISA Kit", slug: toSlug("Total IgE"), description: "Quantitative measurement of total Immunoglobulin E.", target: "Total Immunoglobulin E (IgE)", sampleType: "Serum, Plasma", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: "1.0 IU/mL", specificity: ">99%", orderingInfo: [{ kitSize: "48 Tests", catNo: "PE-IGE-48" }] },
            { name: "Precision E ANA Screen IgG ELISA Kit", slug: toSlug("ANA Screen IgG"), description: "Qualitative screening for anti-nuclear antibodies (ANA) of the IgG class.", target: "Anti-Nuclear Antibodies (ANA) IgG", sampleType: "Serum, Plasma", assayFormat: "Indirect ELISA", image: getNextImage(), sensitivity: ">98%", specificity: ">98%", orderingInfo: [{ kitSize: "96 Tests", catNo: "PE-ANA-96" }] },
            { name: "Precision E Anti-CCP ELISA Kit", slug: toSlug("Anti-CCP"), description: "Quantitative measurement of antibodies to cyclic citrullinated peptides (CCP).", target: "Anti-Cyclic Citrullinated Peptide (CCP)", sampleType: "Serum, Plasma", assayFormat: "Indirect ELISA", image: getNextImage(), sensitivity: "1.0 U/mL", specificity: ">98%", orderingInfo: [{ kitSize: "48 Tests", catNo: "PE-CCP-48" }] },
            { name: "Precision E ds-DNA ELISA Kit", slug: toSlug("ds-DNA"), description: "Quantitative measurement of antibodies to double-stranded DNA (dsDNA).", target: "Anti-dsDNA", sampleType: "Serum, Plasma", assayFormat: "Indirect ELISA", image: getNextImage(), sensitivity: "10 IU/mL", specificity: ">98%", orderingInfo: [{ kitSize: "48 Tests", catNo: "PE-DSDNA-48" }] },
        ],
    },
    {
        category: "Diabetic",
        tests: [
            { name: "Precision E Insulin ELISA Kit", slug: toSlug("Insulin"), description: "Quantitative measurement of Insulin.", target: "Insulin", sampleType: "Serum, Plasma", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: "1.0 µIU/mL", specificity: ">99%", orderingInfo: [{ kitSize: "48 Tests", catNo: "PE-INS-48" }] },
            { name: "Precision E C-Peptide ELISA Kit", slug: toSlug("C-Peptide"), description: "Quantitative measurement of C-Peptide.", target: "C-Peptide", sampleType: "Serum, Plasma", assayFormat: "Sandwich ELISA", image: getNextImage(), sensitivity: "0.1 ng/mL", specificity: ">99%", orderingInfo: [{ kitSize: "48 Tests", catNo: "PE-CPEP-48" }] },
        ],
    },
];
