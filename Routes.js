import express from "express";
import { fetchAllDishesController,fetchDishByIdController, insertDishDataController, updatDishController } from "./controllers/DishController.js";
import { createFeedbackController } from "./controllers/feedbackController.js";
import { fetchAllUPostController, insertPostController,fetchinterestTagPostController,fetchPostUserController } from "./controllers/postController.js";
import { fetchAllUserController, fetchUserByIdController, insertUserController } from "./controllers/userController.js";
let router=express.Router();


router.get('/user',fetchAllUserController);
router.post('/createUser',insertUserController);
router.get('/user/:id',fetchUserByIdController);