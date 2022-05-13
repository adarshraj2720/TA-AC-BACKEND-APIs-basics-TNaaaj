var mongoose = require('mongoose')

var schema = mongoose.Schema;

var countrySchema = new schema({
    name : String,
    states: {type:schema.Types.ObjectId,ref:"State"},
    continent:String,
    population:Number,
    religions:[String],
    neighbouring_countries:[{type:schema.Types.ObjectId,ref:"Country"}],
    area:Number

})


var Country = mongoose.model('Country',countrySchema);
module.exports = Country;