const adapter = require('@sveltejs/adapter-node')

module.exports = {
	kit: {
		target: '#svelte',
		adapter: adapter()
	}
}