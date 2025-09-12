
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { rapidTestData } from '../data/rapid-tests';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import CtaSection from '../components/CtaSection';
import StickyCta from '../components/StickyCta';
import TargetIcon from '../components/icons/TargetIcon';
import ClockIcon from '../components/icons/ClockIcon';
import ThermometerIcon from '../components/icons/ThermometerIcon';
import TestTubeIcon from '../components/icons/TestTubeIcon';

const ReagentDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const allTests = rapidTestData.flatMap(category => category.tests);
    const test = allTests.find(t => t.slug === slug);

    if (!test) {
        return <Navigate to="/404" replace />;
    }

    const category = rapidTestData.find(cat => cat.tests.some(t => t.slug === slug));

    const breadcrumbs = [
        { label: 'Products', href: '/products' },
        { label: 'Rapid Test Kits', href: '/products/reagents' },
        { label: test.name, href: `/products/reagents/${test.slug}` },
    ];

    const SpecItem: React.FC<{ icon: React.ReactNode; label: string; value?: string | string[] }> = ({ icon, label, value }) => {
        if (!value) return null;
        const displayValue = Array.isArray(value) ? value.join(', ') : value;
        return (
            <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-brand-light-bg rounded-lg text-brand-primary">
                    {icon}
                </div>
                <div className="ml-4">
                    <p className="font-semibold text-text-primary">{label}</p>
                    <p className="text-text-secondary text-sm">{displayValue}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-brand-light-bg">
            <PageHero
                title={test.name}
                subtitle={category?.category || 'Rapid Diagnostics'}
                image={test.image}
                breadcrumbs={breadcrumbs}
            />
            <div className="py-24 sm:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                             <AnimatedSection>
                                <div className="prose prose-lg text-text-secondary max-w-none prose-headings:text-text-primary">
                                    <h2>Product Overview</h2>
                                    <p>{test.description}</p>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection className="mt-12">
                                <h3>Performance Characteristics</h3>
                                <div className="mt-4 bg-white p-6 rounded-2xl shadow-sm ring-1 ring-border-color">
                                    <dl className="space-y-4 text-sm">
                                        {test.performance.reference && (
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <dt className="font-medium text-text-primary">Reference Method:</dt>
                                                <dd className="text-text-secondary md:col-span-2">{test.performance.reference}</dd>
                                            </div>
                                        )}
                                        {test.performance.sensitivity && (
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <dt className="font-medium text-text-primary">Sensitivity:</dt>
                                                <dd className="text-text-secondary md:col-span-2 whitespace-pre-line">{test.performance.sensitivity}</dd>
                                            </div>
                                        )}
                                        {test.performance.specificity && (
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <dt className="font-medium text-text-primary">Specificity:</dt>
                                                <dd className="text-text-secondary md:col-span-2 whitespace-pre-line">{test.performance.specificity}</dd>
                                            </div>
                                        )}
                                        {test.performance.cutOff && (
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <dt className="font-medium text-text-primary">Cut-off:</dt>
                                                <dd className="text-text-secondary md:col-span-2 whitespace-pre-line">{test.performance.cutOff}</dd>
                                            </div>
                                        )}
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
                                        <SpecItem icon={<TestTubeIcon className="w-6 h-6"/>} label="Specimen Type" value={test.specimen} />
                                        <SpecItem icon={<ClockIcon className="w-6 h-6"/>} label="Testing Time" value={test.testingTime} />
                                        <SpecItem icon={<ThermometerIcon className="w-6 h-6"/>} label="Storage Condition" value={test.storage} />
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
                                                            <th scope="col" className="py-2 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-text-secondary sm:pl-0">Format / Pack Size</th>
                                                            <th scope="col" className="px-3 py-2 text-left text-xs font-medium uppercase tracking-wide text-text-secondary">Cat. No.</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-border-color">
                                                        {test.orderingInfo.map(info => (
                                                            <tr key={info.catNo}>
                                                                <td className="whitespace-nowrap py-3 pl-4 pr-3 text-sm font-medium text-text-primary sm:pl-0">{`${info.format} / ${info.packSize}`}</td>
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
                    title="Interested in this Product?"
                    subtitle="Contact our sales team for pricing, availability, and to request samples for evaluation."
                    buttonText="Request a Quote"
                    buttonLink="/contact"
                />
            </div>
            <StickyCta />
        </div>
    );
};

export default ReagentDetailPage;
