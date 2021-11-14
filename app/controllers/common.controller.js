
const yachtModel = require('../models/ship.model')

exports.getAllYacht = (req, res) => {
    
}

exports.getCharterYacht = (req, res) => {

}

exports.addYacht = async (req, res) => {
    try{
        const {name, length, rate, shipYard, built, trefit} = req.body
        const yachtSchema = new yachtModel({"name":name, "length":length, "rate":rate, "shipYard":shipYard, "built":built, "trefit":trefit})
        await yachtSchema.save()
        return res.status(201).json(yachtSchema);
    }catch(err){
        return res.status(400).json({
            error:"bad request",
            error_description:err
        });
    }
}

exports.updateYacht = (req, res) => {

}

exports.deleteYacht = (req, res) => {

}