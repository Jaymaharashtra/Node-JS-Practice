const express = require('express');
const mongodb = require('mongodb');
const app = express();
const connectDb = require('./databaseConfig');

app.use(express.json());

app.get('/',async (req,res)=>{
    let result = await connectDb();
    let query =await result.find().toArray();
    res.send(query);
})

app.post('/',async (req,res)=>{
    let con = await connectDb();
    let query = await con.insertOne(req.body);
    console.log(query);
    res.send(query);
})

app.put('/',async(req,res)=>{
    let con = await connectDb();
    let query =await con.updateOne({'c_name':'yourVikas'},{$set:req.body});
    console.log(req.body);
    res.send(query);
})

app.delete('/:id',async (req,res)=>{
    let con = await connectDb();
    let query = await con.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.send(query);
})


app.listen(4800);