<script lang="ts">
	import MenuTable from '../components/Menu/MenuTable.svelte';
	import { menus } from '../mockdata';

	const heading = menus.length > 1 ? 'Våra menyer' : 'Vår meny';
</script>

<h1>{heading}</h1>
{#each menus as menu}
	<MenuTable {menu} />
{/each}
