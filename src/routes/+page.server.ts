import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';

export const load: PageServerLoad = async () => {
	return {
		menus: await prisma.menu.findMany({ include: { items: true } })
	};
};
