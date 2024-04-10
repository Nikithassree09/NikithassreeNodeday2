const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/newmongoosefsdwd56')

const BookedlistTask=mongoose.model('BookedlistTask',{
    RoomNumber:{
       type:String,
       required:true,
       trim:true
    },
    BookedStatus:{
       type:String,
       required:true,
       trim:true
    },
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
    
     })
     const userData=new BookedlistTask({
        RoomNumber:"101",
        BookedStatus:"confirmed",
        CustomerName:"Abcde",
        Date:"09-04-2024",
        StartTime:"09:00AM",
        EndTime:"10:00PM"
    })
    const userData1=new BookedlistTask({
        RoomNumber:"104",
        BookedStatus:"Pending",
        CustomerName:"John",
        Date:"07-04-2024",
        StartTime:"10:00AM",
        EndTime:"07:00PM"
    })
    const userData2=new BookedlistTask({
        RoomNumber:"202",
        BookedStatus:"Cancelled",
        CustomerName:"xyz",
        Date:"01-04-2024",
        StartTime:"10:00AM",
        EndTime:"12:00PM"
    })
    //userData.save()
    //userData1.save()
    //userData2.save()
    module.exports=BookedlistTask