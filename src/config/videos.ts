/**
 * Cover videos configuration
 * YouTube guitar cover videos
 */

export interface VideoEntry {
  id: string;
  title: string;
  youtubeId: string;
  date: string; // YYYY-MM-DD
  tags: string[];
  description: string;
}

const videos: VideoEntry[] = [
  {
    id: '1',
    title: 'unravel - TK from 凛として時雨 (Cover)',
    youtubeId: 'JUchy1KSLOI',
    date: '2026-06-01',
    tags: ['TK', '凛として時雨', 'Electric'],
    description: 'unravel acoustic guitar cover',
  },
  {
    id: '2',
    title: 'Signal - TK from 凛として時雨 (Cover)',
    youtubeId: 'JUchy1KSLOI',
    date: '2026-05-20',
    tags: ['TK', 'Acoustic'],
    description: 'Signal cover with fingerstyle arrangement',
  },
  {
    id: '3',
    title: 'katharsis - TK from 凛として時雨 (Cover)',
    youtubeId: 'JUchy1KSLOI',
    date: '2026-05-10',
    tags: ['TK', 'Electric', 'Solo'],
    description: 'katharsis full band cover',
  },
  {
    id: '4',
    title: 'Fantastic Magic - TK (Cover)',
    youtubeId: 'JUchy1KSLOI',
    date: '2026-04-28',
    tags: ['TK', 'Acoustic', 'Fingerstyle'],
    description: 'Fantastic Magic fingerstyle guitar cover',
  },
  {
    id: '5',
    title: 'abnormalize - 凛として時雨 (Cover)',
    youtubeId: 'JUchy1KSLOI',
    date: '2026-04-15',
    tags: ['凛として時雨', 'Electric'],
    description: 'abnormalize guitar cover',
  },
  {
    id: '6',
    title: 'white silence - TK (Cover)',
    youtubeId: 'JUchy1KSLOI',
    date: '2026-03-30',
    tags: ['TK', 'Acoustic'],
    description: 'white silence piano & guitar cover',
  },
];

export function getAllVideos(): VideoEntry[] {
  return videos.sort((a, b) => b.date.localeCompare(a.date));
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  videos.forEach(v => v.tags.forEach(t => tags.add(t)));
  return Array.from(tags).sort();
}

export function getVideosByTag(tag: string): VideoEntry[] {
  return videos.filter(v => v.tags.includes(tag));
}

export function getVideosByYear(year: string): VideoEntry[] {
  return videos.filter(v => v.date.startsWith(year));
}

export function getVideoYears(): string[] {
  const years = new Set<string>();
  videos.forEach(v => years.add(v.date.slice(0, 4)));
  return Array.from(years).sort().reverse();
}
