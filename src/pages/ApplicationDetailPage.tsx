import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { applicationData } from '../data/applications';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import CtaSection from '../components/CtaSection';
import PlatformIcon from '../components/icons/PlatformIcon';
import ReagentsIcon from '../components/icons/ReagentsIcon';
import DnaIcon from '../components/icons/DnaIcon';
import TestTubeIcon from '../components/icons/TestTubeIcon';
import MicroscopeIcon from '../components/icons/MicroscopeIcon';
import BeakerIcon from '../components/icons/BeakerIcon';
import HeartIcon from '../components/icons/HeartIcon';
import VirusIcon from '../components/icons/VirusIcon';
import RibbonIcon from '../components/icons/RibbonIcon';

const productIconMap: { [key: string]: React.ReactNode } = {
    'DX-1 Platform': <PlatformIcon className="w-6 h-6 text-brand-primary" />,
    'Rapid Test Kits': <ReagentsIcon className="w-6 h-6 text-brand-primary" />,
    'hs-cTnI Test Kit': <HeartIcon className="w-6 h-6 text-brand-primary" />,
    'NT-proBNP Test Kit': <HeartIcon className="w-6 h-6 text-brand-primary" />,
    'D-Dimer Test Kit': <HeartIcon className="w-6 h-6 text-brand-primary" />,
    '3-in-1 Combo Test (cTnI/NT-proBNP/D-Dimer)': <HeartIcon className="w-6 h-6 text-brand-primary" />,
    'Molecular Diagnostics': <DnaIcon className="w-6 h-6 text-brand-primary" />,
    'COVID-19 Ag/Influenza A+B Combo Test': <VirusIcon className="w-6 h-6 text-brand-primary" />,
    'Microbiology Solutions': <MicroscopeIcon className="w-6 h-6 text-brand-primary" />,
    'ELISA Kits': <TestTubeIcon className="w-6 h-6 text-brand-primary" />,
    'PSA Test Kit (POC)': <RibbonIcon className="w-6 h-6 text-brand-primary" />,
    'AFP Test Kit (POC)': <RibbonIcon className="w-6 h-6 text-brand-primary" />,
    'CEA Test Kit (POC)': <RibbonIcon className="w-6 h-6 text-brand-primary" />,
    'R&D and Manufacturing Services': <BeakerIcon className="w-6 h-6 text-brand-primary" />,
};

const ApplicationDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const application = applicationData.find(app => app.slug === slug);

    if (!application) {
        return <Navigate to="/404" replace />;
    }

    const breadcrumbs = [
        { label: 'Applications', href: '/applications' },
        { label: application.title, href: `/applications/${slug}` },
    ];

    return (
        <div className="bg-brand-light-bg">
            <PageHero
                title={application.title}
                description={application.shortDescription}
                image={application.image}
                breadcrumbs={breadcrumbs}
            />
            <div className="py-24 sm:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    <AnimatedSection className="grid md:grid-cols-3 gap-12 items-start">
                        <div className="md:col-span-2 prose prose-lg prose-custom max-w-none">
                            <h2>Overview</h2>
                            <p>{application.longDescription}</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-border-color">
                            <h3 className="text-xl font-bold text-text-primary mb-4 border-b border-border-color pb-3">Relevant Products</h3>
                            <div className="space-y-3">
                                {application.relevantProducts.map(product => (
                                    <Link to={product.link} key={product.name} className="flex items-center p-3 rounded-lg bg-brand-light-bg hover:bg-light-gray transition-colors group">
                                        <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-white rounded-full shadow-sm ring-1 ring-border-color group-hover:ring-brand-secondary/50 transition-all">
                                            {productIconMap[product.name] || <PlatformIcon className="w-6 h-6 text-brand-primary" />}
                                        </div>
                                        <div className="ml-4">
                                            <p className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">{product.name}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                    
                     <div className="rounded-xl overflow-hidden">
                        <CtaSection
                            title={`Solutions for ${application.title}`}
                            subtitle="Contact our specialists to learn more about how our products can support your work in this field."
                            buttonText="Contact Us"
                            buttonLink="/contact"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationDetailPage;