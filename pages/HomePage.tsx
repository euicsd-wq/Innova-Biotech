
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeader from '../components/SectionHeader';
import { mediaData } from '../data/media';
import CommitmentIcon from '../components/icons/CommitmentIcon';
import FutureIcon from '../components/icons/FutureIcon';
import EquityIcon from '../components/icons/EquityIcon';
import Hero from '../components/Hero';
import ArrowIcon from '../components/icons/ArrowIcon';

const NewsCard: React.FC<{ title: string; date: string; category: string; image: string; link: string; }> = ({ title, date, category, image, link }) => (
    <Link to={link} className="bg-white rounded-xl group ring-1 ring-border-color hover:ring-brand-secondary/50 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
        <div className="h-48 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-5 flex flex-col flex-grow">
            <p className="text-xs text-text-secondary">{date} &bull; <span className="text-brand-primary font-medium uppercase tracking-wider">{category}</span></p>
            <h3 className="mt-2 text-base font-bold text-text-primary group-hover:text-brand-primary transition-colors flex-grow">{title}</h3>
            <div className="mt-4 font-semibold text-brand-secondary text-sm flex items-center gap-1 transition-transform duration-300 group-hover:translate-x-1 self-start">
                Read More
                <ArrowIcon direction="right" className="w-4 h-4" />
            </div>
        </div>
    </Link>
)

const CommitmentCard: React.FC<{ icon: React.ReactNode, title: string, children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="group relative text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl ring-1 ring-border-color hover:ring-brand-secondary/30 transition-all duration-300 transform hover:-translate-y-2">
        <div className="flex items-center justify-center h-16 w-16 mx-auto rounded-full bg-brand-secondary/10 text-brand-secondary shadow-md mb-6 group-hover:bg-brand-secondary group-hover:text-white transition-all duration-300">
            {icon}
        </div>
        <dt className="text-xl leading-6 font-bold text-text-primary">{title}</dt>
        <dd className="mt-2 text-base text-text-secondary">{children}</dd>
    </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="bg-brand-light-bg">
        <Hero />

        <section className="relative py-24 sm:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-brand-light-bg"></div>
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,174,239,0.08)_0,_rgba(0,174,239,0)_50%)]"></div>

            <AnimatedSection className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <SectionHeader
                    title="Our Commitment"
                    description="Our work is driven by a core set of beliefs that guide our innovation and define our impact on global health."
                />
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <CommitmentCard title="Drive Disruption" icon={<CommitmentIcon className="w-8 h-8" />}>
                        We challenge the status quo by engineering technologies that break down the barriers of traditional, centralized testing models.
                    </CommitmentCard>
                     <CommitmentCard title="Build the Future" icon={<FutureIcon className="w-8 h-8" />}>
                        We are relentlessly focused on developing the next generation of diagnostic solutions that are faster, smarter, and more accessible.
                    </CommitmentCard>
                     <CommitmentCard title="Enable Equity" icon={<EquityIcon className="w-8 h-8" />}>
                        Our ultimate goal is to democratize and decentralize diagnostics, ensuring everyone has access to the health insights they deserve.
                    </CommitmentCard>
                </div>
            </AnimatedSection>
        </section>

        <section className="bg-white py-24 sm:py-32">
             <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title="An Integrated Product Ecosystem"
                    description="Our seamlessly integrated products work together to provide a complete, end-to-end diagnostic solution, from sample to insight."
                />
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-brand-light-bg/70 rounded-2xl p-8 shadow-sm ring-1 ring-border-color hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold text-text-primary">Point of Care</h3>
                        <p className="mt-2 text-text-secondary">Rapid, reliable results at the first point of contact.</p>
                        <Link to="/products/platform" className="mt-4 font-semibold text-brand-secondary hover:text-brand-primary transition-colors inline-flex items-center gap-1">View Platform <ArrowIcon direction="right" className="w-4 h-4" /></Link>
                    </div>
                    <div className="bg-brand-light-bg/70 rounded-2xl p-8 shadow-sm ring-1 ring-border-color hover:shadow-lg transition-shadow">
                         <h3 className="text-2xl font-bold text-text-primary">In-Vitro Diagnostics</h3>
                        <p className="mt-2 text-text-secondary">High-performance solutions for central lab testing.</p>
                         <Link to="/products/molecular" className="mt-4 font-semibold text-brand-secondary hover:text-brand-primary transition-colors inline-flex items-center gap-1">View IVD Solutions <ArrowIcon direction="right" className="w-4 h-4" /></Link>
                    </div>
                    <div className="bg-brand-light-bg/70 rounded-2xl p-8 shadow-sm ring-1 ring-border-color hover:shadow-lg transition-shadow">
                         <h3 className="text-2xl font-bold text-text-primary">Digital Solutions</h3>
                        <p className="mt-2 text-text-secondary">Connecting data for powerful, actionable insights.</p>
                         <Link to="/products/digital-solutions" className="mt-4 font-semibold text-brand-secondary hover:text-brand-primary transition-colors inline-flex items-center gap-1">View Connectivity <ArrowIcon direction="right" className="w-4 h-4" /></Link>
                    </div>
                    <div className="bg-brand-light-bg/70 rounded-2xl p-8 shadow-sm ring-1 ring-border-color hover:shadow-lg transition-shadow">
                         <h3 className="text-2xl font-bold text-text-primary">R&D Services</h3>
                        <p className="mt-2 text-text-secondary">Partner with us to accelerate your R&D pipeline.</p>
                         <Link to="/services" className="mt-4 font-semibold text-brand-secondary hover:text-brand-primary transition-colors inline-flex items-center gap-1">Learn More <ArrowIcon direction="right" className="w-4 h-4" /></Link>
                    </div>
                </div>
            </AnimatedSection>
        </section>
        
        <section className="bg-brand-light-bg py-24 sm:py-32">
            <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-12 gap-4">
                    <h2 className="text-3xl font-extrabold text-text-primary">Latest From Our Media Center</h2>
                    <Link to="/media-center" className="text-sm font-semibold text-brand-secondary hover:text-brand-primary transition-colors flex-shrink-0 inline-flex items-center gap-1">Explore All Media <ArrowIcon direction="right" className="w-4 h-4" /></Link>
                 </div>
                 <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {mediaData.filter(article => !article.featured).slice(0, 3).map(article => (
                        <NewsCard 
                            key={article.title}
                            title={article.title}
                            date={article.date}
                            category={article.category}
                            image={article.image}
                            link={article.link}
                        />
                    ))}
                 </div>
            </AnimatedSection>
        </section>
    </div>
  );
};

export default HomePage;
