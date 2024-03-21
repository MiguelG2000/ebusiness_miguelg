const express=require('express');
const router=express.Router();

const calzadoController=require('../controllers/calzadoController');

router.get('/',calzadoController.list);

module.exports = router;