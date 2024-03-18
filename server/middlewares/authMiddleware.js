const Jwt = require("jsonwebtoken");

const userAuth = (req,res,next) =>{
    const authHeader = req.headers.authorization
    if(!authHeader|| !authHeader.startsWith('Bearer')){
        next("Auth Failed")
    } 
    
    const token = authHeader.split(' ')[1]  

    try {
        const payload = Jwt.verify(token,process.env.JWT_SECRET,(err, decoded)=>{
            if(err){
                next({message:err.message})
            } 
            else
            {
                req.user = {userId:decoded.userId}
            }
        })
        next()
    } catch (error) {
        next({message:error.message})
        
    }
}
module.exports = userAuth;
