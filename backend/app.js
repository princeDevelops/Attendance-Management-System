import express from "express";
import cors from "cors";
import morgan from "morgan";

import batchRoutes from './routes/batchRoutes.js';

const app = express();


app.use(cors());  
app.use(express.json());
app.use(morgan("dev"));



// Health Check
app.get('/',(req,res)=>{
    res.json({message:"Server up and running. Great Job."});
});


app.get('/batches',batchRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

export default app;