var express = require('express');
var userCandidatosRouters = express.Router();

// Import do UserCandidato Model
var User = require('../models/UserCandidato');




// Define add route
userCandidatosRouters.route('/add').post(function (req, res) {
 
    console.timeLog(req.body);
    var user = new User(req.body);
   
      user.save()
    .then(user => {
    res.status(200).json({'usuario': 'Candidato adcionado com sucesso'});
    })
    .catch(err => {
    res.status(400).send("salvo no banco de dados");
    });
});

//Lista todos os Candidatos
userCandidatosRouters.route('/').get(function (req, res) {
  
    User.find(function (err, user){
       if(err){
         console.log(err);
       }
       else {
         res.json(user);
       }
     });
   });

// Definição edit 
userCandidatosRouters.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  User.findById(id, function (err, user){
      res.json(user);
  });
});

//  Definição update 
userCandidatosRouters.route('/update/:id').post(function (req, res) {
  User.findById(req.params.id, function(err, user) {
    if (!user)
      return next(new Error('erro ao carregar documento'));
    else {
      user.nome = req.body.nome;
      user.rg = req.body.rg;
      user.cpf = req.body.cpf;
      user.data_nascimento = req.body.data_nascimento;
      user.nacionalidade = req.body.nacionalidade;
      user.estado_civil = req.body.estado_civil;
      user.filhos = req.body.filhos;
      user.quantidade_filhos = req.body.quantidade_filhos;
      user.idade_filhos = req.body.idade_filhos;
      user.cep = req.body.cep;
      user.endereco = req.body.endereco;
      user.complemento = req.body.complemento;
      user.bairro = req.body.bairro;
      user.cidade = req.body.cidade;
      user.estado = req.body.estado;
      user.horario_contato = req.body.horario_contato;
      user.telefone1 = req.body.telefone1;
      user.telefone2 = req.body.telefone2;
      user.telefone3 = req.body.telefone3;
      user.email = req.body.email;

      user.curriculo.escolaridade = req.body.curriculo.escolaridade;
      user.curriculo.curso = req.body.curriculo.curso;
      user.curriculo.local = req.body.curriculo.local;
      user.curriculo.periodo = req.body.curriculo.periodo;
      user.curriculo.habilidade = req.body.curriculo.habilidade;
      user.curriculo.observacoes = req.body.curriculo.observacoes;
      
      user.encaminhamento.servico_cate = req.body.encaminhamento.servico_cate;
      user.encaminhamento.data_realizada = req.body.encaminhamento.data_realizada;

      user.exp_profissional.empresa = req.body.exp_profissional.empresa;
      user.exp_profissional.cargo = req.body.exp_profissional.cargo;
      user.exp_profissional.periodo = req.body.exp_profissional.periodo;

      user.percepcao_atendimento.fisico = req.body.percepcao_atendimento.fisico;
      user.percepcao_atendimento.psicologico = req.body.percepcao_atendimento.psicologico;
      user.percepcao_atendimento.outros = req.body.percepcao_atendimento.outros;

    

      

      user.save().then(user => {
          res.json('Alterado com sucesso');
      })
      .catch(err => {
            res.status(400).send("Erro ao atualizar usuario");
      });
    }
  });
});

// Definição do delete | remover |  route
userCandidatosRouters.route('/delete/:id').get(function (req, res) {
  User.findByIdAndRemove({_id: req.params.id}, function(err, user){
		if(err) res.json(err);
		else res.json('Removido com sucesso');
	});
});

module.exports = userCandidatosRouters;
