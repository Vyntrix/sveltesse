import adapter from '@sveltejs/adapter-netlify'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

import { mdsvex, escapeSvelte } from "mdsvex"
import { getSingletonHighlighter } from 'shiki'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: ['.md'],
  layout: {
    _: './src/mdsvex.svelte'
  },
  highlight: {
    highlighter: async (code, lang = 'text') => {
      const highlighter = await getSingletonHighlighter({
        themes: ['vitesse-dark', 'vitesse-light'],
        langs: ['javascript', 'typescript']
      })

      await highlighter.loadLanguage('javascript', 'typescript')
      const html = escapeSvelte(highlighter.codeToHtml(code, { lang, themes: {
        dark: 'vitesse-dark',
        light: 'vitesse-light',
      } }))
      return `{@html \`${html}\`}`
    }
  }
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapter({
      edge: false,
      split: false,
    })
	}
}

export default config
