const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://lathiyakrupali3600:Krupali%403600@cluster0.zic35.mongodb.net/movies').then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log('Error connecting to MongoDB', err);
})