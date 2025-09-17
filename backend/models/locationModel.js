import connectDB from "../config/db.js";


const fetchLocations = async () =>{
    const pool = await connectDB();
    const res = await pool.query('SELECT * FROM locations');
    return res.rows;
};


export default fetchLocations;

