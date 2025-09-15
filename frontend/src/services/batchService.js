import axios from "axios";

const API_URL = "http://localhost:5000/batches";

const  fetchBatches = async () => {
    try{
        const {data} = await axios.get(API_URL);
        return data;
    }catch(err){
         console.log(`Error while fetching batches: ${err}`);
         throw err;
    }
}

export default fetchBatches;