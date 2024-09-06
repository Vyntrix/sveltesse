<script lang="ts">
	import TheFooter from '$lib/components/TheFooter.svelte'
  import * as config from '$lib/config'

	import '@unocss/reset/tailwind.css'
	import '../styles/main.css'
	import 'uno.css'

  export let data;
</script>



<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
  <slot />
  <TheFooter locale={data.locale} />
  <div class="mx-auto mt-5 text-center text-sm opacity-50">
    [Default Layout]
  </div>
</main>
