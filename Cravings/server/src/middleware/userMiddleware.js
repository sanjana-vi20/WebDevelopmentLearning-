import jwt from 'jsonwebtoken'
import User from '../models/userModels.js'

export const Protect = async(req ,res ,next) => {
    try {
        const biscut = req.cookies.oreo;
        console.log( "token recieved in cookie" ,biscut);

        const tea = jwt.verify(biscut , process.env.JWT_SECRET);
        if(!tea)
        {
            const error= new Error("Unauthorized User");
            error.statusCode = 401;
           return next(error)
        }
        console.log(tea);

        const verifyUser = await findById(tea.id);
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