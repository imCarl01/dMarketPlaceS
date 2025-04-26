import jwt from "jsonwebtoken"

export const verifyAdmin = (req,res,next)=>{

    try {
        if (!req.user || req.user.role !== "admin") {
            return res.status(403).json({ message: "Access denied. Admins only." });
          }
        next();
    } catch (error) {
        console.log("Error in verifyAdmin middleware:", error.message);
        return res.status(500).json({ message: error.message });
    }
} 