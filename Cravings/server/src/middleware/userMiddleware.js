import jwt from 'jsonwebtoken'
import User from '../models/userModels.js'

export const Protect = async(req ,res ,next) => {
    try {
        const token = req.cookies.oreo;
        console.log( "token recieved in cookie" ,token);

        const tea = jwt.verify(token , process.env.JWT_SECRET);
        if(!tea)
        {
            const error= new Error("Unauthorized User");
            error.statusCode = 401;
           return next(error)
        }
        console.log(tea);

        const verifyUser = await User.findById(tea.id);
        if(!verifyUser)
        {
            const error= new Error("Unauthorized User");
            error.statusCode = 401;
            return next(error)
        }

        req.user= verifyUser;
        
        next();  
    } catch (error) {
        next(error)
    }
}

export const OtpProtect = async(req ,res ,next) => {
    try {
        const token = req.cookies.otpToken;
        console.log( "token recieved in cookie" ,token);

        const decode = jwt.verify(token , process.env.JWT_SECRET);
         console.log( "decode token " ,decode);
        if(!decode)
        {
            const error= new Error("Unauthorized User try again");
            error.statusCode = 401;
           return next(error)
        }
        // console.log(decode);

        const verifyUser = await User.findById(decode.id);
        if(!verifyUser)
        {
            const error= new Error("Unauthorized User try again");
            error.statusCode = 401;
            return next(error)
        }

        req.user= verifyUser;
        
        next();  
    } catch (error) {
        next(error)
    }
}