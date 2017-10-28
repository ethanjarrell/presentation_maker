//=====MODELS======//
const User = require('./models/user.js');
const Talk = require('./models/talk.js');
const Talkid = require('./models/talkid.js');
const Talkname = require('./models/talkname.js');
const Talktopic = require('./models/talktopic.js');
const Image = require('./models/image.js');
const Points = require('./models/points.js');
//=================//

//=====TOPIC IMAGE API======//
const Imagepeople = require('./models/imagepeople.js');
const Imageevents = require('./models/imageevents.js');
const Imagebookofmormon = require('./models/imagebookofmormon.js');
const Imagenewtestament = require('./models/imagenewtestament.js');
const Imageoldtestament = require('./models/imageoldtestament.js');
const Imagedoctrinecovenants = require('./models/imagedoctrinecovenants.js');
const Imagebaptism = require('./models/imagebaptism.js');
const Imagefaith = require('./models/imagefaith.js');
const Imagerepentence = require('./models/imagerepentence.js');
const Imagecharity = require('./models/imagecharity.js');
const Imageprophets = require('./models/imageprophets.js');
const Imageatonement = require('./models/imageatonement.js');
const Imagewordofwisdom = require('./models/imagewordofwisdom.js');
const Imageservice = require('./models/imageservice.js');
const Imagecreation = require('./models/imagecreation.js');
const Imageagency = require('./models/imageagency.js');
const Imagethefall = require('./models/imagethefall.js');
const Imageholyghost = require('./models/imageholyghost.js');
const Imagescriptures = require('./models/imagescriptures.js');
const Imagepriesthood = require('./models/imagepriesthood.js');
const Imagesacrament = require('./models/imagesacrament.js');
const Imagehonesty = require('./models/imagehonesty.js');
const Imageobedience = require('./models/imageobedience.js');
const Imageangels = require('./models/imageangels.js');
const Imageapostasy = require('./models/imageapostasy.js');
const Imagechurch = require('./models/imagechurch.js');
const Imagefamily = require('./models/imagefamily.js');
const Imagefasting = require('./models/imagefasting.js');
const Imagehumility = require('./models/imagehumility.js');
const Imagejesus = require('./models/imagejesus.js');
const Imagemarriage = require('./models/imagemarriage.js');
const Imageprayer = require('./models/imageprayer.js');
const Imagepremortal = require('./models/imagepremortal.js');
const Imagesecondcoming = require('./models/imagesecondcoming.js');
const Imagetemple = require('./models/imagetemple.js');
const Imagetithing = require('./models/imagetithing.js');
const Imagetrials = require('./models/imagetrials.js');
const Imagetestimony = require('./models/imagetestimony.js');
const Imagegodhead = require('./models/imagegodhead.js');
const Imageheaven = require('./models/imageheaven.js');
const Imagehell = require('./models/imagehell.js');
const Imagemissionary = require('./models/imagemissionary.js');
const Imagenativity = require('./models/imagenativity.js');
const Imagepioneer = require('./models/imagepioneer.js');
const Imageresurrection = require('./models/imageresurrection.js');
const Imagewomen = require('./models/imagewomen.js');
const Imageapostle = require('./models/imageapostle.js');
const Imageselfreliance = require('./models/imageselfreliance.js');
const Imagechastity = require('./models/imagechastity.js');
const Imagechildren = require('./models/imagechildren.js');
const Imagecovenants = require('./models/imagecovenants.js');
const Imagedeath = require('./models/imagedeath.js');
const Imagegenealogy = require('./models/imagegenealogy.js');
const Imagegiftsofthespirit = require('./models/imagegiftsofthespirit.js');
const Imagegospel = require('./models/imagegospel.js');
const Imagehappiness = require('./models/imagehappiness.js');
const Imagemiracles = require('./models/imagemiracles.js');
const Imagegod = require('./models/imagegod.js');
//=================//

//=====GENERAL AUTHORITIES IMAGE API======//
const Imagegenauthbrighamyoung = require('./models/imagegenauthbrighamyoung.js');
const Imagegenauthdabednar = require('./models/imagegenauthdabednar.js');
const Imagegenauthdavidomckay = require('./models/imagegenauthdavidomckay.js');
const Imagegenauthdfuchtdorf = require('./models/imagegenauthdfuchtdorf.js');
const Imagegenauthdgrenlund = require('./models/imagegenauthdgrenlund.js');
const Imagegenauthdhoaks = require('./models/imagegenauthdhoaks.js');
const Imagegenauthdtchristofferson = require('./models/imagegenauthdtchristofferson.js');
const Imagegenauthezrataftbenson = require('./models/imagegenauthezrataftbenson.js');
const Imagegenauthgeorgeasmith = require('./models/imagegenauthgeorgeasmith.js');
const Imagegenauthgestevenson = require('./models/imagegenauthgestevenson.js');
const Imagegenauthgordonbhinckley = require('./models/imagegenauthgordonbhinckley.js');
const Imagegenauthharoldblee = require('./models/imagegenauthharoldblee.js');
const Imagegenauthhbeyring = require('./models/imagegenauthhbeyring.js');
const Imagegenauthheberjgrant = require('./models/imagegenauthheberjgrant.js');
const Imagegenauthhowardwhunter = require('./models/imagegenauthhowardwhunter.js');
const Imagegenauthjohntaylor = require('./models/imagegenauthjohntaylor.js');
const Imagegenauthjosephfieldingsmith = require('./models/imagegenauthjosephfieldingsmith.js');
const Imagegenauthjosephfsmith = require('./models/imagegenauthjosephfsmith.js');
const Imagegenauthjosephsmith = require('./models/imagegenauthjosephsmith.js');
const Imagegenauthjrholland = require('./models/imagegenauthjrholland.js');
const Imagegenauthlorenzosnow = require('./models/imagegenauthlorenzosnow.js');
const Imagegenauthmrballard = require('./models/imagegenauthmrballard.js');
const Imagegenauthnlanderson = require('./models/imagegenauthnlanderson.js');
const Imagegenauthqlcook = require('./models/imagegenauthqlcook.js');
const Imagegenauthrarasband = require('./models/imagegenauthrarasband.js');
const Imagegenauthrmnelson = require('./models/imagegenauthrmnelson.js');
const Imagegenauthspencerkimball = require('./models/imagegenauthspencerkimball.js');
const Imagegenauthtsmonson = require('./models/imagegenauthtsmonson.js');
const Imagegenauthwilfordwoodruff = require('./models/imagegenauthwilfordwoodruff.js');
//=================//

//=====GENERAL AUTHORITIES QUOTES API======//
const Scripturegenauthbrighamyoung = require('./models/scripturegenauthbrighamyoung.js');
const Scripturegenauthdabednar = require('./models/scripturegenauthdabednar.js');
const Scripturegenauthdavidomckay = require('./models/scripturegenauthdavidomckay.js');
const Scripturegenauthdfuchtdorf = require('./models/scripturegenauthdfuchtdorf.js');
const Scripturegenauthdgrenlund = require('./models/scripturegenauthdgrenlund.js');
const Scripturegenauthdhoaks = require('./models/scripturegenauthdhoaks.js');
const Scripturegenauthdtchristofferson = require('./models/scripturegenauthdtchristofferson.js');
const Scripturegenauthezrataftbenson = require('./models/scripturegenauthezrataftbenson.js');
const Scripturegenauthgeorgeasmith = require('./models/scripturegenauthgeorgeasmith.js');
const Scripturegenauthgestevenson = require('./models/scripturegenauthgestevenson.js');
const Scripturegenauthgordonbhinckley = require('./models/scripturegenauthgordonbhinckley.js');
const Scripturegenauthharoldblee = require('./models/scripturegenauthharoldblee.js');
const Scripturegenauthhbeyring = require('./models/scripturegenauthhbeyring.js');
const Scripturegenauthheberjgrant = require('./models/scripturegenauthheberjgrant.js');
const Scripturegenauthhowardwhunter = require('./models/scripturegenauthhowardwhunter.js');
const Scripturegenauthjohntaylor = require('./models/scripturegenauthjohntaylor.js');
const Scripturegenauthjosephfieldingsmith = require('./models/scripturegenauthjosephfieldingsmith.js');
const Scripturegenauthjosephfsmith = require('./models/scripturegenauthjosephfsmith.js');
const Scripturegenauthjosephsmith = require('./models/scripturegenauthjosephsmith.js');
const Scripturegenauthjrholland = require('./models/scripturegenauthjrholland.js');
const Scripturegenauthlorenzosnow = require('./models/scripturegenauthlorenzosnow.js');
const Scripturegenauthmrballard = require('./models/scripturegenauthmrballard.js');
const Scripturegenauthnlanderson = require('./models/scripturegenauthnlanderson.js');
const Scripturegenauthqlcook = require('./models/scripturegenauthqlcook.js');
const Scripturegenauthrarasband = require('./models/scripturegenauthrarasband.js');
const Scripturegenauthrmnelson = require('./models/scripturegenauthrmnelson.js');
const Scripturegenauthspencerkimball = require('./models/scripturegenauthspencerkimball.js');
const Scripturegenauthtsmonson = require('./models/scripturegenauthtsmonson.js');
const Scripturegenauthwilfordwoodruff = require('./models/scripturegenauthwilfordwoodruff.js');
//=================//

