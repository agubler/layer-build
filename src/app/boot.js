define(['app/foo'], function () {
	console.log('booted');
	require([ 'app/a' ]);
});
