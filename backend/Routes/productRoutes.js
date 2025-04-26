import express from "express";
import dotenv from "dotenv";
import { createProduct, deleteProduct, getAllProduct, getSingleProduct, updateProduct } from "../controllers/productControllers.js";
import { verifyAdmin } from "../Middlewares/verfiyAdmin.js";
import { protectRoutes } from "../Middlewares/protectedRoutes.js";

import upload from "../cloudinary/upload.js";

dotenv.config();
const router = express.Router()
//createProduct
router.post("/createProduct",protectRoutes,verifyAdmin,upload.single("image"),createProduct)
//getAllProduct
router.get("/getAllProduct",protectRoutes,getAllProduct)
//getSingleProduct
router.get("/getSingleProduct/:id",protectRoutes,getSingleProduct)
//updateProduct
router.put("/updateProduct/:id",protectRoutes,verifyAdmin,updateProduct)
//deleteProduct
router.delete("/deleteProduct/:id",protectRoutes,verifyAdmin,deleteProduct)


export default router;