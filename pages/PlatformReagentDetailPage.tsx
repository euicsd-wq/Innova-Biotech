
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { reagentsData } from '../data/reagents';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import CtaSection from '../components/CtaSection';
import StickyCta from '../components/StickyCta';
import TestTubeIcon from '../components/icons/TestTubeIcon';
import ClockIcon from '../components/icons/ClockIcon';
import ThermometerIcon from '../components/icons/ThermometerIcon';
import TargetIcon from '../components/icons/TargetIcon';
import ChartBarIcon from '../components/icons/ChartBarIcon';
import QualityIcon from '../components/icons/QualityIcon';

const PlatformReagentDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const reagent = reagentsData.find(r => r.slug === slug);

    if (!reagent) {
        return <Navigate to="/404" replace />;
    }

    const breadcrumbs = [
        { label: 'Products', href: '/products' },
        { label: 'DX-1 Platform', href: '/products/platform' },
        { label: reagent.itemName, href: `/products/platform/${reagent.slug}` },
    ];

    const SpecItem: React.FC<{ icon: React.ReactNode; label: string; value?: string }> = ({ icon, label, value }) => {
        if (!value) return null;
        return (
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
    };

    return (
        <div className="bg-brand-light-bg">
            <PageHero
                title={reagent.itemName}
                subtitle={reagent.category}
                image="https://images.unsplash.com/photo-1581091224003-05e1a314918d?q=80&w=2070&auto=format=fit=crop"
                breadcrumbs={breadcrumbs}
            />
            <div className="py-24 sm:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {reagent.status === 'Coming Soon' && (
                        <AnimatedSection className="mb-12">
                            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md" role="alert">
                                <p className="font-bold">Coming Soon</p>
                                <p>This product is currently in development and will be available shortly. Please contact us for more information on availability.</p>
                            </div>
                        </AnimatedSection>
                    )}
                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                             <AnimatedSection>
                                <div className="prose prose-lg text-text-secondary max-w-none">
                                    <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">Product Overview</h2>
                                    <p>{reagent.description || "Detailed description coming soon."}</p>
                                </div>
                            </AnimatedSection>
                            {(reagent.sensitivity || reagent.specificity) && (
                                <AnimatedSection className="mt-12">
                                    <h3 className="text-2xl font-extrabold text-text-primary tracking-tight">Performance Characteristics</h3>
                                    <div className="mt-4 bg-white p-6 rounded-2xl shadow-sm ring-1 ring-border-color">
                                        <dl className="space-y-4 text-sm">
                                            {reagent.referenceMethod && (
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                    <dt className="font-medium text-text-primary">Reference Method:</dt>
                                                    <dd className="text-text-secondary md:col-span-2">{reagent.referenceMethod}</dd>
                                                </div>
                                            )}
                                            {reagent.sensitivity && (
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                    <dt className="font-medium text-text-primary">Sensitivity:</dt>
                                                    <dd className="text-text-secondary md:col-span-2 whitespace-pre-line">{reagent.sensitivity}</dd>
                                                </div>
                                            )}
                                            {reagent.specificity && (
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                    <dt className="font-medium text-text-primary">Specificity:</dt>
                                                    <dd className="text-text-secondary md:col-span-2 whitespace-pre-line">{reagent.specificity}</dd>
                                                </div>
                                            )}
                                        </dl>
                                    </div>
                                </AnimatedSection>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:sticky top-24">
                            <AnimatedSection className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-border-color space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-text-primary mb-4 border-b border-border-color pb-3">Key Specifications</h3>
                                    <div className="space-y-5">
                                        <SpecItem icon={<TestTubeIcon className="w-6 h-6"/>} label="Sample Type" value={reagent.sample} />
                                        <SpecItem icon={<QualityIcon className="w-6 h-6"/>} label="Specimen Volume" value={reagent.specimenVolume} />
                                        <SpecItem icon={<ClockIcon className="w-6 h-6"/>} label="Testing Time" value={reagent.testingTime} />
                                        <SpecItem icon={<ThermometerIcon className="w-6 h-6"/>} label="Storage Condition" value={reagent.storageCondition} />
                                        <SpecItem icon={<ChartBarIcon className="w-6 h-6"/>} label="Measuring Range" value={reagent.measuringRange} />
                                        <SpecItem icon={<TargetIcon className="w-6 h-6"/>} label="Cut-Off / Reference" value={reagent.cutOff} />
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
                                                            <th scope="col" className="py-2 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-text-secondary sm:pl-0">Kit Size</th>
                                                            <th scope="col" className="px-3 py-2 text-left text-xs font-medium uppercase tracking-wide text-text-secondary">Cat. No.</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-border-color">
                                                        <tr>
                                                            <td className="whitespace-nowrap py-3 pl-4 pr-3 text-sm font-medium text-text-primary sm:pl-0">{reagent.kitSize || 'N/A'}</td>
                                                            <td className="whitespace-nowrap px-3 py-3 text-sm text-text-secondary">{reagent.catalogueNumber}</td>
                                                        </tr>
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
                    subtitle="Contact our sales team for pricing, availability, and to request samples for evaluation."
                    buttonText="Request a Quote"
                    buttonLink="/contact"
                />
            </div>
            <StickyCta />
        </div>
    );
};

export default PlatformReagentDetailPage;
