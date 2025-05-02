import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose"
import userRoutes from "./Routes/userRoutes.js"
import productRoutes from "./Routes/productRoutes.js"
import cookieParser from "cookie-parser"
import cors from "cors"
// import path from "path"
// import fs from "fs"
// import { fileURLToPath } from 'url';


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = 5000;
const MONOGurl=process.env.MONOG_url

// const uploadPath = path.resolve("uploads");
// if(!fs.existsSync(uploadPath)){
//     fs.mkdirSync(uploadPath,{recursive:true})
// }

//connect mongodb 
mongoose.connect(MONOGurl)
.then(()=>console.log("Mogodb Connected"))
.catch((error)=>console.log("Error connecting Monog DB",error))

const allowedOrigins = [
    "http://localhost:5173",
    "https://dmarketplaces-2.onrender.com", // Add your production URL here
];
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true // if you are sending cookies or authentication
  }));


//routes
app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes)
app.use("/uploads",express.static("uploads"))


// // Serve frontend build files
// const frontendPath = path.resolve(__dirname, "../Client/dist");
// app.use(express.static(frontendPath));

// // Serve index.html for unknown routes (important for React Router)
// app.get("/", (req, res) => {
//     res.sendFile(path.join(frontendPath, "index.html"));
// });


app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})

