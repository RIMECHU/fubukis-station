import type { SupportedLang } from '../locales';

export const home: Record<SupportedLang, Record<string, string>> = {
  en: {
    'home.intro': "a strange player.",
    'home.latestPosts': 'Latest Posts',
    'home.viewAll': 'View all',
    'home.socials.title': 'Socials',
  },
  zh: {
    'home.intro': '一个奇怪的玩家。',
    'home.latestPosts': '最新动态',
    'home.viewAll': '查看全部',
    'home.socials.title': '社交链接',
  },
};
