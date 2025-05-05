import User from '../Models/user.model.js';
import bcrypt from "bcryptjs"
import generateCokkies from '../lib/generateCookies.js';

export const Register = async(req,res)=>{
    const {name,email,phone,address,password} = req.body
    try {

        const salt = await bcrypt.genSalt(10)
        const encryptedPassword = await bcrypt.hash(password,salt)

        const newUser = new User({
            name:name,
            email:email,
            phone:phone,
            address:address,
            password:encryptedPassword,
        })
        await newUser.save();
        if(newUser){
            generateCokkies(newUser.id,res)
            res.status(200).json(newUser)
        }else{
            res.status(401).json({message:"Registeriation Unsuccesful"})
        }
        
    } catch (error) {
        console.log("Error in Register",error)
        res.status(500).json({message:error.message})
        
    }
}

export const Login = async (req, res) => {
    const { email, password } = req.body;
    try {
        console.log("Email:", email);
        const user = await User.findOne({ email: email.toLowerCase() }); // Add logging
        // console.log("User Found:", user); // develpment stage

        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Incorrect email or password" });
        }

        const token = generateCokkies(user,res) // we pass user and not user.id because of the role we are passsing in the generate cookies

        const { password: _, ...safeUserData } = user.toObject(); // sending safe userdata

        // console.log("Generated Token", token) // development stage


        return res.status(200).json({ 
            message: "Login Successful", 
            data: safeUserData, 
            token 
            
        });

    } catch (error) {
        console.error("Error in Login:", error);
        res.status(500).json({ message: error.message });
    }
}

export const SignOut = async(req,res) =>{
    try {
        res.cookie("jwtToken","",{maxAge:1})
        res.status(200).json({message:"Log out was successful"})
    } catch (error) {
        console.error("Error in Log out:", error);
        res.status(500).json({ message: error.message });
    }
}

export const CreatedAdmin = async(req,res)=>{
    const { name, email, password, phone, address, role} = req.body;

    try {
        const existingAdmin = await User.findOne({ email });
        if (existingAdmin) {
          return res.status(400).json({ message: "Admin already exists!" });
        }

        const salt =await bcrypt.genSalt(10)
        const encryptedPassword = await bcrypt.hash(password,salt)
    
        const admin= new User({
            name:name,
            email:email,
            phone:phone,
            address:address,
            password:encryptedPassword,
            role:role
        })
        await admin.save();
        res.status(200).json({message:"Admin Created successfully",admin})
        console.log("Admin Created Successfully")

    } catch (error) {
        console.error("Error in Creating Admin:", error);
        res.status(500).json({ message: error.message });
    }

}

export const getProfile = async(req,res)=>{
    try{
        const user = await User.findById(req.user.id).select("-password")
        if(!user){
            return res.status(404).json({message:"User not found"})
        }

        res.status(200).json({message:"Use found", user})
    }catch(error){
        console.log("Error in getting profile", error)
        res.status(500).json({message:"Server Error"})
    }
}

export const updateProfile = async(req,res)=>{
    try {
        const user =  await User.findById(req.user.id)
        if(!user){
            return res.status(400).json({message:"User not found"})
        }

        // only provide update if new data is provided
        user.name = req.body.name || user.name
        user.phone = req.body.phone || user.phone
        user.address = req.body.address || user.address

        const updateUser = await user.save()

        req.status(200).json({
            message:"Profile Has been updated succefully",
            user:{
                id: updateUser._id,
                name:updateUser.name,
                email:updateUser.email,
                phone:updateUser.phone,
                address:updateUser.address,
                role: updateUser.role,
            }
        })
    } catch (error) {
        console.log("Error in Updating User",error)
        res.status(500).json({message:"Server Error"})
    }
}

