import React from 'react';
import { SunoTrack } from '../types';
import { Play, Pause, FileText, Tv, Share2, ExternalLink, Sparkles } from 'lucide-react';

interface SunoTrackCardProps {
  track: SunoTrack;
  isPlaying: boolean;
  isCurrentTrack: boolean;
  onPlay: (track: SunoTrack) => void;
  onOpenLyrics: (track: SunoTrack) => void;
  onOpenEmbed: (track: SunoTrack) => void;
  onOpenShare: (track: SunoTrack) => void;
  isDarkMode: boolean;
}

export const SunoTrackCard: React.FC<SunoTrackCardProps> = ({
  track,
  isPlaying,
  isCurrentTrack,
  onPlay,
  onOpenLyrics,
  onOpenEmbed,
  onOpenShare,
  isDarkMode,
}) => {
  // Extract a brief lyrics snippet
  const getLyricsSnippet = (lyrics: string) => {
    if (!lyrics) return null;
    const clean = lyrics
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith('[') && !l.startsWith('**['))
      .slice(0, 2)
      .join(' / ');
    return clean || null;
  };

  const lyricsSnippet = getLyricsSnippet(track.lyrics);

  return (
    <div
      id={`suno-track-card-${track.id}`}
      className={`group relative rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden ${
        isCurrentTrack
          ? isDarkMode
            ? 'bg-white/[0.08] border-cyan-500/50 shadow-lg shadow-cyan-500/10'
            : 'bg-cyan-50/70 border-cyan-400 shadow-md'
          : isDarkMode
          ? 'bg-neutral-900/60 border-white/5 hover:border-white/20 hover:bg-neutral-900/90'
          : 'bg-white border-neutral-200 hover:border-neutral-300 shadow-sm'
      }`}
    >
      {/* Top Cover Image Area */}
      <div 
        onClick={() => onPlay(track)}
        className="relative aspect-square w-full overflow-hidden bg-neutral-950 cursor-pointer"
      >
        <img
          src={track.image}
          alt={track.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          crossOrigin="anonymous"
        />

        {/* Index Badge */}
        <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-white font-mono text-[11px] font-bold border border-white/10">
          #{track.index}
        </div>

        {/* Duration Badge */}
        <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-cyan-300 font-mono text-[11px] font-bold border border-white/10">
          {track.durationFormatted}
        </div>

        {/* Gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-95 transition-opacity" />

        {/* Center Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPlay(track);
            }}
            aria-label={isCurrentTrack && isPlaying ? 'Pause track' : 'Play track'}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all transform duration-300 active:scale-95 ${
              isCurrentTrack && isPlaying
                ? 'bg-cyan-400 text-black shadow-cyan-500/50 scale-105 ring-4 ring-cyan-400/40'
                : 'bg-white/90 text-black hover:bg-cyan-400 opacity-90 group-hover:opacity-100 group-hover:scale-110 shadow-lg'
            }`}
          >
            {isCurrentTrack && isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current translate-x-0.5" />
            )}
          </button>
        </div>

        {/* Equalizer Waveform indicator when playing */}
        {isCurrentTrack && isPlaying && (
          <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-cyan-400/40 flex items-center gap-1">
            <div className="w-1 h-3 bg-cyan-400 animate-pulse" />
            <div className="w-1 h-4 bg-cyan-400 animate-pulse delay-75" />
            <div className="w-1 h-2 bg-cyan-400 animate-pulse delay-150" />
            <span className="text-[10px] font-mono font-bold text-cyan-300 ml-1 uppercase">Playing</span>
          </div>
        )}
      </div>

      {/* Card Content Area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3
              onClick={() => onPlay(track)}
              className="font-bold text-sm sm:text-base leading-snug hover:text-cyan-400 cursor-pointer line-clamp-2 transition-colors"
            >
              {track.title}
            </h3>
          </div>

          <p className="text-xs text-cyan-400/90 font-mono mt-1 flex items-center gap-1.5">
            <span>@{track.handle}</span>
            <span className="opacity-40">•</span>
            <span className="opacity-75">Suno v4.5</span>
          </p>

          {/* Lyrics Snippet */}
          {lyricsSnippet && (
            <div
              onClick={() => onOpenLyrics(track)}
              className={`mt-3 p-2.5 rounded-lg text-xs italic line-clamp-2 border transition-colors cursor-pointer ${
                isDarkMode
                  ? 'bg-white/5 border-white/5 text-white/70 hover:border-cyan-400/30 hover:text-white'
                  : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:border-cyan-500/40'
              }`}
            >
              "{lyricsSnippet}..."
            </div>
          )}

          {/* Tags */}
          {track.tags && track.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-3">
              {track.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className={`text-[10px] px-2 py-0.5 rounded-md font-mono border ${
                    isDarkMode
                      ? 'bg-white/5 border-white/10 text-white/60'
                      : 'bg-neutral-100 border-neutral-200 text-neutral-600'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons Bar */}
        <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            {/* View Lyrics button */}
            <button
              onClick={() => onOpenLyrics(track)}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 border transition-colors ${
                isDarkMode
                  ? 'bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40'
                  : 'bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200'
              }`}
              title="View full lyrics"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Lyrics</span>
            </button>

            {/* Video / Embed button */}
            <button
              onClick={() => onOpenEmbed(track)}
              className={`p-1.5 rounded-md text-xs font-semibold border transition-colors ${
                isDarkMode
                  ? 'bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40'
                  : 'bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200'
              }`}
              title="Open Suno player / video"
            >
              <Tv className="w-3.5 h-3.5 text-cyan-400" />
            </button>

            {/* Share button */}
            <button
              onClick={() => onOpenShare(track)}
              className={`p-1.5 rounded-md text-xs border transition-colors ${
                isDarkMode
                  ? 'bg-white/5 border-white/10 text-white/70 hover:text-white'
                  : 'bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200'
              }`}
              title="Share track"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
          </div>

          <a
            href={track.sunoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-mono text-cyan-400 hover:underline flex items-center gap-1"
            title="View on Suno.com"
          >
            <span>Suno</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
