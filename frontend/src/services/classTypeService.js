import axios from "axios";

const API_URL = 'http://localhost:5000/classtypes';

const fetchClassTypes = async () =>{
    try{
        const {data} = await axios.get(API_URL);
        return data;
    }catch(err){
        console.log(`Error while fetching Class types : ${err}`);
        throw err;
    }
};

export default fetchClassTypes;