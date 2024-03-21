const express=require('express');
const router=express.Router();

const trucksController=require('../controllers/trucksController');

router.get('/',trucksController.list);

module.exports = router;