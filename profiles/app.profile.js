var profile = {
	basePath: '../src/',

	action: 'release',

	cssOptimize: 'comments',

	mini: true,

	optimize: false,

	layerOptimize: false,

	packages: [
		'app',
		'dijit',
		'dojo'
	],

	stripConsole: 'all',

	seletorEngine: 'lite',

	localeList: 'en-us,de-de',

	includeLocales: [ 'en-us' ],

	layers : {

		"dojo/dojo": {
			include: ["dojo/text", "dojo/request/xhr", "dojo/i18n"],
			customBase: true,
			boot: true
		},

		"app/boot" : {
			exclude : ["dojo/dojo"]
		},

		"app/a": {
			exclude : ["dojo/dojo"]
		}
	},

	staticHasFeatures: {
		'dojo-trace-api': false,
		'dojo-log-api': false,
		'dojo-sync-loader': false,
		'dojo-xhr-factory': false,
		'dojo-publish-privates': true,
		'dojo-test-sniff': false
	}
};
