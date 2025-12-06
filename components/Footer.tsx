import React from 'react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-gray-500 py-8 border-t border-gray-800">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.</p>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-gold transition transform hover:scale-110"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="hover:text-gold transition transform hover:scale-110"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="hover:text-gold transition transform hover:scale-110"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" className="hover:text-gold transition transform hover:scale-110"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;