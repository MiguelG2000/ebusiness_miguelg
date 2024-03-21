const express=require('express');
const router=express.Router();

const llantaController=require('../controllers/llantaController');

router.get('/',llantaController.list);

module.exports = router;