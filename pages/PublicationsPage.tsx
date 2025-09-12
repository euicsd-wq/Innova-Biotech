
import React, { useState, useMemo } from 'react';
import PageContent from '../components/PageContent';
import AnimatedSection from '../components/AnimatedSection';

const PublicationCard: React.FC<{ title: string, journal: string, date: string, authors: string, link: string }> = ({ title, journal, date, authors, link }) => (
    <div className="bg-brand-light-bg/60 p-6 rounded-xl flex flex-col ring-1 ring-border-color hover:ring-brand-secondary/50 hover:shadow-lg transition-all duration-300">
        <div className="flex-grow">
            <p className="text-sm text-text-secondary"><span className="font-semibold text-brand-primary">{journal}</span> &bull; {date}</p>
            <h3 className="mt-2 text-xl font-bold text-text-primary">{title}</h3>
            <p className="mt-2 text-sm text-text-secondary italic">{authors}</p>
        </div>
        <div className="mt-4">
            <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block font-semibold text-brand-secondary hover:text-brand-primary text-sm transition-colors">
                Read Publication &rarr;
            </a>
        </div>
    </div>
);


const PublicationsPage: React.FC = () => {
    const [topicFilter, setTopicFilter] = useState('All');
    const [yearFilter, setYearFilter] = useState('All');

    const toSlug = (title: string) => title.toLowerCase().replace(/[\s&]+/g, '-').replace(/[^\w-]+/g, '');
    
    const publications = useMemo(() => [
        { 
            title: "A Novel Dry Fluorescence Immunoassay for Rapid Detection of Cardiac Troponin I", 
            journal: "Journal of Clinical Diagnostics", 
            date: "March 15, 2025", 
            authors: "Reed, E., Chen, M., et al.",
            link: "#",
            topic: "Cardiac",
            year: "2025"
        },
        { 
            title: "Point-of-Care Procalcitonin Testing in Sepsis Management: A Comparative Study", 
            journal: "The Lancet Infectious Diseases", 
            date: "January 22, 2025", 
            authors: "Petrova, L., Singh, A., et al.",
            link: "#",
            topic: "Sepsis",
            year: "2025"
        },
        { 
            title: "Improving Glycemic Control Monitoring with a Handheld HbA1c Analyzer", 
            journal: "Diabetes Care", 
            date: "November 5, 2024", 
            authors: "Chen, M., Petrova, L., et al.",
            link: "#",
            topic: "Diabetes",
            year: "2024"
        },
        { 
            title: "Development and Validation of a High-Throughput Assay Platform for Tumor Marker Screening", 
            journal: "Cancer Research", 
            date: "September 8, 2024", 
            authors: "Reed, E., et al.",
            link: "#",
            topic: "Oncology",
            year: "2024"
        },
    ].map(pub => ({
        ...pub,
        link: `/publications/${toSlug(pub.title)}`
    })), []);

    const topics = useMemo(() => ['All', ...new Set(publications.map(p => p.topic))], [publications]);
    const years = useMemo(() => ['All', ...new Set(publications.map(p => p.year))], [publications]);

    const filteredPublications = useMemo(() => {
        return publications.filter(pub => {
            const topicMatch = topicFilter === 'All' || pub.topic === topicFilter;
            const yearMatch = yearFilter === 'All' || pub.year === yearFilter;
            return topicMatch && yearMatch;
        });
    }, [publications, topicFilter, yearFilter]);


    return (
        <PageContent 
            title="Scientific Publications" 
            subtitle="Explore our contributions to the scientific community. Our research is published in leading peer-reviewed journals.">
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <div className="flex-1">
                    <label htmlFor="topic-filter" className="block text-sm font-medium text-text-primary mb-1">Filter by Topic</label>
                    <select
                        id="topic-filter"
                        value={topicFilter}
                        onChange={(e) => setTopicFilter(e.target.value)}
                        className="block w-full bg-white border border-border-color rounded-lg py-2.5 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition"
                    >
                        {topics.map(topic => <option key={topic} value={topic}>{topic}</option>)}
                    </select>
                </div>
                <div className="flex-1">
                     <label htmlFor="year-filter" className="block text-sm font-medium text-text-primary mb-1">Filter by Year</label>
                    <select
                        id="year-filter"
                        value={yearFilter}
                        onChange={(e) => setYearFilter(e.target.value)}
                        className="block w-full bg-white border border-border-color rounded-lg py-2.5 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition"
                    >
                        {years.map(year => <option key={year} value={year}>{year}</option>)}
                    </select>
                </div>
            </div>

            {filteredPublications.length > 0 ? (
                <AnimatedSection as="div" className="grid gap-8 md:grid-cols-2" staggerChildren={0.1}>
                    {filteredPublications.map(pub => (
                        <PublicationCard key={pub.title} {...pub} />
                    ))}
                </AnimatedSection>
            ) : (
                <div className="text-center py-16 bg-brand-light-bg rounded-xl shadow-sm ring-1 ring-border-color">
                    <h3 className="text-xl font-semibold text-text-primary">No publications match your criteria</h3>
                    <p className="mt-2 text-text-secondary">Please adjust your filters.</p>
                </div>
            )}
        </PageContent>
    );
};

export default PublicationsPage;
