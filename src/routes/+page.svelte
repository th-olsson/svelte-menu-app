<script async script lang="ts">
	import MenuTable from '../components/Menu/MenuTable.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ menus } = data);

	$: heading = menus?.length > 1 ? 'Our menus' : 'Our menu';
</script>

<h1>{heading}</h1>
{#each menus as menu (menu.id)}
	<MenuTable {menu} />
{/each}
