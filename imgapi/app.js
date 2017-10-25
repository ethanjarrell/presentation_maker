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
  res.redirect('/test0012');
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/test0012', function(req, res) {
  res.render('test0012')
});

//==========================//

//====GET ALL IMAGES===//

app.get('/game', function(req, res) {
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
  res.render('game', {
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

app.post('/game/:image', function(req, res) {
  Imagepeople.findOneAndUpdate({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.params.image,
  }).then(images => {
  res.redirect('/game')
});
});

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

//====APP LISTEN ON ENVIRONMENT PORT===//

app.listen(process.env.PORT || 3000);
console.log('starting applicaiton.  Good job!');

//==========================//
