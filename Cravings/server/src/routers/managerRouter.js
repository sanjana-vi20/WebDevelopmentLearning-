import express from 'express';
import { ResUserPhotoUpdate, ResUserResetPassword, ResUserUpdate } from '../controllers/restaurantController.js';
import { Protect } from '../middleware/userMiddleware.js';
import multer from 'multer';

const router = express.Router();
const upload = multer();

router.put("/update" ,Protect, ResUserUpdate);
router.patch("/photo-update" ,Protect, upload.single("image"), ResUserPhotoUpdate );
router.patch("/resetPassword" ,Protect, ResUserResetPassword);


export default router;