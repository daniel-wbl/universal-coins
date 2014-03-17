module.exports = {
	'balancePage': function (oRequest, oResponse) {
		oResponse.render('balance');
	}, // function

	'checkUser': function (oRequest, oResponse, oNext) {
		console.log('test');
		oNext();
	}, // function

    'likePage': function (oRequest, oResponse) {
        oResponse.render('likes');
    }, //

    'newsPage': function (oRequest, oResponse) {
        oResponse.render('news');
    }, //

    'settingsPage': function (oRequest, oResponse) {
        oResponse.render('settings');
    }, //

    'transferPage': function (oRequest, oResponse) {
        oResponse.render('transfer');
    }, //

    'startPage_off': function (oRequest, oResponse) {
        oResponse.render('index_off');
    }, // function

	'showLoginForm': function(oRequest, oResponse) {

	}, // function

	'showMyWallet': function (oRequest, oResponse) {
		console.log('jim');

		oResponse.redirect('http://www.google.de');
	}, // function

	signIn: function (oRequest, oResponse) {
		var sBody = "Not found";
		oResponse.writeHead(404, {'Content-Length': Buffer.byteLength(sBody), 'Content-Type': 'text/plain'});
		oResponse.end(sBody);

		console.log(oApp);
		console.log('signin');

		var sBody = "Not found";
		oResponse.writeHead(404, {'Content-Length': Buffer.byteLength(sBody), 'Content-Type': 'text/plain'});
		oResponse.end(sBody);
	}, // function

	'startPage': function (oRequest, oResponse) {
		oResponse.render('index');
	}, // function

	'userDetails': function (oRequest, oResponse) {
		var oCoins = nano.use('universal_coins');

		oCoins.get(oRequest.params.id, function (bError, oBody) {
			if (bError) {
				var sBody = "Not found";
				oResponse.writeHead(404, {'Content-Length': Buffer.byteLength(sBody), 'Content-Type': 'text/plain'});
				oResponse.end(sBody);
			} else {
				oResponse.render('user', {oUser: oBody});
			} // else
		});
	} // function
};