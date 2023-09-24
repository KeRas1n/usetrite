import express from "express"
import { countByCity, createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotel.js"
import { verifyAdmin } from "../utils/verifyToken.js"


const router = express.Router()

//CREATE
router.post('/hotel', verifyAdmin, createHotel)
//UPDATE
router.put('/hotel/:id', verifyAdmin, updateHotel)
//DELETE
router.delete('/hotel/:id', verifyAdmin, deleteHotel)
//GET
router.get('/hotel/:id', getHotel)
//GET ALL
router.get('/hotels', getAllHotel)


router.get('/hotels/countByCity', countByCity)


export default router