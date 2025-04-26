import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinaryConfig.js";

// Set up Multer storage engine for Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'products', // Optional: specify a folder in Cloudinary
      allowed_formats: ['jpg', 'png', 'jpeg'], // Optional: specify allowed formats
    },
  });

  const upload = multer({ storage });

  export default upload;