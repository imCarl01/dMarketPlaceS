import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import dotenv from "dotenv"

dotenv.config()
//configure Cloudinary
cloudinary.config({
    cloud_name:process.env.CloudName,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRECT,
});


export default cloudinary;