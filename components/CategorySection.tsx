import React from 'react';
import { motion } from 'framer-motion';
import { SectionProps } from '../types';
import { SongCard } from './SongCard';

export const CategorySection: React.FC<SectionProps> = ({ section, startIndex }) => {
    return (
        <section id={section.id} className="scroll-mt-32">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-6"
            >
                <div className={`h-8 w-1.5 bg-${section.color}-500 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] shadow-${section.color}-500/50`} />
                <h2 className={`text-2xl md:text-3xl font-bold text-${section.color}-400 drop-shadow-sm`}>
                    {section.title}
                </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {section.songs.map((song, idx) => (
                    <SongCard 
                        key={`${section.id}-${idx}`}
                        song={song}
                        index={startIndex + idx}
                        color={section.color}
                    />
                ))}
            </div>
        </section>
    );
};