
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { reagentsData, PlatformReagent } from '../data/reagents';
import PageHero from '../components/PageHero';
import StickyCta from '../components/StickyCta';
import ProductHotspots from '../components/ProductHotspots';
import TestTubeIcon from '../components/icons/TestTubeIcon';
import ChartBarIcon from '../components/icons/ChartBarIcon';
import TargetIcon from '../components/icons/TargetIcon';
import ReagentsIcon from '../components/icons/ReagentsIcon';
import QualityIcon from '../components/icons/QualityIcon';
import ShieldIcon from '../components/icons/ShieldIcon';
import SectionHeader from '../components/SectionHeader';
import DataSoftwareIcon from '../components/icons/DataSoftwareIcon';
import CarryingCaseIcon from '../components/icons/CarryingCaseIcon';
import ConnectHubIcon from '../components/icons/ConnectHubIcon';
import IncubatorIcon from '../components/icons/IncubatorIcon';


const TabButton: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => (
    <button
        onClick={onClick}
        className={`relative px-4 py-2 text-base font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-secondary ${
            active ? 'text-brand-primary' : 'text-text-secondary hover:text-brand-primary'
        }`}
    >
        {children}
        {active && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-brand-secondary rounded-full"></span>}
    </button>
);

const ReagentCard: React.FC<{ reagent: PlatformReagent }> = ({ reagent }) => {
    const DetailItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value?: string }) => {
        if (!value) return null;
        return (
            <div className="flex items-start">
                <div className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-text-secondary">{icon}</div>
                <div>
                    <strong className="font-semibold text-text-primary text-xs uppercase tracking-wider">{label}</strong>
                    <p className="text-text-secondary whitespace-pre-wrap leading-snug mt-1">{value}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="relative bg-white p-6 rounded-xl shadow-sm ring-1 ring-border-color flex flex-col h-full group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 border-t-4 border-brand-light-bg group-hover:border-brand-secondary">
            {reagent.status === 'Coming Soon' && (
                <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider z-10">
                    Coming Soon
                </div>
            )}
            <h3 className="text-base font-bold text-text-primary group-hover:text-brand-primary transition-colors flex-grow pr-4">{reagent.itemName}</h3>
            <p className="text-xs text-text-secondary font-mono mt-1">{reagent.catalogueNumber}</p>
            <div className="mt-4 space-y-4 text-sm border-t border-border-color pt-4">
                <DetailItem icon={<TestTubeIcon />} label="Sample" value={reagent.sample} />
                <DetailItem icon={<ChartBarIcon />} label="Test Range" value={reagent.measuringRange} />
                <DetailItem icon={<TargetIcon />} label="Cut-Off" value={reagent.cutOff} />
                <DetailItem icon={<QualityIcon />} label="Sensitivity" value={reagent.sensitivity} />
                <DetailItem icon={<ShieldIcon />} label="Specificity" value={reagent.specificity} />
                <DetailItem icon={<ReagentsIcon />} label="Kit Size" value={reagent.kitSize} />
            </div>
        </div>
    );
};

const AddonCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-brand-light-bg p-8 rounded-2xl ring-1 ring-border-color text-center h-full">
        <div className="flex items-center justify-center h-16 w-16 mx-auto rounded-full bg-brand-primary/10 text-brand-primary shadow-md mb-6">{icon}</div>
        <h3 className="text-xl font-bold text-text-primary">{title}</h3>
        <p className="mt-2 text-text-secondary">{description}</p>
    </div>
);

