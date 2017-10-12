//=====MODELS======//
const User = require('./models/user.js');
const Talk = require('./models/talk.js');
const Talkname = require('./models/talkname.js');
//=================//

//====LIST DEPENDENCIES===//
const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
// const cors = require('cors')
const app = express();
const url = process.env.MONGOLAB_URI;
//=========================//

//====SET APP ENGINE===//

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(expressValidator());

//=========================//

//====START SESSION===//

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

//==========================//

//====MONGOOSE PROMISE===//

mongoose.Promise = require('bluebird');

//==========================//

//====MONGOOSE CONNECTION===//

mongoose.connect(url, function (err, db) {
 if (err) {
   console.log('Unable to connect to the mongoDB server. Error:', err);
 } else {
   console.log('Connection established to', url);
 }
});

//==========================//

//====TEST THE CONNECTION/ROOT DIR===//

app.use(function(req, res, next) {
  console.log('Programming is fun!');
  next();
})

app.get('/', function(req, res) {
  res.redirect('/landing');
});

//==========================//

//====RENDER LANDING PAGE===//

app.get('/landing', function(req, res) {
  res.render('landing')
});

//==========================//

//====RENDER THANKS PAGE===//

app.get('/thanks', function(req, res) {
  res.render('thanks')
});

//==========================//

//====RENDER SIGNUP PAGE===//

app.get('/signup', function(req, res) {
  res.render('signup')
});

//==========================//

//====RENDER LOGIN PAGE===//

app.get('/login', function(req, res) {
  res.render('login')
});

//==========================//

//====RENDER LOGIN PAGE2===//

app.get('/login', function(req, res) {
  if (req.session && req.session.authenticated) {
    User.findOne({
        username: req.session.username,
        password: req.session.password
      }).then(function(user) {
      if (user) {
        req.session.username = req.body.username;
        var username = req.session.username;
        var userid = req.session.userId;
        res.render('login', {
          user: user
        });
      }
    })
  } else {
    res.redirect('/signup')
  }
})

//==========================//

//====POST LOGIN FOR USER===//

app.post('/login', function(req, res) {
  let username = req.body.username;
  let password = req.body.password;

  User.findOne({
      username: username,
      password: password,
  }).then(user => {
    console.log(user);
    if (user.password == password) {
      req.session.username = username;
      req.session.authenticated = true;
      console.log(req.session);

      res.redirect('/mytalks');
    } else {
      res.redirect('/login');
      console.log("This is my session", req.session)
    }
  })
})

//==========================//

//====POST TO SIGNUP PAGE===//

app.post('/signup', function(req, res) {
  User.create({
    username: req.body.username,
    password: req.body.password,
  }).then(function(user) {
    req.username = user.username;
    req.session.authenticated = true;
}).then(user => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER DISPLAY PAGE===//

app.get('/home2', function(req, res) {
  Talk.find({}).then(function(talks){
    res.render('home2', {
      talks: talks,
    });
  });
});

//==========================//

//====RENDER MY TALKS PAGE===//

app.get('/mytalks', function(req, res) {
  Talkname.find({
    user: req.session.username
  }).then(function(talknames){
    res.render('mytalks', {
      talknames: talknames,
    });
  });
});

//==========================//

//====RENDER TALKNAME===//

app.get('/talkname', function(req, res) {
  res.render('talkname')
});

//==========================//

//====RENDER COMPLETED===//

app.get('/completed', function(req, res) {
  Talkname.find({
    user: req.session.username
  }).then(function(talknames){
    res.render('completed', {
      talknames: talknames,
    });
  });
});

//==========================//

//====RENDER COMPLETED TALKS===//

app.get('/completed/:talkname', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
    Talkname.findOne({talk_name: req.params.talkname}).then(function(talknames){
      Talk.findOne({talk_name: req.params.talkname}).then(function(talks){
  res.render('home2', {
    users: users,
    talknames: talknames,
    talks: talks,
        })
      })
    })
  })
});

//==========================//

//====POST TALKNAME===//

app.post('/talkname', function(req, res) {
  Talkname.create({
    user: req.session.username,
    talk_name: req.body.talk_name,
  }).then(talknames => {
  res.redirect('/mytalks')
});
});

//==========================//

//====RENDER HOME PAGE===//

app.get('/:talkname', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users) {
    Talkname.findOne({talk_name: req.params.talkname}).then(function(talknames) {
      res.render('home', {
        users: users,
        talknames: talknames,
      });
    });
});
});

//==========================//

//====POST TALK===//

app.post('/:talkname', function(req, res) {
  Talk.create({
    user: req.session.username,
    talk_name: req.params.talkname,
    talk_topic: req.body.talk_topic,
    section1_topic: req.body.section1_topic,
    topic1: req.body.topic1,
    textarea1: req.body.textarea1,
    topic2: req.body.topic2,
    textarea2: req.body.textarea2,
    topic3: req.body.topic3,
    textarea3: req.body.textarea3,
    topic4: req.body.topic4,
    textarea4: req.body.textarea4,
    topic5: req.body.topic5,
    textarea5: req.body.textarea5,
    topic6: req.body.topic6,
    textarea6: req.body.textarea6,
    topic7: req.body.topic7,
    textarea7: req.body.textarea7,
    topic8: req.body.topic8,
    textarea8: req.body.textarea8,
    topic9: req.body.topic9,
    textarea9: req.body.textarea9,
    topic10: req.body.topic10,
    textarea10: req.body.textarea10,
  }).then(talks => {
  res.redirect('/home2')
});
});

//==========================//

//==== LOGOUT ===//

app.post('/logout', function(req, res) {
  req.session.destroy(function(err) {})
  res.redirect('/landing');
  console.log(req.session);
});

//==========================//

//====APP LISTEN ON ENVIRONMENT PORT===//

app.listen(process.env.PORT || 3000);
console.log('starting applicaiton.  Good job!');

//==========================//
