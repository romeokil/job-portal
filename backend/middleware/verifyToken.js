import jwt from 'jsonwebtoken'

export const verifytoken= async (req,res,next)=>{
    try{
        let token=req.cookies.token;
        // suppose if anyone is not logged in then we will not allow
        if(!token){
            return res.status(401).json({
                message:"Sorry token is not present",
                success:false
            })
        }
        // suppose if the person is the not the authorized one then 
        let decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.status(404).json({
                message:"Sorry Unauthenticated User!!!",
                success:false
            })
        }
        req.id=decoded.id;
        console.log("next route tk pahuch gy middlware crossed")
        next();
    }
    catch(error){
        console.log("Error while verify token ",error);
        res.status(404).json({
            message:"Error while verifying token",
            success:false
        })
    }
}