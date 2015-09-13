/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    'create': function(req, res, next) {
        if (req.param('email') && req.param('password')) {
            User.findOne({email: req.param('email')}, function userFound(err, user) {
                if (err) next(err);
                if (user) {
                    require("bcrypt").compare(req.param('password'), user.encryptedPassword, function compareFinished(err, valid) {
                        if (err) next(err);
                        if (valid) {
                            req.session.authenticated = true;
                            req.session.user = user;
                            console.log('LogIn Successful Hello ' + user.firstName + '.');
                            return res.ok();
                        }
                    });
                }
            });
        } else {
            console.log('LogIn Failed');
            return res.forbidden();
        }
    },

    'destroy': function(req, res, next) {
        req.session.destroy();
        return res.ok();
    }
	
};

