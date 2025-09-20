import pool from "../config/db.js";

const fetchFaculty = async () => {
    const res = await pool.query('SELECT * FROM faculty');
    return res.rows;
}

export default fetchFaculty;