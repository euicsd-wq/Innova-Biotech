
import { reagentsData } from './reagents';
import { rapidTestData } from './rapid-tests';
import { molecularTestData } from './molecular-tests.ts';
import { elisaTestData } from './elisa-kits';
import { clinicalChemistryData } from './clinical-chemistry';
import { instrumentsData } from './instruments';
import { applicationData } from './applications';
import { mediaData } from './media';
import { caseStudies } from './caseStudies';

export interface SearchResult {
    type: 'Product' | 'Application' | 'News' | 'Case Study' | 'Page';
    name: string;
    category: string;
    description: string;
    link: string;
}

const allProducts: SearchResult[] = [
    // Platform Reagents
    ...reagentsData.map(r => ({
        type: 'Product' as const,
        name: r.itemName,
        category: 'DX-1 Platform Reagent',
        description: `Category: ${r.category}. Sample: ${r.sample || 'N/A'}.`,
        link: `/products/platform/${r.slug}`
    })),
    // Rapid Tests
    ...rapidTestData.flatMap(cat => cat.tests.map(t => ({
        type: 'Product' as const,
        name: t.name,
        category: 'Rapid Diagnostics',
        description: `Category: ${cat.category}. Target: ${t.target}.`,
        link: `/products/reagents/${t.slug}`
    }))),
    // Molecular Tests
    ...molecularTestData.flatMap(cat => cat.tests.map(t => ({
        type: 'Product' as const,
        name: t.name,
        category: 'Molecular Diagnostics',
        description: `Category: ${cat.category}. Target: ${t.target}.`,
        link: `/products/molecular/${t.slug}`
    }))),
    // ELISA Kits
    ...elisaTestData.flatMap(cat => cat.tests.map(t => ({
        type: 'Product' as const,
        name: t.name,
        category: 'ELISA',
        description: `Category: ${cat.category}. Target: ${t.target}.`,
        link: `/products/elisa/${t.slug}`
    }))),
    // Clinical Chemistry
    ...clinicalChemistryData.flatMap(cat => cat.tests.map(t => ({
        type: 'Product' as const,
        name: t.name,
        category: 'Clinical Chemistry',
        description: `Category: ${cat.category}. Target: ${t.target}.`,
        link: `/products/clinical-chemistry/${t.slug}`
    }))),
    // Instruments
    ...instrumentsData.map(i => ({
        type: 'Product' as const,
        name: i.name,
        category: 'Instruments',
        description: i.description,
        link: '/products/instruments'
    })),
    // Applications
    ...applicationData.map(a => ({
        type: 'Application' as const,
        name: a.title,
        category: 'Application',
        description: a.shortDescription,
        link: `/applications/${a.slug}`
    })),
    // Media/News
    ...mediaData.map(m => ({
        type: 'News' as const,
        name: m.title,
        category: `Media: ${m.category}`,
        description: m.excerpt,
        link: m.link
    })),
    // Case Studies
    ...caseStudies.map(c => ({
        type: 'Case Study' as const,
        name: c.title,
        category: 'Testing in Action',
        description: c.challenge,
        link: '/testing-in-action'
    })),
    // General Pages
    { type: 'Page', name: 'About Us', category: 'Company', description: 'Learn about our mission, vision, and the team driving diagnostic innovation.', link: '/about' },
    { type: 'Page', name: 'R&D Services', category: 'Services', description: 'Partner with us to accelerate your R&D pipeline from concept to market.', link: '/services' },
    { type: 'Page', name: 'Careers', category: 'Company', description: 'Join our mission to revolutionize diagnostics. Explore current openings.', link: '/careers' },
    { type: 'Page', name: 'Contact Us', category: 'Company', description: 'Get in touch with our team for sales, support, or partnership inquiries.', link: '/contact' },
    { type: 'Page', name: 'Distributors', category: 'Partners', description: 'Find a distributor or learn about becoming a partner in our global network.', link: '/distributors' },
];

export const searchIndex = allProducts;
