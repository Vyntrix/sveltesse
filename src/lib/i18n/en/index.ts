import type { BaseTranslation } from '../i18n-types'

const en = {
	button: {
    about: 'About',
    back: 'Back',
    go: 'GO',
    home: 'Home',
    toggle_dark: 'Toggle dark mode',
    toggle_langs: 'Change languages'
  },
  intro: {
    desc: 'Opinionated Svelte Starter Template',
    dynamic_route: 'Demo of dynamic route',
    hi: 'Hi, {name}!',
    whats_you_name: 'What\'s your name?'
  },
  not_found: 'Not found'
} satisfies BaseTranslation

export default en
