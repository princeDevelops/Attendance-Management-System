import { useEffect, useState } from "react";
import fetchBatches from "../services/batchService";


const useBatches = () =>{
    const [batches, setBatches] = useState([]);
    const [loading, setLoading] = useState(true);


    const load = async ()=>{
        try{
            const data = await fetchBatches();
            setBatches(data);
        }catch(err){
            console.log(err);
            
        }finally{
            setLoading(false);
        }       
    };

    useEffect(()=>{
        load();
    },[]);

    return {batches, loading};
}

export default useBatches;