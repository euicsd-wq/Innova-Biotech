import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import CtaSection from '../components/CtaSection';
import SectionHeader from '../components/SectionHeader';
import PageHero from '../components/PageHero';
import StickyCta from '../components/StickyCta';

const MicrobiologyPage: React.FC = () => {
    return (
        <div className="bg-brand-light-bg">
            <PageHero
                title="Microbiology Solutions"
                subtitle="A comprehensive portfolio of products for the efficient isolation, identification, and antimicrobial susceptibility testing of clinically significant microorganisms."
                image="https://images.unsplash.com/photo-1579154230191-2357c4343135?q=80&w=2070&auto=format&fit=crop"
            />
            <div className="py-24 sm:py-32">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                    <AnimatedSection className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="prose prose-lg text-text-secondary max-w-none">
                            <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">Supporting the Fight Against Infectious Disease</h2>
                            <p>We provide clinical laboratories with the essential tools needed for accurate and efficient infectious disease diagnostics. In an era of growing antimicrobial resistance, rapid and reliable microbiology is more critical than ever. Our portfolio supports the entire workflow, from specimen collection to the final, actionable result that guides patient therapy.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-border-color">
                           <img
                                src="https://images.unsplash.com/photo-1581093582402-05c54575b638?q=80&w=800&auto=format&fit=crop"
                                alt="Microbiologist working with petri dishes"
                                className="w-full h-auto object-cover rounded-xl"
                            />
                        </div>
                    </AnimatedSection>
                    
                    <AnimatedSection>
                        <SectionHeader title="Our Microbiology Portfolio" />
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-border-color">
                                <h3 className="text-xl font-bold text-brand-primary">Culture Media</h3>
                                <p className="mt-2 text-text-secondary">A wide selection of prepared and dehydrated culture media, including selective, differential, and chromogenic agars for the reliable cultivation of bacteria and fungi.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-border-color">
                                <h3 className="text-xl font-bold text-brand-primary">Identification (ID) Systems</h3>
                                <p className="mt-2 text-text-secondary">Rapid manual and automated systems utilizing biochemical or mass spectrometry technologies for the accurate identification of clinically significant microorganisms.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-border-color">
                                <h3 className="text-xl font-bold text-brand-primary">Susceptibility Testing (AST)</h3>
                                <p className="mt-2 text-text-secondary">Manual and automated solutions for antimicrobial susceptibility testing (AST) to guide appropriate antibiotic therapy and support stewardship programs.</p>
                            </div>
                        </div>
                    </AnimatedSection>
                    
                     <AnimatedSection>
                        <SectionHeader title="Featured Products" />
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-border-color">
                                <h3 className="text-xl font-bold text-brand-primary">Chromogenic Media</h3>
                                <p className="mt-2 text-text-secondary">Our selective chromogenic media allows for the direct, color-based identification of specific pathogens like MRSA, VRE, and CRE from clinical samples, significantly reducing time to result compared to traditional methods.</p>
                            </div>
                             <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-border-color">
                                <h3 className="text-xl font-bold text-brand-primary">Automated ID/AST System</h3>
                                <p className="mt-2 text-text-secondary">Our compact, automated system provides rapid and reliable identification and antimicrobial susceptibility results in as little as 4-6 hours, helping to combat antimicrobial resistance and improve patient outcomes.</p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <div className="rounded-xl overflow-hidden">
                        <CtaSection
                            title="Empowering Your Microbiology Lab"
                            subtitle="Contact our team for a full list of our microbiology products and to learn how our solutions can enhance your laboratory's workflow."
                            buttonText="Request Information"
                            buttonLink="/contact"
                        />
                    </div>
                </div>
            </div>
            <StickyCta />
        </div>
    );
};

export default MicrobiologyPage;