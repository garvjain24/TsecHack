import { Router } from "express";
import { addUser, getUsers, updateUser, deleteUser } from "../controllers/userController.js";
const router = Router();

router.post("/", addUser);
router.get("/", getUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
