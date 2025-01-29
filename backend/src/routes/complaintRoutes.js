import { Router } from "express";
import { addComplaint, getComplaints, updateComplaint, deleteComplaint } from "../controllers/complaintController.js";

const router = Router();

router.post("/", addComplaint);
router.get("/", getComplaints);
router.put("/:id", updateComplaint);
router.delete("/:id", deleteComplaint);

export default router;
