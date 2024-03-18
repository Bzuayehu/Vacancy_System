const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const JWT = require("jsonwebtoken")
const userSchema = mongoose.Schema(
    {
        name:
        {
            type:String,
            required:[true, "name is required"],
            maxlength:50
        },
        lastName:
        {
            type:String,
            required:[true, "last name is required"],
            maxlength:50
        },
        email:{
            type:String,
            required:[true, "email is required"],
            unique:true,
            validate:[validator.isEmail,"invalid email"]// need to add validation
        },
        password:{
            type:String,
            required:[true, "password is required"],
            minlength:[6,"password must have at least 6 charactetrs"],
            select:true

        },
        address:{
            type:String,
            required:[true, "Address is required"]

        },
        role:{
            type:String,
            required:[true,"role is required"]
        } 

    },
    {timestamps:true}
)

userSchema.pre("save", async function(){
    if(!this.isModified) return;
    const salt  = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
} )

userSchema.methods.comparePassword = async function(userPassword){
    const isMatch = await bcrypt.compare(userPassword,this.password)
    return isMatch
}
//JSON WEBTOKEN
userSchema.methods.createJWT= function(){ 
    return JWT.sign({userId:this.id},process.env.JWT_SECRET,{expiresIn:'30d'})
}
const userDB = mongoose.model("userdb",userSchema)

module.exports = userDB;