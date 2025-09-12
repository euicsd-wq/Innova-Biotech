
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import ConsumablesIcon from '../components/icons/ConsumablesIcon';
import TestTubeIcon from '../components/icons/TestTubeIcon';
import PlateIcon from '../components/icons/PlateIcon';
import PageHero from '../components/PageHero';
import StickyCta from '../components/StickyCta';
import ReagentBottleIcon from '../components/icons/ReagentBottleIcon';
import LabwareIcon from '../components/icons/LabwareIcon';
import SectionHeader from '../components/SectionHeader';

const ConsumableCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-border-color text-center flex flex-col items-center group hover:ring-brand-secondary/50 transition-all duration-300">
        <div className="flex items-center justify-center h-16 w-16 mx-auto rounded-full bg-brand-primary/10 text-brand-primary shadow-md mb-6 group-hover:bg-brand-primary/20 transition-colors">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-text-primary">{title}</h3>
        <p className="mt-2 text-text-secondary flex-grow">{description}</p>
    </div>
);

export default function ConsumablesPage() {
    return (
        <div className="bg-brand-light-bg">
            <PageHero
                title="Laboratory Consumables"
                description="A comprehensive portfolio of high-quality, reliable consumables designed to ensure precision, prevent contamination, and support the entire diagnostic workflow from sample collection to analysis."
                image="https://cdn.innovadx.com/images/lab-consumables-hero.jpg"
            />
            <div className="py-24 sm:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <AnimatedSection>
                        <SectionHeader 
                            title="The Foundation of Reliable Results"
                            description="Every component in the diagnostic process matters. That's why we offer a curated selection of laboratory consumables, manufactured to the highest quality standards, to ensure the integrity of your samples and the accuracy of your results."
                        />
                    </AnimatedSection>
                    <AnimatedSection as="div" className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerChildren={0.1}>
                        <ConsumableCard
                            title="Pipette Tips & Tubes"
                            description="A wide range of universal and filtered pipette tips, plus durable microcentrifuge, cryogenic, and PCR tubes for secure sample handling."
                            icon={<ConsumablesIcon className="w-8 h-8" />}
                        />
                        <ConsumableCard
                            title="Assay Plates"
                            description="High-quality 96-well and 384-well plates with various surface treatments for ELISA, PCR, and cell culture applications."
                            icon={<PlateIcon className="w-8 h-8" />}
                        />
                         <ConsumableCard
                            title="Buffers & Solutions"
                            description="A selection of commonly used, ready-to-use buffers and solutions, manufactured under strict quality control to ensure consistency and reliability."
                            icon={<ReagentBottleIcon className="w-8 h-8" />}
                        />
                        <ConsumableCard
                            title="Sample Collection"
                            description="Sterile swabs, collection tubes, and transport media designed for optimal sample preservation and integrity from the point of collection."
                            icon={<TestTubeIcon className="w-8 h-8" />}
                        />
                        <ConsumableCard
                            title="General Labware & Plastics"
                            description="Essential laboratory plastics, including petri dishes, flasks, and beakers, made from high-grade materials for research and diagnostic use."
                            icon={<LabwareIcon className="w-8 h-8" />}
                        />
                    </AnimatedSection>
                    <AnimatedSection className="mt-16 text-center py-12 bg-white rounded-lg shadow-sm ring-1 ring-border-color">
                        <h2 className="text-2xl font-semibold text-text-primary">Full Catalogue Available Upon Request</h2>
                        <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
                           We are continuously expanding our portfolio of high-quality laboratory consumables. For specific product inquiries, bulk ordering, or to request a full catalogue, please contact our sales team directly.
                        </p>
                    </AnimatedSection>
                </div>
            </div>
            <StickyCta />
        </div>
    );
};
