const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/newmongoosefsdwd56')
const express=require('express')
const HallBook=require('./model/createroom')
const BookRoom=require('./model/bookroom')
const BookList=require('./model/bookedList')
const Customerlist=require('./model/customerlist')
const CustomerBook=require('./model/customerbook')
const app=express()
const PORT=8000;
app.use(express.json())


app.listen(PORT,()=>{
    console.log("Server Started",PORT)
})
//app.post('/createroom',async(req,res)=>{
    //console.log(req.body)
    //res.send(req.body)
//})

app.get('/createroom',async(req,res)=>{
    try{
        const getAllcreateroom=await HallBook.find({})
        res.send(getAllcreateroom)
    }
    catch(e){
        res.send({message:"HallBookTask not found"})
    }
})
app.post('/createroom',async(req,res)=>{
    //console.log(req.body)
    //res.send(req.body)
    const userData=new HallBook(req.body)
    userData.save().then((data)=>res.send(data))
  })

app.get('/bookroom',async(req,res)=>{
    try{
        const getAllbookroom=await BookRoom.find({})
        res.send(getAllbookroom)
    }
    catch(e){
        res.send({message:"Bookroomtask not found"})
    }
})
app.post('/bookroom',async(req,res)=>{
    //console.log(req.body)
    //res.send(req.body)
    const userData=new BookRoom(req.body)
    userData.save().then((data)=>res.send(data))
  })
app.get('/bookedlist',async(req,res)=>{
    try{
        const getAllbookedlist=await BookList.find({})
        res.send(getAllbookedlist)
    }
    catch(e){
        res.send({message:"Bookedlist task not found"})
    }
})
app.post('/bookedlist',async(req,res)=>{
    //console.log(req.body)
    //res.send(req.body)
    const userData=new BookList(req.body)
    userData.save().then((data)=>res.send(data))
  })
  app.get('/customerlist',async(req,res)=>{
    try{
        const getAllcustomerlist=await Customerlist.find({})
        res.send(getAllcustomerlist)
    }
    catch(e){
        res.send({message:"customerlist task not found"})
    }
})
app.post('/customerlist',async(req,res)=>{
    //console.log(req.body)
    //res.send(req.body)
    const userData=new Customerlist(req.body)
    userData.save().then((data)=>res.send(data))
  })
  app.get('/customerbook',async(req,res)=>{
    try{
        const getAllcustomerbook=await CustomerBook.find({})
        res.send(getAllcustomerbook)
    }
    catch(e){
        res.send({message:"customerbook task not found"})
    }
})
app.post('/customerbook',async(req,res)=>{
    //console.log(req.body)
    //res.send(req.body)
    const userData=new CustomerBook(req.body)
    userData.save().then((data)=>res.send(data))
  })
