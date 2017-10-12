//=====MODELS======//
const Talk = require('./models/talk.js');
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
const url = 'mongodb://EthanJarrell:EJ3102nl1@ds117485.mlab.com:17485/presentation-maker';
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
  console.log('I dont like programming anymore');
  next();
})

app.get('/', function(req, res) {
  res.redirect('/home');
});

//==========================//

//====RENDER HOME PAGE===//

app.get('/home', function(req, res) {
  res.render('home')
});

//==========================//

//====POST TALK===//

app.post('/talkform', function(req, res) {
  Talk.create({
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
  }).then(talk => {
  res.json(talk)
});
});

//==========================//

//====APP LISTEN ON ENVIRONMENT PORT===//

app.listen(process.env.PORT || 3000);
console.log('starting applicaiton.  Good job!');

//==========================//
