
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Counter from '../components/Counter';
import CtaSection from '../components/CtaSection';
import SectionHeader from '../components/SectionHeader';
import QualityIcon from '../components/icons/QualityIcon';
import GlobeIcon from '../components/icons/GlobeIcon';
import FlaskIcon from '../components/icons/FlaskIcon';
import PlatformIcon from '../components/icons/PlatformIcon';

const LeadershipCard: React.FC<{ name: string, title: string, image: string, bio: string }> = ({ name, title, image, bio }) => (
    <div className="text-center group">
        <div className="relative w-48 h-48 mx-auto">
             <img className="rounded-full w-full h-full object-cover shadow-lg" src={image} alt={name} />
             <div className="absolute inset-0 rounded-full ring-4 ring-brand-secondary/20 ring-offset-4 ring-offset-brand-light-bg group-hover:ring-brand-secondary/50 transition-all duration-300"></div>
        </div>
        <h3 className="mt-6 text-xl font-bold text-text-primary">{name}</h3>
        <p className="text-brand-secondary font-medium">{title}</p>
        <p className="mt-2 text-sm text-text-secondary max-w-xs mx-auto">{bio}</p>
    </div>
);

const TimelineItem: React.FC<{ year: string, title: string, side: 'left' | 'right', icon: React.ReactNode, children: React.ReactNode }> = ({ year, title, side, icon, children }) => (
     <div className={`mb-8 flex justify-between items-center w-full ${side === 'left' ? 'flex-row-reverse' : ''}`}>
        <div className="order-1 w-5/12"></div>
        <div className="z-20 flex flex-col items-center order-1 bg-brand-primary shadow-xl w-20 h-20 rounded-full">
            <div className="text-white mt-3 text-brand-secondary">{icon}</div>
            <h1 className="mx-auto font-semibold text-sm text-white">{year}</h1>
        </div>
        <AnimatedSection className={`order-1 w-5/12 ${side === 'left' ? 'text-right' : 'text-left'}`}>
            <div className="bg-white rounded-lg shadow-xl px-6 py-4">
                <h3 className="font-bold text-lg text-brand-primary">{title}</h3>
                <p className="text-sm leading-snug tracking-wide text-text-secondary opacity-90">{children}</p>
            </div>
        </AnimatedSection>
    </div>
);

const leadershipTeam = [
    {
        name: "Dr. Evelyn Reed",
        title: "Chief Executive Officer",
        image: "https://cdn.innovadx.com/team/evelyn-reed.jpg",
        bio: "With over 20 years in biotech leadership, Dr. Reed drives our strategic vision to democratize global health through disruptive diagnostic technologies.",
    },
    {
        name: "Dr. Marcus Chen",
        title: "Chief Technology Officer",
        image: "https://cdn.innovadx.com/team/marcus-chen.jpg",
        bio: "A pioneer in microfluidics and biosensor engineering, Dr. Chen leads the multidisciplinary teams that bring our visionary platforms to life.",
    },
    {
        name: "Dr. Lena Petrova",
        title: "Chief Scientific Officer",
        image: "https://cdn.innovadx.com/team/lena-petrova.jpg",
        bio: "Dr. Petrova oversees all research and immunoassay development, ensuring our scientific portfolio remains at the cutting edge of diagnostic innovation.",
    }
];

