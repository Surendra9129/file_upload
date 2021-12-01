const mongoose=require(`mongoose`);

const galarySchema=new mongoose.Schema(
    {
       picture:{type:String, required:true},
       user_id: {type:String, required:true}
    },
    {
      versionKey: false,
      timestamps:true
    }
)
const galary=mongoose.model('galary',galarySchema);

module.exports=galary;