import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import StickyCta from '../components/StickyCta';
import SectionHeader from '../components/SectionHeader';
import { molecularTestData, MolecularTestCategory } from '../data/molecular-tests';
import ReagentsIcon from '../components/icons/ReagentsIcon';
import TargetIcon from '../components/icons/TargetIcon';

const FeaturedProductCard: React.FC<{ test: MolecularTestCategory['tests'][0] }> = ({ test }) => (
    <Link to={`/products/molecular/${test.slug}`} className="bg-white rounded-2xl shadow-lg ring-1 ring-border-color hover:ring-brand-secondary/70 hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row overflow-hidden group">
        <div className="md:w-2/5 flex-shrink-0 bg-gradient-to-br from-brand-light-bg to-white p-6 flex items-center justify-center">
             <img src={test.image} alt={test.name} className="h-40 object-contain group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-brand-primary group-hover:text-brand-secondary transition-colors">{test.name}</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                 <div>
                    <p className="font-semibold text-text-primary">Target</p>
                    <p className="text-text-secondary mt-1">{test.target}</p>
                </div>
                 <div>
                    <p className="font-semibold text-text-primary">Technology</p>
                    <p className="text-text-secondary mt-1">{test.kitType}</p>
                </div>
            </div>
             <div className="mt-4 border-t border-border-color pt-4">
                <p className="font-semibold text-text-primary text-sm">Performance</p>
                <div className="flex justify-between text-sm mt-1">
                    <p className="text-text-secondary">{test.performance.sensitivity}</p>
                </div>
            </div>
            <div className="mt-auto pt-6">
                <div className="font-semibold text-brand-secondary text-sm transition-transform duration-300 group-hover:translate-x-1">
                    View Product Details &rarr;
                </div>
            </div>
        </div>
    </Link>
);

const ProductCard: React.FC<{ test: MolecularTestCategory['tests'][0] }> = ({ test }) => (
    <Link to={`/products/molecular/${test.slug}`} className="bg-white p-6 rounded-xl shadow-md ring-1 ring-border-color flex flex-col hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group border-t-4 border-brand-light-bg hover:border-brand-secondary">
        <h3 className="text-lg font-bold text-text-primary group-hover:text-brand-primary transition-colors flex-grow">{test.name}</h3>
        <div className="mt-4 space-y-3 text-sm border-t border-border-color pt-4">
             <div className="flex items-center">
                <TargetIcon className="w-4 h-4 mr-2 flex-shrink-0 text-text-secondary"/>
                <strong className="font-semibold text-text-primary">Target:</strong>
                <span className="ml-2 text-text-secondary truncate">{test.target}</span>
            </div>
            <div className="flex items-center">
                <ReagentsIcon className="w-4 h-4 mr-2 flex-shrink-0 text-text-secondary"/>
                <strong className="font-semibold text-text-primary">Reactions:</strong>
                <span className="ml-2 text-text-secondary">{test.orderingInfo.map(info => info.testsPerKit).join(' / ')}</span>
            </div>
        </div>
         <div className="mt-auto pt-4 text-right">
            <p className="font-semibold text-brand-secondary text-sm transition-transform duration-300 group-hover:translate-x-1">
                Details &rarr;
            </p>
        </div>
    </Link>
);

const MolecularPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    
    const categories = ['All', ...molecularTestData.map(c => c.category)];
    const featuredProducts = molecularTestData.flatMap(c => c.tests).filter(t => t.featured);
    const filteredTests = useMemo(() => {
        if (activeFilter === 'All') {
            return molecularTestData;
        }
        return molecularTestData.filter(c => c.category === activeFilter);
    }, [activeFilter]);

    return (
        <div className="bg-brand-light-bg">
            <PageHero
                title="Precision Premier Molecular Diagnostics"
                description="High-performance molecular solutions for the sensitive and specific detection of pathogens and genetic markers, providing definitive answers for critical diagnostic challenges."
                image="https://images.unsplash.com/photo-1581091224003-05e1a314918d?q=80&w=2070&auto=format=fit=crop"
            />
            <div className="py-24 sm:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                     <AnimatedSection>
                        <SectionHeader 
                            title="The Gold Standard in Sensitivity and Specificity"
                            description="Precision Premier molecular diagnostics leverage the power of Real-Time PCR to provide definitive answers for critical diagnostic challenges. Offering unparalleled sensitivity and specificity, these assays are the gold standard for detecting and quantifying pathogen and genetic markers. Our comprehensive portfolio supports laboratories in delivering accurate results for confident clinical management."
                        />
                    </AnimatedSection>

                    <AnimatedSection>
                        <SectionHeader 
                            title="Featured Products"
                            description="Our flagship molecular assays, trusted by laboratories for their accuracy, reliability, and streamlined workflow in critical diagnostic applications."
                        />
                        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {featuredProducts.map(test => (
                                <FeaturedProductCard key={test.name} test={test} />
                            ))}
                        </div>
                    </AnimatedSection>
                    
                    <AnimatedSection>
                        <SectionHeader
                            title="Our Molecular Test Portfolio"
                            description="Explore our comprehensive menu of Precision Premier Real-Time PCR tests. Use the filters below to find the assays relevant to your laboratory's needs."
                        />
                        <div className="mt-8 mb-12 sticky top-20 bg-white/80 backdrop-blur-md z-30 py-4 rounded-xl shadow-sm ring-1 ring-border-color">
                            <div className="flex flex-wrap justify-center gap-2 px-4">
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveFilter(category)}
                                        className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                                            activeFilter === category 
                                                ? 'bg-brand-primary text-white shadow' 
                                                : 'text-text-secondary hover:bg-light-gray hover:text-text-primary'
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-12">
                           {filteredTests.map(category => (
                               <div key={category.category}>
                                   <h2 className="text-2xl font-bold text-text-primary mb-6 pb-2 border-b-2 border-border-color">{category.category}</h2>
                                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                       {category.tests.map(test => (
                                           <ProductCard key={test.name} test={test} />
                                       ))}
                                   </div>
                               </div>
                           ))}
                        </div>
                    </AnimatedSection>

                </div>
            </div>
            <StickyCta />
        </div>
    );
};

export default MolecularPage;
