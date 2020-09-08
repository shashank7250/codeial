const express=require('express');
const router= express.Router();




const homeController =require('../controllers/home2_controller');
router.post('/',homeController.list);
module.exports=router;