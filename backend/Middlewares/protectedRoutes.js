import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import User from "../Models/user.model.js"

dotenv.config()

export const protectRoutes = async(req,res,next)=>{
    try {
        const token = req.cookies.jwtToken
        // console.log("Token:", token);

        if(!token) return res.status(400).json({message:"Unauthorised"})
            const decode = jwt.verify(token,process.env.JWT_TOKEN)
            const user = await User.findById(decode.userId).select("-password")

            req.user = user

            next()
    } catch (error) {
        console.log("Error in protectRoutes",error.message)
        return res.status(500).json({message:error.message})
    }
}