var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var UserCandidato = new Schema({
  nome : {
    type: String
  },
    rg : {
      type: String
    }, 
    cpf : {
      type: String
    }, 
    data_nascimento : {
      type: String
    }, 
    nacionalidade : {
      type: String
    }, 
    estado_civil : {
      type: String
    }, 
    filhos : {
      type: String
    },
    quantidade_filhos : {
      type: String
    },
    idade_filhos : {
      type: String
    }, 
    cep : {
      type: String
    }, 
    endereço : {
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
    horario_contato : {
      type: String
    }, 
    telefone1 : {
      type: String
    },
    telefone2 : {
      type: String
    },
    telefone3 : {
      type: String
    },
    email : {
      type: String
    },
    curriculo :[
      { 
        escolaridade : {
          type: String
        }, 
        curso : {
          type: String
        }, 
        local : {
          type: String
        }, 
        periodo : {
          type: String
        },  
        habilidade : {
          type: String
        },  
        observacoes : {
          type: String
        }, 
        
          encaminhamento : [
        { 
          servico_cate :  {
            type: String
          },  
          data_realizada :  {
            type: String
          },  
        }],
        exp_profissional : [
        { 
          empresa :  {
            type: String
          },  
          cargo :  {
            type: String
          },   
          periodo :  {
            type: String
          },  
        }],
  
        percepcao_atendimento : [
  
        { 
          fisico :  {
            type: String
          },   
          psicologico :  {
            type: String
          },  
          outros :  {
            type: String
          },  
        }]
  
      }]

},{
	collection: 'UserCandidato'
});

module.exports = mongoose.model('UserCandidato', UserCandidato);
