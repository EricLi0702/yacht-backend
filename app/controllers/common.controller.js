
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
        const {priceRange, yachtType, yachtLocation, cabin, when} = req.query
        
        const userId = req.userId
        const findObj = {"price":{$gt:parseInt(priceRange[0]), $lt:parseInt(priceRange[1])}}
        
        if(yachtType != ''){
            findObj.type = yachtType
        }
        if(yachtLocation != ''){
            findObj.region = yachtLocation
        }
        if(cabin != ''){
            if(cabin != '12+'){
                findObj.cabin = parseInt(cabin)
            }else{
                findObj.cabin = {$gt:12}
            }
        }
        if(when != '0-0-0'){
            findObj.date = {$in : [when]}
        }
        // if(guest != ''){
        //     findObj.guest = guest
        // }
        console.log('-------',findObj)
        const data = await shipModel.find(findObj)
        // console.log('charter data: ',data)
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
        const {name, length, price, type, shipYard, built, trefit,region, cabin, guest, images, date} = req.body
        const yachtSchema = new shipModel({"name":name, "length":length, "price":price, "type":type, "shipYard":shipYard, "built":built, "trefit":trefit, "region":region, "cabin":cabin, "guest":guest, "images":images, "date":date, "userId":req.userId})
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