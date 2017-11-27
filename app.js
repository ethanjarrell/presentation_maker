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
const Imagegratitude = require('./models/imagegratitude.js');
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
const Imagefellowship = require('./models/imagefellowship.js');
const Imagepatience = require('./models/imagepatience.js');
const Imagesacrifice = require('./models/imagesacrifice.js');
const Imagesabbathday = require('./models/imagesabbathday.js');
const Imagetalents = require('./models/imagetalents.js');
const Imagegatheringofisrael = require('./models/imagegatheringofisrael.js');
const Imagelordscovenantpeople = require('./models/imagelordscovenantpeople.js');
const Imageexaltation = require('./models/imageexaltation.js');
const Imagefinaljudgement = require('./models/imagefinaljudgement.js');
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
const Scripturegratitude = require('./models/scripturegratitude.js');
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
const Scripturefellowship = require('./models/scripturefellowship.js');
const Scripturepatience = require('./models/scripturepatience.js');
const Scripturesacrifice = require('./models/scripturesacrifice.js');
const Scripturesabbathday = require('./models/scripturesabbathday.js');
const Scripturetalents = require('./models/scripturetalents.js');
const Scripturegatheringofisrael = require('./models/scripturegatheringofisrael.js');
const Scripturelordscovenantpeople = require('./models/scripturelordscovenantpeople.js');
const Scriptureexaltation = require('./models/scriptureexaltation.js');
const Scripturefinaljudgement = require('./models/scripturefinaljudgement.js');
//=================//

//=====GENERAL CONFERENCE API======//
const Genconffellowship = require('./models/genconffellowship.js');
const Genconfbookofmormon = require('./models/genconfbookofmormon.js');
const Genconfbaptism = require('./models/genconfbaptism.js');
const Genconffaith = require('./models/genconffaith.js');
const Genconfrepentence = require('./models/genconfrepentence.js');
const Genconfcharity = require('./models/genconfcharity.js');
const Genconfprophets = require('./models/genconfprophets.js');
const Genconfatonement = require('./models/genconfatonement.js');
const Genconfwordofwisdom = require('./models/genconfwordofwisdom.js');
const Genconfservice = require('./models/genconfservice.js');
const Genconfcreation = require('./models/genconfcreation.js');
const Genconfagency = require('./models/genconfagency.js');
const Genconfgratitude = require('./models/genconfgratitude.js');
const Genconfthefall = require('./models/genconfthefall.js');
const Genconfholyghost = require('./models/genconfholyghost.js');
const Genconfscriptures = require('./models/genconfscriptures.js');
const Genconfpriesthood = require('./models/genconfpriesthood.js');
const Genconfsacrament = require('./models/genconfsacrament.js');
const Genconfhonesty = require('./models/genconfhonesty.js');
const Genconfobedience = require('./models/genconfobedience.js');
const Genconfangels = require('./models/genconfangels.js');
const Genconfapostasy = require('./models/genconfapostasy.js');
const Genconfchurch = require('./models/genconfchurch.js');
const Genconffamily = require('./models/genconffamily.js');
const Genconffasting = require('./models/genconffasting.js');
const Genconfhumility = require('./models/genconfhumility.js');
const Genconfjesus = require('./models/genconfjesus.js');
const Genconfmarriage = require('./models/genconfmarriage.js');
const Genconfprayer = require('./models/genconfprayer.js');
const Genconfpremortal = require('./models/genconfpremortal.js');
const Genconfsecondcoming = require('./models/genconfsecondcoming.js');
const Genconftemple = require('./models/genconftemple.js');
const Genconftithing = require('./models/genconftithing.js');
const Genconftrials = require('./models/genconftrials.js');
const Genconftestimony = require('./models/genconftestimony.js');
const Genconfgodhead = require('./models/genconfgodhead.js');
const Genconfheaven = require('./models/genconfheaven.js');
const Genconfhell = require('./models/genconfhell.js');
const Genconfmissionary = require('./models/genconfmissionary.js');
const Genconfnativity = require('./models/genconfnativity.js');
const Genconfpioneer = require('./models/genconfpioneer.js');
const Genconfresurrection = require('./models/genconfresurrection.js');
const Genconfwomen = require('./models/genconfwomen.js');
const Genconfapostle = require('./models/genconfapostle.js');
const Genconfselfreliance = require('./models/genconfselfreliance.js');
const Genconfchastity = require('./models/genconfchastity.js');
const Genconfchildren = require('./models/genconfchildren.js');
const Genconfcovenants = require('./models/genconfcovenants.js');
const Genconfdeath = require('./models/genconfdeath.js');
const Genconfgenealogy = require('./models/genconfgenealogy.js');
const Genconfgiftsofthespirit = require('./models/genconfgiftsofthespirit.js');
const Genconfgospel = require('./models/genconfgospel.js');
const Genconfhappiness = require('./models/genconfhappiness.js');
const Genconfmiracles = require('./models/genconfmiracles.js');
const Genconfgod = require('./models/genconfgod.js');
const Genconfenconfpatience = require('./models/genconfpatience.js');
const Genconfenconfsacrifice = require('./models/genconfsacrifice.js');
const Genconfenconfsabbathday = require('./models/genconfsabbathday.js');
const Genconfenconftalents = require('./models/genconftalents.js');
const Genconfenconfgatheringofisrael = require('./models/genconfgatheringofisrael.js');
const Genconfenconflordscovenantpeople = require('./models/genconflordscovenantpeople.js');
const Genconfenconfexaltation = require('./models/genconfexaltation.js');
const Genconfenconffinaljudgement = require('./models/genconffinaljudgement.js');
//=================//