//=====SCRIPTURE API======//
const Scripturepeople = require('./models/scripturepeople.js');
const Scriptureevents = require('./models/scriptureevents.js');
const Scripturebookofmormon = require('./models/scripturebookofmormon.js');
const Scripturenewtestament = require('./models/scripturenewtestament.js');
const Scriptureoldtestament = require('./models/scriptureoldtestament.js');
const Scripturedoctrinecovenants = require('./models/scripturedoctrinecovenants.js');
const Scripturebaptism = require('./models/scripturebaptism.js');
const Scripturefaith = require('./models/scripturefaith.js');
const Scripturerepentence = require('./models/scripturerepentence.js');
const Scripturecharity = require('./models/scripturecharity.js');
const Scriptureprophets = require('./models/scriptureprophets.js');
const Scriptureatonement = require('./models/scriptureatonement.js');
const Scripturewordofwisdom = require('./models/scripturewordofwisdom.js');
const Scriptureservice = require('./models/scriptureservice.js');
const Scripturecreation = require('./models/scripturecreation.js');
const Scriptureagency = require('./models/scriptureagency.js');
const Scripturethefall = require('./models/scripturethefall.js');
const Scriptureholyghost = require('./models/scriptureholyghost.js');
const Scripturescriptures = require('./models/scripturescriptures.js');
const Scripturepriesthood = require('./models/scripturepriesthood.js');
const Scripturesacrament = require('./models/scripturesacrament.js');
const Scripturehonesty = require('./models/scripturehonesty.js');
const Scriptureobedience = require('./models/scriptureobedience.js');
const Scriptureangels = require('./models/scriptureangels.js');
const Scriptureapostasy = require('./models/scriptureapostasy.js');
const Scripturechurch = require('./models/scripturechurch.js');
const Scripturefamily = require('./models/scripturefamily.js');
const Scripturefasting = require('./models/scripturefasting.js');
const Scripturehumility = require('./models/scripturehumility.js');
const Scripturejesus = require('./models/scripturejesus.js');
const Scripturemarriage = require('./models/scripturemarriage.js');
const Scriptureprayer = require('./models/scriptureprayer.js');
const Scripturepremortal = require('./models/scripturepremortal.js');
const Scripturesecondcoming = require('./models/scripturesecondcoming.js');
const Scripturetemple = require('./models/scripturetemple.js');
const Scripturetithing = require('./models/scripturetithing.js');
const Scripturetrials = require('./models/scripturetrials.js');
const Scripturetestimony = require('./models/scripturetestimony.js');
const Scripturegodhead = require('./models/scripturegodhead.js');
const Scriptureheaven = require('./models/scriptureheaven.js');
const Scripturehell = require('./models/scripturehell.js');
const Scripturemissionary = require('./models/scripturemissionary.js');
const Scripturenativity = require('./models/scripturenativity.js');
const Scripturepioneer = require('./models/scripturepioneer.js');
const Scriptureresurrection = require('./models/scriptureresurrection.js');
const Scripturewomen = require('./models/scripturewomen.js');
const Scriptureapostle = require('./models/scriptureapostle.js');
const Scriptureselfreliance = require('./models/scriptureselfreliance.js');
const Scripturechastity = require('./models/scripturechastity.js');
const Scripturechildren = require('./models/scripturechildren.js');
const Scripturecovenants = require('./models/scripturecovenants.js');
const Scripturedeath = require('./models/scripturedeath.js');
const Scripturegenealogy = require('./models/scripturegenealogy.js');
const Scripturegiftsofthespirit = require('./models/scripturegiftsofthespirit.js');
const Scripturegospel = require('./models/scripturegospel.js');
const Scripturehappiness = require('./models/scripturehappiness.js');
const Scripturemiracles = require('./models/scripturemiracles.js');
const Scripturegod = require('./models/scripturegod.js');
//=================//


//=====SPLASH API======//
const Splashinfo = require('./models/splashinfo.js');
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
const url = 'mongodb://EthanJarrell:EJ3102nl1@ds117485.mlab.com:17485/presentation-maker';
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

//====RENDER DISPLAY PAGE===//

app.get('/home2', function(req, res) {
  User.find({username: req.session.username}).then(function(users){
    Talk.aggregate().sample(1).then(function(talks){
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
    Splashinfo.aggregate().sample(4).then(function(splashinfos){
    Talktopic.aggregate().sample(1).then(function(talktopics){
    res.render('mytalks', {
      users: users,
      splashinfos: splashinfos,
      talktopics: talktopics,
      });
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
  res.redirect('/login')
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

//====RENDER SLIDESHOW PICKER===//

app.get('/slideshowpicker/:talkid', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
    Talktopic.findOne({talkid: req.params.talkid}).then(function(talktopics){
      Talk.findOne({talkid: req.params.talkid}).then(function(talks){
  res.render('slideshowpicker', {
    users: users,
    talktopics: talktopics,
    talks: talks,
        })
      })
    })
  })
});

//==========================//

//====RENDER SLIDESHOW TALKS===//

app.get('/slideshowpicker/slideshow/:talkid', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
    Talktopic.findOne({talkid: req.params.talkid}).then(function(talktopics){
      Talk.findOne({talkid: req.params.talkid}).then(function(talks){
  res.render('slideshow', {
    users: users,
    talktopics: talktopics,
    talks: talks,
        })
      })
    })
  })
});

//==========================//

//====RENDER SLIDESHOW TALKS===//

app.get('/slideshowpicker/slideshow2/:talkid', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
    Talktopic.findOne({talkid: req.params.talkid}).then(function(talktopics){
      Talk.findOne({talkid: req.params.talkid}).then(function(talks){
  res.render('slideshow2', {
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
    image1: req.body.image1,
    topic1: req.body.topic1,
    textarea1: req.body.textarea1,
    image2: req.body.image2,
    topic2: req.body.topic2,
    textarea2: req.body.textarea2,
    image3: req.body.image3,
    topic3: req.body.topic3,
    textarea3: req.body.textarea3,
    image4: req.body.image4,
    topic4: req.body.topic4,
    textarea4: req.body.textarea4,
    image5: req.body.image5,
    topic5: req.body.topic5,
    textarea5: req.body.textarea5,
    image6: req.body.image6,
    topic6: req.body.topic6,
    textarea6: req.body.textarea6,
    image7: req.body.image7,
    topic7: req.body.topic7,
    textarea7: req.body.textarea7,
    image8: req.body.image8,
    topic8: req.body.topic8,
    textarea8: req.body.textarea8,
    image9: req.body.image9,
    topic9: req.body.topic9,
    textarea9: req.body.textarea9,
    image10: req.body.image10,
    topic10: req.body.topic10,
    textarea10: req.body.textarea10,
  }).then(talks => {
  res.redirect('/completed')
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
    image1: req.body.image1,
    topic1: req.body.topic1,
    textarea1: req.body.textarea1,
    image2: req.body.image2,
    topic2: req.body.topic2,
    textarea2: req.body.textarea2,
    image3: req.body.image3,
    topic3: req.body.topic3,
    textarea3: req.body.textarea3,
    image4: req.body.image4,
    topic4: req.body.topic4,
    textarea4: req.body.textarea4,
    image5: req.body.image5,
    topic5: req.body.topic5,
    textarea5: req.body.textarea5,
    image6: req.body.image6,
    topic6: req.body.topic6,
    textarea6: req.body.textarea6,
    image7: req.body.image7,
    topic7: req.body.topic7,
    textarea7: req.body.textarea7,
    image8: req.body.image8,
    topic8: req.body.topic8,
    textarea8: req.body.textarea8,
    image9: req.body.image9,
    topic9: req.body.topic9,
    textarea9: req.body.textarea9,
    image10: req.body.image10,
    topic10: req.body.topic10,
    textarea10: req.body.textarea10,
  }).then(talks => {
  res.redirect('/completed')
});
});

//==========================//

//====GET DELETE===//

app.get('/delete', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
    Talktopic.findOne({talkid: req.params.talkid}).then(function(talktopics){
      Talkid.findOne({talkid: req.params.talkid}).then(function(talkids){
        Talkname.findOne({talkid: req.params.talkid}).then(function(talknames){
          Talk.findOne({talkid: req.params.talkid}).then(function(talks){
  res.render('delete', {
    users: users,
    talktopics: talktopics,
    talkids: talkids,
    talknames: talknames,
    talks: talks,
        })
      })
    })
  })
});
})
})

//==========================//

//====GET DELETE TALK===//

app.get('/delete/:talkid', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
    Talktopic.findOne({talkid: req.params.talkid}).then(function(talktopics){
      Talkid.findOne({talkid: req.params.talkid}).then(function(talkids){
        Talkname.findOne({talkid: req.params.talkid}).then(function(talknames){
          Talk.findOne({talkid: req.params.talkid}).then(function(talks){
  res.render('delete', {
    users: users,
    talktopics: talktopics,
    talkids: talkids,
    talknames: talknames,
    talks: talks,
        })
      })
    })
  })
});
})
})

//==========================//

//====POST DELETE TALK===//

app.post('/delete/1/:talkid', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
    Talktopic.findOneAndRemove({talkid: req.params.talkid}).then(function(talktopics){
      Talkid.findOneAndRemove({talkid: req.params.talkid}).then(function(talkids){
        Talkname.findOneAndRemove({talkid: req.params.talkid}).then(function(talknames){
          Talk.findOneAndRemove({talkid: req.params.talkid}).then(function(talks){
      }).then(talks => {
      res.redirect('/completed')
    });
    });
  })
})
})
})

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/test0012', function(req, res) {
  res.render('test0012')
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/splashinfo', function(req, res) {
  Splashinfo.aggregate().sample(1).then(function(splashinfos){
  res.json(splashinfos)
});
});


