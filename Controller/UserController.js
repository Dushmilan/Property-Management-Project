const User= require('../Model/User');


const IsExistUser=async(username)=>{
    const user=await User.findOne({username});
    if(user){
        return true;
    }else{
        return false;
    }
};

const SignupController= async({username,email,password})=>{
    await User.create({
        username,
        email,
        password
    });
};

module.exports={SignupController,IsExistUser};