import pool from "../config/db.js";

async function fetchBatches() {
    const res = await pool.query('SELECT * FROM batches');
    console.log(res.rows);
    return res.rows;
};

export default fetchBatches;

