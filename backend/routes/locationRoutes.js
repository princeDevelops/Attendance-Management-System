import expres from "express";
import getLocations from "../controllers/locationController.js";

const router = expres.Router();

router.get('/',getLocations);

export default router;