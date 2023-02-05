<script lang="ts">
	import type { Menu } from '../../../prisma/types';
	import MenuItem from './MenuItem.svelte';

	export let menu: Menu;
	const { name, items } = menu;
</script>

<h2>{name}</h2>
<table>
	{#each items as item (item.id)}
		<MenuItem {...item} />
	{/each}
</table>
