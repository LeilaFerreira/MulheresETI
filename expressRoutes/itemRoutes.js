var express = require('express');
var app = express();
var itemRoutes = express.Router();

// (Import)Require Item model na routes module
var Item = require('../models/Item');

// Definição store 
itemRoutes.route('/add').post(function (req, res) {
  var item = new Item(req.body);
      item.save()
    .then(item => {
    res.status(200).json({'item': 'Item adcionado com sucesso'});
    })
    .catch(err => {
    res.status(400).send("salvo no banco de dados");
    });
});

// Definição get data(index or listing) route
itemRoutes.route('/').get(function (req, res) {
  Item.find(function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});

// Definição edit route
itemRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Item.findById(id, function (err, item){
      res.json(item);
  });
});

//  Definição update route
itemRoutes.route('/update/:id').post(function (req, res) {
  Item.findById(req.params.id, function(err, item) {
    if (!item)
      return next(new Error('erro ao carregar documento'));
    else {
      item.name = req.body.name;
      item.price = req.body.price;

      item.save().then(item => {
          res.json('Update completo');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Definiçaõ delete | remove |  route
itemRoutes.route('/delete/:id').get(function (req, res) {
  Item.findByIdAndRemove({_id: req.params.id}, function(err, item){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

module.exports = itemRoutes;
