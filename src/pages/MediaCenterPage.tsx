import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { mediaData } from '../data/media';
import SectionHeader from '../components/SectionHeader';
import PageHero from '../components/PageHero';
import ArrowIcon from '../components/icons/ArrowIcon';

const ArticleCard: React.FC<{ title: string, date: string, category: string, excerpt: string, link: string, image: string }> = ({ title, date, category, excerpt, link, image }) => (
    <Link to={link} className="bg-white rounded-xl group ring-1 ring-border-color hover:ring-brand-secondary/50 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
        <div className="h-48 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm text-text-secondary">{date} &bull; <span className="text-brand-primary font-medium uppercase tracking-wider text-xs">{category}</span></p>
            <h3 className="mt-2 text-xl font-bold text-text-primary group-hover:text-brand-primary transition-colors flex-grow">{title}</h3>
            <p className="mt-2 text-text-secondary text-sm">{excerpt}</p>
            <div className="mt-4 font-semibold text-brand-secondary text-sm flex items-center gap-1 transition-transform duration-300 group-hover:translate-x-1 self-start">
                Read More 
                <ArrowIcon direction="right" className="w-4 h-4" />
            </div>
        </div>
    </Link>
);

const FeaturedArticle: React.FC<{ article: typeof mediaData[0] }> = ({ article }) => (
    <Link to={article.link} className="block group grid md:grid-cols-2 gap-8 lg:gap-12 items-center bg-white p-8 rounded-2xl shadow-lg ring-1 ring-border-color hover:ring-brand-secondary/50 transition-all duration-300">
        <div className="overflow-hidden rounded-xl">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div>
            <p className="text-sm text-text-secondary">{article.date} &bull; <span className="text-brand-secondary font-medium uppercase tracking-wider text-xs">{article.category}</span></p>
            <h2 className="mt-4 text-3xl font-extrabold text-text-primary group-hover:text-brand-primary transition-colors">{article.title}</h2>
            <p className="mt-4 text-lg text-text-secondary">{article.excerpt}</p>
            <div className="mt-6 font-semibold text-brand-secondary text-base flex items-center gap-1 transition-transform duration-300 group-hover:translate-x-1">
                Continue Reading
                 <ArrowIcon direction="right" className="w-5 h-5" />
            </div>
        </div>
    </Link>
);

const MediaCenterPage: React.FC = () => {
    const featuredArticle = mediaData.find(article => article.featured);
    const recentArticles = mediaData.filter(article => !article.featured);

    return (
        <div className="bg-brand-light-bg">
            <PageHero
                title="Media Center" 
                description="The latest news, press releases, and stories from InnovaDx."
                image="https://cdn.innovadx.com/images/media-center-hero.jpg"
            />
            <div className="py-24 sm:py-32">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                    {featuredArticle && (
                        <AnimatedSection>
                            <SectionHeader title="Featured Story" />
                            <div className="mt-8">
                                <FeaturedArticle article={featuredArticle} />
                            </div>
                        </AnimatedSection>
                    )}
                    
                    <AnimatedSection>
                         <SectionHeader title="Recent News" />
                        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {recentArticles.map(article => (
                                <ArticleCard key={article.title} {...article} />
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

export default MediaCenterPage;
