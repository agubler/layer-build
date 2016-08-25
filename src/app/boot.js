define(['dijit/form/NumberTextBox'], function (NumberTextBox) {
	console.log('booted');
	var textbox1 = new NumberTextBox();
	require([ 'app/a' ]);
	var textbox2 = new NumberTextBox();
});
