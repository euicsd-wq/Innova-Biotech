
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import StickyCta from '../components/StickyCta';
import SectionHeader from '../components/SectionHeader';
import { instrumentsData, Instrument } from '../data/instruments';
import CtaSection from '../components/CtaSection';

const InstrumentDetailCard: React.FC<{ instrument: Instrument }> = ({ instrument }) => (
    <div className="bg-white rounded-2xl shadow-xl ring-1 ring-border-color overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0 items-center">
            <div className="p-6 bg-gradient-to-br from-brand-light-bg to-gray-50">
                <img src={instrument.image} alt={instrument.name} className="w-full h-auto object-contain rounded-xl" />
            </div>
            <div className="p-8">
                <p className="text-sm font-semibold text-brand-secondary">{instrument.brand}</p>
                <h3 className="text-3xl font-bold text-brand-primary mt-1">{instrument.name}</h3>
                <p className="mt-4 text-text-secondary leading-7">{instrument.description}</p>
                
                <div className="mt-6">
                    <h4 className="font-semibold text-text-primary pb-2 border-b border-border-color">Key Features:</h4>
                    <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                        {instrument.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <svg className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                 <div className="mt-6">
                    <h4 className="font-semibold text-text-primary pb-2 border-b border-border-color">Ordering Information:</h4>
                    <div className="mt-3 flow-root">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle">
                                <table className="min-w-full">
                                    <thead className="bg-brand-light-bg rounded-t-lg">
                                        <tr>
                                            <th scope="col" className="py-2 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-text-secondary sm:pl-3">Model</th>
                                            <th scope="col" className="px-3 py-2 text-left text-xs font-medium uppercase tracking-wide text-text-secondary">Cat. No.</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        {instrument.orderingInfo.map(info => (
                                            <tr key={info.catNo} className="border-t border-border-color">
                                                <td className="whitespace-pre-wrap py-3 pl-4 pr-3 text-sm font-medium text-text-primary sm:pl-3">{info.model}</td>
                                                <td className="whitespace-nowrap px-3 py-3 text-sm text-text-secondary">{info.catNo}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


const InstrumentsPage: React.FC = () => {
    return (
        <div className="bg-brand-light-bg">
            <PageHero
                title="Precision Automate Instruments"
                description="High-performance automation and analysis systems designed to enhance the efficiency, accuracy, and throughput of your laboratory workflows."
                image="https://cdn.innovadx.com/images/instruments-hero.jpg"
            />
             <div className="py-24 sm:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                    <AnimatedSection>
                        <SectionHeader 
                            title="The Engine of Your Laboratory"
                            description="Our Precision Automate instruments are engineered for reliability and performance. By automating complex, manual processes, we help laboratories reduce human error, improve traceability, and free up valuable technician time to focus on what matters most—delivering accurate results."
                        />
                    </AnimatedSection>

                    <div className="space-y-16">
                        {instrumentsData.map(instrument => (
                            <AnimatedSection key={instrument.name}>
                                <InstrumentDetailCard instrument={instrument} />
                            </AnimatedSection>
                        ))}
                    </div>

                     <div className="bg-brand-light-bg/80 py-2 rounded-xl">
                        <CtaSection
                            title="Ready to Automate Your Workflow?"
                            subtitle="Contact our specialists to get a personalized quote and learn how our instruments can be integrated into your laboratory."
                            buttonText="Request a Quote"
                            buttonLink="/contact"
                        />
                    </div>
                </div>
            </div>
            <StickyCta />
        </div>
    );
};

export default InstrumentsPage;
