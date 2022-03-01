module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{ico,html,json,js,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/,
		/^s/
	]
};