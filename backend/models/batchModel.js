import connectDB from "../config/db.js";

async function fetchBatches() {
    const pool = await connectDB();
    const res = await pool.query('SELECT * FROM batches');
    console.log(res.rows);
    return res.rows;
}

export default fetchBatches;

