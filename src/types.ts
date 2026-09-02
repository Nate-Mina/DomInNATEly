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

export interface SunoTrack {
  id: string; // Suno UUID
  title: string;
  artist: string;
  handle: string;
  index: number;
  image: string;
  audioUrl: string; // CloudFront m4a
  videoUrl: string; // Suno mp4
  embedUrl: string; // Suno embed widget
  sunoUrl: string; // Suno song link
  duration: number; // in seconds
  durationFormatted: string; // e.g. "6:27"
  tags: string[];
  lyrics: string;
}

export interface SunoPlaylistInfo {
  id: string;
  name: string;
  description: string;
  cover: string;
  user_display_name: string;
  user_handle: string;
  tiktok_handle: string;
  url: string;
  totalTracks: number;
  totalDurationSeconds: number;
}

export type ActivePage = 'youtube' | 'suno';

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
