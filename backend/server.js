import "dotenv/config"; 
import app from "./app.js";
import pool from "./config/db.js"; 

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await pool.query("SELECT 1"); 
    console.log("✅ Database connection established");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ DB connection failed:", err.message);
    process.exit(1);
  }
})();
