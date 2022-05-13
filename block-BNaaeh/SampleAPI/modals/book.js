var mongoose = require('mongoose');
var schema = mongoose.Schema;


var bookSchema = new schema({
    name:String,
    title:String,
    description:String,
    page:Number,
    commentID:[{type:schema.Types.ObjectId,ref:"Comment"}]

},{timestamps:true})



var Book = mongoose.model('Book',bookSchema)
module.exports=Book;