import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { clinicalChemistryData } from '../data/clinical-chemistry';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import CtaSection from '../components/CtaSection';
import StickyCta from '../components/StickyCta';
import TargetIcon from '../components/icons/TargetIcon';
import TestTubeIcon from '../components/icons/TestTubeIcon';
import MethodIcon from '../components/icons/MethodIcon';
import ChartBarIcon from '../components/icons/ChartBarIcon';

const ClinicalChemistryDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const allTests = clinicalChemistryData.flatMap(category => category.tests);
    const test = allTests.find(t => t.slug === slug);

    if (!test) {
        return <Navigate to="/404" replace />;
    }

    const category = clinicalChemistryData.find(cat => cat.tests.some(t => t.slug === slug));

    const breadcrumbs = [
        { label: 'Products', href: '/products' },
        { label: 'Clinical Chemistry', href: '/products/clinical-chemistry' },
        { label: test.name, href: `/products/clinical-chemistry/${test.slug}` },
    ];
    
    const SpecItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
        <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-brand-light-bg rounded-lg text-brand-primary">
                {icon}
            </div>
            <div className="ml-4">
                <p className="font-semibold text-text-primary">{label}</p>
                <p className="text-text-secondary text-sm">{value}</p>
            </div>
        </div>
    );

    return (
        <div className="bg-brand-light-bg">
            <PageHero
                title={test.name}
                subtitle={category?.category || 'Clinical Chemistry'}
                image={test.image}
                breadcrumbs={breadcrumbs}
            />
            <div className="py-24 sm:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                             <AnimatedSection>
                                <div className="prose prose-lg text-text-secondary max-w-none">
                                    <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">Product Overview</h2>
                                    <p>{test.description}</p>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:sticky top-24">
                            <AnimatedSection className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-border-color space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-text-primary mb-4 border-b border-border-color pb-3">Key Specifications</h3>
                                    <div className="space-y-5">
                                        <SpecItem icon={<TargetIcon className="w-6 h-6"/>} label="Analyte" value={test.target} />
                                        <SpecItem icon={<TestTubeIcon className="w-6 h-6"/>} label="Sample Type" value={test.sampleType} />
                                        <SpecItem icon={<MethodIcon className="w-6 h-6"/>} label="Method" value={test.method} />
                                        <SpecItem icon={<ChartBarIcon className="w-6 h-6"/>} label="Linearity" value={test.linearity} />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-text-primary mb-4 border-b border-border-color pb-3">Ordering Information</h3>
                                    <div className="flow-root">
                                        <div className="-mx-4 -my-2 overflow-x-auto">
                                            <div className="inline-block min-w-full py-2 align-middle">
                                                <table className="min-w-full divide-y divide-border-color">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" className="py-2 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-text-secondary sm:pl-0">Format</th>
                                                            <th scope="col" className="px-3 py-2 text-left text-xs font-medium uppercase tracking-wide text-text-secondary">Cat. No.</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-border-color">
                                                        {test.orderingInfo.map(info => (
                                                            <tr key={info.catNo}>
                                                                <td className="whitespace-nowrap py-3 pl-4 pr-3 text-sm font-medium text-text-primary sm:pl-0">{info.format}</td>
                                                                <td className="whitespace-nowrap px-3 py-3 text-sm text-text-secondary">{info.catNo}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </div>
             <div className="rounded-xl overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <CtaSection
                    title="Interested in this Reagent?"
                    subtitle="Contact our sales team for pricing, availability, and application notes for your specific analyzer."
                    buttonText="Request Information"
                    buttonLink="/contact"
                />
            </div>
            <StickyCta />
        </div>
    );
};

export default ClinicalChemistryDetailPage;