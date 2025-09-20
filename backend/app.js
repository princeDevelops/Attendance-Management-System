import express from "express";
import cors from "cors";
import morgan from "morgan";

import batchRoutes from './routes/batchRoutes.js';
import subjectRoutes from './routes/subjectRoutes.js';
import facultyRoutes from './routes/facultyRoutes.js';
import locationRoutes from './routes/locationRoutes.js';
import classTypesRoutes from './routes/classTypesRoutes.js';

const app = express();


app.use(cors());
app.use(express.json());
app.use(morgan("dev"));



// Health Check
app.get('/', (req, res) => {
  res.json({ message: "Server up and running. Great Job." });
});


app.use('/batches', batchRoutes);
app.use('/subjects', subjectRoutes);
app.use('/faculties',facultyRoutes);
app.use('/locations',locationRoutes);
app.use('/classtypes',classTypesRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

export default app;