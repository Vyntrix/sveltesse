<script lang="ts">
	import { setLocale } from "$lib/i18n/i18n-svelte"
	import type { Locales } from "$lib/i18n/i18n-types"
	import { locales } from "$lib/i18n/i18n-util"
	import { loadLocaleAsync } from "$lib/i18n/i18n-util.async"
	import { toggleTheme } from "$lib/theme"

  export let locale: Locales

  async function toggleLocales() {
    const currentIndex = locales.indexOf(locale);
    const nextIndex = (currentIndex + 1) % locales.length;
    const nextLocale = locales[nextIndex];

    await loadLocaleAsync(nextLocale);
    setLocale(nextLocale);
    locale = nextLocale;

    document.cookie = `lang=${nextLocale}; path=/`
  }
</script>

<nav class="flex flex-gap-4 mt-6 justify-center text-xl">
  <a href="/" class="icon-btn">
  <div class="i-carbon-buoy"/></a>

  <button class="icon-btn" on:click={toggleTheme}>
    <div class="i-carbon-sun dark:i-carbon-moon"/>
  </button>

  <button class="icon-btn" on:click={toggleLocales}>
    <div class="i-carbon-language"/>
  </button>

  <a href="/about" class="icon-btn">
  <div class="i-carbon-dicom-overlay"/></a>

  <a href="https://github.com/vyntrix/sveltesse" target="_blank" title="GitHub" class="icon-btn">
  <div class="i-carbon-logo-github"/></a>
</nav>
