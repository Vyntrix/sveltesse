import type { Translation } from '../i18n-types'

const de = {
	button: {
    about: 'Über',
    back: 'Zurück',
    go: 'Los',
    home: 'Startseite',
    toggle_dark: 'Dunkelmodus umschalten',
    toggle_langs: 'Sprache ändern',
  },
  intro: {
    desc: 'Svelte Startvorlage mit Vorlieben',
    dynamic_route: 'Demo einer dynamischen Route',
    hi: 'Hi, {name}!',
    whats_you_name: 'Wie heißt du?'
  },
  not_found: 'Nicht gefunden'
} satisfies Translation

export default de
