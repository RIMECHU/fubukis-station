import type { SupportedLang } from '../i18n/locales';
import { defaultLang } from '../i18n/config';

export interface LinkCardProps {
  link: string;
  linkText: string;
  description: string;
  icon?: string;
}

type LocalizedLink = {
  link: string;
  icon?: string;
  linkText: Record<SupportedLang, string>;
  description: Record<SupportedLang, string>;
};

const localizedLinks: LocalizedLink[] = [];

export function getLinksByLang(lang: SupportedLang): LinkCardProps[] {
  return localizedLinks.map(({ link, icon, linkText, description }) => ({
    link,
    icon,
    linkText: linkText[lang] ?? linkText[defaultLang],
    description: description[lang] ?? description[defaultLang],
  }));
}

export { localizedLinks };
