
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { searchIndex, SearchResult } from '../data/allProducts';
import SearchIcon from './icons/SearchIcon';
import ArrowIcon from './icons/ArrowIcon';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (searchTerm.length > 2) {
      const lowerCaseTerm = searchTerm.toLowerCase();
      const filteredResults = searchIndex.filter(item => 
        item.name.toLowerCase().includes(lowerCaseTerm) ||
        item.description.toLowerCase().includes(lowerCaseTerm) ||
        item.category.toLowerCase().includes(lowerCaseTerm)
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  const handleClose = () => {
    setSearchTerm('');
    setResults([]);
    onClose();
  };
  
  const handleLinkClick = () => {
    handleClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm animate-fade-in" 
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="relative bg-white w-full max-w-2xl mx-auto mt-20 rounded-xl shadow-2xl animate-fade-in-up-fast"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 border-b border-border-color flex items-center">
            <SearchIcon className="h-5 w-5 text-text-secondary mr-3" />
            <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products, applications, news..."
                className="w-full text-lg focus:outline-none bg-transparent"
            />
            <button onClick={handleClose} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto">
            {results.length > 0 ? (
                <ul>
                    {results.slice(0, 20).map((result, index) => (
                        <li key={`${result.link}-${index}`} className="border-b border-border-color last:border-b-0">
                            <Link to={result.link} onClick={handleLinkClick} className="block p-4 hover:bg-brand-light-bg/70 transition-colors group">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-brand-secondary">{result.category}</p>
                                        <p className="font-semibold text-text-primary group-hover:text-brand-primary">{result.name}</p>
                                        <p className="text-sm text-text-secondary mt-1 line-clamp-2">{result.description}</p>
                                    </div>
                                    <ArrowIcon direction="right" className="w-5 h-5 text-gray-300 group-hover:text-brand-secondary transition-colors" />
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="p-16 text-center text-text-secondary">
                    {searchTerm.length > 2 ? 'No results found.' : 'Start typing to search the site.'}
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
