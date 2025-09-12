
import React from 'react';
import PageContent from '../components/PageContent';
import Breadcrumbs from '../components/Breadcrumbs';

const breadcrumbs = [{ label: 'Privacy Policy', href: '/privacy-policy' }];

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="bg-brand-light-bg">
            <Breadcrumbs crumbs={breadcrumbs} />
            <PageContent
                title="Privacy Policy"
                subtitle="Your privacy is important to us. It is Innova Biotech Ltd's policy to respect your privacy regarding any information we may collect from you across our website."
            >
                <div className="prose prose-lg text-text-secondary max-w-none prose-headings:text-text-primary prose-p:text-text-secondary">
                    <h2>1. Information We Collect</h2>
                    <p>
                        We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used. This may include information you provide when you fill out a contact form, such as your name, email address, and company.
                    </p>
                    
                    <h2>2. How We Use Your Information</h2>
                    <p>
                       We may use the information we collect in various ways, including to: provide, operate, and maintain our website; improve, personalize, and expand our website; understand and analyze how you use our website; communicate with you, either directly or through one of our partners, for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.
                    </p>

                    <h2>3. Log Files</h2>
                    <p>
                        InnovaDx follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
                    </p>
                    
                     <h2>4. Your Rights</h2>
                    <p>
                        You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
                    </p>

                    <p className="text-sm italic mt-8 text-text-secondary/70">
                        This is a basic placeholder privacy policy. It is crucial to have a policy that is compliant with regulations like GDPR, CCPA, etc., and accurately reflects your data practices. Please consult with a legal professional. Last updated: {new Date().toLocaleDateString()}.
                    </p>
                </div>
            </PageContent>
        </div>
    );
};

export default PrivacyPolicyPage;
