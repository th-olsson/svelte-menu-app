<script lang="ts">
	import MenuTable from '../components/Menu/MenuTable.svelte';
	import { menus } from '../mockdata';

	const heading = menus.length > 1 ? 'Our menus' : 'Our menu';
</script>

<h1>{heading}</h1>
{#each menus as menu (menu.name)}
	<MenuTable {menu} />
{/each}
