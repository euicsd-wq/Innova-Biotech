
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MoleculeIcon from './icons/MoleculeIcon';
import SearchIcon from './icons/SearchIcon';
import ArrowIcon from './icons/ArrowIcon';

type MobileLink = { type: 'link'; name: string; path: string; };
type MobileHeader = { type: 'header'; name: string; };
type MobileMenuItem = MobileLink | MobileHeader;

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLabSolutionsOpen, setIsLabSolutionsOpen] = useState(false);

    const topTierLinks = [
        { name: 'Who we are', path: '/about' },
        { name: 'R&D', path: '/services' },
        { name: 'Media Center', path: '/media-center' },
        { name: 'Careers', path: '/careers' },
        { name: 'Distributor', path: '/distributors' },
    ];
    
    const labSolutionsLinks = [
        { name: 'Molecular Diagnostics', path: '/products/molecular', description: "High-performance qPCR assays and systems." },
        { name: 'ELISA', path: '/products/elisa', description: "Reliable quantification of diverse biomolecules." },
        { name: 'Clinical Chemistry', path: '/products/clinical-chemistry', description: "Stable, liquid-ready reagents for analyzers." },
        { name: 'Hematology', path: '/products/hematology', description: "Advanced cellular analysis systems." },
        { name: 'Microbiology', path: '/products/microbiology', description: "ID and AST solutions to guide therapy." },
        { name: 'Instruments', path: '/products/instruments', description: "Automated analyzers for the modern lab." },
        { name: 'Consumables', path: '/products/consumables', description: "High-quality lab essentials." },
    ];
    
    const bottomNavLinks = [
        { name: 'DX-1 Platform', path: '/products/platform' },
        { name: 'Rapid Diagnostics', path: '/products/reagents' },
        { name: 'Applications', path: '/applications' },
        { name: 'Digital Solutions', path: '/products/digital-solutions' },
        { name: 'Testing in Action', path: '/testing-in-action' },
    ];

    const mobileMenu: MobileMenuItem[] = [
        { type: 'link', name: 'Home', path: '/' },
        { type: 'header', name: 'Company' },
        { type: 'link', name: 'Who we are', path: '/about' },
        { type: 'link', name: 'R&D', path: '/services' },
        { type: 'link', name: 'Media Center', path: '/media-center' },
        { type: 'link', name: 'Careers', path: '/careers' },
        { type: 'header', name: 'Products & Solutions' },
        { type: 'link', name: 'DX-1 Platform', path: '/products/platform' },
        { type: 'link', name: 'Rapid Diagnostics', path: '/products/reagents' },
        ...labSolutionsLinks.map(l => ({ type: 'link' as const, name: l.name, path: l.path })),
        { type: 'header', name: 'Resources' },
        { type: 'link', name: 'Applications', path: '/applications' },
        { type: 'link', name: 'Testing in Action', path: '/testing-in-action' },
        { type: 'link', name: 'Digital Solutions', path: '/products/digital-solutions' },
        { type: 'link', name: 'Support Center', path: '/support-center' },
        { type: 'link', name: 'Distributor', path: '/distributors' },
        { type: 'link', name: 'Contact Us', path: '/contact' },
    ];
    
    const NavItem: React.FC<{ to: string, children: React.ReactNode, className?: string }> = ({ to, children, className }) => (
        <NavLink to={to} className={({isActive}) => `${className} transition-colors ${isActive ? 'text-brand-secondary' : 'hover:text-brand-secondary'}`}>
            {children}
        </NavLink>
    );

    return (
        <header className="bg-white sticky top-0 z-50 shadow-sm">
            {/* Top Tier */}
            <div className="bg-brand-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-end items-center h-10 space-x-6">
                         {topTierLinks.map(link => (
                            <NavLink key={link.path} to={link.path} className="hidden lg:block text-xs font-medium text-gray-300 hover:text-white transition-colors">{link.name}</NavLink>
                         ))}
                         <button className="hidden lg:block text-gray-300 hover:text-white transition-colors">
                            <span className="sr-only">Search</span>
                            <SearchIcon className="h-5 w-5" />
                         </button>
                         <NavLink to="/support-center" className="hidden lg:block text-xs font-medium text-gray-300 hover:text-white transition-colors">Support Center</NavLink>
                         <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="lg:hidden p-2 text-gray-300">
                            <span className="sr-only">Open menu</span>
                             {isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                         </button>
                    </div>
                </div>
            </div>
            {/* Bottom Tier */}
            <div className="bg-white border-b border-border-color">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="flex items-center justify-between h-20">
                         <NavLink to="/" className="flex-shrink-0 flex items-center gap-2 group">
                            <MoleculeIcon className="h-9 w-9 text-brand-primary transition-transform duration-500 group-hover:rotate-180" />
                            <span className="text-2xl font-bold text-brand-primary tracking-tight">InnovaDx</span>
                        </NavLink>
                        
                        <nav className="hidden lg:flex items-center space-x-8">
                            {bottomNavLinks.map(link => (
                                <NavItem key={link.path} to={link.path} className="text-sm font-semibold text-text-primary">{link.name}</NavItem>
                            ))}
                             <div 
                                className="relative"
                                onMouseEnter={() => setIsLabSolutionsOpen(true)}
                                onMouseLeave={() => setIsLabSolutionsOpen(false)}
                             >
                                <div className="text-sm font-semibold flex items-center gap-1 text-text-primary cursor-pointer hover:text-brand-secondary">
                                    Lab Solutions <ArrowIcon direction="down" className={`w-4 h-4 transition-transform ${isLabSolutionsOpen ? 'rotate-180' : ''}`} />
                                </div>
                                {isLabSolutionsOpen && (
                                    <div className="absolute top-full -left-1/2 mt-2 w-screen max-w-sm px-4 sm:px-0 lg:max-w-md origin-top-right animate-fade-in-down">
                                        <div className="rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-white">
                                            <div className="relative grid gap-6 p-7">
                                                {labSolutionsLinks.map(item => (
                                                    <NavLink key={item.name} to={item.path} onClick={() => setIsLabSolutionsOpen(false)} className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition-colors">
                                                        <div className="ml-4">
                                                            <p className="text-base font-medium text-text-primary">{item.name}</p>
                                                            <p className="mt-1 text-sm text-text-secondary">{item.description}</p>
                                                        </div>
                                                    </NavLink>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                             </div>
                             <NavLink to="/contact" className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-brand-primary hover:opacity-90 transition-opacity">
                                Contact Us
                            </NavLink>
                        </nav>
                     </div>
                 </div>
            </div>
            {isMenuOpen && (
                 <div className="lg:hidden absolute w-full bg-white shadow-lg animate-fade-in-down" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[85vh] overflow-y-auto">
                        {mobileMenu.map((item, index) => {
                             if (item.type === 'header') {
                                return (
                                    <div key={index} className="px-3 pt-4 pb-2 text-xs font-semibold text-text-secondary uppercase tracking-wider">
                                        {item.name}
                                    </div>
                                );
                            }
                            return (
                                <NavLink key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)} className={({isActive}) => `block px-3 py-3 rounded-md text-base font-medium ${isActive ? 'text-brand-primary bg-light-gray' : 'text-text-primary hover:bg-light-gray'}`}>{item.name}</NavLink>
                            )
                        })}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
