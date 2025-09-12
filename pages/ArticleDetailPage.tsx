import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { mediaData } from '../data/media';
import AnimatedSection from '../components/AnimatedSection';
import CtaSection from '../components/CtaSection';
import PageHero from '../components/PageHero';

const ArticleDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();

    // A helper to find article by slug from the link property
    const findArticleBySlug = (s: string | undefined) => {
        if (!s) return undefined;
        const targetLink = `/media-center/${s}`;
        return mediaData.find(article => article.link === targetLink);
    };

    const article = findArticleBySlug(slug);

    if (!article) {
        return <Navigate to="/404" replace />;
    }
    
    const breadcrumbs = [
        { label: 'Media Center', href: '/media-center' },
        { label: article.title, href: article.link },
    ];

    return (
        <div className="bg-white">
            <PageHero
                title={article.title}
                subtitle={article.category}
                image={article.image}
                breadcrumbs={breadcrumbs}
            />
             <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                <AnimatedSection>
                    <div className="flex items-center text-sm text-text-secondary mb-4">
                        <span>{article.date}</span>
                    </div>
                    <div className="prose prose-lg prose-custom max-w-none">
                        <p className="lead text-xl font-semibold !text-text-primary">{article.excerpt}</p>
                        {article.content?.split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                     <div className="mt-12 border-t border-border-color pt-8">
                        <Link to="/media-center" className="font-semibold text-brand-secondary hover:text-brand-primary transition-colors">
                            &larr; Back to Media Center
                        </Link>
                    </div>
                </AnimatedSection>
             </div>
             <CtaSection
                title="Stay at the Forefront of Diagnostics"
                subtitle="Explore our innovative solutions or get in touch with our team to learn more."
                buttonText="Explore Products"
                buttonLink="/products"
            />
        </div>
    );
};

export default ArticleDetailPage;
