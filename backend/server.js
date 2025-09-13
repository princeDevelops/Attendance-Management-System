import dotenv from "dotenv";
import app from "./app.js";
// import connectDB from "./config/db.js";


dotenv.config();


const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
});


// // connect DB First
// connectDB()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on http://localhost:${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("❌ DB connection failed:", err.message);
//     process.exit(1);
//   });
