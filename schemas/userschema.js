const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const userSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    age:{
        type:String,
        require:true,
    },
    NicNumber:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }


})

userSchema.pre("save", async function(next){
    const User=this;
    try {
        const salt = await bcrypt.genSalt(10);
        const HashPassword=await bcrypt.hash(User.password,salt);
        User.password=HashPassword
        next();
    } catch (error) {
        next(error)
    }

    User.methods.comparePassword= async function(userpassword){
        try {
            const IsMatch= await bcrypt.compare(userpassword,this.password);
            return IsMatch;
        } catch (error) {
            throw error
        }
    }

})

const User= mongoose.model("User",userSchema);
module.exports=User