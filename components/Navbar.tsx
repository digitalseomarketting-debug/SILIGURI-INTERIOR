import React, { useState, useEffect } from 'react';
import { NAV_LINKS, COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav 
            className={`fixed w-full z-50 transition-all duration-300 py-6 ${
                isScrolled 
                ? 'bg-white/95 shadow-md py-4 text-charcoal' 
                : 'bg-transparent text-white'
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className={`text-2xl font-serif font-bold tracking-widest ${isScrolled ? 'text-charcoal' : 'text-white'}`}>
                    SILIGURI <span className="text-gold">INTERIOR</span>
                </a>

                <div className="hidden md:flex items-center space-x-8">
                    {NAV_LINKS.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className={`transition text-sm uppercase tracking-wide hover:text-gold ${isScrolled ? 'text-charcoal' : 'text-white'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="hidden md:block">
                    <a 
                        href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} 
                        className="border border-gold text-gold hover:bg-gold hover:text-white px-6 py-2 transition duration-300 rounded-sm font-semibold flex items-center"
                    >
                        <i className="fas fa-phone-alt mr-2"></i> {COMPANY_INFO.phone}
                    </a>
                </div>

                <div className="md:hidden flex items-center">
                    <button 
                        onClick={toggleMobileMenu} 
                        className={`focus:outline-none ${isScrolled ? 'text-charcoal' : 'text-white'}`}
                    >
                        <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden bg-white text-charcoal absolute w-full left-0 top-full shadow-lg transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col p-6 space-y-4">
                    {NAV_LINKS.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="hover:text-gold font-semibold"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a 
                        href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} 
                        className="text-gold font-bold"
                    >
                        {COMPANY_INFO.phone}
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;