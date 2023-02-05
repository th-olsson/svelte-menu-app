export type Menu = {
	id: string;
	name: string;
	items: MenuItem[];
};

export type MenuItem = {
	id: string;
	name: string;
	price: number;
};

export const menus: Menu[] = [
	{
		id: '1',
		name: 'Food',
		items: [
			{
				id: '1',
				name: 'Lasagne',
				price: 99
			},
			{
				id: '2',
				name: 'Pasta',
				price: 79
			},
			{
				id: '3',
				name: 'Pizza',
				price: 89
			}
		]
	},
	{
		id: '2',
		name: 'Drinks',
		items: [
			{
				id: '4',
				name: 'Water',
				price: 19
			},
			{
				id: '5',
				name: 'Coke',
				price: 29
			},
			{
				id: '6',
				name: 'Beer',
				price: 39
			}
		]
	}
];
