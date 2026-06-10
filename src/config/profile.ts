/**
 * Profile configuration
 * Personal information and social links
 */

import type { Social } from '../types';

// Quick info localization helper
export { getQuickInfo } from '../i18n/messages/profile';

/**
 * Social media links
 */
export const SOCIAL_LINKS: Social[] = [
	{
		name: 'GitHub',
		url: 'https://github.com/RIMECHU',
		icon: 'ph:github-logo-duotone',
	},
	{
		name: 'X (Twitter)',
		url: 'https://x.com/rurudowO',
		icon: 'ph:x-logo-duotone',
	},
	{
		name: 'Bilibili',
		url: 'https://space.bilibili.com/176337042',
		icon: 'simple-icons:bilibili',
	},
	{
		name: 'YouTube',
		url: 'https://youtube.com/@RIMECHU',
		icon: 'ph:youtube-logo-duotone',
	},
];
