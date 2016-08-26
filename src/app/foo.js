define(['dojo/i18n', 'dojo/i18n!dijit/form/nls/ComboBox'], function (i18n) {
	return function () {
		var bundle = i18n.getLocalization('dijit.form', 'ComboBox');
		console.log(bundle);
	};
});
