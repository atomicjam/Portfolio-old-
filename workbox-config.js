module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{html,xml,css,svg,txt,jpg,webp,avif,js,png}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	cleanupOutdatedCaches: true,
	skipWaiting: true,
	clientsClaim: true,
	cacheId: 'eg-service-worker-03',
};