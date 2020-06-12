var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var User = new Schema({
  Id: {
    type: Number
  },
  nome: {
    type: String
  },
  cpf: {
    type: String
  },
  email: {
    type: String
  },
  senha: {
    type: String
  },
  user_ministerio_publico: {
    type: Boolean
  },
  user_ministerio_da_justica: {
    type: Boolean
  },
  user_cat: {
    type: Boolean
  },
  user_parceiro: {
    type: Boolean
  }


},{
	collection: 'user'
});

// var authSchema = mongoose.Schema({ username: 'string', password: 'string' });
//  authSchema.methods.validPassword = function( pwd ) 
//  { // EXAMPLE CODE! return
//    ( this.password === pwd ); 
//   };

module.exports = mongoose.model('user', User);
