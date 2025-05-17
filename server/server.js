import express from 'express'
import 'dotenv/config'

import cors from 'cors'
import { connectDb } from './db/db.js'
import loadRoute from './Routes/LoadRoutes.js'

const app = express(
   
)
 app.use(cors())

 const PORT  = process.env.PORT || 5002
 app.use(express.json())
connectDb()
 app.get('/',(req,res)=>{
    res.send("server is Live")
 })

 app.use('/api/auth',loadRoute)

 app.listen(PORT,()=>{
    console.log("SERVER IS RUNNING "+PORT);
    
 })