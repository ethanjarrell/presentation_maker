//=====MODELS======//
const User = require('./models/user.js');
const Talk = require('./models/talk.js');
const Talkid = require('./models/talkid.js');
const Talkname = require('./models/talkname.js');
const Talktopic = require('./models/talktopic.js');
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
const cors = require('cors')
const app = express();
const url = process.env.MONGOLAB_URI;
//=========================//

//====SET APP ENGINE===//

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');
app.use(cors());
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
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  }).then(function(user) {
    req.username = user.username;
    req.session.authenticated = true;
}).then(user => {
  res.redirect('/login')
});
});

//==========================//

//====RENDER ACCOUNTS PAGE===//

app.get('/account', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
    Talktopic.find({user: req.session.username}).then(function(talktopics){
    res.render('account', {
      users: users,
      talktopics: talktopics,
    });
  });
});
});

//==========================//

//====RENDER ACCOUNTS UPDATE PAGE===//

// app.get('/change/:username', function(req, res) {
//   User.findOne({username: req.session.username}).then(function(users){
//     Talktopic.find({}).then(function(talktopics){
//     res.render('account_change', {
//       users: users,
//       talktopics: talktopics,
//     });
//   });
// });
// });

//==========================//

//====POST ACCOUNTS UPDATE PAGE===//

// app.post('/change/:username', function(req, res) {
//   User.findOneAndUpdate({
//     email: req.body.email,
//     username: req.body.username,
//     password: req.body.password,
//   }).then(users => {
//   res.redirect('/account')
// });
// });

//==========================//

//====RENDER DISPLAY PAGE===//

app.get('/home2', function(req, res) {
  User.find({username: req.session.username}).then(function(users){
    Talk.find({}).then(function(talks){
    res.render('home2', {
      users: users,
      talks: talks,
    });
    });
  });
});

//==========================//

//====RENDER MY TALKS PAGE===//

app.get('/mytalks', function(req, res) {
  User.find({username: req.session.username}).then(function(users){
    Talktopic.find({}).then(function(talktopics){
    res.render('mytalks', {
      users: users,
      talktopics: talktopics,
      });
    });
  });
});

//==========================//

//====RENDER CREATEP1===//

app.get('/createp1', function(req, res) {
  res.render('createp1')
});

//==========================//

//====POST CREATEP1===//

app.post('/createp1', function(req, res) {
  Talkid.create({
    user: req.session.username,
    talkid: req.body.talkid,
  }).then(talkids => {
  res.redirect('/createp2')
});
});

//==========================//

//====RENDER CREATEP2===//

app.get('/createp2', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
    Talkid.findOne().sort({ field: 'asc', _id: -1 }).limit(1).then(function(talkids){
  res.render('createp2', {
    users: users,
    talkids: talkids,
      });
    });
  });
});

//==========================//

//====RENDER CREATEP2===//

app.get('/createp2/:talkid', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
    Talkid.findOne().sort({ field: 'asc', _id: -1 }).limit(1).then(function(talkids){
  res.render('createp3', {
    users: users,
    talkids: talkids,
      });
    });
  });
});

//==========================//

//====POST CREATEP2===//

app.post('/createp2/:talkid', function(req, res) {
  Talkname.create({
    user: req.session.username,
    talkid: req.params.talkid,
    talk_name: req.body.talk_name,
  }).then(talknames => {
  res.redirect('/createp4')
});
});

//==========================//

//====RENDER CREATEP3===//

app.get('/createp4', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
    Talkid.findOne().sort({ field: 'asc', _id: -1 }).limit(1).then(function(talkids){
      Talkname.findOne().sort({ field: 'asc', _id: -1 }).limit(1).then(function(talknames){
  res.render('createp4', {
    users: users,
    talkids: talkids,
    talknames: talknames,
        });
      });
    });
  });
});

//==========================//

//====RENDER CREATEP3===//

app.get('/createp4/:talkid/:talkname', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
    Talkid.findOne().sort({ field: 'asc', _id: -1 }).limit(1).then(function(talkids){
      Talkname.findOne().sort({ field: 'asc', _id: -1 }).limit(1).then(function(talknames){
  res.render('createp5', {
    users: users,
    talkids: talkids,
    talknames: talknames,
        });
      });
    });
  });
});

//==========================//

//====POST CREATEP4===//

