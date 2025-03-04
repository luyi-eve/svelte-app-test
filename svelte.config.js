import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await createHighlighter({
				themes: ['vesper'],
				langs: ['javascript', 'typescript', 'svelte', 'py', 'python']
			});
			await highlighter.loadLanguage('javascript', 'typescript', 'svelte', 'py', 'python');
			await highlighter.loadTheme('vesper');
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'vesper' }));
			return `{@html \`${html}\` }`;
		}
	}
};

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
            base: process.env.NODE_ENV === 'production' ? '/sveltekit-app-test' : '',
        }
	},
};

config.paths = { base: process.argv.includes('dev') ? '' : process.env.BASE_PATH }

export default config;
