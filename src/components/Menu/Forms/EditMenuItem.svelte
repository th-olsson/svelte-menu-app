<script lang="ts">
	import type { Menu } from '../../../../prisma/types';
	type MenuItem = Menu['items'][number];

	export let id: Menu['id'];
	export let name: MenuItem['name'];
	export let price: MenuItem['price'];
	export let editing: boolean;

	const prefix = 'edit-menu-item';
</script>

<form action="?/updateMenuItem" method="post">
	<fieldset>
		<legend>Edit menu item</legend>
		<input type="hidden" name="menuItemId" value={id} />
		<label for="{prefix}-name-{id}">Name</label>
		<input id="{prefix}-name-{id}" type="text" name="name" bind:value={name} />
		<label for="{prefix}-price-{id}">Price</label>
		<input id="{prefix}-price-{id}" type="number" name="price" bind:value={price} min={0} />
		<button type="submit">Update</button>
		<button type="button" on:click={() => (editing = !editing)}>Cancel</button>
	</fieldset>
</form>
