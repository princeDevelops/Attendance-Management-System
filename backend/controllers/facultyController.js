import fetchFaculty from "../models/facultyModel.js";

const getFaculties = async (req,res) =>{
    try{
        const faculties = await fetchFaculty();
        console.log(faculties);
        res.status(200).json(faculties);
    }catch(err){
        res.status(500).json({error : err.message});
    }
}

export default getFaculties;