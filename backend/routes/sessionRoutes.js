import express, { Router } from "express";
import addSession from "../controllers/sessionController.js";
const router = express.Router();

router.post('/add-session',addSession);


export default  router;