const { authJwt } = require("../middlewares");
const controller = require('../controllers/common.controller');

module.exports = function(app){
    app.use(function(req,res,next){
        res.header("Access-Control-Allow-Origin", "*");

        res.header(
            "Access-Controll-Allow-Headers",
            "Access-Control-Allow-Origin",
            "authorization, Origin, Content-type, Accept"
        );
        next();
    });

    app.get('/api/yacht',controller.getAllYacht);

    app.get('/api/chartYacht', controller.getCharterYacht);

    app.post('/api/yacht', [authJwt.verifyToken, authJwt.isOwner], controller.addYacht);

    app.put('/api/yacht', [authJwt.verifyToken, authJwt.isOwner], controller.updateYacht);

    app.delete('/api/yacht', [authJwt.verifyToken, authJwt.isOwner], controller.deleteYacht);

}
