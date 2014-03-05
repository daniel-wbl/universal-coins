var oExpress = require('express'), oApp = oExpress();

oApp.get('/', function (oRequest, oResponse) {
	var sBody = 'Hello World';
	oResponse.writeHead(200, {'Content-Length': Buffer.byteLength(sBody), 'Content-Type': 'text/plain'});
	oResponse.end(sBody);
});

oApp.listen(Number(process.argv[2]));