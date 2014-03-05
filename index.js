path = require('path');
var oExpress = require('express'), oApp = oExpress();
var nano = require('nano')('http://localhost:5984');

oApp.use(oExpress.static(__dirname + path.sep + 'public'));

oApp.set('views', __dirname + path.sep + 'views');
oApp.set('view engine', 'jade');
oApp.engine('jade', require('jade').__express);

oApp.get('/', function (oRequest, oResponse) {
	oResponse.render('index');
});

oApp.get(
	'/user/:id',
	function(oRequest, oResponse) {
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
	}
)

oApp.listen(Number(process.argv[2]));