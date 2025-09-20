import express from "express";
const router = express.Router();

import getClassTypes from "../controllers/classTypeController.js";

router.get('/',getClassTypes);

export default router;

