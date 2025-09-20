import fetchClassTypes from "../models/classTypeModel.js";

const getClassTypes = async (req,res) =>{
    try{
        const classTypes = await fetchClassTypes();
        res.status(200).json(classTypes);
    }catch(err){
        res.status(500).json({error: err.message});
    }
};


export default getClassTypes;