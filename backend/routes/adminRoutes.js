import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";

const router = express.Router();

/* Admin Protected Route */
router.get("/users", protect, adminOnly, (req, res) => {
  res.status(200).json({
    message: "Admin route working successfully"
  });
});

export default router;