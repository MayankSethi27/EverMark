const express =require('express');
const router=express.Router();
const {isLoggedIn}=require('../middleware/CheckAuth');
const dashboardController=require('../controller/dashboardController');

// dashboard routes

router.get('/dashboard',isLoggedIn,dashboardController.dashboard);
router.get('/dashboard/item/:id',isLoggedIn,dashboardController.dashboardViewNote);
router.put('/dashboard/item/:id',isLoggedIn,dashboardController.dashboardUpdateNote);
router.delete('/dashboard/item-delete/:id',isLoggedIn,dashboardController.dashboardDeleteNote);
module.exports=router;