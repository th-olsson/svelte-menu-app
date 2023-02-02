export type Menu = {
	name: string;
	items: MenuItem[];
};

export type MenuItem = {
	name: string;
	price: number;
};

export const menus: Menu[] = [
	{
		name: 'Maträtter',
		items: [
			{
				name: 'Lasagne',
				price: 99
			},
			{
				name: 'Pasta',
				price: 79
			},
			{
				name: 'Pizza',
				price: 89
			}
		]
	},
	{
		name: 'Drycker',
		items: [
			{
				name: 'Vatten',
				price: 19
			},
			{
				name: 'Cola',
				price: 29
			},
			{
				name: 'Öl',
				price: 39
			}
		]
	}
];
