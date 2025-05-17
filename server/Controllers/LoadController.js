import Load from "../Models/LoadModel.js";

export const LoadAdd = async (req,res) => {
    const {load,unload,date,time} = req.body;

    try {
        if (!date || !time || !load || !unload) {
            return res.json({success:false,message:"InCorrect"})
        }
        const newLoad = new Load({
            date,time,load,unload
        })

        await newLoad.save()

        res.json({success:true,message:"data added successfully"})
    } catch (error) {
        res.json({success:false,message:"In Correct"})
    }
}

export const LoadGet = async (req,res) => {
    try {
        const data = await Load.find()
        res.json({success:true,data})
    } catch (error) {
        res.json({success:false,message:"Data not load"})
    }
}