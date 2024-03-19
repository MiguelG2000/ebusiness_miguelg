const express=require('express');
const router=express.Router();

const categoriaController=require('../controllers/categoriaController');

router.get('/',categoriaController.list);

module.exports = router;