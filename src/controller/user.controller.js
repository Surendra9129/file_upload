const express=require('express');
const router=express.Router();
const user=require('../model/user.model');
const upload=require('../middleware/upload');

router.post('/', upload.any('product_image'),async(req,res)=>{
    const filePath=req.files.map((file)=>file.path);
    const new_user=await user.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        profile_pic: filePath
    })
   return  res.status(201).json({new_user});
});

router.use('/',async(req,res)=>{
    const new_user=await user.find({}).lean().exec();
    res.send({user});
})

module.exports=router;