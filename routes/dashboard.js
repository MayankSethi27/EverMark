const express =require('express');
const router=express.Router();
const {isLoggedIn}=require('../middleware/CheckAuth');
const dashboardController=require('../controller/dashboardController');

// dashboard routes

router.get('/dashboard',isLoggedIn,dashboardController.dashboard);

module.exports=router;