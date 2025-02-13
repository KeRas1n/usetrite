import User from "../models/User.js"

export const updateUser = async(req, res, next) => {
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        res.status(200).json(updatedUser)
    }
    catch(err){
        next(err)
    }
}

export const deleteUser = async(req, res, next) => {
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")
    }
    catch(err){
        next(err)
    }
}

export const getUser = async(req, res, next) => {
    try{
        const searchedUser = await User.findById(req.params.id)
        res.status(200).json(searchedUser)
    }
    catch(err){
        next(err)
    }
}

export const getAllUser = async(req, res, next) => {
    try{
        const Users = await User.find()
        res.status(200).json(Users)
    }
    catch(err){
        next(err)
    }
}