const express=require('express');
const router=express.Router();

const productoController=require('../controllers/productoController.js');

router.get('/',productoController.list);

module.exports = router;