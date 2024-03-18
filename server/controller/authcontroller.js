const userDB = require("../model/userMode;");

exports.registerController = async (req, res, next) => {
  let { name, lastName, email, password, address , role} = req.body;
  const user = await userDB.create({
    name,
    lastName,
    email,
    password,
    address,
    role
  });
  const token = user.createJWT();
  res
    .status(200)
    .send({ success: true, message: "user created successfully", user, token });
};

exports.loginController = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    next("please fill out all fields");
  }

  const user = await userDB.findOne({ email }).select("password");
  // console.log(user)
  const User_Role = await userDB.findOne({ email })

  if (!user) {
   return next("user not found"); 
  }
  const isMatch = await user.comparePassword(password);
  

  if (!isMatch) {
   return next("invalid username or password ");
  }
  const  Role = User_Role.role
  user.password = undefined; 
  const token = user.createJWT();
  // const role = await findOne({_id:user.id})
  res
    .status(200)
    .send({ success: true, message: "logged in successfully", user,Role, token });
  // console.log(token)
};
