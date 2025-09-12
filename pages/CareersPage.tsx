import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PageContent from '../components/PageContent';
import AnimatedSection from '../components/AnimatedSection';
import InnovationIcon from '../components/icons/InnovationIcon';
import GrowthIcon from '../components/icons/GrowthIcon';
import ImpactIcon from '../components/icons/ImpactIcon';
import TeamIcon from '../components/icons/TeamIcon';
import { jobOpenings } from '../data/jobs';
import BriefcaseIcon from '../components/icons/BriefcaseIcon';
import ChartPieIcon from '../components/icons/ChartPieIcon';
import SparklesIcon from '../components/icons/SparklesIcon';
import HeartIcon from '../components/icons/HeartIcon';

const JobOpening: React.FC<{ title: string; location: string; type: string, department: string }> = ({ title, location, type }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex justify-between items-center ring-1 ring-border-color">
        <div>
            <h3 className="text-xl font-bold text-text-primary">{title}</h3>
            <p className="mt-1 text-text-secondary">{location} &bull; {type}</p>
        </div>
        <Link to="/contact" className="px-5 py-2 text-sm font-medium text-white brand-gradient rounded-full hover:opacity-90 transition-opacity whitespace-nowrap">
            Apply Now
        </Link>
    </div>
);

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="group bg-white p-6 rounded-xl ring-1 ring-border-color transition-all duration-300 hover:ring-brand-secondary/50 hover:shadow-lg hover:-translate-y-1 text-left">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-secondary/10 text-brand-secondary shadow-md mb-4 group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-text-primary">{title}</h3>
        <p className="mt-2 text-text-secondary">{children}</p>
    </div>
);

const PerkCard: React.FC<{ icon: React.ReactNode; title: string; }> = ({ icon, title }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm text-center ring-1 ring-border-color">
        <div className="flex items-center justify-center h-12 w-12 mx-auto rounded-full bg-brand-primary/10 text-brand-primary mb-4">
            {icon}
        </div>
        <h3 className="font-semibold text-text-primary">{title}</h3>
    </div>
);


export default function CareersPage() {
    const [departmentFilter, setDepartmentFilter] = useState('All');
    const [locationFilter, setLocationFilter] = useState('All');

    const departments = useMemo(() => ['All', ...new Set(jobOpenings.map(j => j.department))], []);
    const locations = useMemo(() => ['All', ...new Set(jobOpenings.map(j => j.location))], []);

    const filteredJobs = useMemo(() => {
        return jobOpenings.filter(job => {
            const departmentMatch = departmentFilter === 'All' || job.department === departmentFilter;
            const locationMatch = locationFilter === 'All' || job.location === locationFilter;
            return departmentMatch && locationMatch;
        });
    }, [departmentFilter, locationFilter]);

    return (
        <PageContent
            title="Join Our Mission"
            subtitle="Become part of a passionate, diverse, and high-performing team dedicated to revolutionizing diagnostics. We are always looking for talented individuals to help us drive disruption and catalyze change."
        >
             <AnimatedSection className="bg-brand-light-bg p-10 rounded-xl ring-1 ring-border-color">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-text-primary tracking-tight">Why Join InnovaDx?</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-text-secondary">
                        At InnovaDx, you're not just taking a job; you're joining a mission-driven company at the forefront of medical technology. We are building the future of diagnostics, and we want you to be a part of it.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ValueCard title="Innovate at the Forefront" icon={<InnovationIcon className="w-8 h-8" />}>
                        Work with cutting-edge technology and contribute to breakthrough solutions that have a direct impact on global health challenges.
                    </ValueCard>
                    <ValueCard title="Grow Your Career" icon={<GrowthIcon className="w-8 h-8" />}>
                        We are committed to your professional development, offering continuous learning opportunities, mentorship, and clear paths for advancement.
                    </ValueCard>
                    <ValueCard title="Make a Global Impact" icon={<ImpactIcon className="w-8 h-8" />}>
                        Our products are deployed in over 30 countries, empowering healthcare professionals and improving patient lives on a global scale.
                    </ValueCard>
                    <ValueCard title="A Culture of Collaboration" icon={<TeamIcon className="w-8 h-8" />}>
                        Join a supportive, inclusive, and dynamic environment where diverse perspectives are celebrated and teamwork is the key to our success.
                    </ValueCard>
                </div>
            </AnimatedSection>

            <AnimatedSection className="mt-20">
                 <div className="text-center">
                    <h2 className="text-3xl font-bold text-text-primary tracking-tight">Our Perks & Benefits</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
                        We value our team as our greatest asset. We offer a competitive and comprehensive package to support their professional growth and personal well-being.
                    </p>
                </div>
                 <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <PerkCard title="Professional Development" icon={<BriefcaseIcon className="h-6 w-6"/>} />
                    <PerkCard title="Competitive Compensation & Equity" icon={<ChartPieIcon className="h-6 w-6"/>} />
                    <PerkCard title="Comprehensive Health & Wellness" icon={<HeartIcon className="h-6 w-6"/>} />
                    <PerkCard title="Vibrant & Inclusive Culture" icon={<SparklesIcon className="h-6 w-6"/>} />
                </div>
            </AnimatedSection>


            <div className="mt-20">
                <h2 className="text-3xl font-bold text-text-primary mb-8 text-center tracking-tight">Current Openings</h2>
                
                <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-sm ring-1 ring-border-color mb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="department-filter" className="block text-sm font-medium text-text-primary mb-1">Filter by Department</label>
                            <select id="department-filter" value={departmentFilter} onChange={e => setDepartmentFilter(e.target.value)} className="block w-full bg-white border border-border-color rounded-lg py-2.5 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition">
                                {departments.map(dep => <option key={dep} value={dep}>{dep}</option>)}
                            </select>
                        </div>
                        <div>
                             <label htmlFor="location-filter" className="block text-sm font-medium text-text-primary mb-1">Filter by Location</label>
                             <select id="location-filter" value={locationFilter} onChange={e => setLocationFilter(e.target.value)} className="block w-full bg-white border border-border-color rounded-lg py-2.5 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition">
                                 {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map(job => (
                            <JobOpening key={job.title} {...job} />
                        ))
                    ) : (
                        <div className="text-center py-10 bg-brand-light-bg rounded-xl shadow-sm ring-1 ring-border-color">
                            <h3 className="text-xl font-semibold text-text-primary">No openings match your criteria</h3>
                            <p className="mt-2 text-text-secondary">Please check back later or adjust your filters.</p>
                        </div>
                    )}
                </div>
            </div>
        </PageContent>
    );
};
