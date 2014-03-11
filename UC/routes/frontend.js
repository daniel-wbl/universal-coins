var oFrontCtrlrs = require('./../controllers/frontend.js');

module.exports = function(oApp) {
	oApp.get('/', oFrontCtrlrs.startPage);
	oApp.get('/balance', oFrontCtrlrs.balancePage);
	oApp.post('/sign_in', oFrontCtrlrs.signIn);
	oApp.get('/sign_in', oFrontCtrlrs.showLoginForm);
	oApp.all('/my-wallet', oFrontCtrlrs.checkUser, oFrontCtrlrs.showMyWallet);
	oApp.get('/user/:id', oFrontCtrlrs.userDetails);
}; // function