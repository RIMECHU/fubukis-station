import type { SupportedLang } from '../locales';

export const links: Record<SupportedLang, Record<string, string>> = {
  en: {
    'links.friends.title': 'Cover',
    'links.friends.description': 'Guitar Cover Videos',
    'links.tags': 'Tags',
    'links.all': 'All Videos',
    'links.date': 'Date',
    'links.clearTags': 'Clear',
    'links.clearDate': 'Clear',
  },
  zh: {
    'links.friends.title': 'Cover',
    'links.friends.description': '吉他翻弹视频',
    'links.tags': '标签',
    'links.all': '全部视频',
    'links.date': '日期',
    'links.clearTags': '清除标签',
    'links.clearDate': '清除日期',
  },
};
