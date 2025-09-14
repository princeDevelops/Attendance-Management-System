import { Pool } from "pg";

const poolConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME,
    max : 3,
    idleTimeoutMillis : 100000
};

const connectDB = async () => {
    const pool = new Pool(poolConfig);  
    try {
        await pool.connect();
        console.log("Connected to PostgreSQL");
        return pool;
    } catch (err) {
        console.error("DB Connection Error :", err);
        throw err;
    }
};

export default connectDB;