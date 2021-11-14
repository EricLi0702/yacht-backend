
const shipModel = require('../models/ship.model')

exports.getAllYacht = async (req, res) => {
    try{
        const allShips = await shipModel.find({})
        console.log('-----',allShips)
        return res.status(200).json({
            data:allShips,
            success:true,
            message:"get all ship datas"
        })
    }catch(err){
        return res.status(400).json({
            error:"bad request",
            error_description:err
        })
    }
}

exports.getCharterYacht = (req, res) => {
    try{

    }catch(err){
        return res.status(400).json({
            error:"bad request",
            error_description:err
        })
    }
}

exports.addYacht = async (req, res) => {
    try{
        const {name, length, rate, shipYard, built, trefit} = req.body
        const yachtSchema = new shipModel({"name":name, "length":length, "rate":rate, "shipYard":shipYard, "built":built, "trefit":trefit,"userId":req.userId})
        await yachtSchema.save()
        return res.status(201).json({
            data:yachtSchema,
            success:true,
            message:"yacht added successfully."
        });
    }catch(err){
        return res.status(400).json({
            error:"bad request",
            error_description:err
        });
    }
}

exports.updateYacht = (req, res) => {
    try{

    }catch(err){
        return res.status(400).json({
            error:"bad request",
            error_description:err
        })
    }
}

exports.deleteYacht = (req, res) => {
    try{

    }catch(err){
        return res.status(400).json({
            error:"bad request",
            error_description:err
        })
    }
}