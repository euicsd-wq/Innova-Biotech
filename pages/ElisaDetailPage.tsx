

import React from 'react';
// FIX: Changed react-router-dom import to a namespace import to fix module resolution issues.
import * as ReactRouterDOM from 'react-router-dom';
import { elisaTestData } from '../data/elisa-kits';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import CtaSection from '../components/CtaSection';
import StickyCta from '../components/StickyCta';
import TargetIcon from '../components/icons/TargetIcon';
import BeakerIcon from '../components/icons/BeakerIcon';
import TestTubeIcon from '../components/icons/TestTubeIcon';
import InnovationIcon from '../components/icons/InnovationIcon';

const ElisaDetailPage: React.FC = () => {
    const { slug } = ReactRouterDOM.useParams<{ slug: string }>();
    const allTests = elisaTestData.flatMap(category => category.tests);
    const test = allTests.find(t => t.slug === slug);

    if (!test) {
        return <ReactRouterDOM.Navigate to="/404" replace />;
    }

    const category = elisaTestData.find(cat => cat.tests.some(t => t.slug === slug));

    const breadcrumbs = [
        { label: 'Products', href: '/products' },
        { label: 'ELISA', href: '/products/elisa' },
        { label: test.name, href: `/products/elisa/${test.slug}` },
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
                subtitle={category?.category || 'ELISA'}
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
                            <AnimatedSection className="mt-12">
                                <h3 className="text-2xl font-extrabold text-text-primary tracking-tight">Performance Characteristics</h3>
                                <div className="mt-4 bg-white p-6 rounded-2xl shadow-sm ring-1 ring-border-color">
                                    <dl className="space-y-4 text-sm">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <dt className="font-medium text-text-primary">Assay Format:</dt>
                                            <dd className="text-text-secondary md:col-span-2">{test.assayFormat}</dd>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <dt className="font-medium text-text-primary">Sensitivity:</dt>
                                            <dd className="text-text-secondary md:col-span-2 whitespace-pre-line">{test.sensitivity}</dd>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <dt className="font-medium text-text-primary">Specificity:</dt>
                                            <dd className="text-text-secondary md:col-span-2 whitespace-pre-line">{test.specificity}</dd>
                                        </div>
                                    </dl>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:sticky top-24">
                            <AnimatedSection className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-border-color space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-text-primary mb-4 border-b border-border-color pb-3">Key Specifications</h3>
                                    <div className="space-y-5">
                                        <SpecItem icon={<TargetIcon className="w-6 h-6"/>} label="Target" value={test.target} />
                                        <SpecItem icon={<TestTubeIcon className="w-6 h-6"/>} label="Sample Type" value={test.sampleType} />
                                        <SpecItem icon={<BeakerIcon className="w-6 h-6"/>} label="Assay Format" value={test.assayFormat} />
                                        <SpecItem icon={<InnovationIcon className="w-6 h-6"/>} label="Sensitivity" value={test.sensitivity} />
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
                                                        {test.orderingInfo.map(info => (
                                                            <tr key={info.catNo}>
                                                                <td className="whitespace-nowrap py-3 pl-4 pr-3 text-sm font-medium text-text-primary sm:pl-0">{info.kitSize}</td>
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
                    title="Interested in this ELISA Kit?"
                    subtitle="Contact our sales team for pricing, availability, and to request samples for evaluation."
                    buttonText="Request a Quote"
                    buttonLink="/contact"
                />
            </div>
            <StickyCta />
        </div>
    );
};

export default ElisaDetailPage;