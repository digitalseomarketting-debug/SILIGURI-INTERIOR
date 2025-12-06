import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 relative" data-aos="fade-right">
                        <img 
                            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop" 
                            alt="Interior Designer" 
                            className="w-full h-auto shadow-2xl rounded-sm"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-gold text-white p-8 hidden md:block shadow-lg">
                            <p className="text-4xl font-serif font-bold">10+</p>
                            <p className="text-sm uppercase tracking-wide">Years Experience</p>
                        </div>
                    </div>
                    <div className="md:w-1/2" data-aos="fade-left">
                        <h4 className="text-gold uppercase tracking-widest font-bold mb-2">About Us</h4>
                        <h2 className="font-serif text-4xl font-bold mb-6 text-charcoal">We Create The Art of Living</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            At Siliguri Interior, we believe that your home is a reflection of your personality. Based in the heart of Siliguri, we are a team of passionate designers dedicated to curating premium spaces that blend modern aesthetics with functional living.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            From conceptualization to the final brushstroke, we handle everything with precision and care, ensuring your dream space becomes a reality.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-gray-700">
                                <i className="fas fa-check text-gold mr-3"></i> Premium Material Selection
                            </li>
                            <li className="flex items-center text-gray-700">
                                <i className="fas fa-check text-gold mr-3"></i> Customized Design Solutions
                            </li>
                            <li className="flex items-center text-gray-700">
                                <i className="fas fa-check text-gold mr-3"></i> Timely Project Delivery
                            </li>
                        </ul>
                        <a href="#contact" className="text-charcoal font-bold border-b-2 border-gold hover:text-gold transition pb-1">Read More About Us</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;