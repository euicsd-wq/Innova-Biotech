
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import ChartBarIcon from '../components/icons/ChartBarIcon';
import CogIcon from '../components/icons/CogIcon';
import HealthIcon from '../components/icons/HealthIcon';
import CtaSection from '../components/CtaSection';
import PlatformIcon from '../components/icons/PlatformIcon';
import DigitalSolutionsIcon from '../components/icons/DigitalSolutionsIcon';
import SectionHeader from '../components/SectionHeader';
import PageHero from '../components/PageHero';
import StickyCta from '../components/StickyCta';

const HowItWorksStep: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-light-bg text-brand-primary ring-8 ring-white">
            {icon}
        </div>
        <h3 className="mt-4 text-lg font-bold text-text-primary">{title}</h3>
        <p className="mt-1 text-sm text-text-secondary">{description}</p>
    </div>
);

const FeatureItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-brand-light-bg p-8 rounded-2xl ring-1 ring-border-color">
        <h3 className="text-2xl font-bold text-brand-primary">{title}</h3>
        <p className="mt-4 text-text-secondary">{children}</p>
    </div>
);


const DigitalSolutionsPage: React.FC = () => {
  return (
    <div className="bg-brand-light-bg text-text-primary">
        <PageHero
            title="Intelligent Diagnostics, Connected."
            subtitle="Our digital solutions transform diagnostic data into a strategic asset, enabling smarter clinical decisions, enhancing operational efficiency, and powering public health initiatives."
            image="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop"
        />
      
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
             <div className="prose prose-lg text-text-secondary max-w-none leading-8 prose-headings:text-text-primary prose-p:text-text-secondary prose-h2:text-3xl prose-h2:font-extrabold prose-h2:tracking-tight">
                <AnimatedSection>
                    <p>
                        In an era of expanding data capabilities and ecosystem integration, the future of healthcare is unequivocally digital. Connected diagnostics are no longer a novelty; they are essential for building resilient, efficient, and proactive healthcare systems.
                    </p>
                     <p className="text-xl font-semibold text-brand-primary border-l-4 border-brand-secondary pl-6 py-2 bg-white rounded-r-lg shadow-sm">
                        At InnovaDx, we architect secure, scalable, and intelligent digital infrastructures that bridge the gap between diagnostic testing and actionable health information.
                    </p>
                    <p>
                        We partner with healthcare providers, public health organizations, and medical device manufacturers to navigate this complexity, combining deep technical expertise with human-centered design to deliver solutions that work in the real world.
                    </p>
                </AnimatedSection>
             </div>
             <AnimatedSection className="relative aspect-square">
                 <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2070&auto=format&fit=crop" alt="Futuristic world map with glowing data connections" className="w-full h-full object-cover rounded-2xl shadow-lg"/>
             </AnimatedSection>
        </div>
      </section>
      
      <section className="bg-white py-20 sm:py-28">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <AnimatedSection className="text-center">
                <SectionHeader 
                    title="From Sample to Insight: Our Connected Workflow"
                    description="Our platform seamlessly connects your diagnostic devices to the cloud, transforming raw data into powerful, structured insights."
                />
             </AnimatedSection>
             <div className="mt-16 relative">
                 <div className="absolute top-8 left-0 w-full h-0.5 bg-border-color transform -translate-y-1/2 hidden md:block"></div>
                 <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                    <HowItWorksStep icon={<PlatformIcon className="w-8 h-8"/>} title="1. Data Capture at POC" description="Test results, QC data, and operator information are captured on our network-enabled point-of-care analyzers." />
                    <HowItWorksStep icon={<DigitalSolutionsIcon className="w-8 h-8"/>} title="2. Secure Cloud Sync" description="Data is anonymized, encrypted (AES-256), and securely transmitted to the HIPAA and GDPR compliant InnovaDx Connect cloud." />
                    <HowItWorksStep icon={<ChartBarIcon className="w-8 h-8"/>} title="3. Actionable Insights" description="Access results, manage devices, track epidemiological trends, and integrate with LIS/HIS from anywhere." />
                 </div>
             </div>
         </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg text-text-secondary max-w-none leading-8 prose-headings:text-text-primary prose-p:text-text-secondary prose-h2:text-3xl prose-h2:font-extrabold prose-h2:tracking-tight">
            <AnimatedSection>
                <h2>Unlock the Strategic Value of Your Diagnostic Data</h2>
                <p>
                    We see data not just as a record of results, but as a strategic asset. By helping you manage and leverage your diagnostic data effectively, we provide unprecedented insight into both clinical and operational processes, empowering you to:
                </p>
                <ul className="space-y-6">
                    <li className="flex items-start"><ChartBarIcon className="flex-shrink-0 h-8 w-8 text-brand-secondary mr-4 mt-1"/><span><strong>Enhance Clinical Decision-Making:</strong> Utilize powerful analytical tools to identify patient trends, monitor treatment efficacy, and support clinical research.</span></li>
                    <li className="flex items-start"><CogIcon className="flex-shrink-0 h-8 w-8 text-brand-secondary mr-4 mt-1"/><span><strong>Optimize Operational Efficiency:</strong> Streamline workflows, automate quality control, manage device fleets remotely, and optimize reagent inventory.</span></li>
                    <li className="flex items-start"><HealthIcon className="flex-shrink-0 h-8 w-8 text-brand-secondary mr-4 mt-1"/><span><strong>Improve Public Health Outcomes:</strong> Enable real-time epidemiological surveillance, detect potential outbreaks earlier, and inform targeted health interventions.</span></li>
                </ul>
            </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Our Software Suite" description="We provide clear, effective digital tools designed to put your data to work, simplifying today’s complexities and preparing your organization for tomorrow's challenges." />
            <AnimatedSection as="div" className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8" staggerChildren={0.2}>
                <FeatureItem title="InnovaDx Connect Platform">
                    Our cloud-based Data Management System provides a secure, centralized, and scalable foundation for unifying and managing your critical healthcare data.
                     <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                        <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Centralized Results & Remote Device Management</li>
                        <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Seamless LIS/HIS Integration Capabilities (HL7, FHIR)</li>
                        <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Advanced Analytics & Customizable Reporting</li>
                    </ul>
                </FeatureItem>
                <FeatureItem title="Lab Surveillance Software">
                    A powerful epidemiological tool for public health organizations and hospital networks to monitor disease trends with geographic and demographic precision.
                     <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                        <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Real-Time Geospatial Disease Mapping</li>
                        <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Automated Outbreak Detection Alerts</li>
                        <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Customizable Dashboards & Data Export</li>
                    </ul>
                </FeatureItem>
            </AnimatedSection>
        </div>
      </section>

      <CtaSection
        title="Ready to build the future of connected healthcare?"
        subtitle="Learn how our digital solutions can be tailored to meet your organization's unique challenges and strategic goals."
        buttonText="Request a Demo"
        buttonLink="/contact"
      />
      <StickyCta />
    </div>
  );
};

export default DigitalSolutionsPage;