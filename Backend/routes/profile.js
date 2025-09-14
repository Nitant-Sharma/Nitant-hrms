// Backend/routes/profileRoutes.js
import express from "express";
import profileController from "../controllers/profileController.js";

const router = express.Router();
router.get("/profile", profileController.getProfiles)
router.post("/profile", profileController.addProfile);

export default router;