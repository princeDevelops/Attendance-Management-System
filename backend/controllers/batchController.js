import fetchBatches from "../models/batchModel.js";


async function getBatches(req, res) {
    try {
        const batches = await fetchBatches();
        console.log(batches);
        return;
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


export default getBatches;