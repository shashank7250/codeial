const express=require('express');
const router= express.Router();

const homeController =require('../controllers/home_controller');

console.log('routes running');
router.get('/',homeController.home);
router.use('/add-list',require('./list'));
router.use('/delete-list',require('./delete'));
module.exports =router;