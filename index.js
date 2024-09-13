const express=require('express');
const path=require('path');
const dotenv = require('dotenv');
dotenv.config();
const app=express();
const PORT = process.env.PORT || 30010;
const myPath=path.join(__dirname,'/views')
const router=require('./routers/index')
const bodyParser = require('body-parser')
const mongoose=require('./config/db')

app.set('view engine','ejs');
app.set('views',myPath);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(myPath));
app.use('/uploads',express.static(path.join(__dirname,'/uploads')));
// app.use('/images', express.static(path.join(__dirname, 'views')));x

app.use('/',router);

app.listen(PORT,(err)=>{
    if(!err) console.log(`server running ${PORT}`);
})