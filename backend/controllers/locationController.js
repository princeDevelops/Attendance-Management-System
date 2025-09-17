import fetchLocations from "../models/locationModel.js";

const getLocations = async (req,res) =>{
    try{
        const locations = await fetchLocations();
        console.log(locations);
        res.status(200).json(locations);
    }catch(err){
        res.status(500).json({error : err.message});
    }
};


export default getLocations;