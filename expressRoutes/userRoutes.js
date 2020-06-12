var express = require('express');
var userRoutes = express.Router();

 // Import do User Model
var User = require('../models/User');



// Definição store route
userRoutes.route('/add').post(function (req, res) {
 
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

// Definição edit route
userRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  User.findById(id, function (err, user){
      res.json(user);
  });
});

// Definição get data(index or listing) route
userRoutes.route('/').get(function (req, res) {
  
    User.find(function (err, user){
       if(err){
         console.log(err);
       }
       else {
         res.json(user);
       }
     });
   });
   
   // Pegar um unico usuario.
   userRoutes.route('/user/:id').get(function (req, res) {
    var id = req.params.id;
    User.findById(id, function (err, user){
        res.json(user);
    });
  });
  
 

//  Definição update 
userRoutes.route('/update/:id').post(function (req, res) {
  User.findById(req.params.id, function(err, user) {
    if (!user)
      return next(new Error('erro ao carregar documento'));
    else {
      user.nome = req.body.nome;
      user.cpf = req.body.cpf;
      user.email = req.body.email;
      user.senha = req.body.senha;
      user.user_ministerio_publico = req.body.user_ministerio_publico;
      user.user_ministerio_da_justica = req.body.user_ministerio_da_justica;
      user.user_cat = req.body.user_cat;
      user.user_parceiro = req.body.user_parceiro;

      user.save().then(user => {
          res.json('Alterado com sucesso');
      })
      .catch(err => {
            res.status(400).send("Erro ao atualizar usuario");
      });
    }
  });
});

// Definição delete | remove |  route
userRoutes.route('/delete/:id').get(function (req, res) {
  User.findByIdAndRemove({_id: req.params.id}, function(err, user){
		if(err) res.json(err);
		else res.json('Removido com sucesso');
	});
});

module.exports = userRoutes;
