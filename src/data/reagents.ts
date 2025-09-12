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

const baseReagents: Omit<PlatformReagent, 'slug'>[] = [
  // Inflammation Marker
  { category: 'Inflammation Marker', catalogueNumber: 'FI-CRP-402', itemName: 'DX-1 CRP Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: 'hsCRP: < 1 mg/L, CRP: < 10 mg/L', measuringRange: '0.5-200 mg/L', kitSize: '10T/25T', status: 'Available' },
  { category: 'Inflammation Marker', catalogueNumber: 'FI-PCT-402', itemName: 'DX-1 PCT Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 0.5 ng/mL', measuringRange: '0.1-50 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Inflammation Marker', catalogueNumber: 'FI-IL6-402', itemName: 'DX-1 IL-6 Test Kit', sample: 'WB/S/P', cutOff: '< 10 pg/mL', measuringRange: '3.0-5000 pg/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Inflammation Marker', catalogueNumber: 'FI-SAA-402', itemName: 'DX-1 SAA Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 10 mg/L', measuringRange: '1-300 mg/L', kitSize: '10T/25T', status: 'Available' },
  
  // Tumor Marker
  { category: 'Tumor Marker', catalogueNumber: 'FI-PSA-402', itemName: 'DX-1 PSA Test Kit', sample: 'S/P', cutOff: '< 4 ng/mL', measuringRange: '0.1-100 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Tumor Marker', catalogueNumber: 'FI-FPSA-302', itemName: 'DX-1 Free PSA Test Kit', sample: 'S/P', cutOff: 'N/A', measuringRange: '0.1-30 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Tumor Marker', catalogueNumber: 'FI-AFP-302', itemName: 'DX-1 AFP Test Kit', sample: 'S/P', cutOff: '< 20 ng/mL', measuringRange: '5-400 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Tumor Marker', catalogueNumber: 'FI-CEA-302', itemName: 'DX-1 CEA Test Kit', sample: 'S/P', cutOff: '< 4 ng/mL', measuringRange: '1-500 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Tumor Marker', catalogueNumber: 'FI-FOB-602', itemName: 'DX-1 FOB Test Kit', sample: 'Feces', cutOff: '50 ng/mL', measuringRange: '10-1000 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Tumor Marker', catalogueNumber: 'FI-CYFRA21-1-402', itemName: 'DX-1 CYFRA21-1 Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '<3.3 ng/mL', measuringRange: '1-300ng/mL', kitSize: '10T/25T', status: 'Available' },
  
  // Cardiac Marker
  { category: 'Cardiac Marker', catalogueNumber: 'FI-CTNI-402', itemName: 'DX-1 cTnI Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 0.5 ng/mL', measuringRange: '0.1-40 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Cardiac Marker', catalogueNumber: 'FI-CTNT-402', itemName: 'DX-1 cTnT Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 0.5 ng/mL', measuringRange: '0.2-40 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Cardiac Marker', catalogueNumber: 'FI-NTBNP-402', itemName: 'DX-1 NT-proBNP Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 0.45 ng/mL', measuringRange: '0.3-22 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Cardiac Marker', catalogueNumber: 'FI-CKMB-402', itemName: 'DX-1 CK-MB Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 5 ng/mL', measuringRange: '0.2-75 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Cardiac Marker', catalogueNumber: 'FI-HFABP-402', itemName: 'DX-1 H-FABP Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 8 ng/mL', measuringRange: '1-120 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Cardiac Marker', catalogueNumber: 'FI-MYO-402', itemName: 'DX-1 Myoglobin Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 90 ng/mL', measuringRange: '5-200 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Cardiac Marker', catalogueNumber: 'FI-AMY-402', itemName: 'DX-1 Triponin I/Myoglobin Combo Test Kit', sample: 'WB/S/P', cutOff: 'cTnl: <0.5 ng/mL, MYO: <90 ng/mL', measuringRange: 'cTnl: 0.1-40 ng/mL, MYO: 5-200 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Cardiac Marker', catalogueNumber: 'FI-CCM-402', itemName: 'DX-1 cTnI/CK-MB/Myoglobin Combo Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: 'cTnl: <0.5 ng/mL, CK-MB: <5 ng/mL, MYO: <90 ng/mL', measuringRange: 'cTnl: 0.1-40 ng/mL, CK-MB: 0.2-75 ng/mL, MYO: 5-200 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Cardiac Marker', catalogueNumber: 'FI-PCTDD-402', itemName: 'DX-1 Triponin I/NT-proBNP/D-Dimer Combo Test Kit', sample: 'WB', cutOff: 'cTnl: <0.5 ng/mL, NT-proBNP: <0.45 ng/mL, DD: <0.5 mg/L', measuringRange: 'cTnl: 0.1-40 ng/mL, NT-proBNP: 0.3-22 ng/mL, DD: 0.1-10 mg/L', kitSize: '10T/25T', status: 'Available' },

  // Coagulation
  { category: 'Coagulation', catalogueNumber: 'FI-DD-402', itemName: 'DX-1 D-Dimer Test Kit', sample: 'Fingerstick WB, WB/P', cutOff: '<0.5 mg/L', measuringRange: '0.1-10 mg/L', kitSize: '10T/25T', status: 'Available' },
  
  // Endocrinology
  { category: 'Endocrinology', catalogueNumber: 'FI-BHCG-402', itemName: 'DX-1 β-hCG Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '< 5 mIU/mL', measuringRange: '2-200,000 mIU/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Endocrinology', catalogueNumber: 'FI-HCG-202', itemName: 'DX-1 β-hCG (Urine) Test Kit', sample: 'Urine', cutOff: '< 5 mIU/mL', measuringRange: '5-100,000 mIU/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Endocrinology', catalogueNumber: 'FI-AMH-302', itemName: 'DX-1 AMH Test Kit', sample: 'S/P', cutOff: 'N/A', measuringRange: '0.1-20 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Endocrinology', catalogueNumber: 'FI-LH-402', itemName: 'DX-1 LH Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: 'N/A', measuringRange: '1.00-100 mIU/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Endocrinology', catalogueNumber: 'FI-PRL-302', itemName: 'DX-1 Prolactin (PRL) Test Kit', sample: 'S/P', cutOff: 'N/A', measuringRange: '1.00-200 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Endocrinology', catalogueNumber: 'FI-TES-402', itemName: 'DX-1 Testosterone Test Kit', sample: 'WB/S/P', cutOff: 'Female:0-2 ng/mL, Male:2.6-12 ng/mL', measuringRange: '1.0-20 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Endocrinology', catalogueNumber: 'FI-P4-402', itemName: 'DX-1 Progesterone (P4) Test Kit', sample: 'S/P', cutOff: 'N/A', measuringRange: '1.4-60 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Endocrinology', catalogueNumber: 'FI-E2-402', itemName: 'DX-1 Estradiol (E2) Test Kit', sample: 'S/P', cutOff: 'Male(11-44), Female(follicular period 21-251, ovulation period 38-649, luteal period 21-312), Female(postmenopausal <10)', measuringRange: '10-3000 pg/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Endocrinology', catalogueNumber: 'FI-FSH-402', itemName: 'DX-1 FSH Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: 'Male(1.5-12.4), Female(follicular period 3.5-12.5, ovulation period 4.7-21.5, luteal period 1.7-7.7), Female(postmenopausal 25.8-134.8)', measuringRange: '1.0-200 mIU/mL', kitSize: '10T/25T', status: 'Available' },

  // Thyroid
  { category: 'Thyroid', catalogueNumber: 'FI-T3-402', itemName: 'DX-1 T3 Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '1.23-3.08nmol/L', measuringRange: '0.62-9.24 nmol/L', kitSize: '10T/25T', status: 'Available' },
  { category: 'Thyroid', catalogueNumber: 'FI-FT3-402', itemName: 'DX-1 FT3 Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '2.6-5.7 pmol/L', measuringRange: '1.5-46 pmol/L', kitSize: '10T/25T', status: 'Available' },
  { category: 'Thyroid', catalogueNumber: 'FI-T4-402', itemName: 'DX-1 T4 Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '65-155nmol/L', measuringRange: '12.87-300 nmol/L', kitSize: '10T/25T', status: 'Available' },
  { category: 'Thyroid', catalogueNumber: 'FI-FT4-402', itemName: 'DX-1 FT4 Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '9-19.5pmol/L', measuringRange: '1-100 pmo/L', kitSize: '10T/25T', status: 'Available' },
  { category: 'Thyroid', catalogueNumber: 'FI-TSH-402', itemName: 'DX-1 TSH Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '0.27-4.2 µIU/mL', measuringRange: '0.1-200 µIU/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Thyroid', catalogueNumber: 'FI-FER-402', itemName: 'DX-1 Ferritin Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: 'Male: 30-400 ng/mL, Female: 13-150 ng/mL', measuringRange: '2-2000 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Thyroid', catalogueNumber: 'FI-COR-302', itemName: 'DX-1 Cortisol Test Kit', sample: 'S/P', cutOff: '140 - 530 nmol/L', measuringRange: '50 - 1000 nmol/L', kitSize: '10T/25T', status: 'Available' },
  
  // Diabetes
  { category: 'Diabetes', catalogueNumber: 'FI-CPEP-402', itemName: 'DX-1 C-peptide Test Kit', sample: 'WB/P', cutOff: '1.1 ng/mL', measuringRange: '0.2-20 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Diabetes', catalogueNumber: 'FI-INS-402', itemName: 'DX-1 Insulin Test Kit', sample: 'S/P', cutOff: '2.6 uIU/mL', measuringRange: '0.5-250 uIU/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Diabetes', catalogueNumber: 'FI-DMG-202', itemName: 'DX-1 GDMG Test Kit', sample: 'Urine', cutOff: '2.2 mg/L', measuringRange: '0.2-100 mg/L', kitSize: '10T/25T', status: 'Available' },
  { category: 'Diabetes', catalogueNumber: 'FI-MALB-202', itemName: 'DX-1 mAlb Test Kit', sample: 'Urine', cutOff: '20 mg/L', measuringRange: '5-250 mg/L', kitSize: '10T/25T', status: 'Available' },
  { category: 'Diabetes', catalogueNumber: 'FI-HBA1C-402', itemName: 'DX-1 HbA1c Test Kit', sample: 'Fingerstick WB, WB', cutOff: '4-6%', measuringRange: '4-14.5%', kitSize: '10T/25T', status: 'Available' },
  
  // Gastrointestinal Diseases
  { category: 'Gastrointestinal Diseases', catalogueNumber: 'FI-HP-602', itemName: 'DX-1 H. pylori Antigen Test Kit', sample: 'Feces', cutOff: '> 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T', status: 'Available' },
  { category: 'Gastrointestinal Diseases', catalogueNumber: 'FI-HPAB-402', itemName: 'DX-1 H. pylori Antibody Test Kit', sample: 'WB/S/P', cutOff: '20 AU/mL', measuringRange: '5-1000 AU/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Gastrointestinal Diseases', catalogueNumber: 'FI-ROTA-602', itemName: 'DX-1 Rotavirus Test Kit', sample: 'Feces', cutOff: '> 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T', status: 'Available' },
  { category: 'Gastrointestinal Diseases', catalogueNumber: 'FI-ADENO-602', itemName: 'DX-1 Adenovirus Test Kit', sample: 'Feces', cutOff: '> 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T', status: 'Available' },
  { category: 'Gastrointestinal Diseases', catalogueNumber: 'FI-NORO-602', itemName: 'DX-1 Norovirus Test Kit', sample: 'Feces', cutOff: '> 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T', status: 'Available' },
  { category: 'Gastrointestinal Diseases', catalogueNumber: 'FI-CDT-602', itemName: 'DX-1 Clostridium difficile GDH Test Kit', sample: 'Feces', cutOff: '> 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T', status: 'Available' },
  { category: 'Gastrointestinal Diseases', catalogueNumber: 'FI-TOXIN-602', itemName: 'DX-1 C.difficile Toxin A+Toxin B Test Kit', sample: 'Feces', cutOff: '> 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T', status: 'Available' },

  // Vector Borne Diseases
  { category: 'Vector Borne Diseases', catalogueNumber: 'FI-DENGUE-402', itemName: 'DX-1 Dengue IgG/IgM Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '> 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T', status: 'Available' },
  { category: 'Vector Borne Diseases', catalogueNumber: 'FI-DENGUEAG-402', itemName: 'DX-1 Dengue NS1 Ag Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '> 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T', status: 'Available' },
  { category: 'Vector Borne Diseases', catalogueNumber: 'FI-MAL-405', itemName: 'DX-1 Malaria P.f./Pan (pLDH) Test Kit', sample: 'WB', cutOff: '> 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T', status: 'Available' },
  { category: 'Vector Borne Diseases', catalogueNumber: 'FI-TYPHY-402', itemName: 'DX-1 Typhoid Antibody Test Kit', sample: 'WB/S/P', cutOff: '> 1 COI', measuringRange: 'Qualitative (1-32 COI)', kitSize: '10T/25T', status: 'Available' },

  // Infectious Diseases
  { category: 'Infectious Diseases', catalogueNumber: 'FI-STREP-502', itemName: 'DX-1 Strep A Test Kit', sample: 'Throat Swab', cutOff: '> 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T', status: 'Available' },
  { category: 'Infectious Diseases', catalogueNumber: 'FI-FLUAB-502', itemName: 'DX-1 Flu A+B Test Kit', sample: 'Nasal Swab', cutOff: '> 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T', status: 'Available' },
  { category: 'Infectious Diseases', catalogueNumber: 'FI-MYCOP-502', itemName: 'DX-1 Mycoplasma pneumoniae Antigen Test Kit', sample: 'Throat Swab', cutOff: '> 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T', status: 'Available' },
  { category: 'Infectious Diseases', catalogueNumber: 'FI-RSV-502', itemName: 'DX-1 RSV Test Kit', sample: 'Nasal Swab', cutOff: '> 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T', status: 'Available' },
  { category: 'Infectious Diseases', catalogueNumber: 'FI-INFLU-502', itemName: 'DX-1 Parainfluenza Viruses (hPIV) Antigen Test Kit', sample: 'Nasopharyngeal Swab', cutOff: '> 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T', status: 'Available' },
  { category: 'Infectious Diseases', catalogueNumber: 'FI-COVID-502', itemName: 'DX-1 COVID-19 Antigen Test Kit', sample: 'Nasal Swab', cutOff: '> 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T', status: 'Available' },
  { category: 'Infectious Diseases', catalogueNumber: 'FI-COVIDAB-402', itemName: 'DX-1 COVID-19 IgG/IgM Antibody Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '> 1 COI', measuringRange: 'Semi-quantitative (0.5-100 COI)', kitSize: '10T/25T', status: 'Available' },
  { category: 'Infectious Diseases', catalogueNumber: 'FI-COVIDNAB-402', itemName: 'DX-1 COVID-19 Neutralizing Antibody Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '> 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T', status: 'Available' },
  { category: 'Infectious Diseases', catalogueNumber: 'FI-AERO-502', itemName: 'DX-1 Adenovirus Test Kit', sample: 'Nasopharyngeal Swab', cutOff: '> 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T', status: 'Available' },
  { category: 'Infectious Diseases', catalogueNumber: 'FI-HBSAG-402', itemName: 'DX-1 HBsAg Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '> 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T', status: 'Available' },
  { category: 'Infectious Diseases', catalogueNumber: 'FI-HBSAB-402', itemName: 'DX-1 HBsAb Test Kit', sample: 'WB/S/P', cutOff: '<10mIU/mL', measuringRange: '5-1000 mIU/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Infectious Diseases', catalogueNumber: 'FI-HCV-402', itemName: 'DX-1 HCV Test Kit', sample: 'WB/S/P', cutOff: '<0.5 AU/mL', measuringRange: '0.2-200 AU/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Infectious Diseases', catalogueNumber: 'FI-HIV-402', itemName: 'DX-1 HIV(1/2) Antibody Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '> 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T/25T', status: 'Available' },
  { category: 'Infectious Diseases', catalogueNumber: 'FI-SYP-402', itemName: 'DX-1 Syphilis Antibody Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '> 1 COI', measuringRange: 'Qualitative (1-32 COI)', kitSize: '10T/25T', status: 'Available' },
  { category: 'Infectious Diseases', catalogueNumber: 'FI-TP-402', itemName: 'DX-1 TP Antibody Test Kit', sample: 'WB/S/P', cutOff: '> 1 COI', measuringRange: 'Qualitative (1-32 COI)', kitSize: '10T/25T', status: 'Available' },

  // Autoimmunity
  { category: 'Autoimmunity', catalogueNumber: 'FI-RF-402', itemName: 'DX-1 Rheumatoid Factor(RF) Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '<15 IU/mL', measuringRange: '8.00-100.0 IU/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Autoimmunity', catalogueNumber: 'FI-ACYPA-402', itemName: 'DX-1 Anti-dsDNA(IgG) Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '<0.1 IU/mL', measuringRange: '0.05-5.10 IU/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Autoimmunity', catalogueNumber: 'FI-MKY-402', itemName: 'DX-1 Monkeypox Virus Antigen Test Kit', sample: 'WB/S/P', cutOff: '> 1 COI', measuringRange: 'Qualitative (0-100 COI)', kitSize: '10T', status: 'Available' },

  // Others
  { category: 'Others', catalogueNumber: 'FI-IGE-402', itemName: 'DX-1 IgE Test Kit', sample: 'WB/S/P', cutOff: '< 100 IU/mL', measuringRange: '20-1800 IU/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Others', catalogueNumber: 'FI-IGM-402', itemName: 'DX-1 IgM Test Kit', sample: 'WB/S/P', cutOff: '> 0.7 g/L', measuringRange: '0.1-7.0 g/L', kitSize: '10T/25T', status: 'Available' },
  { category: 'Others', catalogueNumber: 'FI-IGA-402', itemName: 'DX-1 IgA Test Kit', sample: 'WB/S/P', cutOff: '> 0.7 g/L', measuringRange: '0.1-7.0 g/L', kitSize: '10T/25T', status: 'Available' },
  { category: 'Others', catalogueNumber: 'FI-VD-402', itemName: 'DX-1 Vitamin-D Test Kit', sample: 'Fingerstick WB, WB/S/P', cutOff: '>30 ng/mL', measuringRange: '5-100 ng/mL', kitSize: '10T/25T', status: 'Available' },

  // Drugs of Abuse
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-AMP-102', itemName: 'DX-1 AMP Test Kit', sample: 'Urine', cutOff: '> 1,000 ng/mL', measuringRange: '50-3000 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-BAR-102', itemName: 'DX-1 BAR Test Kit', sample: 'Urine', cutOff: '> 300 ng/mL', measuringRange: '50-1200 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-BUP-102', itemName: 'DX-1 BUP Test Kit', sample: 'Urine', cutOff: '> 10 ng/mL', measuringRange: '2-50 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-BZD-102', itemName: 'DX-1 BZD Test Kit', sample: 'Urine', cutOff: '> 300 ng/mL', measuringRange: '50-1200 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-COC-102', itemName: 'DX-1 COC Test Kit', sample: 'Urine', cutOff: '> 300 ng/mL', measuringRange: '50-1200 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-COT-102', itemName: 'DX-1 COT Test Kit', sample: 'Urine', cutOff: '> 200 ng/mL', measuringRange: '50-800 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-EDDP-102', itemName: 'DX-1 EDDP Test Kit', sample: 'Urine', cutOff: '> 100 ng/mL', measuringRange: '20-500 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-MTD-102', itemName: 'DX-1 MTD Test Kit', sample: 'Urine', cutOff: '> 300 ng/mL', measuringRange: '50-1200 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-MET-102', itemName: 'DX-1 MET Test Kit', sample: 'Urine', cutOff: '> 1,000 ng/mL', measuringRange: '150-5000 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-MDMA-102', itemName: 'DX-1 MDMA Test Kit', sample: 'Urine', cutOff: '> 500 ng/mL', measuringRange: '100-2000 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-MOP-102', itemName: 'DX-1 MOP Test Kit', sample: 'Urine', cutOff: '> 300 ng/mL', measuringRange: '150-5000 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-PCP-102', itemName: 'DX-1 PCP Test Kit', sample: 'Urine', cutOff: '> 25 ng/mL', measuringRange: '5-100 ng/mL', kitSize: '10T/25T', status: 'Available' },
  { category: 'Drugs of Abuse', catalogueNumber: 'FI-THC-102', itemName: 'DX-1 THC Test Kit', sample: 'Urine', cutOff: '> 50 ng/mL', measuringRange: '10-200 ng/mL', kitSize: '10T/25T', status: 'Available' },
];

export const reagentsData: PlatformReagent[] = baseReagents.map((r, index) => ({
  ...r,
  storageCondition: '4-30°C',
  slug: toSlug(r.itemName || `reagent-${index}`),
}));