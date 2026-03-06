import express from "express";
import {
  createTask,
  getTasks,
  deleteTask,
  updateTask
} from "../controllers/taskController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/* Create Task */
router.post("/", protect, createTask);

/* Get All Tasks */
router.get("/", protect, getTasks);

/* Delete Task */
router.delete("/:id", protect, deleteTask);

/* Update Task */
router.put("/:id", protect, updateTask);

export default router;