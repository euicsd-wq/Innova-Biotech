
import React from 'react';
import { Link } from 'react-router-dom';
import PageContent from '../components/PageContent';
import Breadcrumbs from '../components/Breadcrumbs';
import { applicationData } from '../data/applications';

const breadcrumbs = [{ label: 'Sitemap', href: '/sitemap' }];

const sitemapData = {
    main: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'R&D', path: '/services' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Testing in Action', path: '/testing-in-action' },
        { name: 'Become a Distributor', path: '/distributors' },
    ],
    applications: {
        title: 'Applications',
        basePath: '/applications',
        links: applicationData.map(app => ({ name: app.title, path: `/applications/${app.slug}` })),
    },
    poc: {
        title: 'Point of Care',
        basePath: '/products',
        links: [
            { name: 'DX-1 Platform', path: '/products/platform' },
            { name: 'Rapid Test Kits', path: '/products/reagents' },
        ],
    },
    ivd: {
        title: 'In-Vitro Diagnostics',
        basePath: '/products',
        links: [
            { name: 'Molecular', path: '/products/molecular' },
            { name: 'ELISA', path: '/products/elisa' },
            { name: 'Clinical Chemistry', path: '/products/clinical-chemistry' },
            { name: 'Hematology', path: '/products/hematology' },
            { name: 'Microbiology', path: '/products/microbiology' },
        ]
    },
    supporting: {
        title: 'Supporting Solutions',
        basePath: '/products',
        links: [
            { name: 'Instruments', path: '/products/instruments' },
            { name: 'Consumables', path: '/products/consumables' },
            { name: 'Digital Solutions', path: '/products/digital-solutions' },
        ]
    },
    resources: {
        title: 'Resources',
        basePath: '#',
        links: [
            { name: 'Media Center', path: '/media-center' },
            { name: 'Support Center', path: '/support-center' },
        ],
    },
    legal: {
        title: 'Legal',
        basePath: '#',
        links: [
            { name: 'Legal Information', path: '/legal' },
            { name: 'Disclaimer', path: '/disclaimer' },
            { name: 'Privacy Policy', path: '/privacy-policy' },
        ],
    },
};

const SitemapSection: React.FC<{ title: string, basePath: string, links: {name: string, path: string}[] }> = ({ title, basePath, links }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-border-color">
        <h2 className="text-xl font-bold text-text-primary mb-4 border-b border-border-color pb-3">
             {basePath === '#' || !basePath ? title : <Link to={basePath} className="hover:text-brand-secondary transition-colors">{title}</Link>}
        </h2>
        <ul className="space-y-3">
            {links.map(link => (
                <li key={link.path}>
                    <Link to={link.path} className="text-brand-primary hover:underline">
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);


const SitemapPage: React.FC = () => {
    return (
        <div className="bg-brand-light-bg">
            <Breadcrumbs crumbs={breadcrumbs} />
            <PageContent
                title="Sitemap"
                subtitle="Navigate our website with ease. Here is a complete overview of all available pages, organized by section."
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Main Links */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-border-color lg:col-span-3">
                         <h2 className="text-xl font-bold text-text-primary mb-4 border-b border-border-color pb-3">Main Navigation</h2>
                         <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-3">
                            {sitemapData.main.map(link => (
                                <li key={link.path}>
                                    <Link to={link.path} className="text-brand-primary hover:underline">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Applications */}
                    <SitemapSection {...sitemapData.applications} />

                    {/* Products */}
                    <SitemapSection {...sitemapData.poc} />
                    <SitemapSection {...sitemapData.ivd} />
                    <SitemapSection {...sitemapData.supporting} />
                    {/* Resources & Legal */}
                    <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <SitemapSection {...sitemapData.resources} />
                        <SitemapSection {...sitemapData.legal} />
                    </div>
                </div>
            </PageContent>
        </div>
    );
};

export default SitemapPage;
