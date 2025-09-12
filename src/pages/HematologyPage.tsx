import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import CtaSection from '../components/CtaSection';
import SectionHeader from '../components/SectionHeader';
import PageHero from '../components/PageHero';
import StickyCta from '../components/StickyCta';

const HematologyPage: React.FC = () => {
    return (
        <div className="bg-brand-light-bg">
            <PageHero
                title="Hematology Solutions"
                description="Advanced hematology systems and reagents engineered for the accurate and efficient analysis of complete blood counts (CBC) and cellular differentiation."
                image="https://images.unsplash.com/photo-1581091224003-05e1a314918d?q=80&w=2070&auto=format=fit=crop"
            />
             <div className="py-24 sm:py-32">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                    <AnimatedSection className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="prose prose-lg text-text-secondary max-w-none">
                            <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">Precision and Throughput for Every Lab</h2>
                            <p>Our hematology systems provide reliable, comprehensive, and traceable results for laboratories of all sizes. From compact 3-part differential analyzers for clinics to high-throughput 5-part systems for central labs, we offer solutions that enhance productivity while delivering exceptional quality.</p>
                             <p>Our analyzers utilize a combination of electrical impedance for cell counting and sizing, and laser-based flow cytometry for differential analysis, ensuring accurate results even on abnormal samples.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-border-color">
                           <img
                                src="https://images.unsplash.com/photo-1628868820485-83e6a4546ada?q=80&w=800&auto=format=fit=crop"
                                alt="Modern hematology analyzer in a laboratory setting"
                                className="w-full h-auto object-cover rounded-xl"
                            />
                        </div>
                    </AnimatedSection>

                     <AnimatedSection>
                        <SectionHeader title="Technology at a Glance" description="Choose the system that perfectly matches your laboratory's needs for throughput and clinical utility."/>
                        <div className="mt-8 flow-root">
                          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-border-color">
                                  <thead className="bg-brand-light-bg/80">
                                    <tr>
                                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-text-primary sm:pl-6">Feature</th>
                                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-text-primary">3-Part Differential Analyzer</th>
                                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-text-primary">5-Part Differential Analyzer</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-border-color bg-white">
                                    <tr>
                                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-text-primary sm:pl-6">Parameters</td>
                                      <td className="whitespace-nowrap px-3 py-4 text-sm text-text-secondary">21 parameters + 3 histograms (WBC, RBC, PLT)</td>
                                      <td className="whitespace-nowrap px-3 py-4 text-sm text-text-secondary">25 reportable parameters, 4 research parameters, plus histograms and scattergrams</td>
                                    </tr>
                                    <tr>
                                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-text-primary sm:pl-6">WBC Differential</td>
                                      <td className="whitespace-nowrap px-3 py-4 text-sm text-text-secondary">Lymphocytes, Monocytes, Granulocytes</td>
                                      <td className="whitespace-nowrap px-3 py-4 text-sm text-text-secondary">Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils</td>
                                    </tr>
                                    <tr>
                                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-text-primary sm:pl-6">Throughput</td>
                                      <td className="whitespace-nowrap px-3 py-4 text-sm text-text-secondary">Up to 60 samples/hour</td>
                                      <td className="whitespace-nowrap px-3 py-4 text-sm text-text-secondary">Up to 80 samples/hour</td>
                                    </tr>
                                     <tr>
                                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-text-primary sm:pl-6">Autoloader</td>
                                      <td className="whitespace-nowrap px-3 py-4 text-sm text-text-secondary">Not available</td>
                                      <td className="whitespace-nowrap px-3 py-4 text-sm text-text-secondary">Optional</td>
                                    </tr>
                                    <tr>
                                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-text-primary sm:pl-6">Ideal Use Case</td>
                                      <td className="whitespace-nowrap px-3 py-4 text-sm text-text-secondary">Smaller labs, satellite clinics, physician offices</td>
                                      <td className="whitespace-nowrap px-3 py-4 text-sm text-text-secondary">Mid to high-volume laboratories, hospitals</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                     </AnimatedSection>
                    
                     <AnimatedSection>
                        <SectionHeader title="A Complete, Closed System" />
                        <div className="mt-8 bg-white p-8 rounded-2xl shadow-sm ring-1 ring-border-color md:col-span-2">
                            <h3 className="text-xl font-bold text-brand-primary">System-Specific Reagents, Calibrators, and Controls</h3>
                            <p className="mt-2 text-text-secondary">We provide a full line of dedicated, barcoded reagents and quality control materials for all our analyzers. This closed-system approach guarantees optimal performance, traceability, and compliance, giving you complete confidence in every result.</p>
                        </div>
                    </AnimatedSection>

                     <div className="bg-brand-light-bg/80 py-2 rounded-xl">
                        <CtaSection
                            title="Find the Right System for Your Lab"
                            subtitle="Our specialists can help you choose the hematology solution that best fits your workflow, throughput, and clinical testing needs."
                            buttonText="Speak to a Specialist"
                            buttonLink="/contact"
                        />
                    </div>
                </div>
            </div>
             <StickyCta />
        </div>
    );
};

export default HematologyPage;
