import React, { useMemo } from 'react';
import { SONG_DATA } from './constants';
import { CategorySection } from './components/CategorySection';

const App: React.FC = () => {
    // Calculate global indices safely
    const renderSections = useMemo(() => {
        let globalIndex = 1;
        return SONG_DATA.map((section) => {
            const startIndex = globalIndex;
            globalIndex += section.songs.length;
            return (
                <CategorySection 
                    key={section.id} 
                    section={section} 
                    startIndex={startIndex} 
                />
            );
        });
    }, []);

    return (
        <div className="space-y-16 animate-in fade-in duration-700">
            {renderSections}
        </div>
    );
};

export default App;