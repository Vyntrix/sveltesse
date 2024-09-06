import { setLocale } from '$lib/i18n/i18n-svelte.js';
import { loadLocaleAsync } from '$lib/i18n/i18n-util.async.js';

export const load = (async (event) => {
  const locale = event.data.locale;

  await loadLocaleAsync(locale);
  setLocale(locale);

  return event.data;
})
