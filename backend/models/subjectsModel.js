import pool from "../config/db.js";

const fetchSubjects = async () => {
    const res = await pool.query('SELECT * FROM subjects');
    return res.rows;
}


export default fetchSubjects;