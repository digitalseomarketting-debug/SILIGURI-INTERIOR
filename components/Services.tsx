import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-offwhite">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h4 className="text-gold uppercase tracking-widest font-bold mb-2">Our Services</h4>
                    <h2 className="font-serif text-4xl font-bold text-charcoal">Exquisite Design Solutions</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <div 
                            key={service.id} 
                            className="bg-white p-10 shadow-lg hover:shadow-2xl transition duration-300 group" 
                            data-aos="fade-up" 
                            data-aos-delay={index * 100}
                        >
                            <div className="w-16 h-16 bg-offwhite rounded-full flex items-center justify-center mb-6 group-hover:bg-gold transition duration-300">
                                <i className={`${service.iconClass} text-2xl text-charcoal group-hover:text-white`}></i>
                            </div>
                            <h3 className="font-serif text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;