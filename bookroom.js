const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/newmongoosefsdwd56')

const BookRoomTask=mongoose.model('BookRoomTask',{
    CustomerName:{
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
     },
     RoomID:{
        type:String,
        required:true,
        trim:true
     }
     })
     const userData=new BookRoomTask({
        CustomerName:"abcde",
        Date:"09/04/2024",
        StartTime:"09:00AM",
        EndTime:"10:00PM",
        RoomID:"101"
    })
    //userData.save()
    module.exports=BookRoomTask