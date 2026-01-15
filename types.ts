export interface SongSection {
    id: string;
    title: string;
    color: string;
    songs: string[];
}

export interface SongCardProps {
    song: string;
    index: number;
    color: string;
}

export interface SectionProps {
    section: SongSection;
    startIndex: number;
}