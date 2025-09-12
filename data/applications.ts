import React from 'react';
import HeartIcon from '../components/icons/HeartIcon';
import VirusIcon from '../components/icons/VirusIcon';
import RibbonIcon from '../components/icons/RibbonIcon';
import FlaskIcon from '../components/icons/FlaskIcon';

interface Application {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: React.ReactNode;
  image: string;
  relevantProducts: { name: string; link: string }[];
}

export const applicationData: Application[] = [
  {
    slug: 'cardiology',
    title: 'Cardiology',
    shortDescription: 'Rapid, quantitative measurement of cardiac markers aiding in the swift diagnosis and risk stratification of cardiovascular diseases.',
    longDescription: 'In the critical setting of emergency medicine, rapid and accurate diagnosis of acute cardiovascular events is paramount. Our point-of-care cardiology solutions provide quantitative results for key cardiac markers like high-sensitivity Troponin I, NT-proBNP, and D-Dimer in minutes from a single blood sample. This enables healthcare professionals to rapidly differentiate conditions such as acute myocardial infarction and heart failure, facilitating faster clinical decisions, optimizing patient pathways, and ultimately improving outcomes.',
    icon: React.createElement(HeartIcon, { className: "w-8 h-8" }),
    image: 'https://cdn.innovadx.com/images/applications-cardiology.jpg',
    relevantProducts: [
      { name: 'DX-1 Platform', link: '/products/platform' },
      { name: 'hs-cTnI Test Kit', link: '/products/platform' },
      { name: 'NT-proBNP Test Kit', link: '/products/platform' },
      { name: 'D-Dimer Test Kit', link: '/products/platform' },
      { name: '3-in-1 Combo Test (cTnI/NT-proBNP/D-Dimer)', link: '/products/platform' },
    ],
  },
  {
    slug: 'infectious-disease',
    title: 'Infectious Disease',
    shortDescription: 'A broad menu of molecular and rapid antigen tests to enable differential diagnosis and guide appropriate treatment.',
    longDescription: 'Effectively managing infectious diseases requires the rapid identification of pathogens to guide appropriate therapy and support antimicrobial stewardship. Our portfolio includes a wide range of molecular and rapid antigen tests for respiratory viruses (including SARS-CoV-2, Influenza A/B, and RSV), tropical diseases like Dengue and Malaria, and key bacterial infections. These tools empower clinicians to make timely, informed treatment decisions, reducing the spread of disease and combating antimicrobial resistance.',
    icon: React.createElement(VirusIcon, { className: "w-8 h-8" }),
    image: 'https://cdn.innovadx.com/images/applications-infectious-disease.jpg',
    relevantProducts: [
      { name: 'Molecular Diagnostics', link: '/products/molecular' },
      { name: 'Rapid Test Kits', link: '/products/reagents' },
      { name: 'COVID-19 Ag/Influenza A+B Combo Test', link: '/products/platform' },
      { name: 'Microbiology Solutions', link: '/products/microbiology' },
    ],
  },
  {
    slug: 'oncology',
    title: 'Oncology',
    shortDescription: 'Reliable assays for screening and monitoring of key tumor markers, providing valuable information for cancer patient management.',
    longDescription: 'Our oncology solutions support clinicians in the screening, diagnosis, and therapeutic monitoring of various cancers. We provide reliable and sensitive assays for key tumor markers such as Prostate-Specific Antigen (PSA) for prostate cancer, Alpha-Fetoprotein (AFP) for liver cancer, and Carcinoembryonic Antigen (CEA) for colorectal cancers. These tools offer valuable data to aid in patient management throughout their complex treatment journey.',
    icon: React.createElement(RibbonIcon, { className: "w-8 h-8" }),
    image: 'https://cdn.innovadx.com/images/applications-oncology.jpg',
    relevantProducts: [
      { name: 'ELISA Kits', link: '/products/elisa' },
      { name: 'PSA Test Kit (POC)', link: '/products/platform' },
      { name: 'AFP Test Kit (POC)', link: '/products/platform' },
      { name: 'CEA Test Kit (POC)', link: '/products/platform' },
    ],
  },
   {
    slug: 'custom-development',
    title: 'Custom R&D Partnerships',
    shortDescription: 'Leverage our end-to-end R&D services to develop novel assays for your specific biomarker of interest on our platforms.',
    longDescription: 'Our Contract R&D Services team partners with pharmaceutical companies, biotech firms, and academic institutions to develop and commercialize custom diagnostic assays. From feasibility studies and antibody development to analytical/clinical validation and regulated manufacturing, we provide comprehensive end-to-end support to bring your novel biomarker from concept to a market-ready solution, accelerating your path to innovation.',
    icon: React.createElement(FlaskIcon, { className: "w-8 h-8" }),
    image: 'https://cdn.innovadx.com/images/applications-custom-rd.jpg',
    relevantProducts: [
      { name: 'R&D and Manufacturing Services', link: '/services' },
      { name: 'DX-1 Platform', link: '/products/platform' },
      { name: 'ELISA Kits', link: '/products/elisa' },
    ],
  },
];
