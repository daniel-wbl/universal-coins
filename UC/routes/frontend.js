var oFrontCtrlrs = require('./../controllers/frontend.js');

module.exports = function(oApp) {
	oApp.get('/', oFrontCtrlrs.startPage);
    oApp.get('/index_off', oFrontCtrlrs.startPage_off);
	oApp.get('/balance', oFrontCtrlrs.balancePage);
    oApp.get('/transfer', oFrontCtrlrs.transferPage);
    oApp.get('/likes', oFrontCtrlrs.likePage);
    oApp.get('/settings', oFrontCtrlrs.settingsPage);
    oApp.get('/news', oFrontCtrlrs.newsPage);
	oApp.post('/sign_in', oFrontCtrlrs.signIn);
	oApp.get('/sign_in', oFrontCtrlrs.showLoginForm);
	oApp.all('/my-wallet', oFrontCtrlrs.checkUser, oFrontCtrlrs.showMyWallet);
	oApp.get('/user/:id', oFrontCtrlrs.userDetails);
}; // function