// FIX: Changed component to a default export function to solve lazy loading issue.
export default function PlatformPage() {
    const [activeTab, setActiveTab] = useState<'features' | 'technology' | 'specs'>('features');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = useMemo(() => {
        return ['All', ...new Set(reagentsData.map(r => r.category))];
    }, []);

    const groupedAndFilteredReagents = useMemo(() => {
        const filtered = reagentsData.filter(r => {
            const matchesCategory = selectedCategory === 'All' || r.category === selectedCategory;
            const matchesSearch = searchQuery === '' || 
                r.itemName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                r.catalogueNumber.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        return filtered.reduce((acc, reagent) => {
            const category = reagent.category;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(reagent);
            return acc;
        }, {} as Record<string, PlatformReagent[]>);

    }, [searchQuery, selectedCategory]);
    
    const clearFilters = () => {
        setSearchQuery('');
        setSelectedCategory('All');
    };
    
    const features = [
        "High Accuracy: Powered by Europium-based TRFIA technology with stringent quality control and system checks.",
        "Fast, Quantitative Results: Delivers objective, numerical results in 3-15 minutes, with a reading time under 20 seconds.",
        "User-Friendly Interface: 5-inch color touchscreen with simple, plug-and-play, guided workflows requires minimal training.",
        "Portable & Robust Design: Lightweight (1kg), compact, and equipped with a built-in battery for emergency and ambulance use.",
        "Extensive Test Menu: A single instrument supports a comprehensive and continuously expanding list of assays.",
        "Seamless Connectivity: LIS/HIS compatibility available to ensure seamless data integration.",
        "Onboard Data Management: Stores up to 10,000 patient records with a built-in thermal printer for immediate hard copies.",
        "Stable, Long-Life Reagents: Test cassettes are stored at room temperature (4-30°C) with a 2-year shelf life, simplifying logistics."
    ];

    return (
        <div className="bg-brand-light-bg">
            <PageHero
                title="The DX-1 Platform"
                description="A revolutionary point-of-care analyzer that combines the accuracy of laboratory testing with the speed and convenience of a portable, easy-to-use device. (Model: AFR-901)"
                image="https://cdn.innovadx.com/images/fiatest-pro-hero.jpg"
            />
            
            <section className="py-24 sm:py-32 bg-brand-light-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <ProductHotspots />
                    </AnimatedSection>
                    <AnimatedSection className="mt-20">
                        <div className="space-y-6 max-w-4xl mx-auto">
                            <div className="flex justify-center md:justify-start space-x-4 border-b border-border-color">
                                <TabButton active={activeTab === 'features'} onClick={() => setActiveTab('features')}>Key Features</TabButton>
                                <TabButton active={activeTab === 'technology'} onClick={() => setActiveTab('technology')}>Technology</TabButton>
                                <TabButton active={activeTab === 'specs'} onClick={() => setActiveTab('specs')}>Specifications</TabButton>
                            </div>

                            <div key={activeTab} className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-border-color min-h-[400px] animate-fade-in-up-fast">
                                {activeTab === 'features' && (
                                    <ul className="space-y-4 prose prose-lg">
                                        {features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <svg className="flex-shrink-0 h-6 w-6 text-brand-secondary mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                <span className="text-text-secondary">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                 {activeTab === 'technology' && (
                                    <div className="prose text-text-secondary max-w-none">
                                        <h4>Europium-Based Fluorescence Immunoassay</h4>
                                        <p>The DX-1 Platform utilizes an advanced Fluorescence Immunoassay (FIA) system powered by Europium-based nanoparticle technology. This approach offers significant advantages over conventional methods by ensuring high sensitivity and accuracy.</p>
                                        <ol className="space-y-3">
                                            <li>The sample is applied to the test cassette. Target analytes bind to antibody-coated fluorescent Europium nanoparticles.</li>
                                            <li>These immune complexes migrate across a nitrocellulose membrane to a capture zone containing immobilized antibodies.</li>
                                            <li>The analyzer's UV light source (365nm) excites the Europium nanoparticles. The system then measures the resulting fluorescence emission signal (610nm), ensuring highly sensitive and specific quantification of the analyte. This method provides objective results, removing the ambiguity of visual interpretation.</li>
                                        </ol>
                                    </div>
                                )}
                                {activeTab === 'specs' && (
                                     <div className="flow-root">
                                        <dl className="-my-3 divide-y divide-border-color text-sm">
                                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4"><dt className="font-medium text-text-primary">Principle</dt><dd className="text-text-secondary sm:col-span-2">Fluorescence Immunoassay</dd></div>
                                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4"><dt className="font-medium text-text-primary">Test Formats</dt><dd className="text-text-secondary sm:col-span-2">Cassette</dd></div>
                                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4"><dt className="font-medium text-text-primary">Measurement</dt><dd className="text-text-secondary sm:col-span-2">Quantitative, Qualitative</dd></div>
                                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4"><dt className="font-medium text-text-primary">Read Time</dt><dd className="text-text-secondary sm:col-span-2">&lt; 20 seconds</dd></div>
                                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4"><dt className="font-medium text-text-primary">Screen</dt><dd className="text-text-secondary sm:col-span-2">5-inch Color Page Touch Screen</dd></div>
                                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4"><dt className="font-medium text-text-primary">Data Storage</dt><dd className="text-text-secondary sm:col-span-2">10,000 records</dd></div>
                                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4"><dt className="font-medium text-text-primary">Printer</dt><dd className="text-text-secondary sm:col-span-2">Built-in thermal printer</dd></div>
                                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4"><dt className="font-medium text-text-primary">Dimensions</dt><dd className="text-text-secondary sm:col-span-2">275mm x 105mm x 100mm (L*W*H)</dd></div>
                                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4"><dt className="font-medium text-text-primary">Weight</dt><dd className="text-text-secondary sm:col-span-2">1 kg</dd></div>
                                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4"><dt className="font-medium text-text-primary">Spectrum</dt><dd className="text-text-secondary sm:col-span-2">Excitation: λ=365nm, Reception: λ=610nm</dd></div>
                                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4"><dt className="font-medium text-text-primary">Ports</dt><dd className="text-text-secondary sm:col-span-2">LAN×1, USB×1, Type-C×1, ID Card Slot</dd></div>
                                        </dl>
                                    </div>
                                )}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
            
            <section className="py-24 sm:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <SectionHeader 
                            title="Enhance Your Workflow with Addons & Accessories"
                            description="Maximize the capabilities of your DX-1 Platform with our range of optional accessories designed to improve efficiency, data management, and portability."
                        />
                        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <AddonCard
                                icon={<ConnectHubIcon className="w-8 h-8" />}
                                title="Connect Hub / Power Bank"
                                description="Expand connectivity and ensure uninterrupted operation in the field with this compact, high-capacity portable power bank and USB hub."
                            />
                            <AddonCard
                                icon={<DataSoftwareIcon className="w-8 h-8" />}
                                title="Advanced Data Manager"
                                description="Unlock powerful connectivity with our optional software module, enabling seamless, bidirectional LIS/HIS integration and advanced data analytics."
                            />
                             <AddonCard
                                icon={<IncubatorIcon className="w-8 h-8" />}
                                title="Samples Incubator"
                                description="Ensure optimal reaction conditions for specific assays with our portable, temperature-controlled sample incubator, guaranteeing reliable results."
                            />
                            <AddonCard
                                icon={<CarryingCaseIcon className="w-8 h-8" />}
                                title="Protective Carrying Case"
                                description="Ensure the safety of your analyzer during transport with a rugged, custom-fitted carrying case, perfect for mobile clinics and field testing."
                            />
                        </div>
                    </AnimatedSection>
                </div>
            </section>
            
            <section className="py-24 sm:py-32 bg-brand-light-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-text-primary sm:text-4xl tracking-tight">
                           DX-1 Platform Reagent Menu
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-text-secondary leading-8">
                           Explore the expansive menu of high-quality TRFIA reagent kits compatible with the DX-1 platform, designed for accuracy and ease of use.
                        </p>
                    </div>

                     <div className="bg-white p-6 rounded-2xl shadow-md ring-1 ring-border-color mb-8 sticky top-24 z-20">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="md:col-span-2">
                                 <div className="relative">
                                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search by name or catalogue number..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="block w-full bg-white border border-border-color rounded-lg py-2.5 pl-12 pr-4 text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition"
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-1">
                                 <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="block w-full h-full bg-white border border-border-color rounded-lg py-2.5 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition"
                                >
                                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                </select>
                            </div>
                            <div className="md:col-span-1">
                                <button
                                    onClick={clearFilters}
                                    className="w-full h-full text-sm font-semibold text-text-secondary bg-light-gray hover:bg-border-color rounded-lg transition-colors"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 space-y-12">
                        {Object.keys(groupedAndFilteredReagents).length > 0 ? (
                            Object.entries(groupedAndFilteredReagents).map(([category, reagents]) => (
                                <AnimatedSection key={category}>
                                    <h2 className="text-2xl font-bold text-text-primary mb-6 pb-2 border-b-2 border-border-color">{category}</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                        {reagents.map(reagent => (
                                            <Link key={reagent.catalogueNumber} to={`/products/platform/${reagent.slug}`} className="group block h-full">
                                                <ReagentCard reagent={reagent} />
                                            </Link>
                                        ))}
                                    </div>
                                </AnimatedSection>
                            ))
                        ) : (
                            <div className="text-center py-16 bg-white rounded-xl shadow-sm ring-1 ring-border-color">
                                <h3 className="text-xl font-semibold text-text-primary">No Results Found</h3>
                                <p className="mt-2 text-text-secondary">Try adjusting your search or filter.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <StickyCta />
        </div>
    );
}
