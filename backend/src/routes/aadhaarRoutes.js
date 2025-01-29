import { Router } from "express";
import { addAadhaar, getAadhaarRecords, updateAadhaar, deleteAadhaar } from "../controllers/aadhaarController.js";

const router = Router();

router.post("/", addAadhaar);
router.get("/", getAadhaarRecords);
router.put("/:id", updateAadhaar);
router.delete("/:id", deleteAadhaar);

export default router;
