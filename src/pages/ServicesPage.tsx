import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import CtaSection from '../components/CtaSection';
import SectionHeader from '../components/SectionHeader';
import BeakerIcon from '../components/icons/BeakerIcon';
import ClipboardCheckIcon from '../components/icons/ClipboardCheckIcon';
import DnaIcon from '../components/icons/DnaIcon';
import FlaskIcon from '../components/icons/FlaskIcon';
import QualityIcon from '../components/icons/QualityIcon';
import DigitalSolutionsIcon from '../components/icons/DigitalSolutionsIcon';

const ServiceCard: React.FC<{ title: string, description: string, icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="flex items-start space-x-6">
        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-brand-secondary/10 text-brand-secondary">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-bold text-text-primary">{title}</h3>
            <p className="mt-1 text-text-secondary">{description}</p>
        </div>
    </div>
);

const ProcessStep: React.FC<{ number: number; title: string; children: React.ReactNode; isLast?: boolean }> = ({ number, title, children, isLast }) => (
    <div className="relative pl-16">
        {!isLast && <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-border-color"></div>}
        <div className="absolute left-0 top-0 flex items-center justify-center h-12 w-12 rounded-full bg-brand-primary text-white font-bold ring-8 ring-brand-light-bg text-xl">{number}</div>
        <h3 className="text-xl font-bold text-text-primary">{title}</h3>
        <p className="mt-2 text-text-secondary">{children}</p>
    </div>
);

const ServicesPage: React.FC = () => {
    return (
        <div className="bg-brand-light-bg">
            <section className="relative bg-white text-text-primary overflow-hidden py-24 sm:py-32">
                 <div className="absolute inset-0 opacity-5 animate-background-pan">
                    <img
                        className="w-full h-full object-cover"
                        src="https://cdn.innovadx.com/images/modern-diagnostics-lab-abstract.jpg"
                        alt="Modern diagnostics laboratory abstract background"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-text-primary">
                           Together, We Will Catalyze Change
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-xl text-text-secondary leading-8">
                           Leverage our end-to-end expertise in assay development and regulated manufacturing to accelerate your diagnostic pipeline, from initial concept to global market launch.
                        </p>
                    </AnimatedSection>
                </div>
            </section>
            
            <section className="py-24 sm:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center">
                        <SectionHeader
                            title="Our Core Competencies"
                            description="We provide a comprehensive range of services built on a foundation of cutting-edge technology and deep scientific expertise to function as a seamless extension of your team."
                        />
                    </AnimatedSection>
                    <AnimatedSection as="div" className="mt-20 grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3" staggerChildren={0.15}>
                        <ServiceCard title="Immunoassay Development" description="End-to-end development and validation of robust immunoassays (TRFIA, LFA, ELISA) for your specific biomarker and platform requirements." icon={<BeakerIcon className="h-6 w-6" />} />
                        <ServiceCard title="Reagent & Antibody Services" description="Production of high-quality monoclonal/polyclonal antibodies and recombinant antigens with guaranteed performance characteristics." icon={<DnaIcon className="h-6 w-6" />} />
                        <ServiceCard title="Bioconjugation Expertise" description="Leverage our deep expertise in conjugating antibodies and antigens to various labels, including our proprietary Europium nanoparticles for TRFIA." icon={<FlaskIcon className="h-6 w-6" />} />
                        <ServiceCard title="ISO 13485 Scale-Up Manufacturing" description="Transition seamlessly from pilot-scale to large-scale, automated production in our certified facilities under strict quality control." icon={<QualityIcon className="h-6 w-6" />} />
                        <ServiceCard title="Regulatory Strategy & Support" description="Receive expert guidance and technical file support for navigating complex regulatory pathways including CE-IVDR and FDA 510(k) submissions." icon={<ClipboardCheckIcon className="h-6 w-6" />} />
                        <ServiceCard title="Digital Platform Integration" description="Develop custom software solutions to integrate your new diagnostic with our connected health ecosystem for enhanced data management." icon={<DigitalSolutionsIcon className="h-6 w-6" />} />
                    </AnimatedSection>
                </div>
            </section>
            
            <section className="bg-white py-24 sm:py-32">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                    <AnimatedSection>
                        <SectionHeader title="Our Collaborative Process" description="We work as an extension of your team, providing transparent communication and tailored solutions at every step." align="left" />
                        <div className="mt-10 space-y-12">
                             <ProcessStep number={1} title="Consultation & Feasibility">
                                We begin with a deep dive into your project goals, technical requirements, and regulatory strategy to define a clear and achievable path forward.
                             </ProcessStep>
                             <ProcessStep number={2} title="Development & Optimization">
                                Our dedicated scientists develop and rigorously optimize the assay, focusing on key performance characteristics like sensitivity, specificity, and stability.
                             </ProcessStep>
                             <ProcessStep number={3} title="Validation & Manufacturing">
                                We perform comprehensive analytical and clinical validation, followed by a seamless technology transfer for scaled-up manufacturing under strict quality control.
                             </ProcessStep>
                             <ProcessStep number={4} title="Delivery & Post-Market Support" isLast>
                                We deliver a complete, market-ready solution with ongoing technical, manufacturing, and regulatory support to ensure your long-term success.
                             </ProcessStep>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection>
                        <img src="https://cdn.innovadx.com/images/team-collaborating-whiteboard.jpg" alt="Team collaborating around a whiteboard" className="rounded-2xl shadow-lg w-full h-full object-cover"/>
                    </AnimatedSection>
                </div>
            </section>
            
            <section className="py-24 sm:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <SectionHeader title="Partner Success Stories" description="We pride ourselves on building strong, collaborative partnerships that lead to tangible, market-moving results."/>
                     <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <AnimatedSection className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-border-color">
                            <h3 className="text-xl font-bold text-brand-primary">Case Study: Rapid Sepsis Marker Development</h3>
                            <p className="mt-4 text-text-secondary"><strong>Challenge:</strong> A leading biotech firm needed to rapidly develop a point-of-care test for a novel sepsis biomarker to improve early detection in emergency settings.</p>
                            <p className="mt-2 text-text-secondary"><strong>Solution:</strong> Leveraging our TRFIA platform and end-to-end assay development services, we delivered a fully validated, market-ready test in under 12 months.</p>
                            <p className="mt-2 text-text-secondary"><strong>Outcome:</strong> The partner successfully launched the product, achieving a 35% improvement in time-to-diagnosis in a pilot study and securing a major hospital network contract.</p>
                        </AnimatedSection>
                         <AnimatedSection className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-border-color" delay={0.2}>
                            <h3 className="text-xl font-bold text-brand-primary">Case Study: Custom Monoclonal Antibody Production</h3>
                             <p className="mt-4 text-text-secondary"><strong>Challenge:</strong> A research organization required a highly specific monoclonal antibody with picomolar affinity for a new cancer therapeutic target.</p>
                            <p className="mt-2 text-text-secondary"><strong>Solution:</strong> Our team managed the entire workflow from antigen design and hybridoma development to large-scale, GMP-compliant antibody production and purification.</p>
                            <p className="mt-2 text-text-secondary"><strong>Outcome:</strong> We delivered a high-affinity antibody that exceeded all performance specifications and is now a critical component in the partner's Phase I clinical trials.</p>
                        </AnimatedSection>
                     </div>
                </div>
            </section>
            
            <CtaSection 
                title="Ready to accelerate your R&D pipeline?"
                subtitle="Let's discuss how our expertise and infrastructure can help you achieve your diagnostic development goals."
                buttonText="Partner With Us"
                buttonLink="/contact"
            />
        </div>
    );
};

export default ServicesPage;