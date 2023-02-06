<script lang="ts">
	import type { Menu } from '../../../prisma/types';
	import AddMenuItem from './Forms/AddMenuItem.svelte';
	import MenuItem from './MenuItem.svelte';

	export let menu: Menu;
	const { id, name, items } = menu;
</script>

<h2>{name}</h2>
<table>
	{#each items as item (item.id)}
		<MenuItem {...item} />
	{/each}
</table>
<AddMenuItem {id} />