//==========================//

//====POST IMAGE API===//

app.post('/api/splashinfo', function(req, res) {
  Splashinfo.create({
    link_url: req.body.link_url,
    image_url: req.body.image_url,
    title_text: req.body.title_text,
    blurb_text: req.body.blurb_text,
  }).then(splashinfos => {
  res.json(splashinfos)
});
});

//==========================//

//====GET ALL IMAGES===//

app.get('/gamestart', function(req, res) {
User.findOne({username: req.session.username}).then(function(users){
Points.findOne().sort({ field: 'asc', _id: -1 }).limit(1).then(function(points){
Imageagency.aggregate().sample(1).then(imageagencies => {
Imageangels.aggregate().sample(1).then(imageangels => {
Imageapostasy.aggregate().sample(1).then(imageapostasy => {
Imageapostle.aggregate().sample(1).then(imageapostles => {
Imageatonement.aggregate().sample(1).then(imageatonements => {
Imagebaptism.aggregate().sample(1).then(imagebaptisms => {
Imagebookofmormon.aggregate().sample(1).then(imagebookofmormons => {
Imagecharity.aggregate().sample(1).then(imagecharities => {
Imagechastity.aggregate().sample(1).then(imagechastities => {
Imagechildren.aggregate().sample(1).then(imagechildrens => {
Imagechurch.aggregate().sample(1).then(imagechurches => {
Imagecovenants.aggregate().sample(1).then(imagecovenants => {
Imagecreation.aggregate().sample(1).then(imagecreations => {
Imagedeath.aggregate().sample(1).then(imagedeaths => {
Imagedoctrinecovenants.aggregate().sample(1).then(imagedoctrinecovenants => {
Imageevents.aggregate().sample(1).then(imageevents => {
Imagepeople.aggregate().sample(1).then(imagepeoples => {
Imagefaith.aggregate().sample(1).then(imagefaiths => {
Imagefamily.aggregate().sample(1).then(imagefamilies => {
Imagefasting.aggregate().sample(1).then(imagefastings => {
Imagegenealogy.aggregate().sample(1).then(imagegenealogies => {
Imagegiftsofthespirit.aggregate().sample(1).then(imagegiftsofthespirits => {
Imagegod.aggregate().sample(1).then(imagegods => {
Imagegospel.aggregate().sample(1).then(imagegospels => {
Imagehappiness.aggregate().sample(1).then(imagehappinesses => {
Imageheaven.aggregate().sample(1).then(imageheavens => {
Imagehell.aggregate().sample(1).then(imagehells => {
Imageholyghost.aggregate().sample(1).then(imageholyghosts => {
Imagehonesty.aggregate().sample(1).then(imagehonesties => {
Imagehumility.aggregate().sample(1).then(imagehumilities => {
Imagejesus.aggregate().sample(1).then(imagejesuses => {
Imagemarriage.aggregate().sample(1).then(imagemarriages => {
Imagemiracles.aggregate().sample(1).then(imagemiracles => {
Imagemissionary.aggregate().sample(1).then(imagemissionaries => {
Imagenativity.aggregate().sample(1).then(imagenativities => {
Imagenewtestament.aggregate().sample(1).then(imagenewtestaments => {
Imageobedience.aggregate().sample(1).then(imageobediences => {
Imageoldtestament.aggregate().sample(1).then(imageoldtestaments => {
Imagepeople.aggregate().sample(1).then(imagepeoples => {
Imagepioneer.aggregate().sample(1).then(imagepioneers => {
Imageprayer.aggregate().sample(1).then(imageprayers => {
Imagepremortal.aggregate().sample(1).then(imagepremortals => {
Imagepriesthood.aggregate().sample(1).then(imagepriesthoods => {
Imageprophets.aggregate().sample(1).then(imageprophets => {
Imagerepentence.aggregate().sample(1).then(imagerepentences => {
Imageresurrection.aggregate().sample(1).then(imageresurrections => {
Imagesacrament.aggregate().sample(1).then(imagesacraments => {
Imagescriptures.aggregate().sample(1).then(imagescriptures => {
Imagesecondcoming.aggregate().sample(1).then(imagesecondcomings => {
Imageselfreliance.aggregate().sample(1).then(imageselfreliances =>   {
Imageservice.aggregate().sample(1).then(imageservices =>   {
Imagetemple.aggregate().sample(1).then(imagetemples =>   {
Imagetestimony.aggregate().sample(1).then(imagetestimonies =>   {
Imagethefall.aggregate().sample(1).then(imagethefalls =>   {
Imagetithing.aggregate().sample(1).then(imagetithings =>   {
Imagetrials.aggregate().sample(1).then(imagetrials =>   {
Imagewomen.aggregate().sample(1).then(imagewomens =>   {
Imagewordofwisdom.aggregate().sample(1).then(imagewordofwisdoms =>   {
Imagegenauthbrighamyoung.aggregate().sample(1).then(imagegenauthbrighamyoungs =>   {
Imagegenauthdabednar.aggregate().sample(1).then(imagegenauthdabednars =>   {
Imagegenauthdavidomckay.aggregate().sample(1).then(imagegenauthdavidomckays =>   {
Imagegenauthdfuchtdorf.aggregate().sample(1).then(imagegenauthdfuchtdorfs =>   {
Imagegenauthdgrenlund.aggregate().sample(1).then(imagegenauthdgrenlunds =>   {
Imagegenauthdhoaks.aggregate().sample(1).then(imagegenauthdhoaks =>   {
Imagegenauthdtchristofferson.aggregate().sample(1).then(imagegenauthdtchristoffersons =>   {
Imagegenauthezrataftbenson.aggregate().sample(1).then(imagegenauthezrataftbensons =>   {
Imagegenauthgeorgeasmith.aggregate().sample(1).then(imagegenauthgeorgeasmiths =>   {
Imagegenauthgestevenson.aggregate().sample(1).then(imagegenauthgestevensons =>   {
Imagegenauthgordonbhinckley.aggregate().sample(1).then(imagegenauthgordonbhinckleys =>   {
Imagegenauthharoldblee.aggregate().sample(1).then(imagegenauthharoldblees =>   {
Imagegenauthhbeyring.aggregate().sample(1).then(imagegenauthhbeyrings =>   {
Imagegenauthheberjgrant.aggregate().sample(1).then(imagegenauthheberjgrants =>   {
Imagegenauthhowardwhunter.aggregate().sample(1).then(imagegenauthhowardwhunters =>   {
Imagegenauthjohntaylor.aggregate().sample(1).then(imagegenauthjohntaylors =>   {
Imagegenauthjosephfieldingsmith.aggregate().sample(1).then(imagegenauthjosephfieldingsmiths =>   {
Imagegenauthjosephfsmith.aggregate().sample(1).then(imagegenauthjosephfsmiths =>   {
Imagegenauthjosephsmith.aggregate().sample(1).then(imagegenauthjosephsmiths =>   {
Imagegenauthjrholland.aggregate().sample(1).then(imagegenauthjrhollands =>   {
Imagegenauthlorenzosnows.aggregate().sample(1).then(imagegenauthlorenzosnows =>   {
Imagegenauthmrballard.aggregate().sample(1).then(imagegenauthmrballards =>   {
Imagegenauthnlanderson.aggregate().sample(1).then(imagegenauthnlandersons =>   {
Imagegenauthqlcook.aggregate().sample(1).then(imagegenauthqlcooks =>   {
Imagegenauthrarasband.aggregate().sample(1).then(imagegenauthrarasbands =>   {
Imagegenauthrmnelson.aggregate().sample(1).then(imagegenauthrmnelsons =>   {
Imagegenauthspencerkimball.aggregate().sample(1).then(imagegenauthspencerkimballs =>   {
Imagegenauthtsmonson.aggregate().sample(1).then(imagegenauthtsmonsons =>   {
Imagegenauthwilfordwoodruff.aggregate().sample(1).then(imagegenauthwilfordwoodruffs =>   {
  res.render('gamestart', {
    users: users,
    points: points,
    imageagencies:imageagencies,
    imageangels:imageangels,
    imageapostasy:imageapostasy,
    imageapostles:imageapostles,
    imageatonements:imageatonements,
    imagebaptisms:imagebaptisms,
    imagebookofmormons:imagebookofmormons,
    imagecharities:imagecharities,
    imagechastities:imagechastities,
    imagechildrens:imagechildrens,
    imagechurches:imagechurches,
    imagecovenants:imagecovenants,
    imagecreations:imagecreations,
    imagedeaths:imagedeaths,
    imagedoctrinecovenants:imagedoctrinecovenants,
    imageevents:imageevents,
    imagepeoples:imagepeoples,
    imagefaiths:imagefaiths,
    imagefamilies:imagefamilies,
    imagefastings:imagefastings,
    imagegenealogies:imagegenealogies,
    imagegiftsofthespirits:imagegiftsofthespirits,
    imagegods:imagegods,
    imagegospels:imagegospels,
    imagehappinesses:imagehappinesses,
    imageheavens:imageheavens,
    imagehells:imagehells,
    imageholyghosts:imageholyghosts,
    imagehonesties:imagehonesties,
    imagehumilities:imagehumilities,
    imagejesuses:imagejesuses,
    imagemarriages:imagemarriages,
    imagemiracles:imagemiracles,
    imagemissionaries:imagemissionaries,
    imagenativities:imagenativities,
    imagenewtestaments:imagenewtestaments,
    imageobediences:imageobediences,
    imageoldtestaments:imageoldtestaments,
    imagepeoples: imagepeoples,
    imagepioneers:imagepioneers,
    imageprayers:imageprayers,
    imagepremortals:imagepremortals,
    imagepriesthoods:imagepriesthoods,
    imageprophets:imageprophets,
    imagerepentences:imagerepentences,
    imageresurrections:imageresurrections,
    imagesacraments:imagesacraments,
    imagescriptures:imagescriptures,
    imagesecondcomings:imagesecondcomings,
    imageselfreliances:imageselfreliances,
    imageservices:imageservices,
    imagetemples:imagetemples,
    imagetestimonies:imagetestimonies,
    imagethefalls:imagethefalls,
    imagetithings:imagetithings,
    imagetrials:imagetrials,
    imagewomens:imagewomens,
    imagewordofwisdoms:imagewordofwisdoms,
    imagegenauthbrighamyoungs: imagegenauthbrighamyoungs,
    imagegenauthdabednars: imagegenauthdabednars,
    imagegenauthdavidomckays: imagegenauthdavidomckays,
    imagegenauthdfuchtdorfs: imagegenauthdfuchtdorfs,
    imagegenauthdgrenlunds: imagegenauthdgrenlunds,
    imagegenauthdhoaks: imagegenauthdhoaks,
    imagegenauthdtchristoffersons: imagegenauthdtchristoffersons,
    imagegenauthezrataftbensons: imagegenauthezrataftbensons,
    imagegenauthgeorgeasmiths: imagegenauthgeorgeasmiths,
    imagegenauthgestevensons: imagegenauthgestevensons,
    imagegenauthgordonbhinckleys: imagegenauthgordonbhinckleys,
    imagegenauthharoldblees: imagegenauthharoldblees,
    imagegenauthhbeyrings: imagegenauthhbeyrings,
    imagegenauthheberjgrants: imagegenauthheberjgrants,
    imagegenauthhowardwhunters: imagegenauthhowardwhunters,
    imagegenauthjohntaylors: imagegenauthjohntaylors,
    imagegenauthjosephfieldingsmiths: imagegenauthjosephfieldingsmiths,
    imagegenauthjosephfsmiths: imagegenauthjosephfsmiths,
    imagegenauthjosephsmiths: imagegenauthjosephsmiths,
    imagegenauthjrhollands: imagegenauthjrhollands,
    imagegenauthlorenzosnows: imagegenauthlorenzosnows,
    imagegenauthmrballards: imagegenauthmrballards,
    imagegenauthnlandersons: imagegenauthnlandersons,
    imagegenauthqlcooks: imagegenauthqlcooks,
    imagegenauthrarasbands: imagegenauthrarasbands,
    imagegenauthrmnelsons: imagegenauthrmnelsons,
    imagegenauthspencerkimballs: imagegenauthspencerkimballs,
    imagegenauthtsmonsons: imagegenauthtsmonsons,
    imagegenauthwilfordwoodruffs: imagegenauthwilfordwoodruffs,
  })
    })
  })
  })
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
    })
    })
    })
    })
    })
    })
    })
    })
    })
  })
  })
  })
  })
  })
  })
  })
  })
  })
  })
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
  })
});
//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images', function(req, res) {
  Image.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images', function(req, res) {
  Image.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/people', function(req, res) {
  Imagepeople.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/people', function(req, res) {
  Imagepeople.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/events', function(req, res) {
  Imageevents.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/events', function(req, res) {
  Imageevents.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/bookofmormon', function(req, res) {
  Imagebookofmormon.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/bookofmormon', function(req, res) {
  Imagebookofmormon.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/newtestament', function(req, res) {
  Imagenewtestament.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/newtestament', function(req, res) {
  Imagenewtestament.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/oldtestament', function(req, res) {
  Imageoldtestament.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/oldtestament', function(req, res) {
  Imageoldtestament.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/doctrinecovenants', function(req, res) {
  Imagedoctrinecovenants.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/doctrinecovenants', function(req, res) {
  Imagedoctrinecovenants.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/baptism', function(req, res) {
  Imagebaptism.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/baptism', function(req, res) {
  Imagebaptism.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/faith', function(req, res) {
  Imagefaith.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/faith', function(req, res) {
  Imagefaith.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/repentence', function(req, res) {
  Imagerepentence.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/repentence', function(req, res) {
  Imagerepentence.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/charity', function(req, res) {
  Imagecharity.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/charity', function(req, res) {
  Imagecharity.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/prophets', function(req, res) {
  Imageprophets.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/prophets', function(req, res) {
  Imageprophets.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/atonement', function(req, res) {
  Imageatonement.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/atonement', function(req, res) {
  Imageatonement.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/wordofwisdom', function(req, res) {
  Imagewordofwisdom.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/wordofwisdom', function(req, res) {
  Imagewordofwisdom.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/service', function(req, res) {
  Imageservice.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/service', function(req, res) {
  Imageservice.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/creation', function(req, res) {
  Imagecreation.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/creation', function(req, res) {
  Imagecreation.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/agency', function(req, res) {
  Imageagency.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/agency', function(req, res) {
  Imageagency.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/thefall', function(req, res) {
  Imagethefall.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/thefall', function(req, res) {
  Imagethefall.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/holyghost', function(req, res) {
  Imageholyghost.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/holyghost', function(req, res) {
  Imageholyghost.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/scriptures', function(req, res) {
  Imagescriptures.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/scriptures', function(req, res) {
  Imagescriptures.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/priesthood', function(req, res) {
  Imagepriesthood.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/priesthood', function(req, res) {
  Imagepriesthood.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/sacrament', function(req, res) {
  Imagesacrament.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/sacrament', function(req, res) {
  Imagesacrament.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/honesty', function(req, res) {
  Imagehonesty.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/honesty', function(req, res) {
  Imagehonesty.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/obedience', function(req, res) {
  Imageobedience.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/obedience', function(req, res) {
  Imageobedience.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/angels', function(req, res) {
  Imageangels.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/angels', function(req, res) {
  Imageangels.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/apostasy', function(req, res) {
  Imageapostasy.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/apostasy', function(req, res) {
  Imageapostasy.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/church', function(req, res) {
  Imagechurch.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/church', function(req, res) {
  Imagechurch.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/family', function(req, res) {
  Imagefamily.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/family', function(req, res) {
  Imagefamily.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/fasting', function(req, res) {
  Imagefasting.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/fasting', function(req, res) {
  Imagefasting.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/humility', function(req, res) {
  Imagehumility.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/humility', function(req, res) {
  Imagehumility.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/jesus', function(req, res) {
  Imagejesus.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/jesus', function(req, res) {
  Imagejesus.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/marriage', function(req, res) {
  Imagemarriage.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/marriage', function(req, res) {
  Imagemarriage.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/prayer', function(req, res) {
  Imageprayer.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/prayer', function(req, res) {
  Imageprayer.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/premortal', function(req, res) {
  Imagepremortal.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/premortal', function(req, res) {
  Imagepremortal.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/secondcoming', function(req, res) {
  Imagesecondcoming.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/secondcoming', function(req, res) {
  Imagesecondcoming.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/temple', function(req, res) {
  Imagetemple.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/temple', function(req, res) {
  Imagetemple.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/tithing', function(req, res) {
  Imagetithing.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/tithing', function(req, res) {
  Imagetithing.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/trials', function(req, res) {
  Imagetrials.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/trials', function(req, res) {
  Imagetrials.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/heaven', function(req, res) {
  Imageheaven.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/heaven', function(req, res) {
  Imageheaven.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/hell', function(req, res) {
  Imagehell.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/hell', function(req, res) {
  Imagehell.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/missionary', function(req, res) {
  Imagemissionary.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/missionary', function(req, res) {
  Imagemissionary.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/nativity', function(req, res) {
  Imagenativity.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/nativity', function(req, res) {
  Imagenativity.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/pioneer', function(req, res) {
  Imagepioneer.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/pioneer', function(req, res) {
  Imagepioneer.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/resurrection', function(req, res) {
  Imageresurrection.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/resurrection', function(req, res) {
  Imageresurrection.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/testimony', function(req, res) {
  Imagetestimony.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/testimony', function(req, res) {
  Imagetestimony.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/women', function(req, res) {
  Imagewomen.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/women', function(req, res) {
  Imagewomen.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/godhead', function(req, res) {
  Imagegodhead.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/godhead', function(req, res) {
  Imagegodhead.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/selfreliance', function(req, res) {
  Imageselfreliance.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/selfreliance', function(req, res) {
  Imageselfreliance.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/apostle', function(req, res) {
  Imageapostle.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/apostle', function(req, res) {
  Imageapostle.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/chastity', function(req, res) {
  Imagechastity.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/chastity', function(req, res) {
  Imagechastity.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/children', function(req, res) {
  Imagechildren.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/children', function(req, res) {
  Imagechildren.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/covenants', function(req, res) {
  Imagecovenants.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/covenants', function(req, res) {
  Imagecovenants.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/death', function(req, res) {
  Imagedeath.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/death', function(req, res) {
  Imagedeath.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/genealogy', function(req, res) {
  Imagegenealogy.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/genealogy', function(req, res) {
  Imagegenealogy.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/giftsofthespirit', function(req, res) {
  Imagegiftsofthespirit.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/giftsofthespirit', function(req, res) {
  Imagegiftsofthespirit.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/gospel', function(req, res) {
  Imagegospel.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/gospel', function(req, res) {
  Imagegospel.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/happiness', function(req, res) {
  Imagehappiness.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/happiness', function(req, res) {
  Imagehappiness.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/miracles', function(req, res) {
  Imagemiracles.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/miracles', function(req, res) {
  Imagemiracles.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/god', function(req, res) {
  Imagegod.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/god', function(req, res) {
  Imagegod.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/brighamyoung', function(req, res) {
  Imagegenauthbrighamyoung.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/brighamyoung', function(req, res) {
  Imagegenauthbrighamyoung.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/dabednar', function(req, res) {
  Imagegenauthdabednar.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/dabednar', function(req, res) {
  Imagegenauthdabednar.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/davidomckay', function(req, res) {
  Imagegenauthdavidomckay.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/davidomckay', function(req, res) {
  Imagegenauthdavidomckay.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/dfuchtdorf', function(req, res) {
  Imagegenauthdfuchtdorf.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/dfuchtdorf', function(req, res) {
  Imagegenauthdfuchtdorf.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/dgrenlund', function(req, res) {
  Imagegenauthdgrenlund.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/dgrenlund', function(req, res) {
  Imagegenauthdgrenlund.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/dhoaks', function(req, res) {
  Imagegenauthdhoaks.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/dhoaks', function(req, res) {
  Imagegenauthdhoaks.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/dtchristofferson', function(req, res) {
  Imagegenauthdtchristofferson.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/dtchristofferson', function(req, res) {
  Imagegenauthdtchristofferson.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/ezrataftbenson', function(req, res) {
  Imagegenauthezrataftbenson.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/ezrataftbenson', function(req, res) {
  Imagegenauthezrataftbenson.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/georgeasmith', function(req, res) {
  Imagegenauthgeorgeasmith.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/georgeasmith', function(req, res) {
  Imagegenauthgeorgeasmith.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/gestevenson', function(req, res) {
  Imagegenauthgestevenson.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/gestevenson', function(req, res) {
  Imagegenauthgestevenson.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/gordonbhinckley', function(req, res) {
  Imagegenauthgordonbhinckley.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/gordonbhinckley', function(req, res) {
  Imagegenauthgordonbhinckley.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/haroldblee', function(req, res) {
  Imagegenauthharoldblee.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/haroldblee', function(req, res) {
  Imagegenauthharoldblee.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/hbeyring', function(req, res) {
  Imagegenauthhbeyring.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/hbeyring', function(req, res) {
  Imagegenauthhbeyring.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/heberjgrant', function(req, res) {
  Imagegenauthheberjgrant.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/heberjgrant', function(req, res) {
  Imagegenauthheberjgrant.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/howardwhunter', function(req, res) {
  Imagegenauthhowardwhunter.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/howardwhunter', function(req, res) {
  Imagegenauthhowardwhunter.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/johntaylor', function(req, res) {
  Imagegenauthjohntaylor.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/johntaylor', function(req, res) {
  Imagegenauthjohntaylor.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/josephfieldingsmith', function(req, res) {
  Imagegenauthjosephfieldingsmith.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/josephfieldingsmith', function(req, res) {
  Imagegenauthjosephfieldingsmith.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/josephfsmith', function(req, res) {
  Imagegenauthjosephfsmith.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/josephfsmith', function(req, res) {
  Imagegenauthjosephfsmith.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/josephsmith', function(req, res) {
  Imagegenauthjosephsmith.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/josephsmith', function(req, res) {
  Imagegenauthjosephsmith.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/jrholland', function(req, res) {
  Imagegenauthjrholland.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/jrholland', function(req, res) {
  Imagegenauthjrholland.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/lorenzosnow', function(req, res) {
  Imagegenauthlorenzosnow.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/lorenzosnow', function(req, res) {
  Imagegenauthlorenzosnow.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/mrballard', function(req, res) {
  Imagegenauthmrballard.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/mrballard', function(req, res) {
  Imagegenauthmrballard.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/nlanderson', function(req, res) {
  Imagegenauthnlanderson.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/nlanderson', function(req, res) {
  Imagegenauthnlanderson.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/qlcook', function(req, res) {
  Imagegenauthqlcook.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/qlcook', function(req, res) {
  Imagegenauthqlcook.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/rarasband', function(req, res) {
  Imagegenauthrarasband.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/rarasband', function(req, res) {
  Imagegenauthrarasband.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/rmnelson', function(req, res) {
  Imagegenauthrmnelson.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/rmnelson', function(req, res) {
  Imagegenauthrmnelson.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/spencerkimball', function(req, res) {
  Imagegenauthspencerkimball.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/spencerkimball', function(req, res) {
  Imagegenauthspencerkimball.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/tsmonson', function(req, res) {
  Imagegenauthtsmonson.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/tsmonson', function(req, res) {
  Imagegenauthtsmonson.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/wilfordwoodruff', function(req, res) {
  Imagegenauthwilfordwoodruff.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/wilfordwoodruff', function(req, res) {
  Imagegenauthwilfordwoodruff.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/brighamyoung', function(req, res) {
  Scripturegenauthbrighamyoung.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/dabednar', function(req, res) {
  Scripturegenauthdabednar.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/davidomckay', function(req, res) {
  Scripturegenauthdavidomckay.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/dfuchtdorf', function(req, res) {
  Scripturegenauthdfuchtdorf.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/dgrenlund', function(req, res) {
  Scripturegenauthdgrenlund.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/dhoaks', function(req, res) {
  Scripturegenauthdhoaks.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/dtchristofferson', function(req, res) {
  Scripturegenauthdtchristofferson.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/ezrataftbenson', function(req, res) {
  Scripturegenauthezrataftbenson.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/georgeasmith', function(req, res) {
  Scripturegenauthgeorgeasmith.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/gestevenson', function(req, res) {
  Scripturegenauthgestevenson.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/gordonbhinckley', function(req, res) {
  Scripturegenauthgordonbhinckley.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/haroldblee', function(req, res) {
  Scripturegenauthharoldblee.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/hbeyring', function(req, res) {
  Scripturegenauthhbeyring.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/heberjgrant', function(req, res) {
  Scripturegenauthheberjgrant.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/howardwhunter', function(req, res) {
  Scripturegenauthhowardwhunter.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/johntaylor', function(req, res) {
  Scripturegenauthjohntaylor.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/josephfieldingsmith', function(req, res) {
  Scripturegenauthjosephfieldingsmith.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/josephfsmith', function(req, res) {
  Scripturegenauthjosephfsmith.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/josephsmith', function(req, res) {
  Scripturegenauthjosephsmith.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/jrholland', function(req, res) {
  Scripturegenauthjrholland.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/lorenzosnow', function(req, res) {
  Scripturegenauthlorenzosnow.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/mrballard', function(req, res) {
  Scripturegenauthmrballard.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/nlanderson', function(req, res) {
  Scripturegenauthnlanderson.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/qlcook', function(req, res) {
  Scripturegenauthqlcook.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/rarasband', function(req, res) {
  Scripturegenauthrarasband.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/rmnelson', function(req, res) {
  Scripturegenauthrmnelson.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/spencerkimball', function(req, res) {
  Scripturegenauthspencerkimball.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/tsmonson', function(req, res) {
  Scripturegenauthtsmonson.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/wilfordwoodruff', function(req, res) {
  Scripturegenauthwilfordwoodruff.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/people', function(req, res) {
  Scripturepeople.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/agency', function(req, res) {
  Scriptureagency.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/angels', function(req, res) {
  Scriptureangels.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/apostasy', function(req, res) {
  Scriptureapostasy.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/apostle', function(req, res) {
  Scriptureapostle.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/atonement', function(req, res) {
  Scriptureatonement.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/baptism', function(req, res) {
  Scripturebaptism.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/bookofmormon', function(req, res) {
  Scripturebookofmormon.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/charity', function(req, res) {
  Scripturecharity.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/chastity', function(req, res) {
  Scripturechastity.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/children', function(req, res) {
  Scripturechildren.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/church', function(req, res) {
  Scripturechurch.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/covenants', function(req, res) {
  Scripturecovenants.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/creation', function(req, res) {
  Scripturecreation.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/death', function(req, res) {
  Scripturedeath.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/doctrinecovenants', function(req, res) {
  Scripturedoctrinecovenants.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/events', function(req, res) {
  Scriptureevents.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/faith', function(req, res) {
  Scripturefaith.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/family', function(req, res) {
  Scripturefamily.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/fasting', function(req, res) {
  Scripturefasting.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/genealogy', function(req, res) {
  Scripturegenealogy.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/giftsofthespirit', function(req, res) {
  Scripturegiftsofthespirit.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/god', function(req, res) {
  Scripturegod.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/godhead', function(req, res) {
  Scripturegodhead.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/gospel', function(req, res) {
  Scripturegospel.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/happiness', function(req, res) {
  Scripturehappiness.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/heaven', function(req, res) {
  Scriptureheaven.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/hell', function(req, res) {
  Scripturehell.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/holyghost', function(req, res) {
  Scriptureholyghost.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/honesty', function(req, res) {
  Scripturehonesty.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/humility', function(req, res) {
  Scripturehumility.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/jesus', function(req, res) {
  Scripturejesus.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/marriage', function(req, res) {
  Scripturemarriage.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/miracles', function(req, res) {
  Scripturemiracles.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/missionary', function(req, res) {
  Scripturemissionary.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/nativity', function(req, res) {
  Scripturenativity.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/newtestament', function(req, res) {
  Scripturenewtestament.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/obedience', function(req, res) {
  Scriptureobedience.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/oldtestament', function(req, res) {
  Scriptureoldtestament.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/pioneer', function(req, res) {
  Scripturepioneer.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/prayer', function(req, res) {
  Scriptureprayer.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/premortal', function(req, res) {
  Scripturepremortal.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/priesthood', function(req, res) {
  Scripturepriesthood.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/prophets', function(req, res) {
  Scriptureprophets.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/repentence', function(req, res) {
  Scripturerepentence.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/resurrection', function(req, res) {
  Scriptureresurrection.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/sacrament', function(req, res) {
  Scripturesacrament.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/scriptures', function(req, res) {
  Scripturescriptures.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/secondcoming', function(req, res) {
  Scripturesecondcoming.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/selfreliance', function(req, res) {
  Scriptureselfreliance.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/service', function(req, res) {
  Scriptureservice.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/temple', function(req, res) {
  Scripturetemple.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/testimony', function(req, res) {
  Scripturetestimony.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/thefall', function(req, res) {
  Scripturethefall.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/tithing', function(req, res) {
  Scripturetithing.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/trials', function(req, res) {
  Scripturetrials.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/women', function(req, res) {
  Scripturewomen.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/wordofwisdom', function(req, res) {
  Scripturewordofwisdom.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/playagain')
});
});

//==========================//

//====RENDER PLAY AGAIN===//

app.get('/playagain', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
    Points.findOne({user: req.session.username}).then(function(points){
  res.render('playagain', {
    users: users,
    points: points,
  });
});
});
});

//==========================//

//====POST TO USER POINTS===//

app.post('/userpoints', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
    Points.create({
      user: req.session.username,
      points: req.body.points,
    }).then(points => {
    res.redirect('/gamestart')
  });
  });
  });


//==========================//

//====POST TO USER POINTS===//

app.post('/userpoints/update', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
    Points.findOneAndUpdate({
      user: req.session.username,
      points: req.body.updatepoints,
    }).then(points => {
    res.redirect('/gamestart')
  });
  });
  });


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game1/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagepeople.findById({_id: req.params._id}).then(imagepeoples => {
  res.render('game1', {
    users: users,
    imagepeoples: imagepeoples,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game2/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imageagency.findById({_id: req.params._id}).then(imageagencies => {
  res.render('game1', {
    users: users,
    imageagencies: imageagencies,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game3/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imageangels.findById({_id: req.params._id}).then(imageangels => {
  res.render('game1', {
    users: users,
    imageangels: imageangels,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game4/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imageapostasy.findById({_id: req.params._id}).then(imageapostasy => {
  res.render('game1', {
    users: users,
    imageapostasy: imageapostasy,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game6/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imageapostle.findById({_id: req.params._id}).then(imageapostles => {
  res.render('game1', {
    users: users,
    imageapostles: imageapostles,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game5/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imageatonement.findById({_id: req.params._id}).then(imageatonements => {
  res.render('game1', {
    users: users,
    imageatonements: imageatonements,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game7/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagebaptism.findById({_id: req.params._id}).then(imagebaptisms => {
  res.render('game1', {
    users: users,
    imagebaptisms: imagebaptisms,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game8/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagebookofmormon.findById({_id: req.params._id}).then(imagebookofmormons => {
  res.render('game1', {
    users: users,
    imagebookofmormons: imagebookofmormons,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game9/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagecharity.findById({_id: req.params._id}).then(imagecharities => {
  res.render('game1', {
    users: users,
    imagecharities: imagecharities,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game10/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagechastity.findById({_id: req.params._id}).then(imagechastities => {
  res.render('game1', {
    users: users,
    imagechastities: imagechastities,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game11/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagechildren.findById({_id: req.params._id}).then(imagechildrens => {
  res.render('game1', {
    users: users,
    imagechildrens: imagechildrens,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game12/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagechurch.findById({_id: req.params._id}).then(imagechurches => {
  res.render('game1', {
    users: users,
    imagechurches: imagechurches,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game13/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagecovenants.findById({_id: req.params._id}).then(imagecovenants => {
  res.render('game1', {
    users: users,
    imagecovenants: imagecovenants,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game14/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagecreation.findById({_id: req.params._id}).then(imagecreations => {
  res.render('game1', {
    users: users,
    imagecreations: imagecreations,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game15/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagedeath.findById({_id: req.params._id}).then(imagedeaths => {
  res.render('game1', {
    users: users,
    imagedeaths: imagedeaths,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game16/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagedoctrinecovenants.findById({_id: req.params._id}).then(imagedoctrinecovenants => {
  res.render('game1', {
    users: users,
    imagedoctrinecovenants: imagedoctrinecovenants,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game17/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imageevents.findById({_id: req.params._id}).then(imageevents => {
  res.render('game1', {
    users: users,
    imageevents: imageevents,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game18/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagefaith.findById({_id: req.params._id}).then(imagefaiths => {
  res.render('game1', {
    users: users,
    imagefaiths: imagefaiths,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game19/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagefamily.findById({_id: req.params._id}).then(imagefamilies => {
  res.render('game1', {
    users: users,
    imagefamilies: imagefamilies,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game20/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagefasting.findById({_id: req.params._id}).then(imagefastings => {
  res.render('game1', {
    users: users,
    imagefastings: imagefastings,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game21/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenealogy.findById({_id: req.params._id}).then(imagegenealogies => {
  res.render('game1', {
    users: users,
    imagegenealogies: imagegenealogies,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game22/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegiftsofthespirit.findById({_id: req.params._id}).then(imagegiftsofthespirits => {
  res.render('game1', {
    users: users,
    imagegiftsofthespirits: imagegiftsofthespirits,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game23/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegod.findById({_id: req.params._id}).then(imagegods => {
  res.render('game1', {
    users: users,
    imagegods: imagegods,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game24/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegodhead.findById({_id: req.params._id}).then(imagegodheads => {
  res.render('game1', {
    users: users,
    imagegodheads: imagegodheads,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game25/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegospel.findById({_id: req.params._id}).then(imagegospels => {
  res.render('game1', {
    users: users,
    imagegospels: imagegospels,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game26/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagehappiness.findById({_id: req.params._id}).then(imagehappinesses => {
  res.render('game1', {
    users: users,
    imagehappinesses: imagehappinesses,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game27/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imageheaven.findById({_id: req.params._id}).then(imageheavens => {
  res.render('game1', {
    users: users,
    imageheavens: imageheavens,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game28/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagehell.findById({_id: req.params._id}).then(imagehells => {
  res.render('game1', {
    users: users,
    imagehells: imagehells,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game29/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imageholyghost.findById({_id: req.params._id}).then(imageholyghosts => {
  res.render('game1', {
    users: users,
    imageholyghosts: imageholyghosts,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game30/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagehonesty.findById({_id: req.params._id}).then(imagehonesties => {
  res.render('game1', {
    users: users,
    imagehonesties: imagehonesties,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game31/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagehumility.findById({_id: req.params._id}).then(imagehumilities => {
  res.render('game1', {
    users: users,
    imagehumilities: imagehumilities,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game32/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagejesus.findById({_id: req.params._id}).then(imagejesuses => {
  res.render('game1', {
    users: users,
    imagejesuses: imagejesuses,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game33/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagemarriage.findById({_id: req.params._id}).then(imagemarriages => {
  res.render('game1', {
    users: users,
    imagemarriages: imagemarriages,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game34/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagemiracles.findById({_id: req.params._id}).then(imagemiracles => {
  res.render('game1', {
    users: users,
    imagemiracles: imagemiracles,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game35/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagemissionary.findById({_id: req.params._id}).then(imagemissionaries => {
  res.render('game1', {
    users: users,
    imagemissionaries: imagemissionaries,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game36/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagenativity.findById({_id: req.params._id}).then(imagenativities => {
  res.render('game1', {
    users: users,
    imagenativities: imagenativities,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game37/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagenewtestament.findById({_id: req.params._id}).then(imagenewtestaments => {
  res.render('game1', {
    users: users,
    imagenewtestaments: imagenewtestaments,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game38/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imageobedience.findById({_id: req.params._id}).then(imageobediences => {
  res.render('game1', {
    users: users,
    imageobediences: imageobediences,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game39/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imageoldtestament.findById({_id: req.params._id}).then(imageoldtestaments => {
  res.render('game1', {
    users: users,
    imageoldtestaments: imageoldtestaments,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game40/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagepioneer.findById({_id: req.params._id}).then(imagepioneers => {
  res.render('game1', {
    users: users,
    imagepioneers: imagepioneers,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game41/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imageprayer.findById({_id: req.params._id}).then(imageprayers => {
  res.render('game1', {
    users: users,
    imageprayers: imageprayers,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game42/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagepremortal.findById({_id: req.params._id}).then(imagepremortals => {
  res.render('game1', {
    users: users,
    imagepremortals: imagepremortals,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game43/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagepriesthood.findById({_id: req.params._id}).then(imagepriesthoods => {
  res.render('game1', {
    users: users,
    imagepriesthoods: imagepriesthoods,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game44/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imageprophets.findById({_id: req.params._id}).then(imageprophets => {
  res.render('game1', {
    users: users,
    imageprophets: imageprophets,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game45/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagerepentence.findById({_id: req.params._id}).then(imagerepentences => {
  res.render('game1', {
    users: users,
    imagerepentences: imagerepentences,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game46/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagesacrament.findById({_id: req.params._id}).then(imagesacraments => {
  res.render('game1', {
    users: users,
    imagesacraments: imagesacraments,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game47/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagescriptures.findById({_id: req.params._id}).then(imagescriptures => {
  res.render('game1', {
    users: users,
    imagescriptures: imagescriptures,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game48/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagesecondcoming.findById({_id: req.params._id}).then(imagesecondcomings => {
  res.render('game1', {
    users: users,
    imagesecondcomings: imagesecondcomings,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game49/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imageselfreliance.findById({_id: req.params._id}).then(imageselfreliances => {
  res.render('game1', {
    users: users,
    imageselfreliances: imageselfreliances,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game50/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagetemple.findById({_id: req.params._id}).then(imagetemples => {
  res.render('game1', {
    users: users,
    imagetemples: imagetemples,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game51/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagetestimony.findById({_id: req.params._id}).then(imagetestimonies => {
  res.render('game1', {
    users: users,
    imagetestimonies: imagetestimonies,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game52/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imageservice.findById({_id: req.params._id}).then(imageservices => {
  res.render('game1', {
    users: users,
    imageservices: imageservices,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game53/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagethefall.findById({_id: req.params._id}).then(imagethefalls => {
  res.render('game1', {
    users: users,
    imagethefalls: imagethefalls,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game54/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagetithing.findById({_id: req.params._id}).then(imagetithings => {
  res.render('game1', {
    users: users,
    imagetithings: imagetithings,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game55/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagetrials.findById({_id: req.params._id}).then(imagetrials => {
  res.render('game1', {
    users: users,
    imagetrials: imagetrials,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game56/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagewomen.findById({_id: req.params._id}).then(imagewomens => {
  res.render('game1', {
    users: users,
    imagewomens: imagewomens,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game57/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagewordofwisdom.findById({_id: req.params._id}).then(imagewordofwisdoms => {
  res.render('game1', {
    users: users,
    imagewordofwisdoms: imagewordofwisdoms,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game58/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthbrighamyoung.findById({_id: req.params._id}).then(imagegenauthbrighamyoungs => {
  res.render('game1', {
    users: users,
    imagegenauthbrighamyoungs: imagegenauthbrighamyoungs,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game59/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthdabednar.findById({_id: req.params._id}).then(imagegenauthdabednars => {
  res.render('game1', {
    users: users,
    imagegenauthdabednars: imagegenauthdabednars,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game60/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthdavidomckay.findById({_id: req.params._id}).then(imagegenauthdavidomckays => {
  res.render('game1', {
    users: users,
    imagegenauthdavidomckays: imagegenauthdavidomckays,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game61/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthdfuchtdorf.findById({_id: req.params._id}).then(imagegenauthdfuchtdorfs => {
  res.render('game1', {
    users: users,
    imagegenauthdfuchtdorfs: imagegenauthdfuchtdorfs,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game62/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthdgrenlund.findById({_id: req.params._id}).then(imagegenauthdgrenlunds => {
  res.render('game1', {
    users: users,
    imagegenauthdgrenlunds: imagegenauthdgrenlunds,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game62/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthdhoaks.findById({_id: req.params._id}).then(imagegenauthdhoakss => {
  res.render('game1', {
    users: users,
    imagegenauthdhoakss: imagegenauthdhoakss,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game63/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthdtchristofferson.findById({_id: req.params._id}).then(imagegenauthdtchristoffersons => {
  res.render('game1', {
    users: users,
    imagegenauthdtchristoffersons: imagegenauthdtchristoffersons,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game64/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthezrataftbenson.findById({_id: req.params._id}).then(imagegenauthezrataftbensons => {
  res.render('game1', {
    users: users,
    imagegenauthezrataftbensons: imagegenauthezrataftbensons,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game65/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthgeorgeasmith.findById({_id: req.params._id}).then(imagegenauthgeorgeasmiths => {
  res.render('game1', {
    users: users,
    imagegenauthgeorgeasmiths: imagegenauthgeorgeasmiths,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game66/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthgestevenson.findById({_id: req.params._id}).then(imagegenauthgestevensons => {
  res.render('game1', {
    users: users,
    imagegenauthgestevensons: imagegenauthgestevensons,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game67/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthgordonbhinckley.findById({_id: req.params._id}).then(imagegenauthgordonbhinckleys => {
  res.render('game1', {
    users: users,
    imagegenauthgordonbhinckleys: imagegenauthgordonbhinckleys,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game68/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthharoldblee.findById({_id: req.params._id}).then(imagegenauthharoldblees => {
  res.render('game1', {
    users: users,
    imagegenauthharoldblees: imagegenauthharoldblees,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game69/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthhbeyring.findById({_id: req.params._id}).then(imagegenauthhbeyrings => {
  res.render('game1', {
    users: users,
    imagegenauthhbeyrings: imagegenauthhbeyrings,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game70/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthheberjgrant.findById({_id: req.params._id}).then(imagegenauthheberjgrants => {
  res.render('game1', {
    users: users,
    imagegenauthheberjgrants: imagegenauthheberjgrants,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game71/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthhowardwhunter.findById({_id: req.params._id}).then(imagegenauthhowardwhunters => {
  res.render('game1', {
    users: users,
    imagegenauthhowardwhunters: imagegenauthhowardwhunters,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game72/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthjohntaylor.findById({_id: req.params._id}).then(imagegenauthjohntaylors => {
  res.render('game1', {
    users: users,
    imagegenauthjohntaylors: imagegenauthjohntaylors,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game73/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthjosephfieldingsmith.findById({_id: req.params._id}).then(imagegenauthjosephfieldingsmiths => {
  res.render('game1', {
    users: users,
    imagegenauthjosephfieldingsmiths: imagegenauthjosephfieldingsmiths,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game74/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthjosephfsmith.findById({_id: req.params._id}).then(imagegenauthjosephfsmiths => {
  res.render('game1', {
    users: users,
    imagegenauthjosephfsmiths: imagegenauthjosephfsmiths,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game75/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthjosephsmith.findById({_id: req.params._id}).then(imagegenauthjosephsmiths => {
  res.render('game1', {
    users: users,
    imagegenauthjosephsmiths: imagegenauthjosephsmiths,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game76/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthjrholland.findById({_id: req.params._id}).then(imagegenauthjrhollands => {
  res.render('game1', {
    users: users,
    imagegenauthjrhollands: imagegenauthjrhollands,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game77/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthlorenzosnow.findById({_id: req.params._id}).then(imagegenauthlorenzosnows => {
  res.render('game1', {
    users: users,
    imagegenauthlorenzosnows: imagegenauthlorenzosnows,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game78/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthmrballard.findById({_id: req.params._id}).then(imagegenauthmrballards => {
  res.render('game1', {
    users: users,
    imagegenauthmrballards: imagegenauthmrballards,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game79/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthnlanderson.findById({_id: req.params._id}).then(imagegenauthnlandersons => {
  res.render('game1', {
    users: users,
    imagegenauthnlandersons: imagegenauthnlandersons,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game80/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthqlcook.findById({_id: req.params._id}).then(imagegenauthqlcooks => {
  res.render('game1', {
    users: users,
    imagegenauthqlcooks: imagegenauthqlcooks,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game81/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthrarasband.findById({_id: req.params._id}).then(imagegenauthrarasbands => {
  res.render('game1', {
    users: users,
    imagegenauthrarasbands: imagegenauthrarasbands,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game82/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthrmnelson.findById({_id: req.params._id}).then(imagegenauthrmnelsons => {
  res.render('game1', {
    users: users,
    imagegenauthrmnelsons: imagegenauthrmnelsons,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game83/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthspencerkimball.findById({_id: req.params._id}).then(imagegenauthspencerkimballs => {
  res.render('game1', {
    users: users,
    imagegenauthspencerkimballs: imagegenauthspencerkimballs,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game84/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthtsmonson.findById({_id: req.params._id}).then(imagegenauthtsmonsons => {
  res.render('game1', {
    users: users,
    imagegenauthtsmonsons: imagegenauthtsmonsons,
  })
  })
});
});


//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game85/:_id', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
  Imagegenauthwilfordwoodruff.findById({_id: req.params._id}).then(imagegenauthwilfordwoodruffs => {
  res.render('game1', {
    users: users,
    imagegenauthwilfordwoodruffs: imagegenauthwilfordwoodruffs,
  })
  })
});
});


//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures', function(req, res) {
  Scripture.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/people', function(req, res) {
  Scripturepeople.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/events', function(req, res) {
  Scriptureevents.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/bookofmormon', function(req, res) {
  Scripturebookofmormon.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/newtestament', function(req, res) {
  Scripturenewtestament.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/oldtestament', function(req, res) {
  Scriptureoldtestament.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/doctrinecovenants', function(req, res) {
  Scripturedoctrinecovenants.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/baptism', function(req, res) {
  Scripturebaptism.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/faith', function(req, res) {
  Scripturefaith.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/repentence', function(req, res) {
  Scripturerepentence.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/charity', function(req, res) {
  Scripturecharity.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/prophets', function(req, res) {
  Scriptureprophets.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/atonement', function(req, res) {
  Scriptureatonement.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/wordofwisdom', function(req, res) {
  Scripturewordofwisdom.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/service', function(req, res) {
  Scriptureservice.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/creation', function(req, res) {
  Scripturecreation.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/agency', function(req, res) {
  Scriptureagency.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/thefall', function(req, res) {
  Scripturethefall.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/holyghost', function(req, res) {
  Scriptureholyghost.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/scriptures', function(req, res) {
  Scripturescriptures.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/priesthood', function(req, res) {
  Scripturepriesthood.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/sacrament', function(req, res) {
  Scripturesacrament.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/honesty', function(req, res) {
  Scripturehonesty.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/obedience', function(req, res) {
  Scriptureobedience.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/angels', function(req, res) {
  Scriptureangels.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/apostasy', function(req, res) {
  Scriptureapostasy.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/church', function(req, res) {
  Scripturechurch.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/family', function(req, res) {
  Scripturefamily.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/fasting', function(req, res) {
  Scripturefasting.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/humility', function(req, res) {
  Scripturehumility.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/jesus', function(req, res) {
  Scripturejesus.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/marriage', function(req, res) {
  Scripturemarriage.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/prayer', function(req, res) {
  Scriptureprayer.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/premortal', function(req, res) {
  Scripturepremortal.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/secondcoming', function(req, res) {
  Scripturesecondcoming.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/temple', function(req, res) {
  Scripturetemple.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/tithing', function(req, res) {
  Scripturetithing.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/trials', function(req, res) {
  Scripturetrials.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/heaven', function(req, res) {
  Scriptureheaven.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/hell', function(req, res) {
  Scripturehell.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/missionary', function(req, res) {
  Scripturemissionary.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/nativity', function(req, res) {
  Scripturenativity.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/pioneer', function(req, res) {
  Scripturepioneer.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/resurrection', function(req, res) {
  Scriptureresurrection.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/testimony', function(req, res) {
  Scripturetestimony.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/women', function(req, res) {
  Scripturewomen.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/godhead', function(req, res) {
  Scripturegodhead.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/selfreliance', function(req, res) {
  Scriptureselfreliance.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/apostle', function(req, res) {
  Scriptureapostle.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/chastity', function(req, res) {
  Scripturechastity.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/children', function(req, res) {
  Scripturechildren.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/covenants', function(req, res) {
  Scripturecovenants.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/death', function(req, res) {
  Scripturedeath.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/genealogy', function(req, res) {
  Scripturegenealogy.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/giftsofthespirit', function(req, res) {
  Scripturegiftsofthespirit.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/gospel', function(req, res) {
  Scripturegospel.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/happiness', function(req, res) {
  Scripturehappiness.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/miracles', function(req, res) {
  Scripturemiracles.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//
//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/god', function(req, res) {
  Scripturegod.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/brighamyoung', function(req, res) {
  Scripturegenauthbrighamyoung.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/dabednar', function(req, res) {
  Scripturegenauthdabednar.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/davidomckay', function(req, res) {
  Scripturegenauthdavidomckay.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/dfuchtdorf', function(req, res) {
  Scripturegenauthdfuchtdorf.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/dgrenlund', function(req, res) {
  Scripturegenauthdgrenlund.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/dhoaks', function(req, res) {
  Scripturegenauthdhoaks.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/dtchristofferson', function(req, res) {
  Scripturegenauthdtchristofferson.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/ezrataftbenson', function(req, res) {
  Scripturegenauthezrataftbenson.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/georgeasmith', function(req, res) {
  Scripturegenauthgeorgeasmith.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/gestevenson', function(req, res) {
  Scripturegenauthgestevenson.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/gordonbhinckley', function(req, res) {
  Scripturegenauthgordonbhinckley.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/haroldblee', function(req, res) {
  Scripturegenauthharoldblee.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/hbeyring', function(req, res) {
  Scripturegenauthhbeyring.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/heberjgrant', function(req, res) {
  Scripturegenauthheberjgrant.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/howardwhunter', function(req, res) {
  Scripturegenauthhowardwhunter.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/johntaylor', function(req, res) {
  Scripturegenauthjohntaylor.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/josephfieldingsmith', function(req, res) {
  Scripturegenauthjosephfieldingsmith.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/josephfsmith', function(req, res) {
  Scripturegenauthjosephfsmith.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/josephsmith', function(req, res) {
  Scripturegenauthjosephsmith.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/jrholland', function(req, res) {
  Scripturegenauthjrholland.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/lorenzosnow', function(req, res) {
  Scripturegenauthlorenzosnow.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/mrballard', function(req, res) {
  Scripturegenauthmrballard.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/nlanderson', function(req, res) {
  Scripturegenauthnlanderson.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/qlcook', function(req, res) {
  Scripturegenauthqlcook.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/rarasband', function(req, res) {
  Scripturegenauthrarasband.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/rmnelson', function(req, res) {
  Scripturegenauthrmnelson.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/spencerkimball', function(req, res) {
  Scripturegenauthspencerkimball.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/tsmonson', function(req, res) {
  Scripturegenauthtsmonson.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/wilfordwoodruff', function(req, res) {
  Scripturegenauthwilfordwoodruff.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET HIGH SCORES===//

app.get('/highscores', function(req, res) {
    Points.find({}).then(points => {
  res.render('highscores', {
  points: points,
});
});
});


//==========================//

//====APP LISTEN ON ENVIRONMENT PORT===//

app.listen(process.env.PORT || 3000);
console.log('starting applicaiton.  Good job!');

//==========================//
