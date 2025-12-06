import React from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12" data-aos="fade-up">
                    <div>
                        <h4 className="text-gold uppercase tracking-widest font-bold mb-2">Our Portfolio</h4>
                        <h2 className="font-serif text-4xl font-bold text-charcoal">Recent Masterpieces</h2>
                    </div>
                    <a href="#" className="hidden md:flex items-center text-gray-500 hover:text-gold transition mt-4 md:mt-0">
                        View All Projects <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project, index) => (
                        <div 
                            key={project.id} 
                            className="relative group overflow-hidden h-80 cursor-pointer" 
                            data-aos="zoom-in" 
                            data-aos-delay={index * 100}
                        >
                            <img 
                                src={project.imageUrl} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-white font-serif text-2xl transform translate-y-4 group-hover:translate-y-0 transition duration-300">{project.title}</h3>
                                <p className="text-gold transform translate-y-4 group-hover:translate-y-0 transition duration-300 delay-75">{project.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="md:hidden mt-8 text-center">
                    <a href="#" className="text-gray-500 hover:text-gold transition inline-flex items-center">
                        View All Projects <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;