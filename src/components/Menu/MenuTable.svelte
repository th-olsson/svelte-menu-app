<script lang="ts">
	import MenuItem from './MenuItem.svelte';
</script>

<h2>Maträtter</h2>
<table>
	<MenuItem name="Lasagne" price={99} />
	<MenuItem name="Pasta" price={79} />
	<MenuItem name="Pizza" price={89} />
</table>

<h2>Drycker</h2>
<table>
	<MenuItem name="Vatten" price={19} />
	<MenuItem name="Cola" price={29} />
	<MenuItem name="Öl" price={39} />
</table>
