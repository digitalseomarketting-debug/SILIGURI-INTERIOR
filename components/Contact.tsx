import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'Residential Design',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you! We will contact you shortly.');
        setFormData({
            name: '',
            phone: '',
            service: 'Residential Design',
            message: ''
        });
    };

    return (
        <section id="contact" className="py-20 bg-charcoal text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div data-aos="fade-right">
                        <h4 className="text-gold uppercase tracking-widest font-bold mb-2">Get In Touch</h4>
                        <h2 className="font-serif text-4xl font-bold mb-6">Let's Discuss Your Project</h2>
                        <p className="text-gray-400 mb-8">Ready to transform your space? Contact us today for a consultation. We look forward to working with you.</p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start group">
                                <div className="w-10 flex-shrink-0">
                                    <i className="fas fa-phone-alt text-gold text-xl mt-1 group-hover:scale-110 transition"></i>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 uppercase">Call Us</p>
                                    <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="text-2xl font-serif hover:text-gold transition">{COMPANY_INFO.phone}</a>
                                </div>
                            </div>
                            <div className="flex items-start group">
                                <div className="w-10 flex-shrink-0">
                                    <i className="fas fa-envelope text-gold text-xl mt-1 group-hover:scale-110 transition"></i>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 uppercase">Email Us</p>
                                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-lg hover:text-gold transition">{COMPANY_INFO.email}</a>
                                </div>
                            </div>
                            <div className="flex items-start group">
                                <div className="w-10 flex-shrink-0">
                                    <i className="fas fa-map-marker-alt text-gold text-xl mt-1 group-hover:scale-110 transition"></i>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 uppercase">Visit Us</p>
                                    <p className="text-lg whitespace-pre-line">{COMPANY_INFO.address.replace(', ', ',\n')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-sm text-charcoal shadow-2xl" data-aos="fade-left">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-bold mb-2">Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full border-b-2 border-gray-200 focus:border-gold outline-none py-2 transition" 
                                        placeholder="John Doe" 
                                        required 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2">Phone</label>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full border-b-2 border-gray-200 focus:border-gold outline-none py-2 transition" 
                                        placeholder="+91..." 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Service Type</label>
                                <select 
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full border-b-2 border-gray-200 focus:border-gold outline-none py-2 transition bg-transparent cursor-pointer"
                                >
                                    <option>Residential Design</option>
                                    <option>Commercial Design</option>
                                    <option>Modular Kitchen</option>
                                    <option>Consultation</option>
                                </select>
                            </div>
                            <div className="mb-8">
                                <label className="block text-sm font-bold mb-2">Message</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full border-b-2 border-gray-200 focus:border-gold outline-none py-2 transition resize-none" 
                                    rows={3} 
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="w-full bg-gold text-white font-bold py-4 hover:bg-goldhover transition duration-300 uppercase tracking-widest transform hover:-translate-y-1 shadow-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;