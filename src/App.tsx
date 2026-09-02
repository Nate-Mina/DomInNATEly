import React, { useState, useMemo, useEffect } from 'react';
import { TRACKS, PLAYLIST_URL, YOUTUBE_CHANNEL_URL } from './data/tracks';
import { Track, SortField, CategoryFilter } from './types';
import { Header } from './components/Header';
import { TrackCard } from './components/TrackCard';
import { SortingAndFilter } from './components/SortingAndFilter';
import { AudioPlayer } from './components/AudioPlayer';
import { ShareModal } from './components/ShareModal';
import { TrackDetailModal } from './components/TrackDetailModal';
import { Play, Pause, Shuffle, LayoutGrid, List, Music, Sparkles, Disc, Heart, Share2 } from 'lucide-react';

export default function App() {
  // Dark Mode state with localStorage persistence
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dominnately_theme');
      if (saved) return saved === 'dark';
      return true; // Default to dark mode for rock/metal band aesthetic
    }
    return true;
  });

  // Player State
  const [currentTrack, setCurrentTrack] = useState<Track | null>(TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Sorting & Filtering State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortField, setSortField] = useState<SortField>('playlist');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Modals
  const [sharingTrack, setSharingTrack] = useState<Track | null>(null);
  const [detailedTrack, setDetailedTrack] = useState<Track | null>(null);

  // Persist dark mode setting
  useEffect(() => {
    localStorage.setItem('dominnately_theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle Play/Pause
  const handlePlayTrack = (track: Track) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  // Filtered & Sorted Tracks
  const filteredAndSortedTracks = useMemo(() => {
    let result = [...TRACKS];

    // Search query filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.artist.toLowerCase().includes(q) ||
          (t.featuredLyrics && t.featuredLyrics.toLowerCase().includes(q)) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          (t.description && t.description.toLowerCase().includes(q))
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((t) => t.category === selectedCategory);
    }

    // Sorting
    result.sort((a, b) => {
      switch (sortField) {
        case 'playlist':
          return a.index - b.index;
        case 'newest':
          return b.index - a.index;
        case 'duration-desc':
          return b.durationSeconds - a.durationSeconds;
        case 'duration-asc':
          return a.durationSeconds - b.durationSeconds;
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        default:
          return a.index - b.index;
      }
    });

    return result;
  }, [searchQuery, selectedCategory, sortField]);

  // Quick Play All / Shuffle All
  const handlePlayAll = () => {
    if (filteredAndSortedTracks.length > 0) {
      setCurrentTrack(filteredAndSortedTracks[0]);
      setIsPlaying(true);
    }
  };

  const handleShufflePlayAll = () => {
    if (filteredAndSortedTracks.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredAndSortedTracks.length);
      setCurrentTrack(filteredAndSortedTracks[randomIndex]);
      setIsPlaying(true);
    }
  };

  return (
    <div
      className={`min-h-screen font-outfit transition-colors duration-200 flex flex-col ${
        isDarkMode ? 'bg-[#050505] text-white' : 'bg-neutral-50 text-neutral-900'
      }`}
    >
      {/* Top Header with Band Name DomInNATEly & Dark Mode Toggle */}
      <Header
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        trackCount={TRACKS.length}
        onQuickShareAll={() => setSharingTrack(currentTrack || TRACKS[0])}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 pb-36">
        {/* Quick Actions Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2.5">
            <button
              id="play-all-tracks-btn"
              onClick={handlePlayAll}
              className="px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all active:scale-95"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Play All</span>
            </button>

            <button
              id="shuffle-all-tracks-btn"
              onClick={handleShufflePlayAll}
              className={`px-3.5 py-2 rounded-full border text-xs sm:text-sm font-bold flex items-center gap-2 transition-all active:scale-95 ${
                isDarkMode
                  ? 'bg-white/5 border-white/10 text-white hover:text-cyan-400 hover:border-cyan-400/40'
                  : 'bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100'
              }`}
            >
              <Shuffle className="w-3.5 h-3.5 text-cyan-400" />
              <span>Shuffle</span>
            </button>
          </div>

          {/* View mode toggle (Grid / List) */}
          <div
            className={`flex items-center gap-1.5 p-1 rounded-full border ${
              isDarkMode ? 'border-white/10 bg-white/5' : 'border-neutral-300 bg-neutral-100'
            }`}
          >
            <button
              id="view-mode-grid"
              onClick={() => setViewMode('grid')}
              className={`p-1.5 px-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === 'grid'
                  ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20'
                  : isDarkMode
                  ? 'text-white/60 hover:text-white'
                  : 'text-neutral-600 hover:text-black'
              }`}
              title="Grid View"
              aria-label="Grid View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Grid</span>
            </button>
            <button
              id="view-mode-list"
              onClick={() => setViewMode('list')}
              className={`p-1.5 px-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === 'list'
                  ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20'
                  : isDarkMode
                  ? 'text-white/60 hover:text-white'
                  : 'text-neutral-600 hover:text-black'
              }`}
              title="List View"
              aria-label="List View"
            >
              <List className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">List</span>
            </button>
          </div>
        </div>

        {/* Sorting, Search & Filter Controls */}
        <SortingAndFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortField={sortField}
          onSortChange={setSortField}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          totalResults={filteredAndSortedTracks.length}
          isDarkMode={isDarkMode}
        />

        {/* Responsive Catalog Layout (with Now Playing Showcase Stage on XL screens) */}
        <div className="xl:grid xl:grid-cols-12 xl:gap-8 items-start">
          {/* Main Catalog column */}
          <div className="xl:col-span-8">
            {filteredAndSortedTracks.length > 0 ? (
              viewMode === 'grid' ? (
                <div
                  id="tracks-grid-container"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                  {filteredAndSortedTracks.map((track) => (
                    <TrackCard
                      key={track.id}
                      track={track}
                      isPlaying={isPlaying}
                      isCurrentTrack={currentTrack?.id === track.id}
                      onPlay={handlePlayTrack}
                      onOpenShare={(t) => setSharingTrack(t)}
                      onOpenDetails={(t) => setDetailedTrack(t)}
                      isDarkMode={isDarkMode}
                    />
                  ))}
                </div>
              ) : (
                /* Compact Immersive List View */
                <div id="tracks-list-container" className="flex flex-col gap-2.5">
                  {/* Table Column Header matching Immersive UI */}
                  <div
                    className={`grid grid-cols-12 text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 ${
                      isDarkMode ? 'text-white/40' : 'text-neutral-500'
                    }`}
                  >
                    <div className="col-span-7 sm:col-span-6">Track Info</div>
                    <div className="hidden sm:block sm:col-span-3">Category</div>
                    <div className="col-span-3 sm:col-span-2">Duration</div>
                    <div className="col-span-2 sm:col-span-1 text-right">Share</div>
                  </div>

                  {filteredAndSortedTracks.map((track) => {
                    const isCurrent = currentTrack?.id === track.id;
                    return (
                      <div
                        key={track.id}
                        id={`track-list-item-${track.id}`}
                        onClick={() => handlePlayTrack(track)}
                        className={`group p-3 sm:p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                          isCurrent
                            ? isDarkMode
                              ? 'bg-white/10 border-cyan-400/80 shadow-lg shadow-cyan-950/30 ring-1 ring-cyan-400/30'
                              : 'bg-cyan-50/50 border-cyan-400 text-cyan-900 shadow-xs'
                            : isDarkMode
                            ? 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/15 text-white'
                            : 'bg-white hover:bg-neutral-50 border-neutral-200 text-neutral-900 shadow-xs'
                        }`}
                      >
                        <div className="grid grid-cols-12 w-full items-center gap-2">
                          {/* Col: Track Info (Thumbnail, Play button, Title) */}
                          <div className="col-span-7 sm:col-span-6 flex items-center gap-3 min-w-0">
                            {/* Gradient Index Badge */}
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-600 to-purple-700 flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-xs">
                              {track.index.toString().padStart(2, '0')}
                            </div>

                            {/* Thumbnail */}
                            <img
                              src={track.thumbnail}
                              alt={track.title}
                              className="w-12 h-8 rounded-lg object-cover border border-white/10 shrink-0 hidden sm:block"
                              referrerPolicy="no-referrer"
                            />

                            <div className="min-w-0">
                              <h4
                                className={`font-bold text-xs sm:text-sm truncate transition-colors ${
                                  isCurrent
                                    ? 'text-cyan-400'
                                    : 'group-hover:text-cyan-400'
                                }`}
                              >
                                {track.title}
                              </h4>
                              <p className={`text-[11px] truncate ${isDarkMode ? 'text-white/50' : 'text-neutral-500'}`}>
                                {track.artist}
                              </p>
                            </div>
                          </div>

                          {/* Col: Category */}
                          <div className="hidden sm:block sm:col-span-3">
                            <span
                              className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border ${
                                isDarkMode
                                  ? 'bg-white/5 border-white/10 text-white/60'
                                  : 'bg-neutral-100 border-neutral-300 text-neutral-600'
                              }`}
                            >
                              {track.category}
                            </span>
                          </div>

                          {/* Col: Duration */}
                          <div className="col-span-3 sm:col-span-2">
                            <span className="text-xs font-mono text-cyan-400 font-bold">
                              {track.duration}
                            </span>
                          </div>

                          {/* Col: Actions */}
                          <div className="col-span-2 sm:col-span-1 flex items-center justify-end gap-1">
                            <button
                              id={`list-share-btn-${track.id}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSharingTrack(track);
                              }}
                              className={`p-1.5 rounded-md transition-colors ${
                                isDarkMode
                                  ? 'text-white/50 hover:text-cyan-400 hover:bg-white/10'
                                  : 'text-neutral-500 hover:text-black hover:bg-neutral-200'
                              }`}
                              title="Share Track"
                              aria-label={`Share ${track.title}`}
                            >
                              <Share2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )
            ) : (
              /* Empty Search State */
              <div
                id="empty-tracks-state"
                className={`rounded-2xl border p-12 text-center my-6 backdrop-blur-md ${
                  isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-neutral-200'
                }`}
              >
                <Music className="w-10 h-10 mx-auto mb-3 text-cyan-400 opacity-80" />
                <h3 className="text-base font-bold">No tracks matched your search</h3>
                <p className={`text-xs mt-1 max-w-sm mx-auto ${isDarkMode ? 'text-white/50' : 'text-neutral-600'}`}>
                  Try clearing your search query or selecting "All Tracks" to view the complete catalog.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSortField('playlist');
                  }}
                  className="mt-4 px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Immersive UI Now Playing Showcase Stage (Desktop XL) */}
          <aside className="hidden xl:block xl:col-span-4 sticky top-24">
            <div
              id="immersive-now-playing-stage"
              className={`rounded-3xl border p-6 flex flex-col items-center justify-center backdrop-blur-xl transition-all shadow-2xl relative overflow-hidden ${
                isDarkMode
                  ? 'bg-black/40 border-white/10 text-white'
                  : 'bg-white/90 border-neutral-200 text-neutral-900'
              }`}
            >
              {/* Ambient Cyan Pulse Glow from Design */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-cyan-500/15 blur-[60px] rounded-full pointer-events-none animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-600/15 blur-[60px] rounded-full pointer-events-none" />

              {/* Artwork Box */}
              <div className="relative w-full aspect-square mb-6 group">
                <div className="absolute inset-0 bg-cyan-500/20 blur-[50px] rounded-full animate-pulse pointer-events-none" />
                <div className="relative z-10 w-full h-full bg-gradient-to-br from-neutral-800 to-black border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                  <img
                    src={currentTrack.thumbnail}
                    alt={currentTrack.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle D-LY typographic watermark */}
                  <div className="absolute bottom-3 right-3 text-2xl font-black text-white/25 font-mono tracking-widest pointer-events-none drop-shadow-md">
                    D-LY
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-14 h-14 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
                      aria-label="Toggle playback"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 fill-current" />
                      ) : (
                        <Play className="w-6 h-6 fill-current translate-x-0.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Track Title & Artist */}
              <div className="text-center w-full">
                <h2 className="text-xl font-black mb-1 tracking-tight truncate" title={currentTrack.title}>
                  {currentTrack.title}
                </h2>
                <p className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
                  {isPlaying ? 'Now Playing' : 'Selected Track'} • #{currentTrack.index.toString().padStart(2, '0')}
                </p>

                {/* Equalizer Bars */}
                <div className="flex gap-1 justify-center items-end h-8 mb-4">
                  <div className={`w-1 bg-cyan-500 rounded-full ${isPlaying ? 'h-[60%] animate-eq-1' : 'h-[25%]'}`} />
                  <div className={`w-1 bg-cyan-500 rounded-full ${isPlaying ? 'h-[90%] animate-eq-2' : 'h-[40%]'}`} />
                  <div className={`w-1 bg-cyan-500 rounded-full ${isPlaying ? 'h-[40%] animate-eq-3' : 'h-[20%]'}`} />
                  <div className={`w-1 bg-cyan-500 rounded-full ${isPlaying ? 'h-[70%] animate-eq-4' : 'h-[35%]'}`} />
                  <div className={`w-1 bg-cyan-500 rounded-full ${isPlaying ? 'h-[30%] animate-eq-2' : 'h-[15%]'}`} />
                </div>

                {/* Lyrics Excerpt */}
                {currentTrack.featuredLyrics && (
                  <p className="text-xs italic text-white/60 mb-5 line-clamp-2 px-2">
                    “{currentTrack.featuredLyrics}”
                  </p>
                )}

                {/* Quick Share Buttons */}
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => setSharingTrack(currentTrack)}
                    className="px-4 py-2 rounded-full bg-white/10 hover:bg-cyan-500 hover:text-black text-white border border-white/10 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share Track</span>
                  </button>
                  <button
                    onClick={() => setDetailedTrack(currentTrack)}
                    className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all"
                  >
                    <Music className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Footer info & playlist credit */}
        <footer
          id="music-gallery-footer"
          className={`mt-16 pt-8 border-t text-center text-xs ${
            isDarkMode ? 'border-white/10 text-white/50' : 'border-neutral-200 text-neutral-500'
          }`}
        >
          <p className="font-bold text-sm mb-1 tracking-wider text-cyan-400 uppercase font-mono">
            DomInNATEly
          </p>
          <p>
            Official Music Archive & Player • Based on the playlist{' '}
            <a
              href={PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              DomInNATEly's Music
            </a>
          </p>
          <p className="mt-2 text-[11px] opacity-75">
            All songs written & performed by DomInNATEly / Dom-I-NATE. Audio powered by YouTube Media Integration.
          </p>
        </footer>
      </main>

      {/* Interactive Sticky Audio Player */}
      <AudioPlayer
        currentTrack={currentTrack}
        playlist={filteredAndSortedTracks.length > 0 ? filteredAndSortedTracks : TRACKS}
        onTrackChange={(track) => {
          setCurrentTrack(track);
          setIsPlaying(true);
        }}
        onOpenShare={(track) => setSharingTrack(track)}
        isDarkMode={isDarkMode}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />

      {/* Social Media Sharing Modal for Every Song */}
      <ShareModal
        track={sharingTrack}
        isOpen={!!sharingTrack}
        onClose={() => setSharingTrack(null)}
        isDarkMode={isDarkMode}
      />

      {/* Track Details & Lyrics Modal */}
      <TrackDetailModal
        track={detailedTrack}
        isOpen={!!detailedTrack}
        onClose={() => setDetailedTrack(null)}
        isPlaying={isPlaying}
        isCurrentTrack={currentTrack?.id === detailedTrack?.id}
        onPlay={handlePlayTrack}
        onOpenShare={(t) => setSharingTrack(t)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
