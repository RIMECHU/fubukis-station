import type { SupportedLang } from '../locales';
import { defaultLang } from '../locales';

const quickInfo: Record<SupportedLang, string[]> = {
  en: [
    '凛として時雨 FAN',
    'Guitar Player',
    'FPS Player',
  ],
  zh: [
    '凛として時雨 FAN',
    '吉他手',
    'FPS 玩家',
  ],
} as const;

export function getQuickInfo(lang: SupportedLang) {
  return quickInfo[lang] ?? quickInfo[defaultLang];
}
