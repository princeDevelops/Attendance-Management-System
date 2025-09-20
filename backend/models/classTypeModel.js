import pool from "../config/db.js";

const fetchClassTypes = async () =>{
    const res = await pool.query('SELECT * FROM class_types');
    return res.rows;
}

export default fetchClassTypes;