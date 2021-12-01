const express=require('express');
const galary=require('../model/galary.model');
const  router=express.Router();

router.post('/', async(req, res)=>{
    const new_galary=await galary.create(req.body);
    res.status.send({new_galary});
})

module.exports=router;