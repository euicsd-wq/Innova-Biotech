
export interface PlatformReagent {
  category: string;
  catalogueNumber: string;
  itemName: string;
  slug: string;
  status: 'Available' | 'Coming Soon';
  description?: string;
  sample?: string;
  specimenVolume?: string;
  testingTime?: string;
  storageCondition?: string;
  measuringRange?: string;
  cutOff?: string;
  kitSize?: string;
  sensitivity?: string;
  specificity?: string;
  referenceMethod?: string;
}

const toSlug = (name: string) => name.toLowerCase().replace(/[\s&/+,().]+/g, '-').replace(/[^\w-]+/g, '');

const baseReagents: Omit<PlatformReagent, 'slug' | 'status'>[] = [
  // Inflammation Marker
  { category: 'Inflammation Marker', catalogueNumber: 'FI-CRP-402', itemName: 'DX-1 CRP Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: 'hsCRP: < 1 mg/L, CRP: < 10 mg/L', measuringRange: '0.5-200 mg/L', kitSize: '10T/25T' },
  { category: 'Inflammation Marker', catalogueNumber: 'FI-PCT-402', itemName: 'DX-1 PCT Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 0.5 ng/mL', measuringRange: '0.1-50 ng/mL', kitSize: '10T/25T' },
  { category: 'Inflammation Marker', catalogueNumber: 'FI-IL6-402', itemName: 'DX-1 IL-6 Test Kit', sample: 'WB/S/P', cutOff: '< 10 pg/mL', measuringRange: '3.0-5000 pg/mL', kitSize: '10T/25T' },
  { category: 'Inflammation Marker', catalogueNumber: 'FI-SAA-402', itemName: 'DX-1 SAA Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 10 mg/L', measuringRange: '1-300 mg/L', kitSize: '10T/25T' },
  
  // Tumor Marker
  { category: 'Tumor Marker', catalogueNumber: 'FI-PSA-302', itemName: 'DX-1 PSA Test Kit (S/P)', sample: 'S/P', cutOff: '< 4 ng/mL', measuringRange: '2-100 ng/mL', kitSize: '10T/25T'},
  { category: 'Tumor Marker', catalogueNumber: 'FI-PSA-402', itemName: 'DX-1 PSA Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 4 ng/mL', measuringRange: '0.1-100 ng/mL', kitSize: '10T/25T'},
  { category: 'Tumor Marker', catalogueNumber: 'FI-FPSA-302', itemName: 'DX-1 Free PSA Test Kit', sample: 'S/P', cutOff: 'N/A', measuringRange: '0.1-30 ng/mL', kitSize: '10T/25T'},
  { category: 'Tumor Marker', catalogueNumber: 'FI-AFP-302', itemName: 'DX-1 AFP Test Kit', sample: 'S/P', cutOff: '< 20 ng/mL', measuringRange: '5-400 ng/mL', kitSize: '10T/25T'},
  { category: 'Tumor Marker', catalogueNumber: 'FI-CEA-302', itemName: 'DX-1 CEA Test Kit', sample: 'S/P', cutOff: '< 4 ng/mL', measuringRange: '1-500 ng/mL', kitSize: '10T/25T'},
  { category: 'Tumor Marker', catalogueNumber: 'FI-FOB-602', itemName: 'DX-1 FOB Test Kit', sample: 'Feces', cutOff: '50 ng/mL', measuringRange: '10-1000 ng/mL', kitSize: '10T/25T'},
  { category: 'Tumor Marker', catalogueNumber: 'FI-CA211-402', itemName: 'DX-1 CYFRA21-1 Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '<3.3 ng/mL', measuringRange: '1-300ng/mL', kitSize: '10T/25T'},
  
  // Cardiac Marker
  { category: 'Cardiac Marker', catalogueNumber: 'FI-CTI-402', itemName: 'DX-1 cTnI Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 0.5 ng/mL', measuringRange: '0.1-40 ng/mL', kitSize: '10T/25T'},
  { category: 'Cardiac Marker', catalogueNumber: 'FI-CTNT-402', itemName: 'DX-1 cTnT Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 0.5 ng/mL', measuringRange: '0.2-40 ng/mL', kitSize: '10T/25T'},
  { category: 'Cardiac Marker', catalogueNumber: 'FI-NBNP-402', itemName: 'DX-1 NT-proBNP Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 0.45 ng/mL', measuringRange: '0.3-22 ng/mL', kitSize: '10T/25T'},
  { category: 'Cardiac Marker', catalogueNumber: 'FI-CKMB-402', itemName: 'DX-1 CK-MB Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 5 ng/mL', measuringRange: '0.2-75 ng/mL', kitSize: '10T/25T'},
  { category: 'Cardiac Marker', catalogueNumber: 'FI-HFA-402', itemName: 'DX-1 H-FABP Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 8 ng/mL', measuringRange: '1-120 ng/mL', kitSize: '10T/25T'},
  { category: 'Cardiac Marker', catalogueNumber: 'FI-MYO-402', itemName: 'DX-1 Myoglobin Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 90 ng/mL', measuringRange: '5-200 ng/mL', kitSize: '10T/25T'},
  { category: 'Cardiac Marker', catalogueNumber: 'FI-AMI-435', itemName: 'DX-1 Troponin I/Myoglobin/CK-MB (3 in 1) Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: 'cTnl: < 0.5 ng/mL, MYO: < 90 ng/mL, CK-MB: < 5 ng/mL', measuringRange: 'cTnl: 0.1-40 ng/mL, MYO: 5-200 ng/mL, CK-MB: 0.2-75 ng/mL', kitSize: '10T/25T'},
  { category: 'Cardiac Marker', catalogueNumber: 'FI-AMIT-435', itemName: 'DX-1 Troponin T/Myoglobin/CK-MB Combo Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: 'cTnT: < 0.2 ng/mL, MYO: < 90 ng/mL, CK-MB: < 5 ng/mL', measuringRange: 'cTnT: 0.1-40 ng/mL, MYO: 5-200 ng/mL, CK-MB: 0.2-75 ng/mL', kitSize: '10T/25T'},
  { category: 'Cardiac Marker', catalogueNumber: 'FI-CPC-435', itemName: 'DX-1 Troponin I/D-Dimer/NT-proBNP (3 in 1) Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: 'cTnl: < 0.5 ng/mL, D-Dimer: < 0.5mg/L, NT-proBNP: < 0.45 ng/mL', measuringRange: 'cTnl: 0.1-40 ng/mL, D-Dimer: 0.1-10mg/L, NT-proBNP: 0.3-22 ng/mL', kitSize: '10T/25T'},

  // Coagulation
  { category: 'Coagulation', catalogueNumber: 'FI-DDM-402', itemName: 'DX-1 D-Dimer Test Kit', sample: 'Fingerstick WB, WB/P', cutOff: '0.5 mg/L', measuringRange: '0.1-10 mg/L', kitSize: '10T/25T'},
  
  // Endocrinology
  { category: 'Endocrinology', catalogueNumber: 'FI-BHCG-402', itemName: 'DX-1 β-hCG Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 5 mIU/mL', measuringRange: '2-200,000 mIU/mL', kitSize: '10T/25T'},
  { category: 'Endocrinology', catalogueNumber: 'FI-BHCG-202', itemName: 'DX-1 β-hCG (Urine) Test Kit', sample: 'Fingerstick WB, WB/S/P/Urine', cutOff: '< 5 mIU/mL', measuringRange: '5-100,000 mIU/mL', kitSize: '10T/25T'},
  { category: 'Endocrinology', catalogueNumber: 'FI-FSH-402', itemName: 'DX-1 FSH Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: 'N/A', measuringRange: '1-100 mIU/mL', kitSize: '10T/25T'},
  { category: 'Endocrinology', catalogueNumber: 'FI-LH-402', itemName: 'DX-1 LH Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: 'N/A', measuringRange: '1-300 mIU/mL', kitSize: '10T/25T'},
  { category: 'Endocrinology', catalogueNumber: 'FI-AMH-402', itemName: 'DX-1 AMH Test Kit', sample: 'WB/S/P', cutOff: 'N/A', measuringRange: '0.05-25 ng/mL', kitSize: '10T/25T'},
  { category: 'Endocrinology', catalogueNumber: 'FI-TES-302', itemName: 'DX-1 Testosterone Test Kit', sample: 'S/P', cutOff: 'Female:0-2 ng/mL, Male:2.6-12 ng/mL', measuringRange: '1.0-20 ng/mL', kitSize: '10T/25T'},
  { category: 'Endocrinology', catalogueNumber: 'FI-P4-302', itemName: 'DX-1 Progesterone (P4) Test Kit', sample: 'S/P', cutOff: 'N/A', measuringRange: '1.4-60 ng/mL', kitSize: '10T/25T'},
  { category: 'Endocrinology', catalogueNumber: 'FI-E2-402', itemName: 'DX-1 Estradiol (E2) Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: 'Male: 11-44, Female(Follicular period):31~91, Female (Ovulation):60-533, Female(Luteal period):60-233, Female (Pregnant):>153, Female(Menopause):<140', measuringRange: '10-3000 pg/mL', kitSize: '10T/25T'},
  { category: 'Endocrinology', catalogueNumber: 'FI-PRL-402', itemName: 'DX-1 Prolactin (PRL) Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: 'Female (Non-pregnant): 2- 25 ng/mL, Female (Pregnant): 10-209 ng/mL, Male:2 - 18 ng/mL', measuringRange: '1.0 - 200 ng/mL', kitSize: '10T/25T'},
  { category: 'Thyroid', catalogueNumber: 'FI-T3-402', itemName: 'DX-1 T3 Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '1.23-3.08nmol/L', measuringRange: '0.62-9.24 nmol/L', kitSize: '10T/25T'},
  { category: 'Thyroid', catalogueNumber: 'FI-FT3-402', itemName: 'DX-1 FT3 Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '2.6-5.7 pmol/L', measuringRange: '1.5-46 pmol/L', kitSize: '10T/25T'},
  { category: 'Thyroid', catalogueNumber: 'FI-T4-402', itemName: 'DX-1 T4 Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '65-155nmol/L', measuringRange: '12.87-300 nmol/L', kitSize: '10T/25T'},
  { category: 'Thyroid', catalogueNumber: 'FI-FT4-402', itemName: 'DX-1 FT4 Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '9-19.5pmol/L', measuringRange: '1-100 pmo/L.', kitSize: '10T/25T'},
  { category: 'Thyroid', catalogueNumber: 'FI-TSH-402', itemName: 'DX-1 TSH Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '0.27-4.2 µIU/mL', measuringRange: '0.1-200 µIU/mL', kitSize: '10T/25T'},
  { category: 'Thyroid', catalogueNumber: 'FI-FER-402', itemName: 'DX-1 Ferritin Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: 'Male:30-400 ng/mL, Female: 13-150 ng/mL', measuringRange: '1-2000 ng/mL', kitSize: '10T/25T'},
  { category: 'Thyroid', catalogueNumber: 'FI-COR-302', itemName: 'DX-1 Cortisol Test Kit', sample: 'S/P', cutOff: '140-690 nmol/L', measuringRange: '50 nmol/L - 1000 nmol/L', kitSize: '10T/25T'},
  
  // Nephrology
  { category: 'Nephrology', catalogueNumber: 'FI-ALB-102', itemName: 'DX-1 mAlb Test Kit', sample: 'Urine', cutOff: '< 20 mg/L', measuringRange: '5-300 mg/L', kitSize: '10T/25T'},
  { category: 'Nephrology', catalogueNumber: 'FI-CYSC-402', itemName: 'DX-1 CysC Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 1.1 mg/L', measuringRange: '0.1-9.0 mg/L', kitSize: '10T/25T'},
  { category: 'Nephrology', catalogueNumber: 'FI-BMG-402', itemName: 'DX-1 B2MG Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 2.2 mg/L', measuringRange: '0.2-20 mg/L', kitSize: '10T/25T'},
  { category: 'Nephrology', catalogueNumber: 'FI-NGAL-102', itemName: 'DX-1 N-GAL Test Kit', sample: 'Urine', cutOff: '< 10 ng/mL', measuringRange: '10-1500 ng/mL', kitSize: '10T/25T'},

  // Diabetes
  { category: 'Diabetes', catalogueNumber: 'FI-HBA-402', itemName: 'DX-1 HbA1c Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '4-6%', measuringRange: '4-14.5%', kitSize: '10T/25T'},

  // Gastrointestinal Diseases
  { category: 'Gastrointestinal Diseases', catalogueNumber: 'FI-HP-602', itemName: 'DX-1 H. pylori Antigen Test Kit', sample: 'Feces', cutOff: '< 2.5 ng/mL', measuringRange: '2-1500 ng/mL', kitSize: '10T/25T'},
  { category: 'Gastrointestinal Diseases', catalogueNumber: 'FI-CAL-602', itemName: 'DX-1 Calprotectin Test Kit', sample: 'Feces', cutOff: '20 µg/g', measuringRange: '1-1000 µg/g', kitSize: '10T/25T'},
  { category: 'Gastrointestinal Diseases', catalogueNumber: 'FI-AD-602', itemName: 'DX-1 Adenovirus (Feces) Test Kit', sample: 'Feces', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T'},
  { category: 'Gastrointestinal Diseases', catalogueNumber: 'FI-ROT-602', itemName: 'DX-1 Rotavirus Test Kit', sample: 'Feces', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T'},
  { category: 'Gastrointestinal Diseases', catalogueNumber: 'FI-RAC-602', itemName: 'DX-1 Rota/Adeno Test Kit', sample: 'Feces', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T'},
  { category: 'Gastrointestinal Diseases', catalogueNumber: 'FI-NOV-602', itemName: 'DX-1 Norovirus GI/GII Test Kit', sample: 'Feces', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T'},
  { category: 'Gastrointestinal Diseases', catalogueNumber: 'FI-CDG-602', itemName: 'DX-1 Clostridium difficile GDH Test Kit', sample: 'Feces', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T'},
  { category: 'Gastrointestinal Diseases', catalogueNumber: 'FI-CDT-625', itemName: 'DX-1 C.difficile Toxin A+Toxin B Test Kit', sample: 'Feces', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T'},
  { category: 'Gastrointestinal Diseases', catalogueNumber: 'FI-CD-602', itemName: 'DX-1 C.difficile GDH/Toxin A/Toxin B Test Kit', sample: 'Feces', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T'},
  
  // Respiratory Diseases
  { category: 'Respiratory Diseases', catalogueNumber: 'FI-STA-502', itemName: 'DX-1 Strep A Test Kit', sample: 'Swab', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/20T'},
  { category: 'Respiratory Diseases', catalogueNumber: 'FI-MP-502', itemName: 'DX-1 Mycoplasma pneumoniae Antigen Test Kit', sample: 'Throat Swab', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/20T'},
  { category: 'Respiratory Diseases', catalogueNumber: 'FI-SP-102', itemName: 'DX-1 Streptococcus pneumoniae Test Kit', sample: 'Urine', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T'},
  { category: 'Respiratory Diseases', catalogueNumber: 'FI-LEG-102', itemName: 'DX-1 Legionella pneumophila Antigen Test Kit', sample: 'Urine', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T'},
  { category: 'Respiratory Diseases', catalogueNumber: 'FI-FLU-502', itemName: 'DX-1 FLU A+B Test Kit', sample: 'Swab', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/20T'},
  { category: 'Respiratory Diseases', catalogueNumber: 'FI-RSV-502', itemName: 'DX-1 RSV Test Kit', sample: 'Swab', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/20T'},
  { category: 'Respiratory Diseases', catalogueNumber: 'FI-HMPV-502', itemName: 'DX-1 Human Metapneumovirus (HMPV) Test Kit', sample: 'Nasopharyngeal Swab', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/20T'},
  { category: 'Respiratory Diseases', catalogueNumber: 'FI-HPIV-502', itemName: 'DX-1 Human Parainfluenza Virus (HPIV) Test Kit', sample: 'Nasopharyngeal Swab', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/20T'},
  { category: 'Respiratory Diseases', catalogueNumber: 'FI-NCP-502', itemName: 'DX-1 COVID-19 Antigen Test Kit', sample: 'Swab', cutOff: '< 1 COI', measuringRange: 'Qualitative (1-1000 COI)', kitSize: '20T'},
  { category: 'Respiratory Diseases', catalogueNumber: 'FI-NCP-402', itemName: 'DX-1 COVID-19 IgG/IgM Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-20 COI)', kitSize: '10T/25T'},
  { category: 'Respiratory Diseases', catalogueNumber: 'FI-CSG-402', itemName: 'DX-1 COVID-19 S-RBD IgG Antibody Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 1 COI', measuringRange: 'Semi-quantitative (0.5-100 COI)', kitSize: '10T/25T'},
  { category: 'Respiratory Diseases', catalogueNumber: 'FI-CSG-402B', itemName: 'DX-1 COVID-19 S-RBD IgG Quantitative Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 1 COI', measuringRange: 'Qualitative (0.5-100 COI)', kitSize: '10T/25T'},
  { category: 'Respiratory Diseases', catalogueNumber: 'FI-AD-502', itemName: 'DX-1 Adenovirus pneumoniae Test Kit', sample: 'Nasopharyngeal Swab', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/20T'},
  { category: 'Respiratory Diseases', catalogueNumber: 'FI-AR-502', itemName: 'DX-1 Adeno/RSV Test Kit', sample: 'Nasopharyngeal Swab', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/20T'},

  // Vector Borne Diseases
  { category: 'Vector Borne Diseases', catalogueNumber: 'FI-DEN-402', itemName: 'DX-1 Dengue IgG/IgM Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T'},
  { category: 'Vector Borne Diseases', catalogueNumber: 'FI-DES-402', itemName: 'DX-1 Dengue NS1 Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T'},
  { category: 'Vector Borne Diseases', catalogueNumber: 'FI-MAL-435', itemName: 'DX-1 Malaria P.f./P.v./Pan Antigen Test Kit', sample: 'Fingerstick WB, WB', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-20 COI)', kitSize: '10T/25T'},
  { category: 'Vector Borne Diseases', catalogueNumber: 'FI-TYP-402', itemName: 'DX-1 Typhoid Antibody Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 1 COI', measuringRange: 'Qualitative (1-20 COI)', kitSize: '10T/25T'},

  // Hepatitis
  { category: 'Hepatitis', catalogueNumber: 'FI-HBSB-402', itemName: 'DX-1 HBsAb Test Kit', sample: 'WB/S/P', cutOff: '< 10mIU/mL', measuringRange: '5-1000 mIU/mL', kitSize: '10T/25T'},
  { category: 'Hepatitis', catalogueNumber: 'FI-HBSG-402', itemName: 'DX-1 HBsAg Test Kit', sample: 'WB/S/P', cutOff: '<0.5 IU/mL', measuringRange: '0.5-200 IU/mL', kitSize: '10T/25T'},
  { category: 'Hepatitis', catalogueNumber: 'FI-HCV-402', itemName: 'DX-1 HCV Antibody Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T'},
  { category: 'Hepatitis', catalogueNumber: 'FI-HIV-402', itemName: 'DX-1 HIV 1/2 Antibody Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 1 COI', measuringRange: 'Qualitative (1-20 COI)', kitSize: '10T/25T'},
  { category: 'Hepatitis', catalogueNumber: 'FI-HIG-402', itemName: 'DX-1 HIV p24 Antigen Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T'},
  
  // Other Infectious Diseases
  { category: 'Other Infectious Diseases', catalogueNumber: 'FI-SYP-402', itemName: 'DX-1 Syphilis Antibody Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T'},
  { category: 'Other Infectious Diseases', catalogueNumber: 'FI-TET-402', itemName: 'DX-1 Tetanus Antibody Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 0.1 IU/mL', measuringRange: '0.05-10 IU/mL', kitSize: '10T/25T'},
  { category: 'Other Infectious Diseases', catalogueNumber: 'FI-ASO-402', itemName: 'DX-1 Anti-streptolysin O (ASO) Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: 'Adults: < 200 IU/mL, Children: <250 IU/mL', measuringRange: '25-800 IU/mL', kitSize: '10T/25T'},
  { category: 'Other Infectious Diseases', catalogueNumber: 'FI-MXG-402', itemName: 'DX-1 Monkeypox Virus Antigen Test Kit', sample: 'Fingerstick WB, WB/S/P, Rash Exudate Swab, Throat Swab', cutOff: '< 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '20T'},

  // Autoimmunity
  { category: 'Autoimmunity', catalogueNumber: 'FI-IGE-402', itemName: 'DX-1 IgE Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 100 IU/mL', measuringRange: '20-1600 IU/mL', kitSize: '10T/25T'},
  { category: 'Autoimmunity', catalogueNumber: 'FI-IGA-402', itemName: 'DX-1 IgA Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '0.7-4.3 g/L', measuringRange: '0.1-7.0g/L', kitSize: '10T/25T'},
  { category: 'Autoimmunity', catalogueNumber: 'FI-RFM-402', itemName: 'DX-1 Rheumatoid Factor(RF) IgM Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 20IU/mL', measuringRange: '8-200 IU/mL', kitSize: '10T/25T'},

  // Others
  { category: 'Others', catalogueNumber: 'FI-VD-402', itemName: 'DX-1 Vitamin-D Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '>30 ng/mL', measuringRange: '5-100 ng/mL', kitSize: '10T/25T'},

  // Drugs of Abuse
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-AMP-102', itemName: 'DX-1 AMP Test Kit', sample: 'Urine', cutOff: '< 1,000/500 ng/mL', measuringRange: '300-3000 ng/mL', kitSize: '10T/25T'},
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-BAR-102', itemName: 'DX-1 BAR Test Kit', sample: 'Urine', cutOff: '< 300 ng/mL', measuringRange: '50-1200 ng/mL', kitSize: '10T/25T'},
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-BZO-102', itemName: 'DX-1 BZO Test Kit', sample: 'Urine', cutOff: '< 300 ng/mL', measuringRange: '150-1500 ng/mL', kitSize: '10T/25T'},
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-COC-102', itemName: 'DX-1 COC Test Kit', sample: 'Urine', cutOff: '< 300 ng/mL', measuringRange: '50-3000 ng/mL', kitSize: '10T/25T'},
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-MET-102', itemName: 'DX-1 MET Test Kit', sample: 'Urine', cutOff: '< 1000 ng/mL', measuringRange: '100-5000 ng/mL', kitSize: '10T/25T'},
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-MTD-102', itemName: 'DX-1 MTD Test Kit', sample: 'Urine', cutOff: '< 300 ng/mL', measuringRange: '150-1500 ng/mL', kitSize: '10T/25T'},
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-OPI-102', itemName: 'DX-1 OPI Test Kit', sample: 'Urine', cutOff: '< 2000 ng/mL', measuringRange: '300-6000 ng/mL', kitSize: '10T/25T'},
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-THC-102', itemName: 'DX-1 THC Test Kit', sample: 'Urine', cutOff: '< 50 ng/mL', measuringRange: '25-150 ng/mL', kitSize: '10T/25T'},
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-APVP-102', itemName: 'DX-1 α-PVP Test Kit', sample: 'Urine', cutOff: '< 300 ng/mL', measuringRange: '150-3000 ng/mL', kitSize: '10T/25T'},
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-MDMA-102', itemName: 'DX-1 MDMA Test Kit', sample: 'Urine', cutOff: '< 500 ng/mL', measuringRange: '250-1500 ng/mL', kitSize: '10T/25T'},
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-MOP-102', itemName: 'DX-1 MOP Test Kit', sample: 'Urine', cutOff: '< 300 ng/mL', measuringRange: '150-6000ng/mL', kitSize: '10T/25T'},
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-PCP-102', itemName: 'DX-1 PCP Test Kit', sample: 'Urine', cutOff: '< 25 ng/mL', measuringRange: '10-150ng/mL', kitSize: '10T/25T'},
];


export const reagentsData: PlatformReagent[] = baseReagents.map((r, index) => ({
  ...r,
  storageCondition: '4-30°C',
  slug: toSlug(r.itemName || `reagent-${index}`),
  status: 'Available',
}));
