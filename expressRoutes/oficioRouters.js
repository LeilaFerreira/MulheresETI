var express = require('express');
var oficioRoutes = express.Router();

// Import do Oficio Model
var Oficio = require('../models/Oficio');

// Definição da store route
oficioRoutes.route('/add').post(function (req, res) {
 
    console.timeLog(req.body);
    var oficio = new Oficio(req.body);
   
    oficio.save()
    .then(ret => {
    res.status(200).json({'usuario': 'Oficio adcionado com sucesso'});
    })
    .catch(err => {
    res.status(400).send("salvo no banco de dados");
    });
});

// Definição get data(index or listing) route
oficioRoutes.route('/').get(function (req, res) {
  
  Oficio.find(function (err, oficio){
     if(err){
       console.log(err);
     }
     else {
       res.json(oficio);
     }
   });
 });


// Definição edit 
oficioRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Oficio.findById(id, function (err, ret){
      res.json(ret);
  });
});

//  Defined update route
oficioRoutes.route('/update/:id').post(function (req, res) {
  Oficio.findById(req.params.id, function(err, ret) {
    if (!ret)
      return next(new Error('erro ao carregar documento'));
    else {
    
        oficio.oficio_id = req.body.oficio_id
        oficio.data_cadastro = req.body.data_cadastro
        oficio.pdf = req.body.pdf
        oficio.justificativa =req.body.justificativa


      user.save().then(user => {
          res.json('Alterado com sucesso');
      })
      .catch(err => {
            res.status(400).send("Erro ao atualizar usuario");
      });
    }
  });
});

// Defined delete | remove | destroy route
oficioRoutes.route('/delete/:id').get(function (req, res) {
  Oficio.findByIdAndRemove({_id: req.params.id}, function(err, ret){
		if(err) res.json(err);
		else res.json('Removido com sucesso');
	});
});

module.exports = oficioRoutes;
