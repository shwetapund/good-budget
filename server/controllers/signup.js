import User from "./../models/User.js"

const postApiSignup = async (req,res)=>{
    const {name, email, password, mobile, address, gender} = req.body;
    
    const signupObj = new User({
        name, 
        email, 
        password,
        mobile, 
        address,
        gender
    })
    const savedUser = await signupObj.save();

    res.json({
        success:true,
        data:savedUser,
        message:'successfully saved User'
    })
}

export {postApiSignup};