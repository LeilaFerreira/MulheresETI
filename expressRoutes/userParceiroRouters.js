var express = require('express');
var userParceirosRouters = express.Router();

// Import do UserParceiro Model
var User = require('../models/userParceiro');


// Rota para pegar lista todos os usuarios
userParceirosRouters.route('/').get(function (req, res) {
  
   User.find(function (err, user){
      if(err){
        console.log(err);
      }
      else {
        res.json(user);
      }
    });
  });

// Define rota para adicionar usuario
userParceirosRouters.route('/add').post(function (req, res) {
 
    console.timeLog(req.body);
    var user = new User(req.body);
   
      user.save()
    .then(user => {
    res.status(200).json({'usuario': 'Usuario adcionado com sucesso'});
    })
    .catch(err => {
    res.status(400).send("salvo no banco de dados");
    });
});

// Definição edit 
userParceirosRouters.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  User.findById(id, function (err, user){
      res.json(user);
  });
});

//  Definição update 
userParceirosRouters.route('/update/:id').post(function (req, res) {
  User.findById(req.params.id, function(err, user) {
    if (!user)
      return next(new Error('erro ao carregar documento'));
    else {
      user.empresa = req.body.empresa;
      user.codigo = req.body.codigo;
      user.area_atuacao = req.body.area_atuacao;
      user.responsavel = req.body.responsavel;
      user.cep = req.body.cep;
      user.endereco = req.body.endereco;
      user.complemento = req.body.complemento;
      user.bairro = req.body.bairro;
      user.cidade = req.body.cidade;
      user.estado = req.body.estado;
      user.email_1 = req.body.email_1;
      user.email_2 = req.body.email_2;

      user.telefone_1 = req.body.telefone_1;
      user.telefone_2 = req.body.telefone_2;
      user.telefone_3 = req.body.telefone_3;
      user.outras_observacoes = req.body.outras_observacoes;

      user.vagas.codigo_vaga = req.body.vagas.codigo_vaga;
      user.vagas.data_cadastro = req.body.vagas.data_cadastro;
      user.vagas.cargo = req.body.vagas.cargo;
      user.vagas.descricao_vaga = req.body.vagas.descricao_vaga;
      user.vagas.remuneracao = req.body.vagas.remuneracao;
      user.vagas.carga_horaria = req.body.vagas.carga_horaria;
      user.vagas.beneficio = req.body.vagas.beneficio;
      user.vagas.local_trabalho = req.body.vagas.local_trabalho;
      
     
      user.save().then(user => {
          res.json('Alterado com sucesso');
      })
      .catch(err => {
            res.status(400).send("Erro ao atualizar usuario");
      });
    }
  });
});

// Definição delete | remover |  route
userParceirosRouters.route('/delete/:id').get(function (req, res) {
  User.findByIdAndRemove({_id: req.params.id}, function(err, user){
		if(err) res.json(err);
		else res.json('Removido com sucesso');
	});
});

module.exports = userParceirosRouters;
