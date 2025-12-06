import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="hero-bg h-screen flex items-center justify-center text-center px-4 relative">
             <div className="absolute inset-0 bg-black/40"></div>
            <div className="max-w-4xl text-white relative z-10" data-aos="fade-up" data-aos-duration="1000">
                <p className="text-gold uppercase tracking-[0.3em] mb-4 text-sm md:text-base font-bold">
                    Redefining Elegance in Siliguri
                </p>
                <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Luxury Interiors <br /> Crafted for You
                </h1>
                <p className="text-gray-200 mb-10 text-lg md:text-xl font-light max-w-2xl mx-auto">
                    Transforming spaces into timeless masterpieces. We bring sophistication, functionality, and art together.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <a 
                        href="#contact" 
                        className="bg-gold text-white px-8 py-3 hover:bg-goldhover transition duration-300 uppercase tracking-widest text-sm font-bold"
                    >
                        Start Your Project
                    </a>
                    <a 
                        href="#portfolio" 
                        className="border border-white text-white px-8 py-3 hover:bg-white hover:text-charcoal transition duration-300 uppercase tracking-widest text-sm font-bold"
                    >
                        View Our Work
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;