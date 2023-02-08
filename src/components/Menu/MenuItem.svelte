<script lang="ts">
	import EditMenuItem from './Forms/EditMenuItem.svelte';

	export let id: string;
	export let name: string;
	export let price: number;

	let editing = false;
</script>

<tr>
	{#if editing}
		<td>
			<EditMenuItem {id} {name} {price} bind:editing />
		</td>
	{:else}
		<td>{name}</td>
		<td>{price} kr</td>
		<!-- TODO: Only render this if the user is logged in -->
		<td>
			<button type="button" on:click={() => (editing = !editing)}>Edit</button>
		</td>
		<td>
			<form action="?/deleteMenuItem" method="post">
				<input type="hidden" name="menuItemId" value={id} />
				<button type="submit">Delete</button>
			</form>
		</td>
	{/if}
</tr>
