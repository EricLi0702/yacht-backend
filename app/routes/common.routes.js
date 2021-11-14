const { authJwt } = require("../middlewares");
const controller = require('../controllers/common.controller');

module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Controll-Allow-Headers",
            "authorization, Origin, Content-type, Accept"
        );
        next();
    });

    app.get('/api/yacht',[authJwt.verifyToken], controller.getAllYacht);

    app.get('/api/yacht',[authJwt.verifyToken], controller.getCharterYacht);

    app.post('/api/yacht', controller.addYacht);

    app.put('/api/yacht', [authJwt.verifyToken, authJwt.isOwner], controller.updateYacht);

    app.delete('/api/yacht', [authJwt.verifyToken, authJwt.isOwner], controller.deleteYacht);

}
