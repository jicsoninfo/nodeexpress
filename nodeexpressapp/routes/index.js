const logingroute = require('./login');
const profileroute = require('./profile');
const logoutroute = require('./logout');
const homeroute = require('./home');
const testroute = require('./test');

module.exports = function(router) {
    logingroute(router);
    profileroute(router);
    logoutroute(router);
    homeroute(router);
    testroute(router);
};