const express=require('express');
const router=express.Router();

const lijaController=require('../controllers/lijaController');

router.get('/',lijaController.list);

module.exports = router;