var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var UserParceiro = new Schema({
    empresa : {
    type: String
    },
    codigo : {
      type: String
    }, 
    area_atuacao : {
      type: String
    }, 
    responsavel : {
      type: String
    }, 
    cep : {
      type: String
    }, 
    endereco : {
      type: String
    }, 
    complemento : {
      type: String
    },
    bairro : {
      type: String
    },
    cidade : {
      type: String
    }, 
    estado : {
      type: String
    }, 
    email_1 : {
      type: String
    }, 
    email_2 : {
      type: String
    },
    telefone_2 : {
      type: String
    },
    telefone_3 : {
      type: String
    }, 
    outras_observacoes : {
      type: String
    }, 
    
    vagas : [

        { 
            codigo_vaga : {
                type: String
              },  
            data_cadastro : {
            type: String
            },  
            cargo : {
            type: String
            },  
            descricao_vaga : {
            type: String
            },  
            remuneracao : {
            type: String
            },  
            carga_horaria : {
            type: String
            },  
            beneficio : {
            type: String
            },  
            local_trabalho : {
                type: String
            },  
        }]

},{
	collection: 'UserParceiro'
});

module.exports = mongoose.model('UserCUserParceirondidato', UserParceiro);
