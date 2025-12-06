import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
    return (
        <div className="bg-charcoal text-white py-16">
            <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {STATS.map((stat) => (
                    <div key={stat.id} data-aos="fade-up">
                        <h3 className="text-4xl font-serif text-gold font-bold">{stat.value}</h3>
                        <p className="text-sm uppercase tracking-wide mt-2 opacity-80">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stats;