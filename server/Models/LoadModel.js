import mongoose from "mongoose";

const loadSchema = new mongoose.Schema({
    load:{type:String,require:true},
    unload:{type:String,require:true},
    date:{type:String,require:true},
    time:{type:String,require:true},
},{timestamps:true})

const Load = mongoose.model('Load',loadSchema)

export default Load;