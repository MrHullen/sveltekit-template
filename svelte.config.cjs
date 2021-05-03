const sveltePreprocess = require("svelte-preprocess")
const adapter = require('@sveltejs/adapter-node')

module.exports = {
	preprocess: [
		sveltePreprocess(),
	],
	kit: {
		target: '#svelte',
		adapter: adapter()
	}
}