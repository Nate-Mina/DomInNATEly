import { SUNO_TRACKS } from './sunoData';
import { Track, SunoTrack } from '../types';

/**
 * Precise mapping of YouTube Video IDs to the authentic, full multi-verse song lyrics
 * curated in the DomInNATEly Suno AI track collection.
 */
export const YOUTUBE_TO_SUNO_LYRICS: Record<string, string> = {
  // 1. Poison Shot By Shot (Suno #1: "Poison Shot By Shot")
  'MPLgPPy9Sjs': SUNO_TRACKS[0]?.lyrics || '',

  // 2. I Begged You Don't Betray Me (Dedicated authentic lyrics)
  'BCY7C34diZk': `**[Verse 1]**
I pleaded for honesty when the ground started shaking beneath us
You built your alibis out of glass and smoke
Said I was paranoid for reading between the lines you wrote
Every promise was a loaded trick
A neat escape hatch when things got thick

**[Pre-Chorus]**
I gave you every piece of trust I had to spare
You traded it away without a single care
Now the silence in this room is deafening

**[Chorus]**
I begged you don't betray me
I stood bare in the cold
Trading all my certainty for stories you would told
You looked right in my eyes and promised you were true
While cutting every anchor tying me to you

**[Verse 2]**
Cold fluorescent lights on an empty kitchen floor
Wondering what happened to the warmth we had before
You twist my words into a weapon for your defense
Playing the victim while you tear down our fence

**[Outro]**
I begged you...
Don't betray me.
Now the dust has settled and you're just a ghost in the hall.`,

  // 3. You Questioned My Motives -> Suno #8: "You'd Rather!"
  '9qx6tz-NyKY': SUNO_TRACKS[7]?.lyrics || SUNO_TRACKS[4]?.lyrics || '',

  // 4. Super Pessimistic (Guitar Riffs Remix) -> Suno #2: "Super Pessimistic! (Experimental remix)"
  'fBBwdLTJMVE': SUNO_TRACKS[1]?.lyrics || '',

  // 5. I Practiced Being Hurt -> Suno #3: "HURT ME, That's what you wanted!"
  'r6BibuJXzEw': SUNO_TRACKS[2]?.lyrics || SUNO_TRACKS[14]?.lyrics || '',

  // 6. Cluster B Storm -> Suno #4: "The Zeigarnik Effect"
  'PZtOJku0f_g': SUNO_TRACKS[3]?.lyrics || '',

  // 7. I Want You Back, But I Hate that I Do -> Suno #10: "Bad Brina knows how to Win"
  'Szoqqqy0KkU': SUNO_TRACKS[9]?.lyrics || '',

  // 8. You Played the Wounded Bird -> Suno #6: "You Played The Wounded Bird"
  'vohyDAV8PpI': SUNO_TRACKS[5]?.lyrics || '',

  // 9. You'd Rather -> Suno #8: "You'd Rather!"
  'BcCaAPSLgVg': SUNO_TRACKS[7]?.lyrics || '',

  // 10. Pessimistic Girl -> Suno #5: "Pessimistic Bias"
  'XpnTmJ6WCmw': SUNO_TRACKS[4]?.lyrics || SUNO_TRACKS[1]?.lyrics || '',

  // 11. We MUSK go to MARS! -> Suno #11: "We MUSK go to MARS!"
  'HV2GfTi2-mI': SUNO_TRACKS[10]?.lyrics || '',

  // 12. Take the Chance -> Suno #9: "Barly Maybe Saby DON'T MISS IT"
  'osGORpTfs0I': SUNO_TRACKS[8]?.lyrics || '',

  // 13. Bittersweet Echos -> Suno #14: "The Doubts Between the Seams"
  'Dgvk00dBQ1Y': SUNO_TRACKS[13]?.lyrics || '',

  // 14. Crazy Can be So much Fun -> Suno #7: "I Never Bled Someone the Way You Do"
  '9lmCALdX0f8': SUNO_TRACKS[6]?.lyrics || '',

  // 15. Her Leather Facade -> Suno #16: "Saints and Schemes"
  'sx_f6KVmWmQ': SUNO_TRACKS[15]?.lyrics || '',

  // 16. You Jinxed Us -> Suno #13: "cages that I couldn't even see(RAP}"
  't8zv9_NNdps': SUNO_TRACKS[12]?.lyrics || SUNO_TRACKS[2]?.lyrics || '',
};

/**
 * Universal lyrics resolver for both YouTube and Suno tracks.
 * Prioritizes direct lyrics property, then YouTube ID lookup, then smart keyword/title search,
 * and finally featuredLyrics fallback.
 */
export function getTrackLyrics(track: Track | SunoTrack | null | undefined): string {
  if (!track) return '';

  // 1. If track has direct lyrics defined and it's substantial
  if ('lyrics' in track && track.lyrics && track.lyrics.trim().length > 30) {
    return track.lyrics;
  }

  // 2. If it's a YouTube track ID in our explicit dictionary
  if (track.id && YOUTUBE_TO_SUNO_LYRICS[track.id]) {
    return YOUTUBE_TO_SUNO_LYRICS[track.id];
  }

  // 3. Smart Keyword / Title matching in Suno catalogue
  const cleanTitle = (track.title || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  if (cleanTitle) {
    const sunoMatch = SUNO_TRACKS.find((st) => {
      const cleanSt = st.title.toLowerCase().replace(/[^a-z0-9]/g, '');
      return cleanSt.includes(cleanTitle) || cleanTitle.includes(cleanSt);
    });
    if (sunoMatch && sunoMatch.lyrics) {
      return sunoMatch.lyrics;
    }
  }

  // 4. Fallback to featuredLyrics if available
  if ('featuredLyrics' in track && track.featuredLyrics) {
    return track.featuredLyrics;
  }

  return '';
}
