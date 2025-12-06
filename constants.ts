import { Service, Project, Testimonial, Stat } from './types';

export const NAV_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
];

export const SERVICES: Service[] = [
    {
        id: 1,
        title: 'Residential Design',
        description: 'Complete home makeovers including bedrooms, living areas, and landscaping tailored to your lifestyle.',
        iconClass: 'fas fa-home'
    },
    {
        id: 2,
        title: 'Commercial Spaces',
        description: 'Sophisticated office environments, retail outlets, and hospitality designs that elevate your brand.',
        iconClass: 'fas fa-building'
    },
    {
        id: 3,
        title: 'Modular Kitchens',
        description: 'Sleek, modern, and highly functional modular kitchen designs that make cooking a joy.',
        iconClass: 'fas fa-utensils'
    }
];

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: 'Modern Villa',
        location: 'Sevoke Road, Siliguri',
        imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Luxury Apartment',
        location: 'Hill Cart Road, Siliguri',
        imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Minimalist Kitchen',
        location: 'Pradhan Nagar',
        imageUrl: 'https://images.unsplash.com/photo-1600566752355-35792bedcfe1?q=80&w=1000&auto=format&fit=crop'
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: 'Anjali Roy',
        role: 'Homeowner, Siliguri',
        content: '"Siliguri Interior completely transformed our home. The attention to detail and the quality of materials used were outstanding. They captured exactly the luxury feel we wanted while keeping it comfortable."',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80'
    }
];

export const STATS: Stat[] = [
    { id: 1, value: '150+', label: 'Projects Completed' },
    { id: 2, value: '98%', label: 'Client Satisfaction' },
    { id: 3, value: '10', label: 'Design Awards' },
    { id: 4, value: '24/7', label: 'Support' }
];

export const COMPANY_INFO = {
    name: 'SILIGURI INTERIOR',
    phone: '+91 9641289557',
    email: 'info@siliguriinterior.com',
    address: 'Hill Cart Road, Near Venus More, Siliguri, West Bengal, 734001'
};