import connectDB from "../config/db.js";

const fetchFaculty = async () => {
    const pool = await connectDB();
    const res = await pool.query('SELECT * FROM faculty');
    return res.rows;
}

export default fetchFaculty;