<script context="module">
  export const prerender = false;
</script>

<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte'

  export let data;
</script>

<div>
  <div class="text-4xl">
    <div class="i-carbon-pedestrian inline-block" />
  </div>
  <p>
    {$LL.intro.hi({ name: data.name })}
  </p>

  <p class="text-sm opacity-75">
    <em>
      {$LL.intro.dynamic_route()}
    </em>
  </p>

  <div>
    <button class="m3 mt6 text-sm btn" on:click={() => window.history.back()}>
      {$LL.button.back()}
    </button>
  </div>
</div>
