import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Music } from 'lucide-react';
import { SongCardProps } from '../types';

export const SongCard: React.FC<SongCardProps> = ({ song, index, color }) => {
    const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(song + ' bachata')}`;
    const spUrl = `https://open.spotify.com/search/${encodeURIComponent(song)}`;

    // Map color string to Tailwind classes safely
    const colorVariants: Record<string, { badge: string; iconYoutube: string; iconSpotify: string }> = {
        pink: { badge: 'bg-pink-500/10 text-pink-400', iconYoutube: 'hover:bg-red-600/20 text-red-500', iconSpotify: 'hover:bg-emerald-600/20 text-emerald-500' },
        blue: { badge: 'bg-blue-500/10 text-blue-400', iconYoutube: 'hover:bg-red-600/20 text-red-500', iconSpotify: 'hover:bg-emerald-600/20 text-emerald-500' },
        emerald: { badge: 'bg-emerald-500/10 text-emerald-400', iconYoutube: 'hover:bg-red-600/20 text-red-500', iconSpotify: 'hover:bg-emerald-600/20 text-emerald-500' },
        purple: { badge: 'bg-purple-500/10 text-purple-400', iconYoutube: 'hover:bg-red-600/20 text-red-500', iconSpotify: 'hover:bg-emerald-600/20 text-emerald-500' },
        amber: { badge: 'bg-amber-500/10 text-amber-400', iconYoutube: 'hover:bg-red-600/20 text-red-500', iconSpotify: 'hover:bg-emerald-600/20 text-emerald-500' },
    };

    const styles = colorVariants[color] || colorVariants.pink;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-4 rounded-xl flex items-center justify-between group relative overflow-hidden"
        >
            {/* Subtle Gradient Glow on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-r from-${color}-500/0 via-${color}-500/5 to-${color}-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

            <div className="flex items-center gap-4 overflow-hidden z-10">
                <span className="text-slate-500 font-mono text-sm w-8 flex-shrink-0 text-right opacity-60">
                    {index}
                </span>
                <div className="truncate">
                    <h3 className="font-semibold text-slate-200 group-hover:text-white transition-colors truncate text-base md:text-lg">
                        {song}
                    </h3>
                </div>
            </div>
            
            <div className="flex gap-2 shrink-0 z-10 ml-2">
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={searchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors bg-white/5 ${styles.iconYoutube}`}
                    title="YouTube"
                >
                    <Youtube size={18} />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={spUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors bg-white/5 ${styles.iconSpotify}`}
                    title="Spotify"
                >
                    <Music size={18} />
                </motion.a>
            </div>
        </motion.div>
    );
};