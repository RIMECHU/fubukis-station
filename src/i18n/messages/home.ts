import type { SupportedLang } from '../locales';

export const home: Record<SupportedLang, Record<string, string>> = {
  en: {
    'home.intro': "a strange player.",
    'home.latestPosts': 'Latest Posts',
    'home.viewAll': 'View all',
    'home.socials.title': 'Socials',
    'home.uptime': 'online {n}d',
    'home.postsCount': '{n} posts · {m} tags',
    'home.nowPlaying': 'listening',
  },
  zh: {
    'home.intro': '一个奇怪的玩家。',
    'home.latestPosts': '最新动态',
    'home.viewAll': '查看全部',
    'home.socials.title': '社交链接',
    'home.uptime': '建站 {n} 天',
    'home.postsCount': '{n} 篇 · {m} 个标签',
    'home.nowPlaying': '正在听',
  },
};
