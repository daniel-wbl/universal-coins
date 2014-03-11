path = require('path');
var oExpress = require('express'), oApp = oExpress();
var nano = require('nano')('http://localhost:5984');

oApp.use(oExpress.static(__dirname + path.sep + 'public'));

oApp.set('views', __dirname + path.sep + 'views');
oApp.set('view engine', 'jade');
oApp.engine('jade', require('jade').__express);
oApp.use(oExpress.cookieParser('S3CRE7'));
oApp.use(oExpress.cookieSession());
oApp.use(oExpress.bodyParser());
oApp.use(oApp.router);

require('./UC/routes')(oApp);

oApp.listen(Number(process.argv[2]));

// http://runnable.com/UTlPPF-f2W1TAAEe/render-jade-with-express-for-node-js
// http://jacobmumm.com/2012/09/11/single-page-apps-with-node-and-angular/