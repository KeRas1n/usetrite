import Hotel from "../models/Hotel.js"

export const createHotel = async(req, res, next) => {
    const NewHotel = new Hotel(req.body)

    try{
        const savedHotel = await NewHotel.save()
        res.status(200).json(savedHotel)
    }
    catch(err){
        next(err)
    }
}

export const updateHotel = async(req, res, next) => {
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        res.status(200).json(updatedHotel)
    }
    catch(err){
        next(err)
    }
}

export const deleteHotel = async(req, res, next) => {
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted")
    }
    catch(err){
        next(err)
    }
}

export const getHotel = async(req, res, next) => {
    try{
        const searchedHotel = await Hotel.findById(req.params.id)
        res.status(200).json(searchedHotel)
    }
    catch(err){
        next(err)
    }
}

export const getAllHotel = async(req, res, next) => {
    const {min, cities, max, limit, ...others} = req.query

    //const city = req.query.cities.split(",")

    let query = {}
    

    if(req.query.cities) {
        const city = req.query.cities.split(",")
        query.city = { $in: city};
    }
    

    try{
        let hotels;
        if(req.query.cities) {
            const city = req.query.cities.split(",")
            hotels = await Hotel.find({...others, cheapestPrice:{$gt:min | 1, $lt:max || 100000}, city:{$in: city} }).limit(limit)
        }
        else{
            hotels = await Hotel.find({...others, cheapestPrice:{$gt:min | 1, $lt:max || 100000} }).limit(limit)
        }
        console.log(cities)
        res.status(200).json(hotels)
    }
    catch(err){
        next(err)
    }
}


export const countByCity = async(req, res, next) => {
    const cities = req.query.cities.split(",")
    try{
        const list = await Promise.all(cities.map(city=> {return Hotel.countDocuments({city:city}) } ))
        res.status(200).json(list)
    }
    catch(err){
        next(err)
    }
}