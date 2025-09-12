
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import CtaSection from '../components/CtaSection';
import { applicationData } from '../data/applications';
import PageHero from '../components/PageHero';
import ArrowIcon from '../components/icons/ArrowIcon';

const ApplicationCard: React.FC<{ title: string; description: string; icon: React.ReactNode; link: string; }> = ({ title, description, icon, link }) => (
    <Link to={link} className="bg-white p-8 rounded-2xl shadow-md ring-1 ring-border-color hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
        <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-brand-secondary/10 text-brand-secondary shadow-sm mb-6 group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-text-primary text-left group-hover:text-brand-primary transition-colors">{title}</h3>
        <p className="mt-2 text-text-secondary flex-grow text-left">{description}</p>
        <div className="mt-6 font-semibold text-brand-secondary flex items-center gap-1 transition-transform duration-300 group-hover:translate-x-1 self-start">
            Learn More
            <ArrowIcon direction="right" className="w-4 h-4" />
        </div>
    </Link>
);

const ApplicationsPage: React.FC = () => {
    return (
        <div className="bg-brand-light-bg">
            <PageHero
                title="Solutions by Application"
                description="Our versatile diagnostic platforms provide critical insights across a wide range of medical fields, empowering specialists with the data they need to make confident decisions."
                image="https://cdn.innovadx.com/images/applications-hero.jpg"
            />
            <div className="py-24 sm:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    <AnimatedSection as="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerChildren={0.1}>
                        {applicationData.map(app => (
                            <ApplicationCard
                                key={app.slug}
                                title={app.title}
                                description={app.shortDescription}
                                icon={app.icon}
                                link={`/applications/${app.slug}`}
                            />
                        ))}
                    </AnimatedSection>

                    <div className="rounded-xl overflow-hidden">
                        <CtaSection
                            title="Have a Specific Need?"
                            subtitle="Our team is ready to help you find the right diagnostic solution for your clinical or research application."
                            buttonText="Contact a Specialist"
                            buttonLink="/contact"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationsPage;
