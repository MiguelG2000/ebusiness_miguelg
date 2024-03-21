const express=require('express');
const router=express.Router();

const tablaController=require('../controllers/tablaController');

router.get('/',tablaController.list);

module.exports = router;