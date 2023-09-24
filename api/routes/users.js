import express from "express"
import {updateUser, deleteUser, getUser, getAllUser} from '../controllers/user.js'
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js"

const router = express.Router()

/*
router.get("/user/checkauth", verifyToken, (req,res,next)=> {
    res.send("hello user, you are logged in")
})

router.get("/user/checkauth/:id", verifyUser, (req,res,next)=> {
    res.send("hello user, you are logged in and you can delete your account")
})

router.get("/user/checkadmin/:id", verifyAdmin, (req,res,next)=> {
    res.send("hello admin, you are logged in and you can delete all accounts")
})
*/


//UPDATE
router.put('/user/:id', verifyUser, updateUser)
//DELETE
router.delete('/user/:id', verifyUser, deleteUser)
//GET
router.get('/user/:id', verifyUser, getUser)
//GET ALL
router.get('/users', verifyAdmin, getAllUser)

export default router