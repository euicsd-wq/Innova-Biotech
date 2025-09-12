
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';
import { caseStudies } from '../data/caseStudies';
import StickyCta from '../components/StickyCta';

const CaseStudyCard: React.FC<typeof caseStudies[0]> = ({ title, challenge, solution, outcome, image }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden ring-1 ring-border-color flex flex-col lg:flex-row">
        <div className="lg:w-2/5">
            <img src={image} alt={title} className="w-full h-64 lg:h-full object-cover"/>
        </div>
        <div className="p-8 lg:w-3/5">
            <h3 className="text-2xl font-bold text-brand-primary">{title}</h3>
            <div className="mt-4 space-y-4">
                <div>
                    <h4 className="font-semibold text-text-primary">The Challenge</h4>
                    <p className="mt-1 text-text-secondary">{challenge}</p>
                </div>
                 <div>
                    <h4 className="font-semibold text-text-primary">Our Solution</h4>
                    <p className="mt-1 text-text-secondary">{solution}</p>
                </div>
                 <div>
                    <h4 className="font-semibold text-text-primary">The Outcome</h4>
                    <p className="mt-1 text-text-secondary">{outcome}</p>
                </div>
            </div>
        </div>
    </div>
);

const TestingInActionPage: React.FC = () => {
  return (
    <div className="bg-brand-light-bg">
        <PageHero
            title="Testing in Action"
            description="Explore real-world examples of how our diagnostic solutions are empowering healthcare providers, improving patient outcomes, and transforming laboratories across the globe."
            image="https://cdn.innovadx.com/images/case-studies-hero.jpg"
        />
        <div className="py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-16">
                    {caseStudies.map((study, index) => (
                        <AnimatedSection key={study.title} delay={index * 0.15}>
                            <CaseStudyCard {...study} />
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </div>
        <CtaSection
            title="Have a similar challenge?"
            subtitle="Let's discuss how our technology and expertise can be tailored to meet your unique needs."
            buttonText="Partner With Us"
            buttonLink="/services"
        />
        <StickyCta />
    </div>
  );
};

export default TestingInActionPage;
