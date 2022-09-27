'use strict';
module.exports = function(app) {

    var userHandlers = require('../controllers/userController.js');
    var server_controller = require("../controllers/serverController.js");
    
    app.route('/servers/:id')
        .get(server_controller.server_detail);
    app.route('/servers')
        .get(server_controller.server_list);
    app.route('/bracket')
        .post(userHandlers.loginRequired, userHandlers.profile);
    app.route('/auth/sign_in')
        .post(userHandlers.sign_in);
};