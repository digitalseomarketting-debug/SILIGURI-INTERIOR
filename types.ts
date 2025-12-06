export interface Service {
    id: number;
    title: string;
    description: string;
    iconClass: string;
}

export interface Project {
    id: number;
    title: string;
    location: string;
    imageUrl: string;
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    imageUrl: string;
}

export interface Stat {
    id: number;
    value: string;
    label: string;
}