<script lang="ts">
	export let id: string;
	export let name: string;
	export let price: number;
</script>

<tr>
	<td>{name}</td>
	<td>{price} kr</td>
	<!-- TODO: Only render this if the user is logged in -->
	<td>
		<form action="?/deleteMenuItem" method="post">
			<input type="hidden" name="menuItemId" value={id} />
			<button type="submit">Delete</button>
		</form>
	</td>
</tr>
