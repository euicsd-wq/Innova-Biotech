import React from 'react';
import PageContent from '../components/PageContent';
import Breadcrumbs from '../components/Breadcrumbs';

const breadcrumbs = [{ label: 'Disclaimer', href: '/disclaimer' }];

const DisclaimerPage: React.FC = () => {
    return (
        <div className="bg-brand-light-bg">
            <Breadcrumbs crumbs={breadcrumbs} />
            <PageContent
                title="Disclaimer"
                subtitle="Please read this disclaimer carefully before using our website."
            >
                <div className="prose prose-lg text-text-secondary max-w-none prose-headings:text-text-primary prose-p:text-text-secondary">
                    <p>
                        The information provided by Innova Biotech Ltd ("we," "us," or "our") on this website is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
                    </p>
                    
                    <h2>No Professional Advice</h2>
                    <p>
                        The information contained in or made available through our Site (including but not limited to information contained on message boards, in text files, or in chats) cannot replace or substitute for the services of trained professionals in any field, including, but not limited to, financial, medical, or legal matters. In particular, you should regularly consult a doctor in all matters relating to physical or mental health, particularly concerning any symptoms that may require diagnosis or medical attention.
                    </p>

                    <h2>External Links Disclaimer</h2>
                    <p>
                        The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
                    </p>
                    
                    <p className="text-sm italic mt-8 text-text-secondary/70">
                        This is placeholder text. Please consult with a legal professional to create a comprehensive disclaimer page for your company. Last updated: {new Date().toLocaleDateString()}.
                    </p>
                </div>
            </PageContent>
        </div>
    );
};

export default DisclaimerPage;