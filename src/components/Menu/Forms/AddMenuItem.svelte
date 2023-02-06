<script lang="ts">
	import type { Menu } from '../../../../prisma/types';
	type MenuItem = Menu['items'][number];

	export let id: Menu['id'];

	let name: MenuItem['name'] = '';
	let price: MenuItem['price'] = 0;

	const prefix = 'add-menu-item';
</script>

<form action="?/createMenuItem" method="post">
	<fieldset>
		<legend>Add menu item</legend>
		<input type="hidden" name="menuId" value={id} />
		<label for="{prefix}-name-{id}">Name</label>
		<input id="{prefix}-name-{id}" type="text" name="name" bind:value={name} />
		<label for="{prefix}-price-{id}">Price</label>
		<input id="{prefix}-price-{id}" type="number" name="price" bind:value={price} min={0} />
		<button type="submit">Add</button>
	</fieldset>
</form>

<p>
	name: {name} <br />
	price: {price}
</p>
