const jobDB = require("../model/jobModel");
const userDB = require("../model/userMode;");

exports.updateUserController = async (req, res, next) =>{
    const { name, lastName, email, address } = req.body;
try{

    if (!name || !email || !lastName || !address ) {
        next("please fill out all fields");

      }

      const user = await userDB.findOne({_id:req.user.userId})
      if(user){
        user.name = name
      user.lastName = lastName
      user.email = email
      user.address = address

      await user.save()
      }
      else{
        return next("user not found wthis this id")
      }
      
      const token = user.createJWT()

      res.status(200).json({
        user,
        token,
        message: " user updated successfully"
    });
  }
  catch(err){
next({message:err.message})
  }
}

exports.deleteUserController = async (req, res, next) => {
  try {
    console.log(req.url);
    // 64f5e526fc05e21dd6a694ee

    const { id } = req.params;
    const User = await userDB.findOne({ _id: id });

    if (!User) {
      next(`User not found with this id: ${id}`);
    }

    // if (!(req.user.role === "")) {
    //   next(`You are not authorized to delete the user`);
    //   return;
    // }
    await User.deleteOne();
    res.status(200).json({ message: "success, User deleted successfully" });
  } catch (error) {
    next({ messsage: error.message });
  }
};
exports.getUsersController = async(req,res,next)=>{
  const users =  await userDB.find()
  const organization =  await userDB.find({role:'Organization'})
  const job_seeker =  await userDB.find({role:'Job seeker'})
  res.status(201).json({
   users:users,
   totalAmount:users.length,
   organization,
   job_seeker
  });
}