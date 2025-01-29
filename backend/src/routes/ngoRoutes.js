import { Router } from "express";
import { addNGO, getNGOs, updateNGO, deleteNGO } from "../controllers/ngoController.js";

const router = Router();

router.post("/", addNGO);
router.get("/", getNGOs);
router.put("/:id", updateNGO);
router.delete("/:id", deleteNGO);

export default router;
