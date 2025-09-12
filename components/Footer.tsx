
import React from 'react';
import { Link } from 'react-router-dom';
import MoleculeIcon from './icons/MoleculeIcon';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-primary text-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8">
                    {/* Column 1: Logo & Mission */}
                    <div className="col-span-2 lg:col-span-2">
                        <Link to="/" className="flex items-center gap-3">
                          <MoleculeIcon className="h-9 w-9 text-white" />
                          <span className="text-2xl font-bold tracking-wider">InnovaDx</span>
                        </Link>
                        <p className="mt-4 text-sm text-gray-300 leading-relaxed max-w-sm">Pioneering diagnostic solutions for a healthier future. We engineer powerful, accessible technologies that bring critical health insights to every point of care.</p>
                        <div className="mt-6 flex space-x-6">
                             <SocialIcon href="#">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
                            </SocialIcon>
                             <SocialIcon href="#">
                                <span className="sr-only">X (Twitter)</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            </SocialIcon>
                        </div>
                    </div>
                    
                    {/* Column 2: Solutions */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                        <ul className="mt-4 space-y-3">
                            <li><Link to="/products/platform" className="text-sm text-gray-300 hover:text-white transition-colors">DX-1 Platform</Link></li>
                            <li><Link to="/products/reagents" className="text-sm text-gray-300 hover:text-white transition-colors">Rapid Diagnostics</Link></li>
                            <li><Link to="/products/molecular" className="text-sm text-gray-300 hover:text-white transition-colors">Lab Solutions</Link></li>
                            <li><Link to="/products/digital-solutions" className="text-sm text-gray-300 hover:text-white transition-colors">Digital Solutions</Link></li>
                            <li><Link to="/applications" className="text-sm text-gray-300 hover:text-white transition-colors">Applications</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-3">
                             <li><Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">Who we are</Link></li>
                             <li><Link to="/services" className="text-sm text-gray-300 hover:text-white transition-colors">R&D</Link></li>
                             <li><Link to="/media-center" className="text-sm text-gray-300 hover:text-white transition-colors">Media Center</Link></li>
                             <li><Link to="/careers" className="text-sm text-gray-300 hover:text-white transition-colors">Careers</Link></li>
                             <li><Link to="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>
                    
                    {/* Column 4: Resources */}
                     <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
                        <ul className="mt-4 space-y-3">
                             <li><Link to="/testing-in-action" className="text-sm text-gray-300 hover:text-white transition-colors">Testing in Action</Link></li>
                             <li><Link to="/support-center" className="text-sm text-gray-300 hover:text-white transition-colors">Support Center</Link></li>
                             <li><Link to="/distributors" className="text-sm text-gray-300 hover:text-white transition-colors">Distributors</Link></li>
                             <li><Link to="/sitemap" className="text-sm text-gray-300 hover:text-white transition-colors">Sitemap</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 border-t border-white/20 pt-8">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="flex justify-center space-x-6 md:order-2">
                             <Link to="/disclaimer" className="text-xs text-gray-400 hover:text-white transition-colors">Disclaimer</Link>
                             <Link to="/privacy-policy" className="text-xs text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                             <Link to="/legal" className="text-xs text-gray-400 hover:text-white transition-colors">Legal</Link>
                        </div>
                        <p className="mt-8 text-xs text-center text-gray-400 md:order-1 md:mt-0 md:text-left">Copyright © {new Date().getFullYear()} - Innova Biotech Ltd. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
