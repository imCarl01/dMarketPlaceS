import express from "express";
import dotenv from "dotenv";
import { protectRoutes } from "../Middlewares/protectedRoutes.js";
import { verifyAdmin } from "../Middlewares/verfiyAdmin.js";
import { CreatedAdmin, getProfile, Login, Register, SignOut, updateProfile } from "../controllers/userControllers.js";

dotenv.config();
const router = express.Router();

router.post("/register",Register)

router.post("/login", Login);

router.post("/logout",SignOut)

router.get("/getProfile",protectRoutes,getProfile)

router.put("/updateProfile",updateProfile)

//createAdmin
router.post("/createAdmin",protectRoutes,verifyAdmin,CreatedAdmin)

export default router;