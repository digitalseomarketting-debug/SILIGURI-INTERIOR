import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-offwhite">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <h4 className="text-gold uppercase tracking-widest font-bold mb-2">Testimonials</h4>
                <h2 className="font-serif text-4xl font-bold text-charcoal mb-12">What Our Clients Say</h2>
                
                {TESTIMONIALS.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white p-10 shadow-xl rounded-sm relative" data-aos="fade-up">
                        <i className="fas fa-quote-left text-4xl text-gold opacity-30 absolute top-6 left-6"></i>
                        <p className="text-gray-600 text-lg italic mb-6 leading-relaxed relative z-10">
                            {testimonial.content}
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <img 
                                src={testimonial.imageUrl} 
                                alt={testimonial.name} 
                                className="w-12 h-12 rounded-full object-cover border-2 border-gold"
                            />
                            <div className="text-left">
                                <h5 className="font-bold text-charcoal">{testimonial.name}</h5>
                                <p className="text-sm text-gold">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;