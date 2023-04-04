require('dotenv').config()

const mongoose =require("mongoose");
const express=require("express");
const app=express();
const uri="mongodb://localhost:27017/IPD1"
// const uri = `mongodb+srv://temp:temp123@cluster0.f6fqt2w.mongodb.net/?retryWrites=true&w=majority`
mongoose.set("strictQuery", false);

// mongoose.connect(uri).then(() => {
//     console.log("Connection successfull with Databse");
// }).catch((e) => {
//     console.log(e);
// })

mongoose.connect(uri, () => {
    console.log("MongoDB connected")
})
