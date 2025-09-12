import React from 'react';
import PageContent from '../components/PageContent';
import Breadcrumbs from '../components/Breadcrumbs';

const breadcrumbs = [{ label: 'Legal Information', href: '/legal' }];

const LegalPage: React.FC = () => {
    return (
        <div className="bg-brand-light-bg">
            <Breadcrumbs crumbs={breadcrumbs} />
            <PageContent
                title="Legal Information"
                subtitle="Important legal notices and terms of service governing the use of this website."
            >
                <div className="prose prose-lg text-text-secondary max-w-none prose-headings:text-text-primary prose-p:text-text-secondary">
                    <h2>Terms of Service</h2>
                    <p>
                        Welcome to the Innova Biotech Ltd ("InnovaDx") website. By accessing or using this website, you agree to comply with and be bound by the following terms and conditions of use. Please review these terms carefully. If you do not agree to these terms, you should not use this site.
                    </p>
                    
                    <h3>1. Copyright</h3>
                    <p>
                        The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, or publication by you of any such matters or any part of the Site is strictly prohibited.
                    </p>

                    <h3>2. Use of Site</h3>
                    <p>
                        We grant you a limited, non-exclusive license to use the Site for your personal, non-commercial use. You agree not to use the Site for any unlawful purpose or in any way that might harm, damage, or disparage any other party.
                    </p>

                    <h3>3. Disclaimer of Warranties</h3>
                    <p>
                        The information on this site is provided on an "as is," "as available" basis. You agree that use of this site is at your sole risk. InnovaDx disclaims all warranties of any kind, including but not to any express warranties, statutory warranties, and any implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                    </p>
                    
                    <p className="text-sm italic mt-8 text-text-secondary/70">
                        This is placeholder text. Please consult with a legal professional to create a comprehensive legal information page for your company. Last updated: {new Date().toLocaleDateString()}.
                    </p>
                </div>
            </PageContent>
        </div>
    );
};

export default LegalPage;