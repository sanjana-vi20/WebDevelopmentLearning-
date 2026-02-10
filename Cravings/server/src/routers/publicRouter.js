import express from 'express';
import {GetAllRestaurants, NewContact} from '../controllers/publicController.js'
import { GetRestaurantItems } from '../controllers/publicController.js';

const router = express.Router();

router.post('/new-contact' , NewContact);
router.get("/allRestaurants", GetAllRestaurants);
router.get("/single-menu/:id" ,  GetRestaurantItems )

export default router;
