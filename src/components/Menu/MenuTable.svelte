<script lang="ts">
	import MenuItem from './MenuItem.svelte';
	import type { Menu } from '../../mockdata';

	export let menu: Menu;
	const { name, items } = menu;
</script>

<h2>{name}</h2>
<table>
	{#each items as item}
		<MenuItem name={item.name} price={item.price} />
	{/each}
</table>
