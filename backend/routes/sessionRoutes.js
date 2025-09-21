import express, { Router } from "express";
import { addSession, getSessions } from "../controllers/sessionController.js";
const router = express.Router();

router.post('/add-session', addSession);
router.get('/',getSessions);


export default router;