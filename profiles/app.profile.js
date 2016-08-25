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
			include: ["dojo/text", "dojo/request/xhr"],
			customBase: true,
			boot: true
		},

		"app/boot" : {
			include : [
				"dojo/_base/lang",
				"dojo/_base/window",
				"dojo/_base/xhr",
				"dojo/_base/connect",
				"dojo/_base/event",

				"dojo/Deferred",
				"dojo/when",
				"dojo/aspect",
				"dojo/number",
				"dojo/date",
				"dojo/date/stamp",
				"dojo/date/locale",
				"dojo/cookie",
				"dojo/dom",
				"dojo/dom-attr",
				"dojo/dom-class",
				"dojo/dom-geometry",
				"dojo/dom-style",
				"dojo/ready",
				"dojo/has",
				"dojo/io-query",
				"dojo/keys",
				"dojo/on",
				"dojo/parser",
				"dojo/regexp",
				"dojo/store/Observable",
				"dojo/topic",
				"dojo/touch",
				"dojo/window",
				"dojo/promise/all",
				"dojo/Stateful",

				"dojo/store/JsonRest",

				"dijit/_WidgetsInTemplateMixin",
				"dijit/_Container",

				"dijit/Calendar",
				"dijit/TooltipDialog",
				"dijit/popup",
				"dijit/Menu",
				"dijit/MenuItem",
				"dijit/CheckedMenuItem",
				"dijit/MenuSeparator",
				"dijit/Tooltip",
				"dijit/layout/TabContainer",
				"dijit/layout/ContentPane",
				"dijit/layout/BorderContainer",
				"dijit/Menu",
				"dijit/Dialog",
				"dijit/TitlePane",

				"dijit/form/ComboBoxMixin",
				"dijit/form/RangeBoundTextBox",
				"dijit/form/ValidationTextBox",
				"dijit/form/NumberTextBox",
				"dijit/form/FilteringSelect",
				"dijit/form/ComboBox",
				"dijit/form/DateTextBox",
				"dijit/form/SimpleTextarea",
				"dijit/form/Textarea",
				"dijit/form/TextBox",
				"dijit/form/Button",
				"dijit/form/DropDownButton",
				"dijit/form/ComboButton",
				"dijit/form/CheckBox",
				"dijit/form/Select",
				"dijit/form/Form",
				"dijit/form/MultiSelect",
				"dijit/form/TimeTextBox",

			],
			exclude : ["dojo/dojo"]
		},

		"app/a": {
			exclude : ["dojo/dojo", "app/boot"]
		}
	},

	staticHasFeatures: {
		'dojo-trace-api': false,
		'dojo-log-api': false,
		'dojo-publish-privates': false,
		'dojo-sync-loader': false,
		'dojo-xhr-factory': false,
		'dojo-test-sniff': false
	}
};
