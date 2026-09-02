export interface Track {
  id: string; // YouTube Video ID
  title: string;
  artist: string;
  duration: string; // e.g. "6:28"
  durationSeconds: number;
  index: number;
  thumbnail: string;
  youtubeUrl: string;
  category: 'rock' | 'remix' | 'acoustic' | 'anthem' | 'duet' | 'alt';
  tags: string[];
  description?: string;
  featuredLyrics?: string;
}

export type SortField = 'playlist' | 'duration-desc' | 'duration-asc' | 'title-asc' | 'title-desc' | 'newest';

export type CategoryFilter = 'all' | 'rock' | 'remix' | 'acoustic' | 'duet' | 'alt';

export interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number; // 0 to 100
  isMuted: boolean;
  isShuffle: boolean;
  isRepeat: boolean;
  showVideo: boolean;
}
