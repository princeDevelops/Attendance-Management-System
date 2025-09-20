import pool from "../config/db.js";

const fetchLocations = async () =>{
    const res = await pool.query('SELECT * FROM locations');
    return res.rows;
};


export default fetchLocations;

