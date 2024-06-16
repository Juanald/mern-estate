import express from "express";
import { signup, signin, googleSignIn } from "../controllers/authcontroller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", googleSignIn);

export default router;
