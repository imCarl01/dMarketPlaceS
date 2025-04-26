import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const generateCokkies=(user,res)=>{
    const token = jwt.sign({userId:user.id, role:user.role},process.env.JWT_TOKEN,{expiresIn:"15d"})

    res.cookie("jwtToken",token,{
        httpOnly:true,
        maxAge: 15 * 60 * 60 * 24 * 1000,
        sameSite: "Strict"
    })
    return token;
}

export default generateCokkies;