import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
	const foodMenu = await prisma.menu.upsert({
		where: {
			id: '1'
		},
		update: {},
		create: {
			id: '1',
			name: 'Food',
			items: {
				create: [
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
			}
		}
	});

	const drinksMenu = await prisma.menu.upsert({
		where: {
			id: '2'
		},
		update: {},
		create: {
			id: '2',
			name: 'Drinks',
			items: {
				create: [
					{
						name: 'Water',
						price: 19
					},
					{
						name: 'Coke',
						price: 29
					},
					{
						name: 'Beer',
						price: 39
					}
				]
			}
		}
	});

	console.log({ foodMenu, drinksMenu });
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
