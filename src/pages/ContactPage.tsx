import React, { useState, FormEvent, ChangeEvent } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import SpinnerIcon from '../components/icons/SpinnerIcon';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    institution: string;
    productInterest: string;
    message: string;
}

interface FormErrors {
    [key: string]: string | null;
}

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        institution: '',
        productInterest: 'General Inquiry',
        message: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = (name: string, value: string): string | null => {
        switch (name) {
            case 'firstName':
            case 'lastName':
            case 'message':
                return value.trim() === '' ? `${name.replace(/([A-Z])/g, ' $1')} is required` : null;
            case 'email':
                if (value.trim() === '') return 'Email is required';
                if (!/\S+@\S+\.\S+/.test(value)) return 'Email is not valid';
                return null;
            default:
                return null;
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const error = validate(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const formValidationErrors: FormErrors = {};
        Object.keys(formData).forEach(key => {
            const error = validate(key, formData[key as keyof FormData]);
            if (error) {
                formValidationErrors[key] = error;
            }
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

    const inputClasses = (name: keyof FormData) => 
        `mt-1 block w-full py-3 px-4 text-base bg-white border ${errors[name] ? 'border-red-500' : 'border-border-color'} text-text-primary rounded-lg shadow-sm focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/50 focus:shadow-[0_0_15px_rgba(0,174,239,0.2)] focus:outline-none transition-all duration-300`;

    const resetForm = () => {
        setIsSubmitted(false);
        setFormData({
            firstName: '', lastName: '', email: '', phone: '', institution: '', productInterest: 'General Inquiry', message: ''
        });
        setErrors({});
    };

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                 <AnimatedSection className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-text-primary sm:text-5xl lg:text-6xl tracking-tight">Get in Touch</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary leading-8">
                        We're here to help and answer any question you might have. We look forward to hearing from you.
                    </p>
                </AnimatedSection>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div className="prose-custom prose-lg max-w-none">
                        <h2>How can we help?</h2>
                        <p>
                            InnovaDx offers high-quality customer service. Fill in the form and we will contact you as soon as possible, typically within two business days.
                        </p>
                        <div className="mt-8 space-y-6 not-prose">
                            <div className="bg-brand-light-bg p-6 rounded-xl border border-border-color">
                                <h3 className="font-semibold text-text-primary">Customer Services</h3>
                                <a href="mailto:info@innovadx.co.uk" className="text-brand-primary hover:underline">info@innovadx.co.uk</a>
                            </div>
                            <div className="bg-brand-light-bg p-6 rounded-xl border border-border-color">
                                <h3 className="font-semibold text-text-primary">Technical Services</h3>
                                <a href="mailto:support@innovadx.co.uk" className="text-brand-primary hover:underline">support@innovadx.co.uk</a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-brand-light-bg p-8 rounded-2xl shadow-sm ring-1 ring-border-color">
                        {isSubmitted ? (
                             <div className="text-center py-10 px-6">
                                <svg className="mx-auto h-16 w-16 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h2 className="mt-4 text-2xl font-bold tracking-tight text-text-primary">Thank you!</h2>
                                <p className="mt-2 text-text-secondary">
                                   Your message has been sent successfully. We'll be in touch within two business days.
                                </p>
                                <button onClick={resetForm} className="mt-8 inline-flex items-center justify-center px-7 py-3 border border-transparent text-base font-medium rounded-full text-brand-primary ring-1 ring-inset ring-brand-primary hover:bg-brand-primary hover:text-white transition-all">
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8" noValidate>
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-text-primary">First Name</label>
                                    <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} onBlur={handleBlur} required className={inputClasses('firstName')} aria-invalid={!!errors.firstName} aria-describedby="firstName-error" />
                                    {errors.firstName && <p id="firstName-error" className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-text-primary">Last Name</label>
                                    <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} onBlur={handleBlur} required className={inputClasses('lastName')} aria-invalid={!!errors.lastName} aria-describedby="lastName-error" />
                                    {errors.lastName && <p id="lastName-error" className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-text-primary">Email</label>
                                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} required className={inputClasses('email')} aria-invalid={!!errors.email} aria-describedby="email-error" />
                                    {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="phone" className="block text-sm font-medium text-text-primary">Phone Number <span className="text-text-secondary">(Optional)</span></label>
                                    <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className={inputClasses('phone')} />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="institution" className="block text-sm font-medium text-text-primary">Institution/Hospital</label>
                                    <input type="text" name="institution" id="institution" value={formData.institution} onChange={handleChange} className={inputClasses('institution')} />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="productInterest" className="block text-sm font-medium text-text-primary">Product of Interest</label>
                                    <select id="productInterest" name="productInterest" value={formData.productInterest} onChange={handleChange} className={`${inputClasses('productInterest')}`}>
                                        <option>General Inquiry</option>
                                        <option>DX-1 Platform</option>
                                        <option>Rapid Test Kits</option>
                                        <option>IVD Solutions</option>
                                        <option>Consumables</option>
                                        <option>Digital Solutions</option>
                                        <option>R&D Services</option>
                                    </select>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-medium text-text-primary">Your Message</label>
                                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} onBlur={handleBlur} required className={inputClasses('message')} aria-invalid={!!errors.message} aria-describedby="message-error"></textarea>
                                    {errors.message && <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>}
                                </div>
                                <div className="sm:col-span-2">
                                    <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white brand-gradient hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-secondary transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                                        {isSubmitting ? (
                                            <>
                                                <SpinnerIcon className="w-5 h-5 mr-3" />
                                                Submitting...
                                            </>
                                        ) : 'Submit Inquiry'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
