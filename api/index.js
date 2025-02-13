import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import roomsRoute from './routes/rooms.js'
import hotelsRoute from './routes/hotels.js'
import cookieParser from "cookie-parser"
import cors from 'cors'


dotenv.config()

const app = express()


const connect = async()=> {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to MongoDB');
    } catch (error) {
        throw(error);
    }
}

mongoose.connection.on("disconnected", () => {
    console.log('mongodb disconnected')
})


//middlewares
app.use(cors(
    {
        origin: ["https://usetrite-api.vercel.app"],
        methods:["POST", "GET"],
        credentials:true
    }
    ))
app.use(cookieParser())
app.use(express.json())


app.use("/api/auth", authRoute)
app.use("/api", usersRoute)
app.use("/api", hotelsRoute)
app.use("/api/rooms", roomsRoute)

app.use((err,req,res,next)=> {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"

    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    })
})

app.listen(process.env.PORT, () => {
    connect()
    console.log(`Server started on ${process.env.PORT} port 🚀`)
})
