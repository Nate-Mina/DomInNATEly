import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Repeat,
  Shuffle,
  Share2,
  Tv,
  ChevronDown,
  ChevronUp,
  Maximize2
} from 'lucide-react';
import { Track } from '../types';

interface AudioPlayerProps {
  currentTrack: Track | null;
  playlist: Track[];
  onTrackChange: (track: Track) => void;
  onOpenShare: (track: Track) => void;
  isDarkMode: boolean;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  currentTrack,
  playlist,
  onTrackChange,
  onOpenShare,
  isDarkMode,
  isPlaying,
  setIsPlaying,
}) => {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(80);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<boolean>(false);
  const [showVideoModal, setShowVideoModal] = useState<boolean>(false);
  const [isExpandedMobile, setIsExpandedMobile] = useState<boolean>(false);

  const playerRef = useRef<any>(null);
  const timerRef = useRef<any>(null);
  const isReadyRef = useRef<boolean>(false);
  const pendingTrackIdRef = useRef<string | null>(null);
  const containerId = 'youtube-player-container';

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Next Track
  const handleNext = useCallback(() => {
    if (!currentTrack || playlist.length === 0) return;
    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * playlist.length);
      onTrackChange(playlist[randomIndex]);
      return;
    }
    const currentIndex = playlist.findIndex((t) => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % playlist.length;
    onTrackChange(playlist[nextIndex]);
  }, [currentTrack, playlist, isShuffle, onTrackChange]);

  // Previous Track
  const handlePrevious = useCallback(() => {
    if (!currentTrack || playlist.length === 0) return;
    if (currentTime > 4 && playerRef.current && typeof playerRef.current.seekTo === 'function') {
      try {
        playerRef.current.seekTo(0, true);
        setCurrentTime(0);
        return;
      } catch (err) {
        // fallback
      }
    }
    const currentIndex = playlist.findIndex((t) => t.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    onTrackChange(playlist[prevIndex]);
  }, [currentTrack, playlist, currentTime, onTrackChange]);

  // Initialize YouTube Iframe API
  useEffect(() => {
    if (!window.YT) {
      const existingTag = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
      if (!existingTag) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
      }
    }
  }, []);

  // Initialize or load video when currentTrack changes
  useEffect(() => {
    if (!currentTrack) return;

    // If player is already initialized and ready
    if (playerRef.current && isReadyRef.current) {
      if (typeof playerRef.current.loadVideoById === 'function') {
        try {
          if (isPlaying) {
            playerRef.current.loadVideoById(currentTrack.id);
          } else {
            if (typeof playerRef.current.cueVideoById === 'function') {
              playerRef.current.cueVideoById(currentTrack.id);
            } else {
              playerRef.current.loadVideoById(currentTrack.id);
            }
          }
        } catch (err) {
          console.warn('Error loading video by ID:', err);
        }
      }
      return;
    }

    // Otherwise queue this track as pending and initialize player
    pendingTrackIdRef.current = currentTrack.id;

    const setupPlayer = () => {
      const containerElem = document.getElementById(containerId);
      if (!containerElem) {
        setTimeout(setupPlayer, 100);
        return;
      }

      if (!window.YT || !window.YT.Player) {
        setTimeout(setupPlayer, 100);
        return;
      }

      if (!playerRef.current) {
        try {
          playerRef.current = new window.YT.Player(containerId, {
            height: '100%',
            width: '100%',
            videoId: currentTrack.id,
            playerVars: {
              autoplay: isPlaying ? 1 : 0,
              controls: 1,
              modestbranding: 1,
              rel: 0,
              origin: window.location.origin,
            },
            events: {
              onReady: (event: any) => {
                isReadyRef.current = true;
                if (typeof event.target.setVolume === 'function') {
                  event.target.setVolume(volume);
                }
                // Check if another track was requested while player was initializing
                if (pendingTrackIdRef.current && pendingTrackIdRef.current !== currentTrack.id) {
                  const targetId = pendingTrackIdRef.current;
                  pendingTrackIdRef.current = null;
                  if (typeof event.target.loadVideoById === 'function') {
                    event.target.loadVideoById(targetId);
                    setIsPlaying(true);
                  }
                } else if (isPlaying) {
                  if (typeof event.target.playVideo === 'function') {
                    event.target.playVideo();
                  }
                }
              },
              onStateChange: (event: any) => {
                // 1 = playing, 2 = paused, 0 = ended
                if (event.data === 1) {
                  setIsPlaying(true);
                  if (playerRef.current && typeof playerRef.current.getDuration === 'function') {
                    const dur = playerRef.current.getDuration();
                    if (dur && dur > 0) setDuration(dur);
                  }
                } else if (event.data === 2) {
                  setIsPlaying(false);
                } else if (event.data === 0) {
                  if (isRepeat) {
                    if (playerRef.current && typeof playerRef.current.seekTo === 'function') {
                      playerRef.current.seekTo(0);
                    }
                    if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
                      playerRef.current.playVideo();
                    }
                  } else {
                    handleNext();
                  }
                }
              },
              onError: (err: any) => {
                console.warn('YouTube Player event error:', err);
              },
            },
          });
        } catch (e) {
          console.warn('Error instantiating YT.Player:', e);
        }
      }
    };

    setupPlayer();
  }, [currentTrack?.id]);

  // Sync playback state when isPlaying prop changes from parent
  useEffect(() => {
    if (!isReadyRef.current || !playerRef.current) return;
    try {
      if (isPlaying && typeof playerRef.current.playVideo === 'function') {
        playerRef.current.playVideo();
      } else if (!isPlaying && typeof playerRef.current.pauseVideo === 'function') {
        playerRef.current.pauseVideo();
      }
    } catch (e) {
      console.warn('Error syncing playback state:', e);
    }
  }, [isPlaying]);

  // Track progress polling
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
          try {
            const curr = playerRef.current.getCurrentTime();
            if (curr !== undefined && !isNaN(curr)) setCurrentTime(curr);
            if (typeof playerRef.current.getDuration === 'function') {
              const dur = playerRef.current.getDuration();
              if (dur && dur > 0) setDuration(dur);
            }
          } catch (e) {
            // ignore polling error
          }
        }
      }, 500);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying]);

  // Clean up player on unmount
  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // ignore
        }
      }
      playerRef.current = null;
      isReadyRef.current = false;
    };
  }, []);

  // Toggle Play / Pause
  const togglePlayPause = () => {
    if (!playerRef.current || !isReadyRef.current) {
      setIsPlaying(!isPlaying);
      return;
    }
    try {
      if (isPlaying) {
        if (typeof playerRef.current.pauseVideo === 'function') {
          playerRef.current.pauseVideo();
        }
        setIsPlaying(false);
      } else {
        if (typeof playerRef.current.playVideo === 'function') {
          playerRef.current.playVideo();
        }
        setIsPlaying(true);
      }
    } catch (e) {
      console.warn('Error toggling playback:', e);
      setIsPlaying(!isPlaying);
    }
  };

  // Seek
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetTime = parseFloat(e.target.value);
    setCurrentTime(targetTime);
    if (playerRef.current && typeof playerRef.current.seekTo === 'function') {
      try {
        playerRef.current.seekTo(targetTime, true);
      } catch (err) {
        console.warn('Error seeking:', err);
      }
    }
  };

  // Volume
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseInt(e.target.value, 10);
    setVolume(newVol);
    if (playerRef.current && typeof playerRef.current.setVolume === 'function') {
      try {
        playerRef.current.setVolume(newVol);
        if (newVol === 0) {
          setIsMuted(true);
          if (typeof playerRef.current.mute === 'function') playerRef.current.mute();
        } else if (isMuted) {
          setIsMuted(false);
          if (typeof playerRef.current.unMute === 'function') playerRef.current.unMute();
        }
      } catch (err) {
        console.warn('Error setting volume:', err);
      }
    }
  };

  // Toggle Mute
  const toggleMute = () => {
    if (!playerRef.current) return;
    try {
      if (isMuted) {
        if (typeof playerRef.current.unMute === 'function') playerRef.current.unMute();
        setIsMuted(false);
        if (typeof playerRef.current.setVolume === 'function') playerRef.current.setVolume(volume || 50);
      } else {
        if (typeof playerRef.current.mute === 'function') playerRef.current.mute();
        setIsMuted(true);
      }
    } catch (err) {
      console.warn('Error toggling mute:', err);
    }
  };

  if (!currentTrack) return null;

  const currentDuration = duration || currentTrack.durationSeconds || 180;
  const progressPercent = currentDuration > 0 ? (currentTime / currentDuration) * 100 : 0;

  return (
    <>
      {/* Persistent Video Modal / YouTube IFrame Container */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-all duration-300 ${
          showVideoModal
            ? 'opacity-100 pointer-events-auto visible'
            : 'opacity-0 pointer-events-none invisible'
        }`}
        onClick={() => setShowVideoModal(false)}
      >
        <div
          className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-3 bg-neutral-950/90 border-b border-white/10 flex items-center justify-between text-xs">
            <span className="font-bold text-white truncate max-w-[80%]">
              {currentTrack.title} — {currentTrack.artist}
            </span>
            <button
              onClick={() => setShowVideoModal(false)}
              className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white/80 hover:text-white text-xs font-semibold transition-colors"
            >
              Close Video Mode
            </button>
          </div>
          <div className="flex-1 w-full h-full relative">
            <div id={containerId} className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* Floating Bottom Audio Player */}
      <div
        id="persistent-audio-player"
        className={`fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-xl shadow-2xl transition-all duration-300 ${
          isDarkMode
            ? 'bg-black/95 border-white/10 text-white'
            : 'bg-white/95 border-neutral-200 text-neutral-900'
        }`}
      >
        {/* Scrubber Progress Bar at the Very Top of Player */}
        <div className="relative w-full h-1.5 group cursor-pointer bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all pointer-events-none relative"
            style={{ width: `${progressPercent}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-lg shadow-cyan-500/50 scale-0 group-hover:scale-100 transition-transform" />
          </div>
          <input
            id="audio-progress-bar"
            type="range"
            min="0"
            max={currentDuration}
            step="1"
            value={currentTime}
            onChange={handleSeek}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            aria-label="Seek track"
          />
        </div>

        {/* Player Bar Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3">
          <div className="flex items-center justify-between gap-4 sm:gap-8">
            {/* Left: Track Info & Thumbnail */}
            <div className="flex items-center gap-3.5 min-w-0 max-w-[40%] sm:max-w-[28%]">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shrink-0 border border-white/10 shadow-md bg-black">
                <img
                  src={currentTrack.thumbnail}
                  alt={currentTrack.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {isPlaying && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="flex items-end gap-0.5 h-3">
                      <span className="w-0.5 bg-cyan-400 animate-eq-1" />
                      <span className="w-0.5 bg-cyan-300 animate-eq-2" />
                      <span className="w-0.5 bg-purple-400 animate-eq-3" />
                    </div>
                  </div>
                )}
              </div>

              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold truncate leading-tight hover:text-cyan-400 transition-colors">
                  {currentTrack.title}
                </h4>
                <p className={`text-[11px] sm:text-xs truncate ${isDarkMode ? 'text-white/50' : 'text-neutral-500'}`}>
                  {currentTrack.artist} • <span className="font-mono text-cyan-400">#{currentTrack.index.toString().padStart(2, '0')}</span>
                </p>
              </div>
            </div>

            {/* Center: Playback Controls & Scrubber Times */}
            <div className="flex flex-col items-center justify-center gap-1.5 flex-1 max-w-md">
              <div className="flex items-center gap-4 sm:gap-6">
                {/* Shuffle */}
                <button
                  id="player-shuffle-btn"
                  onClick={() => setIsShuffle(!isShuffle)}
                  className={`p-1.5 rounded-full transition-colors hidden sm:block ${
                    isShuffle
                      ? 'text-cyan-400 font-bold'
                      : isDarkMode
                      ? 'text-white/40 hover:text-white'
                      : 'text-neutral-400 hover:text-black'
                  }`}
                  title={isShuffle ? 'Shuffle Active' : 'Enable Shuffle'}
                  aria-label="Shuffle"
                >
                  <Shuffle className="w-4 h-4" />
                </button>

                {/* Previous */}
                <button
                  id="player-prev-btn"
                  onClick={handlePrevious}
                  className={`p-1.5 rounded-full transition-colors opacity-70 hover:opacity-100 ${
                    isDarkMode ? 'text-white hover:text-cyan-400' : 'text-neutral-700 hover:text-black'
                  }`}
                  title="Previous Track"
                  aria-label="Previous Track"
                >
                  <SkipBack className="w-5 h-5 fill-current" />
                </button>

                {/* High Contrast Circular Play / Pause Toggle matching Immersive UI */}
                <button
                  id="player-play-pause-btn"
                  onClick={togglePlayPause}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-black hover:bg-cyan-300 flex items-center justify-center font-bold text-xl shadow-xl hover:scale-105 active:scale-95 transition-all"
                  title={isPlaying ? 'Pause' : 'Play'}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 fill-current" />
                  ) : (
                    <Play className="w-5 h-5 fill-current translate-x-0.5" />
                  )}
                </button>

                {/* Next */}
                <button
                  id="player-next-btn"
                  onClick={handleNext}
                  className={`p-1.5 rounded-full transition-colors opacity-70 hover:opacity-100 ${
                    isDarkMode ? 'text-white hover:text-cyan-400' : 'text-neutral-700 hover:text-black'
                  }`}
                  title="Next Track"
                  aria-label="Next Track"
                >
                  <SkipForward className="w-5 h-5 fill-current" />
                </button>

                {/* Repeat */}
                <button
                  id="player-repeat-btn"
                  onClick={() => setIsRepeat(!isRepeat)}
                  className={`p-1.5 rounded-full transition-colors hidden sm:block ${
                    isRepeat
                      ? 'text-cyan-400 font-bold'
                      : isDarkMode
                      ? 'text-white/40 hover:text-white'
                      : 'text-neutral-400 hover:text-black'
                  }`}
                  title={isRepeat ? 'Repeat Active' : 'Enable Repeat'}
                  aria-label="Repeat"
                >
                  <Repeat className="w-4 h-4" />
                </button>
              </div>

              {/* Time display */}
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold">
                <span className="text-cyan-400">{formatTime(currentTime)}</span>
                <span className="text-white/30">/</span>
                <span className={isDarkMode ? 'text-white/40' : 'text-neutral-400'}>{formatTime(currentDuration)}</span>
              </div>
            </div>

            {/* Right: Volume, Share, & Video popup */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Volume Slider matching Immersive UI VOL label */}
              <div className="hidden md:flex items-center gap-2.5 w-36 lg:w-48">
                <span className={`text-[10px] font-bold tracking-wider ${isDarkMode ? 'text-white/40' : 'text-neutral-400'}`}>
                  VOL
                </span>
                <button
                  onClick={toggleMute}
                  className={`p-1 rounded-md transition-colors ${
                    isDarkMode ? 'text-white/60 hover:text-white' : 'text-neutral-600 hover:text-black'
                  }`}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-3.5 h-3.5 text-cyan-400" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5" />
                  )}
                </button>
                <div className="flex-1 flex items-center">
                  <input
                    id="player-volume-slider"
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-cyan-400"
                    aria-label="Volume slider"
                  />
                </div>
              </div>

              {/* Watch Video Mode Button */}
              <button
                id="player-video-modal-btn"
                onClick={() => setShowVideoModal(!showVideoModal)}
                className={`p-2 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${
                  showVideoModal
                    ? 'bg-cyan-500 border-cyan-400 text-black font-bold'
                    : isDarkMode
                    ? 'bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:bg-white/10'
                    : 'bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200'
                }`}
                title="Open Video View"
                aria-label="Toggle Video Mode"
              >
                <Tv className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden lg:inline text-[11px] uppercase tracking-wider">Video</span>
              </button>

              {/* Quick Share Current Playing Track */}
              <button
                id="player-share-current-btn"
                onClick={() => onOpenShare(currentTrack)}
                className={`p-2 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${
                  isDarkMode
                    ? 'bg-white/5 border-white/10 text-white/80 hover:text-cyan-400 hover:bg-white/10'
                    : 'bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-black hover:bg-neutral-200'
                }`}
                title="Share Song"
                aria-label="Share current song"
              >
                <Share2 className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline text-[11px] uppercase tracking-wider">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
