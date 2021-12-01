const express=require('express');
const router=express.Router();
const user=require('../model/user.model');

router.use('/',async(req,res)=>{
    const new_user=await user.create(req.body);
    res.status(201).send({new_user});
});

router.use('/',async(req,res)=>{
    const new_user=await user.find({}).lean().exec();
    res.send({user});
})

module.exports=router;