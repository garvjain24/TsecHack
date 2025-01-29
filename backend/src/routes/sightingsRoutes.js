import { Router } from "express";
import { addSighting, getSightings, updateSighting, deleteSighting } from "../controllers/sightingsController.js";

const router = Router();

router.post("/", addSighting);
router.get("/", getSightings);
router.put("/:id", updateSighting);
router.delete("/:id", deleteSighting);

export default router;
