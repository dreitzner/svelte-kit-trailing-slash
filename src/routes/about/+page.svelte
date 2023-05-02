<script>
  import { page } from "$app/stores";

  export let data;
</script>

<div class="text-column">
  <p>+page.server.js pathname: {data.pathname}</p>
  <p>+page.svelte pathname: {$page.url.pathname}</p>
</div>
