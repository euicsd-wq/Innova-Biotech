import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PageContent from '../components/PageContent';
import ArrowIcon from '../components/icons/ArrowIcon';

const AccordionItem: React.FC<{ question: string; answer: string; }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-border-color py-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left text-lg font-medium text-text-primary hover:text-brand-primary focus:outline-none transition-colors"
                aria-expanded={isOpen}
            >
                <span className="pr-4">{question}</span>
                <ArrowIcon direction="down" className={`w-5 h-5 transform transition-transform duration-300 text-text-secondary flex-shrink-0 ${isOpen ? 'rotate-180 text-brand-secondary' : ''}`} />
            </button>
            <div
                className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <div className="pt-4 text-text-secondary prose-custom leading-7">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    );
};

const supportData = [
    {
        category: 'Platform Analyzers',
        faqs: [
            { q: 'How do I calibrate the DX-1 analyzer?', a: 'Calibration instructions can be found in the user manual, section 5.2. A calibration cassette is provided with each new instrument. We recommend calibrating every 6 months or after a major software update.' },
            { q: 'What is the warranty period for the analyzers?', a: 'All our analyzers come with a standard 2-year manufacturer warranty covering parts and labor. Extended warranty options are available for purchase.' },
            { q: 'How can I update the instrument firmware?', a: 'Firmware updates can be downloaded from our Digital Solutions portal and installed via a USB drive. Please follow the step-by-step guide available on the portal to ensure a smooth update process.' },
        ]
    },
    {
        category: 'Reagent Kits',
        faqs: [
            { q: 'What is the shelf life of the reagent kits?', a: 'Our reagent kits have a shelf life of 24 months from the date of manufacture when stored under the recommended conditions (4-30°C).' },
            { q: 'How should the reagent kits be stored?', a: 'Kits should be stored in their sealed pouches at room temperature (4-30°C), away from direct sunlight and humidity. Do not freeze the kits.' },
        ]
    },
    {
        category: 'Digital Solutions',
        faqs: [
            { q: 'How do I connect my analyzer to the cloud?', a: 'You can connect your analyzer using either a Wi-Fi or a LAN connection. The setup wizard on the device will guide you through the process. Detailed instructions are available in the Digital Solutions user guide.' },
            { q: 'I forgot my password for the online portal. How can I reset it?', a: 'On the login page of our Digital Solutions portal, click the "Forgot Password" link. You will be prompted to enter your registered email address to receive a password reset link.' },
        ]
    }
];

const SupportCenterPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = useMemo(() => {
        if (!searchTerm) {
            return supportData;
        }

        const lowercasedQuery = searchTerm.toLowerCase();
        
        return supportData
            .map(category => {
                const filteredFaqs = category.faqs.filter(faq => 
                    faq.q.toLowerCase().includes(lowercasedQuery) || 
                    faq.a.toLowerCase().includes(lowercasedQuery)
                );

                if (filteredFaqs.length > 0) {
                    return { ...category, faqs: filteredFaqs };
                }
                return null;
            })
            .filter(Boolean) as typeof supportData;

    }, [searchTerm]);

    return (
        <PageContent 
            title="Support Center"
            subtitle="Your resource for help, documentation, and frequently asked questions. Find answers quickly or get in touch with our expert support team."
        >
            <div className="max-w-4xl mx-auto">
                <div className="relative mb-16">
                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search for answers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="block w-full bg-white border border-border-color rounded-full py-4 pl-12 pr-4 text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition text-lg shadow-sm"
                    />
                </div>

                <div className="space-y-12">
                    {filteredData.length > 0 ? (
                        filteredData.map(category => (
                            <div key={category.category}>
                                <h2 className="text-2xl font-bold text-text-primary mb-4 pb-2 border-b-2 border-border-color">{category.category}</h2>
                                {category.faqs.map(faq => (
                                    <AccordionItem key={faq.q} question={faq.q} answer={faq.a} />
                                ))}
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-10 bg-brand-light-bg rounded-xl shadow-sm ring-1 ring-border-color">
                            <h3 className="text-xl font-semibold text-text-primary">No results found for "{searchTerm}"</h3>
                            <p className="mt-2 text-text-secondary">Please try a different search term or contact our support team directly.</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-20 text-center bg-brand-light-bg p-10 rounded-2xl max-w-4xl mx-auto ring-1 ring-border-color">
                <h2 className="text-2xl font-bold text-text-primary">Still need help?</h2>
                <p className="mt-2 text-text-secondary max-w-xl mx-auto">
                    If you can't find the answer you're looking for, our dedicated support team is ready to assist you.
                </p>
                <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center justify-center px-7 py-3 border border-transparent text-base font-medium rounded-full text-white brand-gradient hover:shadow-lg hover:opacity-90 transition-all transform hover:scale-105"
                >
                    Contact Support
                </Link>
            </div>
        </PageContent>
    );
};

export default SupportCenterPage;