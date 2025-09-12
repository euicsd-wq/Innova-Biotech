
export interface CaseStudy {
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    title: "Rapid Sepsis Marker Development",
    challenge: "A leading biotech firm needed to rapidly develop a point-of-care test for a novel sepsis biomarker to improve early detection in emergency settings.",
    solution: "Leveraging our TRFIA platform and end-to-end assay development services, we delivered a fully validated, market-ready test in under 12 months.",
    outcome: "The partner successfully launched the product, achieving a 35% improvement in time-to-diagnosis in a pilot study and securing a major hospital network contract.",
    image: "https://cdn.innovadx.com/images/case-study-sepsis.jpg"
  },
  {
    title: "Custom Monoclonal Antibody Production",
    challenge: "A research organization required a highly specific monoclonal antibody with picomolar affinity for a new cancer therapeutic target.",
    solution: "Our team managed the entire workflow from antigen design and hybridoma development to large-scale, GMP-compliant antibody production and purification.",
    outcome: "We delivered a high-affinity antibody that exceeded all performance specifications and is now a critical component in the partner's Phase I clinical trials.",
    image: "https://cdn.innovadx.com/images/case-study-antibody.jpg"
  },
  {
    title: "Point-of-Care Cardiac Panel Deployment",
    challenge: "A regional hospital network sought to reduce emergency department wait times and improve cardiac patient outcomes by decentralizing testing.",
    solution: "We implemented a network of 15 DX-1 analyzers across their emergency departments and urgent care clinics, providing comprehensive training and digital integration with their LIS.",
    outcome: "The network reported a 45-minute reduction in the average door-to-diagnosis time for acute myocardial infarction patients and a 20% decrease in unnecessary hospital admissions.",
    image: "https://cdn.innovadx.com/images/case-study-cardiac.jpg"
  }
];
