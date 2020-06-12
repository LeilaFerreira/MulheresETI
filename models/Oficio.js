var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Oficio = new Schema({
    oficio_id : {
        type: Number
      },
    data_cadastro : {
        type: Date
      } ,
    pdf : {
        type: String
      }, 
    justificativa : {
        type: String
      },

},{
	collection: 'Oficio'
});

module.exports = mongoose.model('Oficio', Oficio);