const AboutPage: React.FC = () => {
    return (
        <div className="bg-brand-light-bg">
            <div className="relative bg-brand-primary text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        className="w-full h-full object-cover opacity-10 animate-background-pan"
                        src="https://cdn.innovadx.com/images/abstract-biotech-background-2.jpg"
                        alt="Abstract biotechnology background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/70 to-transparent" />
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <h1 className="text-base font-semibold text-brand-secondary uppercase tracking-wider">About InnovaDx</h1>
                        <p className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                            Innovating to Democratize and Decentralize Testing
                        </p>
                        <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                            We are a team of scientists, engineers, and healthcare visionaries united by a single, powerful mission: to make a positive impact on global health through disruptive diagnostic solutions.
                        </p>
                    </AnimatedSection>
                </div>
            </div>

            <section className="bg-white py-24 sm:py-32">
                <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                         <div className="rounded-2xl overflow-hidden shadow-lg aspect-w-4 aspect-h-3">
                            <img src="https://cdn.innovadx.com/images/diverse-team-collaboration.jpg" alt="Diverse team of scientists collaborating in a modern laboratory" className="w-full h-full object-cover"/>
                        </div>
                        <div className="prose-custom prose-lg max-w-none">
                            <h2>Our Mission</h2>
                             <p>
                                Innova Biotech Ltd is a company specializing in the development, manufacture, and marketing of clinical diagnostic products. Our mission is to engineer powerful, accessible technologies that bring critical health insights to every point of care.
                            </p>
                            <blockquote className="text-xl font-semibold text-brand-primary border-l-4 border-brand-secondary pl-6 py-2 bg-brand-light-bg rounded-r-lg shadow-sm">
                                Together, we will Drive Disruption, Catalyze Change & Enable Equity in global healthcare.
                            </blockquote>
                        </div>
                    </div>
                </AnimatedSection>
            </section>
            
            <section className="bg-brand-light-bg py-24 sm:py-32">
                <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <SectionHeader title="Our Impact in Numbers" description="Our technology is making a tangible difference in global health by providing accessible, reliable diagnostic tools where they are needed most." />
                </AnimatedSection>
                <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Counter target={50} text="Global R&D Partners" suffix="+" />
                    <Counter target={1000000} text="Tests Performed Annually" suffix="+" />
                    <Counter target={30} text="Countries with Active Deployments" suffix="+" />
                </div>
            </section>
            
            <section className="bg-brand-dark-bg py-24 sm:py-32">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center">
                        <SectionHeader title="A Journey of Innovation" description="Tracing our path from a visionary idea to a global leader in point-of-care diagnostics." />
                    </AnimatedSection>
                    <div className="relative wrap overflow-hidden p-10 h-full mt-10">
                        <div className="absolute border-opacity-20 border-gray-700 h-full border" style={{left: '50%'}}></div>
                        <TimelineItem year="2018" title="InnovaDx Founded" side="left" icon={<FlaskIcon className="w-6 h-6" />}>
                            A team of visionary scientists and engineers founds InnovaDx with a shared mission to make high-performance diagnostics accessible to everyone, everywhere.
                        </TimelineItem>
                         <TimelineItem year="2020" title="DX-1 Prototype Unveiled" side="right" icon={<PlatformIcon className="w-6 h-6" />}>
                            After two years of intensive R&D, we unveil the first functional prototype of our handheld TRFIA analyzer, the DX-1 platform, demonstrating its potential in early trials.
                        </TimelineItem>
                         <TimelineItem year="2022" title="Regulatory Approval" side="left" icon={<QualityIcon className="w-6 h-6" />}>
                            We achieve a major milestone by receiving the CE mark and ISO 13485 certification, officially launching our platform and initial cardiac marker assays in key European markets.
                        </TimelineItem>
                        <TimelineItem year="2024" title="Global Expansion" side="right" icon={<GlobeIcon className="w-6 h-6" />}>
                            Our distribution network expands to over 30 countries, and we launch the InnovaDx Connect cloud platform, ushering in a new era of connected diagnostics.
                        </TimelineItem>
                    </div>
                </div>
            </section>
            
             <section className="bg-brand-light-bg py-24 sm:py-32">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Our Commitment to Quality" description="Quality is at the core of everything we do. We are dedicated to delivering diagnostic solutions that are not only innovative but also consistently reliable and compliant with the highest international standards." />
                     <AnimatedSection as="div" className="mt-16 grid md:grid-cols-2 gap-12 items-center">
                        <div className="rounded-2xl overflow-hidden shadow-lg aspect-w-4 aspect-h-3">
                            <img src="https://cdn.innovadx.com/images/quality-control-inspection.jpg" alt="Quality control inspection" className="w-full h-full object-cover"/>
                        </div>
                        <div className="prose-custom prose-lg max-w-none">
                            <ul className="space-y-4">
                                <li className="flex items-start"><QualityIcon className="flex-shrink-0 h-8 w-8 text-brand-secondary mr-4 mt-1"/><span><strong>ISO 13485 Certified:</strong> Our quality management system meets the rigorous requirements for medical device manufacturing.</span></li>
                                <li className="flex items-start"><QualityIcon className="flex-shrink-0 h-8 w-8 text-brand-secondary mr-4 mt-1"/><span><strong>CE Marked Products:</strong> Our products conform with the health, safety, and environmental protection standards for products sold within the European Economic Area.</span></li>
                                <li className="flex items-start"><QualityIcon className="flex-shrink-0 h-8 w-8 text-brand-secondary mr-4 mt-1"/><span><strong>Rigorous QC:</strong> Every batch of reagents and every instrument undergoes extensive quality control testing to ensure performance and reliability.</span></li>
                            </ul>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

             <section className="bg-white py-24 sm:py-32">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Meet Our Leadership" description="A team of visionary scientists, engineers, and business leaders dedicated to our mission." />
                    <AnimatedSection as="div" className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12" staggerChildren={0.15}>
                        {leadershipTeam.map(leader => (
                            <LeadershipCard key={leader.name} {...leader} />
                        ))}
                    </AnimatedSection>
                </div>
            </section>

            <CtaSection
                title="We’re on a mission to impact millions of lives."
                subtitle="Join us and help build the future of diagnostics."
                buttonText="Explore Careers"
                buttonLink="/careers"
            />
        </div>
    );
};

export default AboutPage;
