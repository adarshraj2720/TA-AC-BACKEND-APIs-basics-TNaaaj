var mongoose = require('mongoose');

var schema = mongoose.Schema;

var stateSchema = new schema({
    name : String,
    countrt:[{type:schema.Types.ObjectId,ref:"Country"}],
    population:Number,
    area:Number,
    neighbouring_states:{type:schema.Types.ObjectId,ref:"State"}
})

var State = mongoose.model('State',stateSchema);
module.exports= State;