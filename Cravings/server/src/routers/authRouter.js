import express from "express";
import {
  UserGenOTP,
  UserLogin,
  UserLogout,
  UserRegister,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", UserRegister);
router.post("/login", UserLogin);
router.get("/logout", UserLogout);
router.post("/getOtp", UserGenOTP);

export default router;