app.post('/createp4/:talkid/:talkname', function(req, res) {
  Talktopic.create({
    user: req.session.username,
    talkid: req.params.talkid,
    talk_name: req.params.talkname,
    talk_topic: req.body.talk_topic,
  }).then(talktopics => {
  res.redirect('/createp6')
});
});

//==========================//

//====RENDER CREATEP6===//

app.get('/createp6', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
    Talkid.findOne().sort({ field: 'asc', _id: -1 }).limit(1).then(function(talkids){
      Talkname.findOne().sort({ field: 'asc', _id: -1 }).limit(1).then(function(talknames){
          Talktopic.findOne().sort({ field: 'asc', _id: -1 }).limit(1).then(function(talktopics){
  res.render('createp6', {
    users: users,
    talkids: talkids,
    talknames: talknames,
    talktopics: talktopics,
          });
        });
      });
    });
  });
});

//==========================//

//==== LOGOUT ===//

app.get('/logout', function(req, res) {
  User.find({username: req.session.username}).then(function(users){
  req.session.destroy(function(err) {
  res.render('logout')
})
})
});

//==========================//

//====RENDER COMPLETED===//

app.get('/completed', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
    Talk.find({user: req.session.username}).then(function(talks){
      Talktopic.find({user: req.session.username}).then(function(talktopics) {
    res.render('completed', {
      users: users,
      talks: talks,
      talktopics: talktopics,
        });
      });
    });
  });
});

//==========================//

//====RENDER COMPLETED TALKS===//

app.get('/completed/:talkid', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
    Talktopic.findOne({talkid: req.params.talkid}).then(function(talktopics){
      Talk.findOne({talkid: req.params.talkid}).then(function(talks){
  res.render('home2', {
    users: users,
    talktopics: talktopics,
    talks: talks,
        })
      })
    })
  })
});

//==========================//

//====RENDER SHARED===//

app.get('/shared', function(req, res) {
    Talk.find({shared: req.session.username}).then(function(talks){
    res.render('shared', {
        talks: talks,
    })
  })
})

//==========================//

//====RENDER SHARED TALKS===//

app.get('/shared/:talkid', function(req, res) {
    Talktopic.findOne({talkid: req.params.talkid}).then(function(talktopics){
      Talk.findOne({}).then(function(talks){
  res.render('home3', {
    talktopics: talktopics,
    talks: talks,
        })
      })
    })
  })

//==========================//

//====RENDER SAVED===//

app.get('/saved', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
    Talk.find({user: req.session.username}).then(function(talks){
      Talktopic.find({user: req.session.username}).then(function(talktopics) {
    res.render('saved', {
      users: users,
      talks: talks,
      talktopics: talktopics,
        });
      });
    });
  });
});

//==========================//

//====RENDER SAVED TALKS===//

app.get('/saved/:talkid', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
    Talktopic.findOne({talkid: req.params.talkid}).then(function(talktopics){
      Talk.findOne({talkid: req.params.talkid}).then(function(talks){
  res.render('saved_files', {
    users: users,
    talktopics: talktopics,
    talks: talks,
        })
      })
    })
  })
});

//==========================//

//====RENDER HOME PAGE===//

app.get('/talk/:talkid/:talkname/:talktopic', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
    Talkid.findOne().sort({ field: 'asc', _id: -1 }).limit(1).then(function(talkids){
      Talkname.findOne().sort({ field: 'asc', _id: -1 }).limit(1).then(function(talknames){
          Talktopic.findOne().sort({ field: 'asc', _id: -1 }).limit(1).then(function(talktopics){
  res.render('home', {
    users: users,
    talkids: talkids,
    talknames: talknames,
    talktopics: talktopics,
          });
        });
      });
    });
  });
});

//==========================//

//====POST TALK===//

app.post('/talk/talkid/:talkid', function(req, res) {
  Talk.create({
    user: req.session.username,
    talkid: req.params.talkid,
    talk_name: req.params.talk_name,
    talk_topic: req.params.talk_topic,
    shared: req.body.shared,
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

//====UPDATE TALK===//

app.post('/saved/:talkid', function(req, res) {
  Talk.findOneAndUpdate({
    user: req.session.username,
    talkid: req.params.talkid,
    talk_name: req.params.talk_name,
    talk_topic: req.params.talk_topic,
    shared: req.body.shared,
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
  res.redirect('/completed')
});
});

//==========================//

//====APP LISTEN ON ENVIRONMENT PORT===//

app.listen(process.env.PORT || 3000);
console.log('starting applicaiton.  Good job!');

//==========================//