//=====VIDEOS API======//
const Videofellowship = require('./models/videofellowship.js');
const Videobookofmormon = require('./models/videobookofmormon.js');
const Videobaptism = require('./models/videobaptism.js');
const Videofaith = require('./models/videofaith.js');
const Videorepentence = require('./models/videorepentence.js');
const Videocharity = require('./models/videocharity.js');
const Videoprophets = require('./models/videoprophets.js');
const Videoatonement = require('./models/videoatonement.js');
const Videowordofwisdom = require('./models/videowordofwisdom.js');
const Videoservice = require('./models/videoservice.js');
const Videocreation = require('./models/videocreation.js');
const Videoagency = require('./models/videoagency.js');
const Videogratitude = require('./models/videogratitude.js');
const Videothefall = require('./models/videothefall.js');
const Videoholyghost = require('./models/videoholyghost.js');
const Videoscriptures = require('./models/videoscriptures.js');
const Videopriesthood = require('./models/videopriesthood.js');
const Videosacrament = require('./models/videosacrament.js');
const Videohonesty = require('./models/videohonesty.js');
const Videoobedience = require('./models/videoobedience.js');
const Videoangels = require('./models/videoangels.js');
const Videoapostasy = require('./models/videoapostasy.js');
const Videochurch = require('./models/videochurch.js');
const Videofamily = require('./models/videofamily.js');
const Videofasting = require('./models/videofasting.js');
const Videohumility = require('./models/videohumility.js');
const Videojesus = require('./models/videojesus.js');
const Videomarriage = require('./models/videomarriage.js');
const Videoprayer = require('./models/videoprayer.js');
const Videopremortal = require('./models/videopremortal.js');
const Videosecondcoming = require('./models/videosecondcoming.js');
const Videotemple = require('./models/videotemple.js');
const Videotithing = require('./models/videotithing.js');
const Videotrials = require('./models/videotrials.js');
const Videotestimony = require('./models/videotestimony.js');
const Videogodhead = require('./models/videogodhead.js');
const Videoheaven = require('./models/videoheaven.js');
const Videohell = require('./models/videohell.js');
const Videomissionary = require('./models/videomissionary.js');
const Videonativity = require('./models/videonativity.js');
const Videopioneer = require('./models/videopioneer.js');
const Videoresurrection = require('./models/videoresurrection.js');
const Videowomen = require('./models/videowomen.js');
const Videoapostle = require('./models/videoapostle.js');
const Videoselfreliance = require('./models/videoselfreliance.js');
const Videochastity = require('./models/videochastity.js');
const Videochildren = require('./models/videochildren.js');
const Videocovenants = require('./models/videocovenants.js');
const Videodeath = require('./models/videodeath.js');
const Videogenealogy = require('./models/videogenealogy.js');
const Videogiftsofthespirit = require('./models/videogiftsofthespirit.js');
const Videogospel = require('./models/videogospel.js');
const Videohappiness = require('./models/videohappiness.js');
const Videomiracles = require('./models/videomiracles.js');
const Videogod = require('./models/videogod.js');
const Videopatience = require('./models/videopatience.js');
const Videosacrifice = require('./models/videosacrifice.js');
const Videosabbathday = require('./models/videosabbathday.js');
const Videotalents = require('./models/videotalents.js');
const Videogatheringofisrael = require('./models/videogatheringofisrael.js');
const Videolordscovenantpeople = require('./models/videolordscovenantpeople.js');
const Videoexaltation = require('./models/videoexaltation.js');
const Videofinaljudgement = require('./models/videofinaljudgement.js');
//=================//

//=====DEFINITION API======//
const Deffellowship = require('./models/deffellowship.js');
const Defbookofmormon = require('./models/defbookofmormon.js');
const Defbaptism = require('./models/defbaptism.js');
const Deffaith = require('./models/deffaith.js');
const Defrepentence = require('./models/defrepentence.js');
const Defcharity = require('./models/defcharity.js');
const Defprophets = require('./models/defprophets.js');
const Defatonement = require('./models/defatonement.js');
const Defwordofwisdom = require('./models/defwordofwisdom.js');
const Defservice = require('./models/defservice.js');
const Defcreation = require('./models/defcreation.js');
const Defagency = require('./models/defagency.js');
const Defgratitude = require('./models/defgratitude.js');
const Defthefall = require('./models/defthefall.js');
const Defholyghost = require('./models/defholyghost.js');
const Defscriptures = require('./models/defscriptures.js');
const Defpriesthood = require('./models/defpriesthood.js');
const Defsacrament = require('./models/defsacrament.js');
const Defhonesty = require('./models/defhonesty.js');
const Defobedience = require('./models/defobedience.js');
const Defangels = require('./models/defangels.js');
const Defapostasy = require('./models/defapostasy.js');
const Defchurch = require('./models/defchurch.js');
const Deffamily = require('./models/deffamily.js');
const Deffasting = require('./models/deffasting.js');
const Defhumility = require('./models/defhumility.js');
const Defjesus = require('./models/defjesus.js');
const Defmarriage = require('./models/defmarriage.js');
const Defprayer = require('./models/defprayer.js');
const Defpremortal = require('./models/defpremortal.js');
const Defsecondcoming = require('./models/defsecondcoming.js');
const Deftemple = require('./models/deftemple.js');
const Deftithing = require('./models/deftithing.js');
const Deftrials = require('./models/deftrials.js');
const Deftestimony = require('./models/deftestimony.js');
const Defgodhead = require('./models/defgodhead.js');
const Defheaven = require('./models/defheaven.js');
const Defhell = require('./models/defhell.js');
const Defmissionary = require('./models/defmissionary.js');
const Defnativity = require('./models/defnativity.js');
const Defpioneer = require('./models/defpioneer.js');
const Defresurrection = require('./models/defresurrection.js');
const Defwomen = require('./models/defwomen.js');
const Defapostle = require('./models/defapostle.js');
const Defselfreliance = require('./models/defselfreliance.js');
const Defchastity = require('./models/defchastity.js');
const Defchildren = require('./models/defchildren.js');
const Defcovenants = require('./models/defcovenants.js');
const Defdeath = require('./models/defdeath.js');
const Defgenealogy = require('./models/defgenealogy.js');
const Defgiftsofthespirit = require('./models/defgiftsofthespirit.js');
const Defgospel = require('./models/defgospel.js');
const Defhappiness = require('./models/defhappiness.js');
const Defmiracles = require('./models/defmiracles.js');
const Defgod = require('./models/defgod.js');
const Defpatience = require('./models/defpatience.js');
const Defsacrifice = require('./models/defsacrifice.js');
const Defsabbathday = require('./models/defsabbathday.js');
const Deftalents = require('./models/deftalents.js');
const Defgatheringofisrael = require('./models/defgatheringofisrael.js');
const Deflordscovenantpeople = require('./models/deflordscovenantpeople.js');
const Defexaltation = require('./models/defexaltation.js');
const Deffinaljudgement = require('./models/deffinaljudgement.js');
//=================//

