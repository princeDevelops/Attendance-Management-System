import connectDB from "../config/db.js";

const fetchSubjects = async () => {
    const pool = await connectDB();
    const res = await pool.query('SELECT * FROM subjects');
    return res.rows;
}


export default fetchSubjects;