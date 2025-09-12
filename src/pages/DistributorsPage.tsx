import React, { useState, FormEvent, ChangeEvent } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import QualityIcon from '../components/icons/QualityIcon';
import GlobeIcon from '../components/icons/GlobeIcon';
import GrowthIcon from '../components/icons/GrowthIcon';
import UsersIcon from '../components/icons/UsersIcon';
import SpinnerIcon from '../components/icons/SpinnerIcon';
import StickyCta from '../components/StickyCta';

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="group bg-white p-6 rounded-xl ring-1 ring-border-color transition-all duration-300 hover:ring-brand-secondary/50 hover:shadow-lg hover:-translate-y-1 text-left">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-secondary/10 text-brand-secondary shadow-md mb-4 group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-text-primary">{title}</h3>
        <p className="mt-2 text-text-secondary">{children}</p>
    </div>
);

const DistributorsPage: React.FC = () => {
    const [formData, setFormData] = useState({ companyName: '', contactName: '', email: '', country: '', message: '' });
    const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = (name: string, value: string): string | null => {
        switch (name) {
            case 'companyName':
            case 'contactName':
            case 'country':
            case 'message':
                return value.trim() === '' ? `${name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1')} is required` : null;
            case 'email':
                if (value.trim() === '') return 'Email is required';
                if (!/\S+@\S+\.\S+/.test(value)) return 'Email is not valid';
                return null;
            default:
                return null;
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const formValidationErrors: { [key: string]: string | null } = {};
        Object.keys(formData).forEach(key => {
            const error = validate(key, formData[key as keyof typeof formData]);
            if (error) formValidationErrors[key] = error;
        });

        if (Object.keys(formValidationErrors).length > 0) {
            setErrors(formValidationErrors);
            return;
        }

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };
    
    const inputClasses = (name: keyof typeof formData) => 
        `mt-1 block w-full py-3 px-4 text-base bg-white border ${errors[name] ? 'border-red-500' : 'border-border-color'} text-text-primary rounded-lg shadow-sm focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/50 focus:shadow-[0_0_15px_rgba(0,174,239,0.2)] focus:outline-none transition-all duration-300`;

    return (
        <div className="bg-brand-light-bg">
            <PageHero
                title="Partner with a Leader in Diagnostics"
                description="Join our global network of distributors and bring high-quality, innovative rapid diagnostic solutions to your market."
                image="https://cdn.innovadx.com/images/global-health-partnership.jpg"
            />
            <div className="py-24 sm:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                    <AnimatedSection>
                        <SectionHeader
                            title="Why Become an InnovaDx Distributor?"
                            description="Partnering with InnovaDx means more than just selling products. It's about joining a mission to improve global health access with a portfolio of reliable, certified, and innovative diagnostic tools."
                        />
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <BenefitCard title="Superior Product Portfolio" icon={<QualityIcon className="w-8 h-8" />}>
                                Offer our comprehensive Precision Q line of rapid tests, all manufactured under strict ISO 13485 standards and CE marked for clinical confidence.
                            </BenefitCard>
                            <BenefitCard title="Significant Market Opportunity" icon={<GrowthIcon className="w-8 h-8" />}>
                                Tap into the fast-growing global market for point-of-care diagnostics, driven by the demand for faster, more accessible testing solutions.
                            </BenefitCard>
                             <BenefitCard title="Dedicated Partner Support" icon={<UsersIcon className="w-8 h-8" />}>
                                We provide our partners with comprehensive marketing materials, product training, and dedicated technical support to ensure your success.
                            </BenefitCard>
                             <BenefitCard title="Global Brand Recognition" icon={<GlobeIcon className="w-8 h-8" />}>
                                Align with a trusted brand known for its commitment to quality, innovation, and making a tangible impact on healthcare worldwide.
                            </BenefitCard>
                        </div>
                    </AnimatedSection>

                    <section className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm ring-1 ring-border-color">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <AnimatedSection>
                                <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">Our Ideal Partner Profile</h2>
                                <p className="mt-4 text-text-secondary">We are seeking partners who share our passion for quality and our vision for a healthier future. We are looking for distributors with:</p>
                                <ul className="mt-6 space-y-4 prose prose-lg">
                                    <li className="flex items-start">
                                        <svg className="flex-shrink-0 h-6 w-6 text-brand-secondary mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        <span>An established distribution network in the medical device or diagnostics sector.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="flex-shrink-0 h-6 w-6 text-brand-secondary mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        <span>Strong relationships with laboratories, hospitals, clinics, and public health bodies.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="flex-shrink-0 h-6 w-6 text-brand-secondary mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        <span>A commitment to providing excellent customer service and technical support.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="flex-shrink-0 h-6 w-6 text-brand-secondary mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        <span>Logistical capabilities to handle and store diagnostic products according to specifications.</span>
                                    </li>
                                </ul>
                            </AnimatedSection>
                             <AnimatedSection delay={0.2}>
                                <img src="https://cdn.innovadx.com/images/distribution-network.jpg" alt="Global logistics and distribution network" className="rounded-xl shadow-lg w-full h-full object-cover" />
                            </AnimatedSection>
                        </div>
                    </section>

                    <AnimatedSection>
                        <SectionHeader
                            title="Start the Conversation"
                            description="If you are interested in becoming a distributor for our Precision Q Rapid Diagnostics, please complete the form below. A member of our business development team will review your application and contact you shortly."
                        />
                         <div className="mt-12 max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm ring-1 ring-border-color">
                            {isSubmitted ? (
                                <div className="text-center py-10 px-6">
                                    <svg className="mx-auto h-16 w-16 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <h2 className="mt-4 text-2xl font-bold tracking-tight text-text-primary">Thank you for your interest!</h2>
                                    <p className="mt-2 text-text-secondary">Your inquiry has been received. We will be in touch with you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6" noValidate>
                                    <div>
                                        <label htmlFor="companyName" className="block text-sm font-medium text-text-primary">Company Name</label>
                                        <input type="text" name="companyName" id="companyName" value={formData.companyName} onChange={handleChange} required className={inputClasses('companyName')} />
                                        {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="contactName" className="block text-sm font-medium text-text-primary">Contact Name</label>
                                        <input type="text" name="contactName" id="contactName" value={formData.contactName} onChange={handleChange} required className={inputClasses('contactName')} />
                                        {errors.contactName && <p className="mt-1 text-sm text-red-600">{errors.contactName}</p>}
                                    </div>
                                     <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-text-primary">Email</label>
                                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className={inputClasses('email')} />
                                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="country" className="block text-sm font-medium text-text-primary">Country/Region of Operation</label>
                                        <input type="text" name="country" id="country" value={formData.country} onChange={handleChange} required className={inputClasses('country')} />
                                        {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-text-primary">Brief Company Profile</label>
                                        <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required className={inputClasses('message')}></textarea>
                                        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                                    </div>
                                    <div>
                                        <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white brand-gradient hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-secondary transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                                            {isSubmitting ? <><SpinnerIcon className="w-5 h-5 mr-3" />Submitting...</> : 'Submit Application'}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
            <StickyCta />
        </div>
    );
};

export default DistributorsPage;