//=====DEFINITION API======//
const Byufellowship = require('./models/byufellowship.js');
const Byubookofmormon = require('./models/byubookofmormon.js');
const Byubaptism = require('./models/byubaptism.js');
const Byufaith = require('./models/byufaith.js');
const Byurepentence = require('./models/byurepentence.js');
const Byucharity = require('./models/byucharity.js');
const Byuprophets = require('./models/byuprophets.js');
const Byuatonement = require('./models/byuatonement.js');
const Byuwordofwisdom = require('./models/byuwordofwisdom.js');
const Byuservice = require('./models/byuservice.js');
const Byucreation = require('./models/byucreation.js');
const Byuagency = require('./models/byuagency.js');
const Byugratitude = require('./models/byugratitude.js');
const Byuthefall = require('./models/byuthefall.js');
const Byuholyghost = require('./models/byuholyghost.js');
const Byuscriptures = require('./models/byuscriptures.js');
const Byupriesthood = require('./models/byupriesthood.js');
const Byusacrament = require('./models/byusacrament.js');
const Byuhonesty = require('./models/byuhonesty.js');
const Byuobedience = require('./models/byuobedience.js');
const Byuangels = require('./models/byuangels.js');
const Byuapostasy = require('./models/byuapostasy.js');
const Byuchurch = require('./models/byuchurch.js');
const Byufamily = require('./models/byufamily.js');
const Byufasting = require('./models/byufasting.js');
const Byuhumility = require('./models/byuhumility.js');
const Byujesus = require('./models/byujesus.js');
const Byumarriage = require('./models/byumarriage.js');
const Byuprayer = require('./models/byuprayer.js');
const Byupremortal = require('./models/byupremortal.js');
const Byusecondcoming = require('./models/byusecondcoming.js');
const Byutemple = require('./models/byutemple.js');
const Byutithing = require('./models/byutithing.js');
const Byutrials = require('./models/byutrials.js');
const Byutestimony = require('./models/byutestimony.js');
const Byugodhead = require('./models/byugodhead.js');
const Byuheaven = require('./models/byuheaven.js');
const Byuhell = require('./models/byuhell.js');
const Byumissionary = require('./models/byumissionary.js');
const Byunativity = require('./models/byunativity.js');
const Byupioneer = require('./models/byupioneer.js');
const Byuresurrection = require('./models/byuresurrection.js');
const Byuwomen = require('./models/byuwomen.js');
const Byuapostle = require('./models/byuapostle.js');
const Byuselfreliance = require('./models/byuselfreliance.js');
const Byuchastity = require('./models/byuchastity.js');
const Byuchildren = require('./models/byuchildren.js');
const Byucovenants = require('./models/byucovenants.js');
const Byudeath = require('./models/byudeath.js');
const Byugenealogy = require('./models/byugenealogy.js');
const Byugiftsofthespirit = require('./models/byugiftsofthespirit.js');
const Byugospel = require('./models/byugospel.js');
const Byuhappiness = require('./models/byuhappiness.js');
const Byumiracles = require('./models/byumiracles.js');
const Byugod = require('./models/byugod.js');
const Byupatience = require('./models/byupatience.js');
const Byusacrifice = require('./models/byusacrifice.js');
const Byusabbathday = require('./models/byusabbathday.js');
const Byutalents = require('./models/byutalents.js');
const Byugatheringofisrael = require('./models/byugatheringofisrael.js');
const Byulordscovenantpeople = require('./models/byulordscovenantpeople.js');
const Byuexaltation = require('./models/byuexaltation.js');
const Byufinaljudgement = require('./models/byufinaljudgement.js');
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
app.use(bodyParser.json({limit: '50mb'}));
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

//====RENDER SLIDESHOW TALKS===//

app.get('/slideshowpicker/slideshow3/:talkid', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
    Talktopic.findOne({talkid: req.params.talkid}).then(function(talktopics){
      Talk.findOne({talkid: req.params.talkid}).then(function(talks){
  res.render('slideshow3', {
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
    brainstorm1: req.body.brainstorm1,
    brainstorm2: req.body.brainstorm2,
    brainstorm3: req.body.brainstorm3,
    section1_topic: req.body.section1_topic,
    image1: req.body.image1,
    video1: req.body.video1,
    topic1: req.body.topic1,
    textarea1: req.body.textarea1,
    image2: req.body.image2,
    video2: req.body.video2,
    topic2: req.body.topic2,
    textarea2: req.body.textarea2,
    image3: req.body.image3,
    video3: req.body.video3,
    topic3: req.body.topic3,
    textarea3: req.body.textarea3,
    image4: req.body.image4,
    video4: req.body.video4,
    topic4: req.body.topic4,
    textarea4: req.body.textarea4,
    image5: req.body.image5,
    video5: req.body.video5,
    topic5: req.body.topic5,
    textarea5: req.body.textarea5,
    image6: req.body.image6,
    video6: req.body.video6,
    topic6: req.body.topic6,
    textarea6: req.body.textarea6,
    image7: req.body.image7,
    video7: req.body.video7,
    topic7: req.body.topic7,
    textarea7: req.body.textarea7,
    image8: req.body.image8,
    video8: req.body.video8,
    topic8: req.body.topic8,
    textarea8: req.body.textarea8,
    image9: req.body.image9,
    video9: req.body.video9,
    topic9: req.body.topic9,
    textarea9: req.body.textarea9,
    image10: req.body.image10,
    video10: req.body.video10,
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
    brainstorm1: req.body.brainstorm1,
    brainstorm2: req.body.brainstorm2,
    brainstorm3: req.body.brainstorm3,
    section1_topic: req.body.section1_topic,
    image1: req.body.image1,
    video1: req.body.video1,
    topic1: req.body.topic1,
    textarea1: req.body.textarea1,
    image2: req.body.image2,
    video2: req.body.video2,
    topic2: req.body.topic2,
    textarea2: req.body.textarea2,
    image3: req.body.image3,
    video3: req.body.video3,
    topic3: req.body.topic3,
    textarea3: req.body.textarea3,
    image4: req.body.image4,
    video4: req.body.video4,
    topic4: req.body.topic4,
    textarea4: req.body.textarea4,
    image5: req.body.image5,
    video5: req.body.video5,
    topic5: req.body.topic5,
    textarea5: req.body.textarea5,
    image6: req.body.image6,
    video6: req.body.video6,
    topic6: req.body.topic6,
    textarea6: req.body.textarea6,
    image7: req.body.image7,
    video7: req.body.video7,
    topic7: req.body.topic7,
    textarea7: req.body.textarea7,
    image8: req.body.image8,
    video8: req.body.video8,
    topic8: req.body.topic8,
    textarea8: req.body.textarea8,
    image9: req.body.image9,
    video9: req.body.video9,
    topic9: req.body.topic9,
    textarea9: req.body.textarea9,
    image10: req.body.image10,
    video10: req.body.video10,
    topic10: req.body.topic10,
    textarea10: req.body.textarea10,
  }).then(talks => {
  res.redirect('/completed')
});
});

//==========================//

//====GET TALKGENERATOR===//
app.get('/talkgenerator', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
    res.render('talkgenerator', {
      users: users,
    })
  })
})
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

