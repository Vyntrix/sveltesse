<script lang="ts">
	import { goto } from "$app/navigation"
  import { LL } from "$lib/i18n/i18n-svelte"
  import * as config from "$lib/config"
	import TheInput from "$lib/components/TheInput.svelte"

  let name: string

  function go() {
    if (name)
      goto(`/hi/${name}`)
  }
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<div>
  <div class="text-4xl">
    <div class="i-carbon-buoy inline-block"/>
  </div>
  <p>
    <a rel="noreferrer" href="https://github.com/vyntrix/vitesse-svelte" target="_blank">
      {config.title}
    </a>
  </p>
  <p>
    <em class="text-sm opacity-75">{$LL.intro.desc()}</em>
  </p>

  <div class="py-4" />

  <TheInput
    bind:value={name}
    placeholder={$LL.intro.whats_you_name()}
    autocomplete="off"
  />
  <label class="hidden" for="input">{$LL.intro.whats_you_name()}</label>

  <div>
    <button class="m-3 text-sm btn" disabled={!name} on:click={go}>
      {$LL.button.go()}
    </button>
  </div>
</div>
