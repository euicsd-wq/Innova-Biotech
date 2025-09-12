
import React from 'react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeader from '../components/SectionHeader';
import CtaSection from '../components/CtaSection';
import StickyCta from '../components/StickyCta';
import TRFIAIcon from '../components/icons/TRFIAIcon';
import DnaIcon from '../components/icons/DnaIcon';
import PlateIcon from '../components/icons/PlateIcon';
import DigitalSolutionsIcon from '../components/icons/DigitalSolutionsIcon';

const TechCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    children: React.ReactNode;
}> = ({ icon, title, description, children }) => (
    <div className="bg-white p-8 rounded-2xl shadow-md ring-1 ring-border-color flex flex-col group h-full">
        <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-xl bg-brand-secondary/10 text-brand-secondary shadow-sm group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
                {icon}
            </div>
            <div>
                 <h3 className="text-2xl font-bold text-text-primary group-hover:text-brand-primary transition-colors">{title}</h3>
            </div>
        </div>
        <p className="mt-4 text-text-secondary flex-grow">{description}</p>
        <div className="mt-6 border-t border-border-color pt-6">
            {children}
        </div>
    </div>
);


const TechnologyPage: React.FC = () => {
    const CheckListItem: React.FC<{children: React.ReactNode}> = ({ children }) => (
         <li className="flex items-start">
            <svg className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            <span>{children}</span>
        </li>
    );

    return (
        <div className="bg-brand-light-bg">
            <PageHero
                title="Our Core Technologies"
                description="The scientific foundation of our diagnostic portfolio, engineered for sensitivity, reliability, and real-world impact."
                image="https://cdn.innovadx.com/images/abstract-biotech-background.jpg"
            />
            <div className="py-24 sm:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <AnimatedSection className="mb-20">
                        <SectionHeader 
                            title="The Science of Innovation"
                            description="Our multidisciplinary teams leverage a suite of advanced technology platforms to build diagnostic solutions that are faster, smarter, and more accessible. Each platform is chosen and optimized for its ability to deliver accurate and reliable results in its intended clinical setting."
                        />
                    </AnimatedSection>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                         <AnimatedSection>
                            <TechCard
                                icon={<TRFIAIcon className="w-8 h-8" />}
                                title="TRFIA Platform"
                                description="The core of our point-of-care ecosystem, Time-Resolved Fluorescence Immunoassay (TRFIA) offers lab-grade sensitivity in a portable format."
                            >
                                <ul className="space-y-3 text-text-secondary text-sm">
                                    <CheckListItem><strong>Superior Sensitivity:</strong> Europium nanoparticles eliminate background fluorescence, enabling detection of low-concentration analytes.</CheckListItem>
                                    <CheckListItem><strong>Quantitative Results:</strong> Provides precise, numerical results, moving beyond simple positive/negative readouts.</CheckListItem>
                                    <CheckListItem><strong>Speed and Convenience:</strong> Delivers results in 3-15 minutes, empowering immediate clinical decisions at the point of care.</CheckListItem>
                                </ul>
                            </TechCard>
                        </AnimatedSection>
                        <AnimatedSection>
                            <TechCard
                                icon={<DnaIcon className="w-8 h-8" />}
                                title="Molecular Diagnostics"
                                description="Our Real-Time PCR (qPCR) assays provide the gold standard in sensitivity and specificity for detecting infectious agents and genetic markers."
                            >
                               <ul className="space-y-3 text-text-secondary text-sm">
                                    <CheckListItem><strong>High Specificity:</strong> Targets unique nucleic acid sequences for definitive pathogen identification.</CheckListItem>
                                    <CheckListItem><strong>Multiplexing Capability:</strong> Detects and differentiates multiple targets from a single sample, enhancing efficiency.</CheckListItem>
                                    <CheckListItem><strong>Quantitative Viral Load:</strong> Precisely measures viral load to monitor disease progression and treatment efficacy.</CheckListItem>
                                </ul>
                            </TechCard>
                        </AnimatedSection>
                        <AnimatedSection>
                            <TechCard
                                icon={<PlateIcon className="w-8 h-8" />}
                                title="Advanced Immunoassays"
                                description="We leverage classic and advanced immunoassay formats like ELISA and Lateral Flow to build a broad portfolio of reliable and cost-effective tests."
                            >
                                <ul className="space-y-3 text-text-secondary text-sm">
                                    <CheckListItem><strong>Versatile Formats:</strong> A wide range of ELISA and rapid lateral flow assays to meet diverse laboratory and POC needs.</CheckListItem>
                                    <CheckListItem><strong>Robust & Reliable:</strong> Proven technologies optimized for high reproducibility and lot-to-lot consistency.</CheckListItem>
                                    <CheckListItem><strong>Scalable Manufacturing:</strong> In-house expertise allows for efficient, large-scale production under strict ISO 13485 quality standards.</CheckListItem>
                                </ul>
                            </TechCard>
                        </AnimatedSection>
                         <AnimatedSection>
                            <TechCard
                                icon={<DigitalSolutionsIcon className="w-8 h-8" />}
                                title="Connected Diagnostics"
                                description="Our InnovaDx Connect platform transforms diagnostic instruments into intelligent, networked devices, unlocking the strategic value of data."
                            >
                                <ul className="space-y-3 text-text-secondary text-sm">
                                    <CheckListItem><strong>Seamless Integration:</strong> Securely connect devices to LIS/HIS for automated data transfer, reducing manual errors.</CheckListItem>
                                    <CheckListItem><strong>Remote Management:</strong> Remotely monitor device status, manage quality control, and deploy updates across your entire fleet.</CheckListItem>
                                    <CheckListItem><strong>Actionable Analytics:</strong> Utilize powerful dashboards for real-time epidemiological surveillance and operational insights.</CheckListItem>
                                </ul>
                            </TechCard>
                        </AnimatedSection>
                    </div>

                    <div className="mt-20 rounded-xl overflow-hidden">
                        <CtaSection
                            title="Partner with Our Technology"
                            subtitle="Leverage our expertise to accelerate your R&D pipeline or integrate our solutions into your healthcare system."
                            buttonText="Explore R&D Services"
                            buttonLink="/services"
                        />
                    </div>
                </div>
            </div>
            <StickyCta />
        </div>
    );
};

export default TechnologyPage;
