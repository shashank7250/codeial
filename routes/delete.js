const express=require('express');
const router= express.Router();




const homeController =require('../controllers/home3_controller');
router.get('/',homeController.delete);
module.exports=router;