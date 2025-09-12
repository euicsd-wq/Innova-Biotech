import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import QualityIcon from '../components/icons/QualityIcon';
import InnovationIcon from '../components/icons/InnovationIcon';
import GlobalSupportIcon from '../components/icons/GlobalSupportIcon';
import PlatformIcon from '../components/icons/PlatformIcon';
import ReagentsIcon from '../components/icons/ReagentsIcon';
import DnaIcon from '../components/icons/DnaIcon';
import TestTubeIcon from '../components/icons/TestTubeIcon';
import MicroscopeIcon from '../components/icons/MicroscopeIcon';
import ConsumablesIcon from '../components/icons/ConsumablesIcon';
import DigitalSolutionsIcon from '../components/icons/DigitalSolutionsIcon';
import InstrumentIcon from '../components/icons/InstrumentIcon';
import ArrowIcon from '../components/icons/ArrowIcon';

const ProductCard: React.FC<{ title: string; description: string; link: string; icon: React.ReactNode; }> = ({ title, description, link, icon }) => (
    <Link to={link} className="bg-white p-8 rounded-2xl flex flex-col ring-1 ring-border-color shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group">
        <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-brand-secondary/10 text-brand-secondary shadow-sm mb-6 group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-text-primary group-hover:text-brand-primary transition-colors">{title}</h3>
        <p className="mt-2 text-text-secondary flex-grow">{description}</p>
        <div className="mt-6 font-semibold text-brand-secondary flex items-center gap-1 transition-transform duration-300 group-hover:translate-x-1 self-start">
            Learn More
            <ArrowIcon direction="right" className="w-4 h-4" />
        </div>
    </Link>
);

const ValuePropCard: React.FC<{ title: string; description: string; icon: React.ReactNode; }> = ({ title, description, icon }) => (
     <div className="text-center">
        <div className="flex items-center justify-center h-16 w-16 mx-auto rounded-full bg-brand-primary/10 text-brand-primary shadow-md mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-text-primary">{title}</h3>
        <p className="mt-2 text-text-secondary">{description}</p>
    </div>
);


const ProductsPage: React.FC = () => {
    return (
        <div className="bg-brand-light-bg">
            <PageHero
                title="Innovative Diagnostic Solutions"
                description="Our comprehensive portfolio is engineered to meet the evolving needs of modern healthcare—from rapid, decentralized testing at the point of care to high-throughput, automated solutions for the central laboratory."
                image="https://cdn.innovadx.com/images/products-hero-background.jpg"
            />
            <div className="py-24 sm:py-32">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                    <AnimatedSection>
                        <SectionHeader title="Point of Care" description="Delivering rapid, reliable, lab-accurate results at the first point of contact to accelerate the path to diagnosis and treatment, enabling clinicians to make critical decisions with confidence when and where it matters most." />
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ProductCard 
                                title="DX-1 Platform"
                                description="The core of our POC ecosystem, this portable, quantitative immunoassay analyzer offers a broad and expanding menu of tests with an intuitive, guided workflow."
                                link="/products/platform"
                                icon={<PlatformIcon className="w-8 h-8"/>}
                            />
                             <ProductCard 
                                title="Rapid Diagnostics Test Kits"
                                description="A portfolio of high-quality lateral flow and other rapid assays for infectious diseases, cardiac markers, drugs of abuse, and more."
                                link="/products/reagents"
                                icon={<ReagentsIcon className="w-8 h-8"/>}
                            />
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <SectionHeader title="In-Vitro Diagnostics (IVD)" description="A complete range of high-performance solutions designed to enhance the efficiency, accuracy, and throughput of central laboratory testing across multiple disciplines."/>
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                           <ProductCard title="Molecular Diagnostics" description="High-performance qPCR assays and systems for the highly sensitive and specific detection of pathogen and genetic markers." link="/products/molecular" icon={<DnaIcon className="w-8 h-8"/>} />
                           <ProductCard title="ELISA" description="A wide range of kits and reagents for the reliable quantification of diverse biomolecules in research and clinical settings." link="/products/elisa" icon={<TestTubeIcon className="w-8 h-8"/>} />
                           <ProductCard title="Clinical Chemistry" description="A broad menu of stable, liquid-ready reagents for routine and specialized testing on automated analyzers." link="/products/clinical-chemistry" icon={<TestTubeIcon className="w-8 h-8"/>} />
                           <ProductCard title="Hematology" description="Advanced 3-part and 5-part differential analyzers and dedicated reagents for accurate and efficient cellular analysis." link="/products/hematology" icon={<MicroscopeIcon className="w-8 h-8"/>} />
                           <ProductCard title="Microbiology" description="Comprehensive solutions for microorganism identification and antimicrobial susceptibility testing (AST) to guide therapy." link="/products/microbiology" icon={<MicroscopeIcon className="w-8 h-8"/>} />
                           <ProductCard title="Instruments" description="Automated analyzers and systems that form the engine of the modern laboratory, ensuring reliability and throughput." link="/products/instruments" icon={<InstrumentIcon className="w-8 h-8" />} />
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <SectionHeader title="Supporting Solutions" description="The essential components that complete our end-to-end diagnostic ecosystem, ensuring seamless workflows and transforming data into insights."/>
                         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ProductCard 
                                title="Laboratory Consumables"
                                description="A comprehensive portfolio of high-quality consumables designed to ensure precision and reliability in your diagnostic workflows."
                                link="/products/consumables"
                                icon={<ConsumablesIcon className="w-8 h-8"/>}
                            />
                             <ProductCard 
                                title="Digital Solutions"
                                description="Our cloud-based platform connects your devices and data, transforming raw results into powerful, actionable clinical and operational insights."
                                link="/products/digital-solutions"
                                icon={<DigitalSolutionsIcon className="w-8 h-8"/>}
                            />
                        </div>
                    </AnimatedSection>
                    
                     <section className="bg-white py-20 rounded-2xl shadow-sm ring-1 ring-border-color">
                        <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                             <SectionHeader
                                title="Engineered for Clinical Confidence"
                                description="Our entire portfolio is built on a foundation of quality, innovation, and support, ensuring you receive diagnostic solutions you can trust to perform."
                            />
                            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
                                <ValuePropCard 
                                    title="Uncompromising Quality"
                                    description="All products are manufactured in our ISO 13485 certified facilities to the highest standards of excellence and regulatory compliance."
                                    icon={<QualityIcon className="w-8 h-8"/>}
                                />
                                <ValuePropCard 
                                    title="Continuous Innovation"
                                    description="Our dedicated R&D team is constantly expanding our portfolio with cutting-edge technologies to meet emerging clinical needs."
                                    icon={<InnovationIcon className="w-8 h-8"/>}
                                />
                                <ValuePropCard 
                                    title="Dedicated Global Support"
                                    description="Receive expert technical and application support from our global team to ensure you get the most from our products."
                                    icon={<GlobalSupportIcon className="w-8 h-8"/>}
                                />
                            </div>
                        </AnimatedSection>
                    </section>
                 </div>
            </div>
        </div>
    );
};

export default ProductsPage;