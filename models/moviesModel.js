// const mongoose = require('mongoose');

// const todoschema = mongoose.Schema({
//     title:{
//         type:String,
//         complete:false
//     },
//     path:{
//         type:String
//     },
//     description:{
//         type:String
//     },
//     year:{
//         type:Number
//     }
// })

// const Todo = mongoose.model('Todo' , todoschema)

// module.exports = Todo;

const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  title: String,
  path:String,
  discription: String,
  year: Number
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports=Movie;