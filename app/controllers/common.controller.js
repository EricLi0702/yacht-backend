
const shipModel = require('../models/ship.model')

exports.getAllYacht = async (req, res) => {
    try{
        const allShips = await shipModel.find({})
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

exports.getCharterYacht = async (req, res) => {
    try{
        console.log('=====',req.query)
        const {priceRange, yachtName, yachtLocation, cabin, guest} = req.query
        
        const userId = req.userId
        const findObj = {"price":{$gt:parseInt(priceRange[0]), $lt:parseInt(priceRange[1])}}
        
        if(yachtName != ''){
            findObj.type = yachtName
        }
        if(yachtLocation != ''){
            findObj.region = yachtLocation
        }
        if(cabin != ''){
            findObj.cabin = cabin
        }
        if(guest != ''){
            findObj.guest = guest
        }
        console.log('-------',findObj)
        const data = await shipModel.find(findObj)
        console.log('charter data: ',data)
        return res.status(200).json({
            data:data,
            success:true,
            message:"charter data"
        })
    }catch(err){
        return res.status(400).json({
            error:"bad request",
            error_description:err
        })
    }
}

exports.addYacht = async (req, res) => {
    try{
        const {name, length, price, shipYard, built, trefit,region, cabin, guest, images} = req.body
        const yachtSchema = new shipModel({"name":name, "length":length, "price":price, "shipYard":shipYard, "built":built, "trefit":trefit, "region":region, "cabin":cabin, "guest":guest, "images":images, "userId":req.userId})
        await yachtSchema.save((err, ship) => {
            if(err){
                res.status(500).send({message: err});
                return;
            }
        })
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