app.get('/api/images/gatheringofisrael', function(req, res) {
  Imagegatheringofisrael.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/gatheringofisrael', function(req, res) {
  Imagegatheringofisrael.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/talents', function(req, res) {
  Imagetalents.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/talents', function(req, res) {
  Imagetalents.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/lordscovenantpeople', function(req, res) {
  Imagelordscovenantpeople.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/lordscovenantpeople', function(req, res) {
  Imagelordscovenantpeople.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/sabbathday', function(req, res) {
  Imagesabbathday.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/sabbathday', function(req, res) {
  Imagesabbathday.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/sacrifice', function(req, res) {
  Imagesacrifice.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/sacrifice', function(req, res) {
  Imagesacrifice.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/finaljudgement', function(req, res) {
  Imagefinaljudgement.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/finaljudgement', function(req, res) {
  Imagefinaljudgement.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/exaltation', function(req, res) {
  Imageexaltation.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/exaltation', function(req, res) {
  Imageexaltation.create({
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

app.get('/api/images/gratitude', function(req, res) {
  Imagegratitude.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/gratitude', function(req, res) {
  Imagegratitude.create({
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

app.get('/api/images/fellowship', function(req, res) {
  Imagefellowship.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/fellowship', function(req, res) {
  Imagefellowship.create({
    image_data: req.body.image_data,
    tag: req.body.tag,
    image: req.body.image,
  }).then(images => {
  res.json(images)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/images/patience', function(req, res) {
  Imagepatience.find({}).then(images => {
  res.json(images)
});
});

//==========================//

//====POST IMAGE API===//

app.post('/api/images/patience', function(req, res) {
  Imagepatience.create({
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/patience', function(req, res) {
  Scripturepatience.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/game1')
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
  res.redirect('/game1')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/gatheringofisrael', function(req, res) {
  Scripturegatheringofisrael.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/game1')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/sacrifice', function(req, res) {
  Scripturesacrifice.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/game1')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/sabbathday', function(req, res) {
  Scripturesabbathday.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/game1')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/lordscovenantpeople', function(req, res) {
  Scripturelordscovenantpeople.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/game1')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/talents', function(req, res) {
  Scripturetalents.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/game1')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/finaljudgement', function(req, res) {
  Scripturefinaljudgement.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/game1')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/exaltation', function(req, res) {
  Scriptureexaltation.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/game1')
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
  res.redirect('/game1')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/gratitude', function(req, res) {
  Scripturegratitude.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/scriptures/fellowship', function(req, res) {
  Scripturefellowship.create({
    standard_work_location: req.body.standard_work_location,
    book_and_verse_number: req.body.book_and_verse_number,
    verse_text: req.body.verse_text,
  }).then(scriptures => {
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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
  res.redirect('/game1')
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

app.get('/game1', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
}).then(users => {
  res.render('game1')
});
});

//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game2', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
}).then(users => {
  res.render('game2')
});
});

//==========================//

//====GET IMAGE FOR SCRIPTURE API===//

app.get('/game3', function(req, res) {
  User.findOne({username: req.session.username}).then(function(users){
}).then(users => {
  res.render('game3')
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

app.get('/api/scriptures/patience', function(req, res) {
  Scripturepatience.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/exaltation', function(req, res) {
  Scriptureexaltation.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/finaljudgement', function(req, res) {
  Scripturefinaljudgement.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/sacrifice', function(req, res) {
  Scripturesacrifice.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/sabbathday', function(req, res) {
  Scripturesabbathday.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/lordscovenantpeople', function(req, res) {
  Scripturelordscovenantpeople.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/talents', function(req, res) {
  Scripturetalents.find({}).then(scriptures => {
  res.json(scriptures)
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/scriptures/gatheringofisrael', function(req, res) {
  Scripturegatheringofisrael.find({}).then(scriptures => {
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

app.get('/api/scriptures/fellowship', function(req, res) {
  Scripturefellowship.find({}).then(scriptures => {
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

app.get('/api/scriptures/gratitude', function(req, res) {
  Scripturegratitude.find({}).then(scriptures => {
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

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/fellowship', function(req, res) {
  Genconffellowship.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/fellowship', function(req, res) {
  Genconffellowship.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/exaltation', function(req, res) {
  Genconfexaltation.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/exaltation', function(req, res) {
  Genconfexaltation.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/gatheringofisrael', function(req, res) {
  Genconfgatheringofisrael.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/gatheringofisrael', function(req, res) {
  Genconfgatheringofisrael.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/lordscovenantpeople', function(req, res) {
  Genconflordscovenantpeople.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/lordscovenantpeople', function(req, res) {
  Genconflordscovenantpeople.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/sacrifice', function(req, res) {
  Genconfsacrifice.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/sacrifice', function(req, res) {
  Genconfsacrifice.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/sabbathday', function(req, res) {
  Genconfsabbathday.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/sabbathday', function(req, res) {
  Genconfsabbathday.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/talents', function(req, res) {
  Genconftalents.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/talents', function(req, res) {
  Genconftalents.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/finaljudgement', function(req, res) {
  Genconffinaljudgement.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/finaljudgement', function(req, res) {
  Genconffinaljudgement.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/patience', function(req, res) {
  Genconfpatience.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/patience', function(req, res) {
  Genconfpatience.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/agency', function(req, res) {
  Genconfagency.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/agency', function(req, res) {
  Genconfagency.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/gratitude', function(req, res) {
  Genconfgratitude.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/gratitude', function(req, res) {
  Genconfgratitude.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//


//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/angels', function(req, res) {
  Genconfangels.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/angels', function(req, res) {
  Genconfangels.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/apostasy', function(req, res) {
  Genconfapostasy.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/apostasy', function(req, res) {
  Genconfapostasy.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/apostle', function(req, res) {
  Genconfapostle.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/apostle', function(req, res) {
  Genconfapostle.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/atonement', function(req, res) {
  Genconfatonement.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/atonement', function(req, res) {
  Genconfatonement.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/baptism', function(req, res) {
  Genconfbaptism.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/baptism', function(req, res) {
  Genconfbaptism.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/bookofmormon', function(req, res) {
  Genconfbookofmormon.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/bookofmormon', function(req, res) {
  Genconfbookofmormon.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/charity', function(req, res) {
  Genconfcharity.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/charity', function(req, res) {
  Genconfcharity.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/chastity', function(req, res) {
  Genconfchastity.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/chastity', function(req, res) {
  Genconfchastity.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/children', function(req, res) {
  Genconfchildren.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/children', function(req, res) {
  Genconfchildren.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/church', function(req, res) {
  Genconfchurch.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/church', function(req, res) {
  Genconfchurch.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/covenants', function(req, res) {
  Genconfcovenants.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/covenants', function(req, res) {
  Genconfcovenants.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/creation', function(req, res) {
  Genconfcreation.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/creation', function(req, res) {
  Genconfcreation.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/death', function(req, res) {
  Genconfdeath.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/death', function(req, res) {
  Genconfdeath.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/faith', function(req, res) {
  Genconffaith.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/faith', function(req, res) {
  Genconffaith.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/family', function(req, res) {
  Genconffamily.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/family', function(req, res) {
  Genconffamily.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/fasting', function(req, res) {
  Genconffasting.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/fasting', function(req, res) {
  Genconffasting.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/genealogy', function(req, res) {
  Genconfgenealogy.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/genealogy', function(req, res) {
  Genconfgenealogy.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/giftsofthespirit', function(req, res) {
  Genconfgiftsofthespirit.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/giftsofthespirit', function(req, res) {
  Genconfgiftsofthespirit.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/god', function(req, res) {
  Genconfgod.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/god', function(req, res) {
  Genconfgod.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/godhead', function(req, res) {
  Genconfgodhead.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/godhead', function(req, res) {
  Genconfgodhead.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/gospel', function(req, res) {
  Genconfgospel.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/gospel', function(req, res) {
  Genconfgospel.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/happiness', function(req, res) {
  Genconfhappiness.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/happiness', function(req, res) {
  Genconfhappiness.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/heaven', function(req, res) {
  Genconfheaven.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/heaven', function(req, res) {
  Genconfheaven.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/hell', function(req, res) {
  Genconfhell.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/hell', function(req, res) {
  Genconfhell.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/holyghost', function(req, res) {
  Genconfholyghost.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/holyghost', function(req, res) {
  Genconfholyghost.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/honesty', function(req, res) {
  Genconfhonesty.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/honesty', function(req, res) {
  Genconfhonesty.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/humility', function(req, res) {
  Genconfhumility.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/humility', function(req, res) {
  Genconfhumility.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/jesus', function(req, res) {
  Genconfjesus.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/jesus', function(req, res) {
  Genconfjesus.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/marriage', function(req, res) {
  Genconfmarriage.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/marriage', function(req, res) {
  Genconfmarriage.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/miracles', function(req, res) {
  Genconfmiracles.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/miracles', function(req, res) {
  Genconfmiracles.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/missionary', function(req, res) {
  Genconfmissionary.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/missionary', function(req, res) {
  Genconfmissionary.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/nativity', function(req, res) {
  Genconfnativity.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/nativity', function(req, res) {
  Genconfnativity.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/obedience', function(req, res) {
  Genconfobedience.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/obedience', function(req, res) {
  Genconfobedience.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/pioneer', function(req, res) {
  Genconfpioneer.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/pioneer', function(req, res) {
  Genconfpioneer.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/prayer', function(req, res) {
  Genconfprayer.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/prayer', function(req, res) {
  Genconfprayer.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/premortal', function(req, res) {
  Genconfpremortal.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/premortal', function(req, res) {
  Genconfpremortal.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/priesthood', function(req, res) {
  Genconfpriesthood.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/priesthood', function(req, res) {
  Genconfpriesthood.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/prophets', function(req, res) {
  Genconfprophets.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/prophets', function(req, res) {
  Genconfprophets.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/repentence', function(req, res) {
  Genconfrepentence.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/repentence', function(req, res) {
  Genconfrepentence.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/resurrection', function(req, res) {
  Genconfresurrection.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/resurrection', function(req, res) {
  Genconfresurrection.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/sacrament', function(req, res) {
  Genconfsacrament.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/sacrament', function(req, res) {
  Genconfsacrament.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/scriptures', function(req, res) {
  Genconfscriptures.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/scriptures', function(req, res) {
  Genconfscriptures.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/secondcoming', function(req, res) {
  Genconfsecondcoming.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/secondcoming', function(req, res) {
  Genconfsecondcoming.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/selfreliance', function(req, res) {
  Genconfselfreliance.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/selfreliance', function(req, res) {
  Genconfselfreliance.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/service', function(req, res) {
  Genconfservice.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/service', function(req, res) {
  Genconfservice.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/temple', function(req, res) {
  Genconftemple.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/temple', function(req, res) {
  Genconftemple.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/testimony', function(req, res) {
  Genconftestimony.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/testimony', function(req, res) {
  Genconftestimony.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/thefall', function(req, res) {
  Genconfthefall.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/thefall', function(req, res) {
  Genconfthefall.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/tithing', function(req, res) {
  Genconftithing.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/tithing', function(req, res) {
  Genconftithing.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/trials', function(req, res) {
  Genconftrials.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/trials', function(req, res) {
  Genconftrials.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/women', function(req, res) {
  Genconfwomen.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/women', function(req, res) {
  Genconfwomen.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/genconf/wordofwisdom', function(req, res) {
  Genconfwordofwisdom.find({}).then(genconfs => {
  res.json(genconfs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/genconf/wordofwisdom', function(req, res) {
  Genconfwordofwisdom.create({
    talk_title: req.body.talk_title,
    year: req.body.year,
    author: req.body.author,
    position: req.body.position,
    image_url: req.body.image_url,
    talk_blurb: req.body.talk_blurb,
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
    paragraph5: req.body.paragraph5,
    paragraph6: req.body.paragraph6,
    paragraph7: req.body.paragraph7,
    paragraph8: req.body.paragraph8,
    paragraph9: req.body.paragraph9,
    paragraph10: req.body.paragraph10,
  }).then(genconfs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/fellowship', function(req, res) {
  Videofellowship.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/fellowship', function(req, res) {
  Videofellowship.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/patience', function(req, res) {
  Videopatience.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/patience', function(req, res) {
  Videopatience.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/gatheringofisrael', function(req, res) {
  Videogatheringofisrael.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/gatheringofisrael', function(req, res) {
  Videogatheringofisrael.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/sacrifice', function(req, res) {
  Videosacrifice.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/sacrifice', function(req, res) {
  Videosacrifice.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/sabbathday', function(req, res) {
  Videosabbathday.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/sabbathday', function(req, res) {
  Videosabbathday.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/lordscovenantpeople', function(req, res) {
  Videolordscovenantpeople.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/lordscovenantpeople', function(req, res) {
  Videolordscovenantpeople.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/talents', function(req, res) {
  Videotalents.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/talents', function(req, res) {
  Videotalents.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/finaljudgement', function(req, res) {
  Videofinaljudgement.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/finaljudgement', function(req, res) {
  Videofinaljudgement.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/exaltation', function(req, res) {
  Videoexaltation.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/exaltation', function(req, res) {
  Videoexaltation.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/agency', function(req, res) {
  Videoagency.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/agency', function(req, res) {
  Videoagency.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/gratitude', function(req, res) {
  Videogratitude.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/gratitude', function(req, res) {
  Videogratitude.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/angels', function(req, res) {
  Videoangels.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/angels', function(req, res) {
  Videoangels.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/apostasy', function(req, res) {
  Videoapostasy.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/apostasy', function(req, res) {
  Videoapostasy.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/apostle', function(req, res) {
  Videoapostle.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/apostle', function(req, res) {
  Videoapostle.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/atonement', function(req, res) {
  Videoatonement.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/atonement', function(req, res) {
  Videoatonement.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/baptism', function(req, res) {
  Videobaptism.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/baptism', function(req, res) {
  Videobaptism.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/bookofmormon', function(req, res) {
  Videobookofmormon.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/bookofmormon', function(req, res) {
  Videobookofmormon.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/charity', function(req, res) {
  Videocharity.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/charity', function(req, res) {
  Videocharity.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/chastity', function(req, res) {
  Videochastity.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/chastity', function(req, res) {
  Videochastity.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/children', function(req, res) {
  Videochildren.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/children', function(req, res) {
  Videochildren.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/church', function(req, res) {
  Videochurch.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/church', function(req, res) {
  Videochurch.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/covenants', function(req, res) {
  Videocovenants.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/covenants', function(req, res) {
  Videocovenants.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/creation', function(req, res) {
  Videocreation.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/creation', function(req, res) {
  Videocreation.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/death', function(req, res) {
  Videodeath.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/death', function(req, res) {
  Videodeath.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/faith', function(req, res) {
  Videofaith.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/faith', function(req, res) {
  Videofaith.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/family', function(req, res) {
  Videofamily.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/family', function(req, res) {
  Videofamily.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/fasting', function(req, res) {
  Videofasting.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/fasting', function(req, res) {
  Videofasting.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/genealogy', function(req, res) {
  Videogenealogy.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/genealogy', function(req, res) {
  Videogenealogy.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/giftsofthespirit', function(req, res) {
  Videogiftsofthespirit.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/giftsofthespirit', function(req, res) {
  Videogiftsofthespirit.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/god', function(req, res) {
  Videogod.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/god', function(req, res) {
  Videogod.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/godhead', function(req, res) {
  Videogodhead.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/godhead', function(req, res) {
  Videogodhead.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/gospel', function(req, res) {
  Videogospel.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/gospel', function(req, res) {
  Videogospel.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/happiness', function(req, res) {
  Videohappiness.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/happiness', function(req, res) {
  Videohappiness.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/heaven', function(req, res) {
  Videoheaven.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/heaven', function(req, res) {
  Videoheaven.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/hell', function(req, res) {
  Videohell.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/hell', function(req, res) {
  Videohell.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/holyghost', function(req, res) {
  Videoholyghost.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/holyghost', function(req, res) {
  Videoholyghost.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/honesty', function(req, res) {
  Videohonesty.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/honesty', function(req, res) {
  Videohonesty.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/humility', function(req, res) {
  Videohumility.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/humility', function(req, res) {
  Videohumility.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/jesus', function(req, res) {
  Videojesus.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/jesus', function(req, res) {
  Videojesus.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/marriage', function(req, res) {
  Videomarriage.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/marriage', function(req, res) {
  Videomarriage.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/miracles', function(req, res) {
  Videomiracles.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/miracles', function(req, res) {
  Videomiracles.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/missionary', function(req, res) {
  Videomissionary.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/missionary', function(req, res) {
  Videomissionary.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/nativity', function(req, res) {
  Videonativity.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/nativity', function(req, res) {
  Videonativity.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/obedience', function(req, res) {
  Videoobedience.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/obedience', function(req, res) {
  Videoobedience.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/pioneer', function(req, res) {
  Videopioneer.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/pioneer', function(req, res) {
  Videopioneer.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/prayer', function(req, res) {
  Videoprayer.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/prayer', function(req, res) {
  Videoprayer.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/premortal', function(req, res) {
  Videopremortal.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/premortal', function(req, res) {
  Videopremortal.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/priesthood', function(req, res) {
  Videopriesthood.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/priesthood', function(req, res) {
  Videopriesthood.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/prophets', function(req, res) {
  Videoprophets.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/prophets', function(req, res) {
  Videoprophets.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/repentence', function(req, res) {
  Videorepentence.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/repentence', function(req, res) {
  Videorepentence.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/resurrection', function(req, res) {
  Videoresurrection.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/resurrection', function(req, res) {
  Videoresurrection.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/sacrament', function(req, res) {
  Videosacrament.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/sacrament', function(req, res) {
  Videosacrament.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/scriptures', function(req, res) {
  Videoscriptures.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/scriptures', function(req, res) {
  Videoscriptures.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/secondcoming', function(req, res) {
  Videosecondcoming.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/secondcoming', function(req, res) {
  Videosecondcoming.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/selfreliance', function(req, res) {
  Videoselfreliance.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/selfreliance', function(req, res) {
  Videoselfreliance.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/service', function(req, res) {
  Videoservice.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/service', function(req, res) {
  Videoservice.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/temple', function(req, res) {
  Videotemple.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/temple', function(req, res) {
  Videotemple.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/testimony', function(req, res) {
  Videotestimony.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/testimony', function(req, res) {
  Videotestimony.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/thefall', function(req, res) {
  Videothefall.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/thefall', function(req, res) {
  Videothefall.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/tithing', function(req, res) {
  Videotithing.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/tithing', function(req, res) {
  Videotithing.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/trials', function(req, res) {
  Videotrials.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/trials', function(req, res) {
  Videotrials.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/women', function(req, res) {
  Videowomen.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/women', function(req, res) {
  Videowomen.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/video/wordofwisdom', function(req, res) {
  Videowordofwisdom.find({}).then(videos => {
  res.json(videos)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/video/wordofwisdom', function(req, res) {
  Videowordofwisdom.create({
    video_url: req.body.video_url,
  }).then(videos => {
  res.redirect('/game3')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/fellowship', function(req, res) {
  Deffellowship.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/fellowship', function(req, res) {
  Deffellowship.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/agency', function(req, res) {
  Defagency.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/agency', function(req, res) {
  Defagency.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/gratitude', function(req, res) {
  Defgratitude.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/gratitude', function(req, res) {
  Defgratitude.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//


//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/angels', function(req, res) {
  Defangels.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/angels', function(req, res) {
  Defangels.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/apostasy', function(req, res) {
  Defapostasy.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/apostasy', function(req, res) {
  Defapostasy.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/apostle', function(req, res) {
  Defapostle.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/apostle', function(req, res) {
  Defapostle.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/atonement', function(req, res) {
  Defatonement.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/atonement', function(req, res) {
  Defatonement.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/baptism', function(req, res) {
  Defbaptism.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/baptism', function(req, res) {
  Defbaptism.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/bookofmormon', function(req, res) {
  Defbookofmormon.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/bookofmormon', function(req, res) {
  Defbookofmormon.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/charity', function(req, res) {
  Defcharity.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/charity', function(req, res) {
  Defcharity.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/chastity', function(req, res) {
  Defchastity.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/chastity', function(req, res) {
  Defchastity.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/children', function(req, res) {
  Defchildren.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/children', function(req, res) {
  Defchildren.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/church', function(req, res) {
  Defchurch.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/church', function(req, res) {
  Defchurch.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/covenants', function(req, res) {
  Defcovenants.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/covenants', function(req, res) {
  Defcovenants.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/creation', function(req, res) {
  Defcreation.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/creation', function(req, res) {
  Defcreation.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/death', function(req, res) {
  Defdeath.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/death', function(req, res) {
  Defdeath.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/faith', function(req, res) {
  Deffaith.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/faith', function(req, res) {
  Deffaith.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/family', function(req, res) {
  Deffamily.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/family', function(req, res) {
  Deffamily.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/fasting', function(req, res) {
  Deffasting.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/fasting', function(req, res) {
  Deffasting.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/genealogy', function(req, res) {
  Defgenealogy.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/genealogy', function(req, res) {
  Defgenealogy.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/giftsofthespirit', function(req, res) {
  Defgiftsofthespirit.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/giftsofthespirit', function(req, res) {
  Defgiftsofthespirit.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/god', function(req, res) {
  Defgod.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/god', function(req, res) {
  Defgod.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/godhead', function(req, res) {
  Defgodhead.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/godhead', function(req, res) {
  Defgodhead.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/gospel', function(req, res) {
  Defgospel.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/gospel', function(req, res) {
  Defgospel.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/happiness', function(req, res) {
  Defhappiness.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/happiness', function(req, res) {
  Defhappiness.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/heaven', function(req, res) {
  Defheaven.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/heaven', function(req, res) {
  Defheaven.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/hell', function(req, res) {
  Defhell.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/hell', function(req, res) {
  Defhell.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/holyghost', function(req, res) {
  Defholyghost.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/holyghost', function(req, res) {
  Defholyghost.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/honesty', function(req, res) {
  Defhonesty.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/honesty', function(req, res) {
  Defhonesty.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/humility', function(req, res) {
  Defhumility.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/humility', function(req, res) {
  Defhumility.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/jesus', function(req, res) {
  Defjesus.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/jesus', function(req, res) {
  Defjesus.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/marriage', function(req, res) {
  Defmarriage.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/marriage', function(req, res) {
  Defmarriage.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/miracles', function(req, res) {
  Defmiracles.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/miracles', function(req, res) {
  Defmiracles.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/missionary', function(req, res) {
  Defmissionary.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/missionary', function(req, res) {
  Defmissionary.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/nativity', function(req, res) {
  Defnativity.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/nativity', function(req, res) {
  Defnativity.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/obedience', function(req, res) {
  Defobedience.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/obedience', function(req, res) {
  Defobedience.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/pioneer', function(req, res) {
  Defpioneer.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/pioneer', function(req, res) {
  Defpioneer.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/prayer', function(req, res) {
  Defprayer.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/prayer', function(req, res) {
  Defprayer.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/premortal', function(req, res) {
  Defpremortal.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/premortal', function(req, res) {
  Defpremortal.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/priesthood', function(req, res) {
  Defpriesthood.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/priesthood', function(req, res) {
  Defpriesthood.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/prophets', function(req, res) {
  Defprophets.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/prophets', function(req, res) {
  Defprophets.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/repentence', function(req, res) {
  Defrepentence.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/repentence', function(req, res) {
  Defrepentence.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/resurrection', function(req, res) {
  Defresurrection.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/resurrection', function(req, res) {
  Defresurrection.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/sacrament', function(req, res) {
  Defsacrament.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/sacrament', function(req, res) {
  Defsacrament.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/scriptures', function(req, res) {
  Defscriptures.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/scriptures', function(req, res) {
  Defscriptures.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/secondcoming', function(req, res) {
  Defsecondcoming.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/secondcoming', function(req, res) {
  Defsecondcoming.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/selfreliance', function(req, res) {
  Defselfreliance.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/selfreliance', function(req, res) {
  Defselfreliance.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/service', function(req, res) {
  Defservice.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/service', function(req, res) {
  Defservice.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/temple', function(req, res) {
  Deftemple.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/temple', function(req, res) {
  Deftemple.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/testimony', function(req, res) {
  Deftestimony.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/testimony', function(req, res) {
  Deftestimony.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/thefall', function(req, res) {
  Defthefall.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/thefall', function(req, res) {
  Defthefall.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/tithing', function(req, res) {
  Deftithing.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/tithing', function(req, res) {
  Deftithing.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/trials', function(req, res) {
  Deftrials.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/trials', function(req, res) {
  Deftrials.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/women', function(req, res) {
  Defwomen.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/women', function(req, res) {
  Defwomen.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/wordofwisdom', function(req, res) {
  Defwordofwisdom.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/wordofwisdom', function(req, res) {
  Defwordofwisdom.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/wordofwisdom', function(req, res) {
  Defwordofwisdom.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/wordofwisdom', function(req, res) {
  Defwordofwisdom.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/talents', function(req, res) {
  Deftalents.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/talents', function(req, res) {
  Deftalents.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/exaltation', function(req, res) {
  Defexaltation.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/exaltation', function(req, res) {
  Defexaltation.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/finaljudgement', function(req, res) {
  Deffinaljudgement.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/finaljudgement', function(req, res) {
  Deffinaljudgement.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/sacrifice', function(req, res) {
  Defsacrifice.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/sacrifice', function(req, res) {
  Defsacrifice.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/sabbathday', function(req, res) {
  Defsabbathday.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/sabbathday', function(req, res) {
  Defsabbathday.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/lordscovenantpeople', function(req, res) {
  Deflordscovenantpeople.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/lordscovenantpeople', function(req, res) {
  Deflordscovenantpeople.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/gatheringofisrael', function(req, res) {
  Defgatheringofisrael.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/gatheringofisrael', function(req, res) {
  Defgatheringofisrael.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/def/patience', function(req, res) {
  Defpatience.find({}).then(defs => {
  res.json(defs)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/def/patience', function(req, res) {
  Defpatience.create({
    modern_def: req.body.modern_def,
    encyclo: req.body.encyclo,
  }).then(defs => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/fellowship', function(req, res) {
  Byufellowship.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/fellowship', function(req, res) {
  Byufellowship.create({ talk_name: req.body.talk_name,
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/agency', function(req, res) {
  Byuagency.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/agency', function(req, res) {
  Byuagency.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/gratitude', function(req, res) {
  Byugratitude.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/gratitude', function(req, res) {
  Byugratitude.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//


//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/angels', function(req, res) {
  Byuangels.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/angels', function(req, res) {
  Byuangels.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/apostasy', function(req, res) {
  Byuapostasy.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/apostasy', function(req, res) {
  Byuapostasy.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/apostle', function(req, res) {
  Byuapostle.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/apostle', function(req, res) {
  Byuapostle.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/atonement', function(req, res) {
  Byuatonement.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/atonement', function(req, res) {
  Byuatonement.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/baptism', function(req, res) {
  Byubaptism.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/baptism', function(req, res) {
  Byubaptism.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/bookofmormon', function(req, res) {
  Byubookofmormon.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/bookofmormon', function(req, res) {
  Byubookofmormon.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/charity', function(req, res) {
  Byucharity.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/charity', function(req, res) {
  Byucharity.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/chastity', function(req, res) {
  Byuchastity.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/chastity', function(req, res) {
  Byuchastity.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/children', function(req, res) {
  Byuchildren.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/children', function(req, res) {
  Byuchildren.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/church', function(req, res) {
  Byuchurch.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/church', function(req, res) {
  Byuchurch.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/covenants', function(req, res) {
  Byucovenants.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/covenants', function(req, res) {
  Byucovenants.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/creation', function(req, res) {
  Byucreation.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/creation', function(req, res) {
  Byucreation.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/death', function(req, res) {
  Byudeath.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/death', function(req, res) {
  Byudeath.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/faith', function(req, res) {
  Byufaith.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/faith', function(req, res) {
  Byufaith.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/family', function(req, res) {
  Byufamily.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/family', function(req, res) {
  Byufamily.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/fasting', function(req, res) {
  Byufasting.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/fasting', function(req, res) {
  Byufasting.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/genealogy', function(req, res) {
  Byugenealogy.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/genealogy', function(req, res) {
  Byugenealogy.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/giftsofthespirit', function(req, res) {
  Byugiftsofthespirit.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/giftsofthespirit', function(req, res) {
  Byugiftsofthespirit.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/god', function(req, res) {
  Byugod.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/god', function(req, res) {
  Byugod.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/godhead', function(req, res) {
  Byugodhead.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/godhead', function(req, res) {
  Byugodhead.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/gospel', function(req, res) {
  Byugospel.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/gospel', function(req, res) {
  Byugospel.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/happiness', function(req, res) {
  Byuhappiness.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/happiness', function(req, res) {
  Byuhappiness.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/heaven', function(req, res) {
  Byuheaven.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/heaven', function(req, res) {
  Byuheaven.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/hell', function(req, res) {
  Byuhell.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/hell', function(req, res) {
  Byuhell.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/holyghost', function(req, res) {
  Byuholyghost.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/holyghost', function(req, res) {
  Byuholyghost.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/honesty', function(req, res) {
  Byuhonesty.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/honesty', function(req, res) {
  Byuhonesty.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/humility', function(req, res) {
  Byuhumility.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/humility', function(req, res) {
  Byuhumility.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/jesus', function(req, res) {
  Byujesus.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/jesus', function(req, res) {
  Byujesus.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/marriage', function(req, res) {
  Byumarriage.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/marriage', function(req, res) {
  Byumarriage.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/miracles', function(req, res) {
  Byumiracles.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/miracles', function(req, res) {
  Byumiracles.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/missionary', function(req, res) {
  Byumissionary.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/missionary', function(req, res) {
  Byumissionary.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/nativity', function(req, res) {
  Byunativity.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/nativity', function(req, res) {
  Byunativity.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/obedience', function(req, res) {
  Byuobedience.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/obedience', function(req, res) {
  Byuobedience.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/pioneer', function(req, res) {
  Byupioneer.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/pioneer', function(req, res) {
  Byupioneer.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/prayer', function(req, res) {
  Byuprayer.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/prayer', function(req, res) {
  Byuprayer.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/premortal', function(req, res) {
  Byupremortal.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/premortal', function(req, res) {
  Byupremortal.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/priesthood', function(req, res) {
  Byupriesthood.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/priesthood', function(req, res) {
  Byupriesthood.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/prophets', function(req, res) {
  Byuprophets.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/prophets', function(req, res) {
  Byuprophets.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/repentence', function(req, res) {
  Byurepentence.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/repentence', function(req, res) {
  Byurepentence.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/resurrection', function(req, res) {
  Byuresurrection.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/resurrection', function(req, res) {
  Byuresurrection.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/sacrament', function(req, res) {
  Byusacrament.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/sacrament', function(req, res) {
  Byusacrament.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/scriptures', function(req, res) {
  Byuscriptures.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/scriptures', function(req, res) {
  Byuscriptures.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/secondcoming', function(req, res) {
  Byusecondcoming.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/secondcoming', function(req, res) {
  Byusecondcoming.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/selfreliance', function(req, res) {
  Byuselfreliance.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/selfreliance', function(req, res) {
  Byuselfreliance.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/service', function(req, res) {
  Byuservice.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/service', function(req, res) {
  Byuservice.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/temple', function(req, res) {
  Byutemple.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/temple', function(req, res) {
  Byutemple.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/testimony', function(req, res) {
  Byutestimony.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/testimony', function(req, res) {
  Byutestimony.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/thefall', function(req, res) {
  Byuthefall.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/thefall', function(req, res) {
  Byuthefall.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/tithing', function(req, res) {
  Byutithing.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/tithing', function(req, res) {
  Byutithing.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/trials', function(req, res) {
  Byutrials.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/trials', function(req, res) {
  Byutrials.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/women', function(req, res) {
  Byuwomen.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/women', function(req, res) {
  Byuwomen.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/wordofwisdom', function(req, res) {
  Byuwordofwisdom.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/wordofwisdom', function(req, res) {
  Byuwordofwisdom.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/wordofwisdom', function(req, res) {
  Byuwordofwisdom.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/wordofwisdom', function(req, res) {
  Byuwordofwisdom.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/talents', function(req, res) {
  Byutalents.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/talents', function(req, res) {
  Byutalents.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/exaltation', function(req, res) {
  Byuexaltation.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/exaltation', function(req, res) {
  Byuexaltation.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/finaljudgement', function(req, res) {
  Byufinaljudgement.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/finaljudgement', function(req, res) {
  Byufinaljudgement.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/sacrifice', function(req, res) {
  Byusacrifice.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/sacrifice', function(req, res) {
  Byusacrifice.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/sabbathday', function(req, res) {
  Byusabbathday.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/sabbathday', function(req, res) {
  Byusabbathday.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/lordscovenantpeople', function(req, res) {
  Byulordscovenantpeople.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/lordscovenantpeople', function(req, res) {
  Byulordscovenantpeople.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/gatheringofisrael', function(req, res) {
  Byugatheringofisrael.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/gatheringofisrael', function(req, res) {
  Byugatheringofisrael.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
});
});

//==========================//

//====GET IMAGE UPLOAD FOR API===//

app.get('/api/byu/patience', function(req, res) {
  Byupatience.find({}).then(Byus => {
  res.json(Byus)
});
});

//==========================//

//====POST SCRIPTURE API===//

app.post('/api/byu/patience', function(req, res) {
  Byupatience.create({
talk_name: req.body.talk_name,
talk_author: req.body.talk_author,
talk_author_title: req.body.talk_author_title,
talk_date: req.body.talk_date,
talk_text: req.body.talk_text,
  }).then(Byus => {
  res.redirect('/game2')
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
