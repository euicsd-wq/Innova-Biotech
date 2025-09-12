
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import StickyCta from '../components/StickyCta';
import SectionHeader from '../components/SectionHeader';
import { rapidTestData, RapidTest } from '../data/rapid-tests';
import TargetIcon from '../components/icons/TargetIcon';
import ClockIcon from '../components/icons/ClockIcon';
import TestTubeIcon from '../components/icons/TestTubeIcon';


const FeaturedProductCard: React.FC<{ test: RapidTest }> = ({ test }) => (
    <Link to={`/products/reagents/${test.slug}`} className="bg-white rounded-2xl shadow-lg ring-1 ring-border-color hover:ring-brand-secondary/70 hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row overflow-hidden group">
        <div className="md:w-2/5 flex-shrink-0 bg-gradient-to-br from-brand-light-bg to-white p-6 flex items-center justify-center">
             <img src={test.image} alt={test.name} className="h-40 object-contain group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-brand-primary group-hover:text-brand-secondary transition-colors">{test.name}</h3>
            <p className="text-sm text-text-secondary mt-1">{test.brand}</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                 <div>
                    <p className="font-semibold text-text-primary">Target</p>
                    <p className="text-text-secondary mt-1">{test.target}</p>
                </div>
                 <div>
                    <p className="font-semibold text-text-primary">Specimen</p>
                    <p className="text-text-secondary mt-1">{test.specimen}</p>
                </div>
                 <div>
                    <p className="font-semibold text-text-primary">Testing Time</p>
                    <p className="text-text-secondary mt-1">{test.testingTime}</p>
                </div>
                 <div>
                    <p className="font-semibold text-text-primary">Formats</p>
                    <p className="text-text-secondary mt-1">{test.formats.join(', ')}</p>
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

const ProductCard: React.FC<{ test: RapidTest }> = ({ test }) => (
    <Link to={`/products/reagents/${test.slug}`} className="bg-white p-6 rounded-xl shadow-md ring-1 ring-border-color flex flex-col hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group border-t-4 border-brand-light-bg hover:border-brand-secondary">
        <h3 className="text-lg font-bold text-text-primary group-hover:text-brand-primary transition-colors flex-grow">{test.name}</h3>
        <div className="mt-4 space-y-3 text-sm border-t border-border-color pt-4">
            <div className="flex items-start">
                <TargetIcon className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-text-secondary"/>
                <span className="text-text-secondary"><strong className="font-semibold text-text-primary">Target:</strong> {test.target}</span>
            </div>
            <div className="flex items-start">
                <TestTubeIcon className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-text-secondary"/>
                <span className="text-text-secondary"><strong className="font-semibold text-text-primary">Specimen:</strong> {test.specimen}</span>
            </div>
            <div className="flex items-start">
                <ClockIcon className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-text-secondary"/>
                <span className="text-text-secondary"><strong className="font-semibold text-text-primary">Time:</strong> {test.testingTime}</span>
            </div>
        </div>
         <div className="mt-auto pt-4 text-right">
            <p className="font-semibold text-brand-secondary text-sm transition-transform duration-300 group-hover:translate-x-1">
                Details &rarr;
            </p>
        </div>
    </Link>
);

const ReagentsPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    
    const categories = useMemo(() => ['All', ...rapidTestData.map(c => c.category)], []);
    const featuredProducts = rapidTestData.flatMap(c => c.tests).filter(t => t.featured);
    const filteredTests = useMemo(() => {
        if (activeFilter === 'All') {
            return rapidTestData;
        }
        return rapidTestData.filter(c => c.category === activeFilter);
    }, [activeFilter]);

    return (
        <div className="bg-brand-light-bg">
            <PageHero
                title="Precision Q Rapid Diagnostics"
                subtitle="High-performance, user-friendly assays delivering rapid and reliable results for confident on-site decision-making."
                image="https://cdn.innovadx.com/images/rapid-diagnostics-hero.jpg"
            />
            <div className="py-24 sm:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                     <AnimatedSection>
                        <SectionHeader 
                            title="The Power of Rapid, On-Site Diagnostics"
                            description="Our Precision Q brand represents the pinnacle of chromatographic immunoassay technology. Designed for speed, accuracy, and ease-of-use, these tests empower healthcare professionals to make critical decisions at the point of care. From emergency rooms to remote clinics, our rapid tests provide reliable results when and where they are needed most, improving patient outcomes and streamlining clinical workflows."
                        />
                    </AnimatedSection>
                    
                    <AnimatedSection>
                        <SectionHeader 
                            title="Featured Products"
                            description="Our flagship rapid tests, trusted by healthcare professionals worldwide for their accuracy and ease of use in critical diagnostic situations."
                        />
                        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {featuredProducts.slice(0, 4).map(test => (
                                <FeaturedProductCard key={test.name} test={test} />
                            ))}
                        </div>
                    </AnimatedSection>
                    
                    <AnimatedSection>
                        <SectionHeader
                            title="Our Rapid Test Portfolio"
                            description="Explore our comprehensive menu of Precision Q rapid tests. Use the filters below to find the assays relevant to your clinical needs."
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
                                           <ProductCard key={test.slug} test={test} />
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

export default ReagentsPage;
