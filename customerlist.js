const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/newmongoosefsdwd56')

const CustomerListTask=mongoose.model('CustomerListTask',{
    CustomerName:{
       type:String,
       required:true,
       trim:true
    },
    RoomName:{
        type:String,
        required:true,
        trim:true
     },
    Date:{
       type:String,
       required:true,
       trim:true
    },
    StartTime:{
        type:String,
        required:true,
        trim:true
     },
     EndTime:{
        type:String,
        required:true,
        trim:true
     }

     })
     const userData=new CustomerListTask({
        CustomerName:"John",
        RoomName:"104",
        Date:"07-04-2024",
        StartTime:"10:00AM",
        EndTime:"07:00PM"
     })
     //userData.save()
     module.exports=CustomerListTask