import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		menus: await prisma.menu.findMany({ include: { items: true } })
	};
};

export const actions: Actions = {
	createMenuItem: async ({ request }) => {
		const { menuId, name, price } = Object.fromEntries(await request.formData());
		try {
			const menuItem = await prisma.menuItem.create({
				data: {
					name: String(name),
					price: Number(price),
					Menu: { connect: { id: String(menuId) } }
				}
			});
			return {
				status: 201,
				body: menuItem
			};
		} catch (error) {
			console.error(error);
			return fail(500, { message: 'Internal Server Error' });
		}
	},
	deleteMenuItem: async ({ request }) => {
		const { menuItemId } = Object.fromEntries(await request.formData());
		if (!menuItemId) {
			return fail(400, { message: 'Bad Request' });
		}
		try {
			const menuItem = await prisma.menuItem.delete({
				where: {
					id: String(menuItemId)
				}
			});
			return {
				status: 200,
				body: menuItem
			};
		} catch (error) {
			console.error(error);
			return fail(500, { message: 'Internal Server Error' });
		}
	}
};
