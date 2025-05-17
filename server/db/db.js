import mongoose from "mongoose";
export const connectDb = async () => {
    try {
        mongoose.connection.on('connected',()=>console.log("dabase Connected")
        )
        await mongoose.connect(`${process.env.MONGODB_URL}/load`)
    } catch (error) {
        console.log(error);
        
    }
}