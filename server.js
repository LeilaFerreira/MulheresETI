const express = require('express'),
  path = require('path'),

  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./config/DB'),
  itemRoutes = require('./expressRoutes/itemRoutes');
  userRoutes = require('./expressRoutes/userRoutes');
  oficioRoutes = require('./expressRoutes/oficioRouters');
  userCandidatoRoutes = require('./expressRoutes/userCandidatosRouters');
  userParceiroRoutes = require('./expressRoutes/userParceiroRouters');




mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => {
    console.log('Banco de dados conectado')
  },
  err => {
    console.log('Não conectado ao banco de dados' + err)
  }
);

const app = express();

app.use(cors());
app.use('/items', itemRoutes);
app.use('/user', userRoutes);
app.use('/oficio', oficioRoutes);
app.use('/candidato', userCandidatoRoutes);
app.use('/parceiro', userParceiroRoutes);
const port = process.env.PORT || 4000;

const server = app.listen(port, function () {
  console.log('bateu na porta ' + port);
});


/********************************************************************************
 *  Login - Usuario  
 *******************************************************************************/

// Import do User Model
var UserModel = require('./models/User');


bodyParser = require('body-parser');
// criando instancias  express 
const cookieSession = require('cookie-session');
const passport = require('passport');

// Caputrando o tipo de autenticacao local
const LocalStrategy = require('passport-local').Strategy;


// let users = [{
//     id: 1,
//     name: "Lili",
//     email: "user@email.com",
//     password: "password"
//   },
//   {
//     id: 2,
//     name: "Didi",
//     email: "emma@email.com",
//     password: "password2"
//   }
// ];



app.use(cookieSession({
  name: 'mysession',
  keys: ['vueauthrandomkey'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));
app.use(bodyParser.json());


// logar
app.post("/api/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(400).send([user, "Cannot log in", info]);
    }

    req.login(user, err => {
      res.send(user);
    });
  })(req, res, next);
});

//Deslogar
app.get("/api/logout", function (req, res) {
  req.logout();

  console.log("logged out")

  return res.send();
});

//verifica autenticação de usuário
const authMiddleware = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.status(401).send('You are not authenticated')
  } else {
    return next()
  }
};

//URL para obter os dados dos usuários atualmente conectados
app.get("/api/user", authMiddleware, (req, res) => {
  let user = UserModel.find(user => {
    return user.id === req.session.passport.user
  })

  console.log([user, req.session])

  res.send({
    user: user
  })
});

// Após o login, ele armazenará os dados do objeto de usuário em uma sessão de 
// cookie e recuperará os dados em solicitações posteriores. 
// passport.use(
//   new LocalStrategy({
//       cpfField: "cpf",
//       senhaField: "senha"
//     },


//     (cpf, senha, done) => {
//       let user = UserModel.find((user) => {
//         return user.cpf === cpf && user.senha === senha
//       })

//       if (user) {
//         done(null, user)
//       } else {
//         done(null, false, {
//           message: 'Incorrect username or password'
//         })
//       }
//     }
//   )
// );
passport.use(new LocalStrategy({
  usernameField: 'cpf',
  passwordField: 'senha'
},function (cpf, senha, done) 
{
  UserModel.findOne({
    cpf: cpf
  }, 
  function (err, user) {
    if (err) {
      console.log(err)
      return done(err);
    }
    if (!user) {
      return done(null, false, {
        message: 'Incorrect username.'
      });
    }
    // if (!user.validPassword(senha)) {
    //   return done(null, false, {
    //     message: 'Incorrect password.'
    //   });
    // }
    return done(null, user);
  });
}));

//Nesse caso, queremos apenas armazenar o ID, pois é suficiente identificar o usuário quando o 
//extraímos do cookie
passport.serializeUser((user, done) => {
  done(null, user.cpf)
});

// Quando um usuário faz uma solicitação para um URL seguro. Dizemos ao passaporte como 
// recuperar o objeto de usuário de nossa matriz de usuários

passport.deserializeUser(function(id, done) {
  UserModel.findOne({
      id: id
  }, '-password -salt', function(err, user) {
      done(err, user);
  });
});


// passport.deserializeUser((id, done) => {
//   let user = UserModel.findOne((user) => {
//     return user.id === id
//   })

//   done(null, user)
// })