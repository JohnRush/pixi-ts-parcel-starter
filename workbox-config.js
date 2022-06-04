module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{png,css,js,html,webmanifest}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};