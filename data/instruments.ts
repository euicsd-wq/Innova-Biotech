export type Instrument = {
    name: string;
    brand: string;
    description: string;
    image: string;
    features: string[];
    applications: string[];
    orderingInfo: {
        model: string;
        description: string;
        catNo: string;
    }[];
};

export const instrumentsData: Instrument[] = [
    {
        name: "SaCycler-96 Real-Time PCR System",
        brand: "Precision Automate",
        description: "A state-of-the-art Real-Time PCR thermal cycler designed for high-performance amplification and analysis. Its robust optical system and advanced thermal block provide the accuracy and reliability needed for demanding research and diagnostic applications.",
        image: "https://i.imgur.com/gxtRI3N.png",
        features: [
            "5-channel fluorescence detection for advanced multiplexing.",
            "96-well format compatible with standard plates, tubes, and strips.",
            "Superior signal-to-noise ratio with a dedicated LED light source per channel.",
            "Wide dynamic range for accurate quantification across various sample types.",
            "User-friendly software with pre-installed protocols for rapid setup."
        ],
        applications: [
            "Real-Time Quantitation",
            "Single Nucleotide Polymorphism (SNP) Genotyping",
            "Melting Curve Analysis",
            "Gene Expression Analysis"
        ],
        orderingInfo: [
            { model: "SaCycler-96 IVD", description: "Closed system with 5 fluorescence channels", catNo: "SC-961" },
            { model: "SaCycler-96 Open", description: "Open system with 5 fluorescence channels", catNo: "SC-96R" }
        ]
    },
    {
        name: "SaMag-12/24 Automatic Nucleic Acid Extraction System",
        brand: "Precision Automate",
        description: "A compact, bench-top extractor for fully automated nucleic acid purification using magnetic bead technology. Designed for flexibility and efficiency, the SaMag system streamlines workflows for labs of all sizes.",
        image: "https://i.imgur.com/sI8xG7p.png",
        features: [
            "Fully automated extraction and optional PCR setup.",
            "Magnetic bead technology for high-yield, high-purity nucleic acids.",
            "Flexible batch size from 1 to 24 samples.",
            "Fast extraction protocol (~40 minutes).",
            "On-board barcode scanner for reagent and sample tracking."
        ],
        applications: [
            "Viral RNA/DNA Purification",
            "Genomic DNA Extraction (Blood, Tissue, Bacteria)",
            "Total RNA/DNA Extraction",
            "FFPE DNA Extraction"
        ],
        orderingInfo: [
            { model: "SaMag-12", description: "Automated system for up to 12 samples per run", catNo: "SM-12" },
            { model: "SaMag-24", description: "Dual-module system for up to 24 samples per run", catNo: "SM-24" }
        ]
    }
];
