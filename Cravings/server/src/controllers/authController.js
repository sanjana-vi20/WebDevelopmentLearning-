import User from "../models/userModels.js";
import bcrypt from "bcrypt";

export const UserRegister = async (req, res, next) => {
  try {
    const { fullName, email, mobnumber, password } = req.body;

    if (!fullName || !email || !mobnumber || !password) {
      const error = new Error("All Fields are Required");
      error.statusCode = 400;
      return next(error);
    }
    // check for duplicate user before register
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already Registered");
      error.statusCode = 409;
      return next(error);
    }

    // encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // save data to database

    const newUser = await User.create({
      fullName,
      email,
      mobnumber,
      password: hashPassword,
    });

    // send response to frontend

    console.log(newUser);

    res.status(201).json({ message: "Registered Successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const UserLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("All Fields are Required");
      error.statusCode = 400;
      return next(error);
    }

    // check for duplicate user before register
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not Registered");
      error.statusCode = 401;
      return next(error);
    }

    const isVerified = await bcrypt.compare(password, existingUser.password);
    if (!isVerified) {
      const error = new Error("Wrong Password");
      error.statusCode = 401;
      return next(error);
    }

    res.status(200).json({ message: "Login Successfully", data: existingUser });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const UserLogout = async (req, res, next) => {
  try {
    res.status(200).json({ mesasge: "Logout Successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
