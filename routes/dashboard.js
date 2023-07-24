const express =require('express');
const router=express.Router();
const dashboardController=require('../controller/dashboardController');

// dashboard routes

router.get('/dashboard',dashboardController.dashboard)

module.exports=router;