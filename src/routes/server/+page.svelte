<script>
  import { page } from "$app/stores";

  export let data;
  $: matches = data.pathname === $page.url.pathname;
</script>

<div class="text-column">
	<p>matches: {matches}</p>
	<p>+page.server.js pathname: {data.pathname}</p>
	<p>+page.svelte pathname: {$page.url.pathname}</p>
</div>
