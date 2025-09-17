import express from "express";
import getFaculties from "../controllers/facultyController.js";

const router = express.Router();


router.get('/',getFaculties);

export default router;