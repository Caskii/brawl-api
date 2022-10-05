'use strict';
module.exports = function(app) {

    var userHandlers = require('../controllers/userController.js');
    var server_controller = require("../controllers/serverController.js");
    var bracket_controller = require("../controllers/bracketController.js");
    
    app.route('/servers/:id')
        .get(server_controller.server_detail);
    app.route('/servers')
        .get(server_controller.server_list);
    app.route('/brackets/:id')
        .get(bracket_controller.bracket_detail);
    app.route('/brackets/update/:id')
        .put(userHandlers.loginRequired, bracket_controller.bracket_update);
    app.route('/auth/sign_in')
        .post(userHandlers.sign_in);
};