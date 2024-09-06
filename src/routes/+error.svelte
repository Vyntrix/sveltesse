<script lang="ts">
	import { page } from "$app/stores"
	import LL from "$lib/i18n/i18n-svelte"
</script>

<main class="px4 py4 text-center teal-700 dark-gray-200">
  <div class="text-4xl">
    <div class="i-carbon-warning inline-block" />
  </div>

  {$page.error?.message}

  <div>
    <button class="text-sm btn m3 mt8" on:click={() => window.history.back()}>
      {$LL.button.back()}
    </button>
  </div>
</main>
