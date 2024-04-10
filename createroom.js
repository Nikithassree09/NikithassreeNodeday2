const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/newmongoosefsdwd56')

const HallBookTask=mongoose.model('HallBookTask',{
    NumberofSeatsAvailable:{
       type:String,
       required:true,
       trim:true
    },
    Roomamenities:{
       type:String,
       required:true,
       trim:true
    },
    Pricefor1Hour:{
        type:String,
        required:true,
        trim:true
     }
})
const userData=new HallBookTask({
    NumberofSeatsAvailable:"50",
    Roomamenities:"Double bed,cushion,table,TV,Landline,Water jug,Bath towel,Bath soap,glass cups,Kettle,Wifi",
    Pricefor1Hour:"100$"
})
//userData.save()
module.exports=HallBookTask