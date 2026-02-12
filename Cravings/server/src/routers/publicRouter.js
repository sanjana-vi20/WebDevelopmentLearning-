import express from 'express';
import {AllMenu, GetAllRestaurants, NewContact} from '../controllers/publicController.js'
import { GetRestaurantItems } from '../controllers/publicController.js';

const router = express.Router();

router.post('/new-contact' , NewContact);
router.get("/allRestaurants", GetAllRestaurants);
router.get("/single-menu/:id" ,  GetRestaurantItems );
router.get("/fetchMenu" , AllMenu);

export default router;
