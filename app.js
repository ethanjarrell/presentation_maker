//=====MODELS======//
const User = require('./models/user.js');
const Talk = require('./models/talk.js');
const Talkid = require('./models/talkid.js');
const Talkname = require('./models/talkname.js');
const Talktopic = require('./models/talktopic.js');
const Image = require('./models/image.js');
//=================//

//=====IMAGE API======//
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
const Imageselfreliance = require('./models/imageselfreliance.js');
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
    Splashinfo.aggregate().sample(4).then(function(splashinfos){
    Talktopic.find({}).then(function(talktopics){
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

//====RENDER COMPLETED TALKS===//

app.get('/slideshow/:talkid', function(req, res) {
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
  Splashinfo.find({}).then(function(splashinfos){
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

//====APP LISTEN ON ENVIRONMENT PORT===//

app.listen(process.env.PORT || 3000);
console.log('starting applicaiton.  Good job!');

//==========================//
