import type { Menu as IMenu, MenuItem as IMenuItem } from '@prisma/client';

export type Menu = IMenu & {
	items: IMenuItem[];
};
