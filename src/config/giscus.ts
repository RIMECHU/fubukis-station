/**
 * Giscus Configuration
 * https://giscus.app/
 */

import { SITE_URL } from '../consts';

export const giscusConfig = {
	repo: 'RIMECHU/fubukis-station',
	repoId: 'R_kgDOS2eDxA',
	category: 'Announcements',
	categoryId: 'DIC_kwDOS2eDxM4C-8UL',
	reactionsEnabled: true,
	inputPosition: 'bottom' as const,
	lang: 'zh-CN',
	loading: 'lazy' as const,
	siteUrl: SITE_URL,
};

export default giscusConfig;
