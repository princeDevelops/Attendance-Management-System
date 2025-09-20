import { useEffect, useState } from "react";
import fetchBatches from "../services/batchService";


const useBatches = () => {
    const [batches, setBatches] = useState([]);
    const [batchLoading, setbatchLoading] = useState(true);
    const [batchError, setBatchError] = useState(null);


    const load = async () => {
        try {
            const data = await fetchBatches();
            setBatches(data);
        } catch (err) {
            console.log(err);
            setBatchError(err)
        } finally {
            setbatchLoading(false);
        }
    };

    useEffect(() => {
        load();
    }, []);

    return { batches, batchLoading, batchError, reloadBatch: load };
}

export default useBatches;