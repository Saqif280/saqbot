// VARIABLES

// vulgar words array
var vulgarities = ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx"];

// translation list
var translationsList = {
	vulgar: vulgarities,
	greeting: ["hello","whats up", "who are you", "whatsup","hey","heyy"],
	wellness: ["how are you","whats going on", "feel"],
	aboutBot: ["about yourself","do you do"],
	aboutBot2: [],
	about: ["who is","about saq","about him", "what does saqif", "does he do", "does saqif do"],
	name: ["name"],
	contact: ["contact","mail","phone","mobile","call","text","number"],
	resume: ["resume","cv","experience","course","class","skills","can saqif","can he","saqifs abilities","his abilities","projects"],
	education: ["education","school","college","study","major"],
	programming: ["programming","coding","web development","engineering"],
	interests: ["interests","interest","hobbies","fun","likes to do","passions","personality"],
	location: ["where","locat","find","live"],
	color: ["color"],
	help: ["help", "save me", "dying", "support", "want to die"],
	more: ["more"],
	age: ["old is","born"],
	transcript: ["transcript"]
}

// populate translations
var translations = {}
for(var key in translationsList){
	keys = translationsList[key];
	keys.forEach(function(keyNew) {
		translations[keyNew] = key;
	});
}

// responses
var keywordDictionary = {
	greeting: "Hi! I am Saqbot, created to represent Saqif on the internet. Ask me anything you'd like to know about Saqif and I will do my best to assist you.",
	resume: "Here is a link to Saqif's <a href='resume.pdf' target='_blank'>resumé</a>. You can find information on his experiences, skills, and even coursework here.",
	transcript: "Please contact Saqif to request to view his transcript.",
	education: "Saqif studies Information Science at Cornell University (Class of 2019). Before this, he went to Jamesville Dewitt High School which is also in Upstate New York. Contrary to his movement, he would like to get out of this area.",
	programming: "Saqif began programming in 2012 and web development in 2014. He has worked with many technologies since and devotes time to projects and explorations. You can read more about this on his <a href='resume.pdf' target='_blank'>resumé</a>.",
	interests: "Saqif loves psychological thrillers, freestyle rapping, and performing magic. But what's most important to him is the people he spends his time with.",
	color: "Saqif's favorite color is <span class='fav_color'>periwinkle</span>.",
	wellness: "I am doing well! This browser is a nice place for me to talk to you ...",
	about: "Saqif is a bubbly, excited individual with professional interests in programming and teaching. There is quiet a lot to him and I can put him in contact with you if you'd like to learn more.",
	aboutBot: "I am a program Saqif made to make learning about him online more personable and fun! I hope you're enjoying talking to me.",
	aboutBot2: "Lets not talk about me, lets talk about Saqif.",
	name: "Saqif's full name is Saqif Badruddin. This is pronounced sah-kief bad-roo-din. My name is just Saqbot.",
	contact: "Saqif can be reached by email at ssb229@cornell.edu or by phone at +1 315-744-6373.",
	help: "If you need help, I would suggest contacting your local police. If it's personal, contact a friend.",
	location: "Saqif lives in Syracuse NY, but goes to school in Ithaca NY.",
	vulgar: "I have detected some vulgarity. Please do not talk to me like this. My master said I am no less human than you.",
	more: "If you want to know more, you can contact Saqif or view his <a href='resume.pdf' target='_blank'>resumé</a>.",
	age: "Saqif was born in 1997. That makes him 20 years old."
}

// talk animation
var talking = false;

// DOCUMENT LOAD
$(document).ready(function() {
	// auto select input
	var message_input = $('.message_input');
	message_input.focus();
	message_input.select();
	// enter button click listener
	$('.message_submit').click(function(){
		enter();
	});
	// sound toggle
	$('.toggle_voice').click(function(){
		if(voice){
			voice = false;
			talking = false;
			$('.voice_icon').removeClass('glyphicon-volume-up');
			$('.voice_icon').addClass('glyphicon-volume-off');
			responsiveVoice.cancel();
		}
		else{
			voice = true;
			$('.voice_icon').removeClass('glyphicon-volume-off');
			$('.voice_icon').addClass('glyphicon-volume-up');
		}
	});
	
	animateSpeech();
	// enter and mic listener
	$(document).keypress(function(e) {
	  if(e.which == 13) {
	  	enter();
	  }
	  var key;
	  var isShift;
	  if (window.event) {
	    key = window.event.keyCode;
	    isShift = !!window.event.shiftKey; // typecast to boolean
	  } else {
	    key = e.which;
	    isShift = !!e.shiftKey;
	  }
	  if ( isShift ) {
	    switch (key) {
	      case 16: // ignore shift key
	        break;
	      default:
	        if(key==77){
	        	startRecognition();
	        }
	        break;
	    }
	  }
	});
	$(document).keyup(function(e) {
	  var key;
	  var isShift;
	  if (window.event) {
	    key = window.event.keyCode;
	    isShift = !!window.event.shiftKey; // typecast to boolean
	  } else {
	    key = e.which;
	    isShift = !!e.shiftKey;
	  }
	  if ( isShift ) {
	    switch (key) {
	      case 16: // ignore shift key
	        break;
	      default:
	        if(key==77){
	        	stopRecognition();
	        	setTimeout(enter(),1000);
	        }
	        break;
	    }
	  }
	});
});

// FUNCTIONS
var voice = true;

function enter(){
	// get input
	var input = $('.message_input').val();
	if(input != ""){
		$('.conversation').prepend('<div class="card animated bounce"><p class="user">You:<p><h3 class="user">'+input+'</h3></div>');
		// respond
		respond(input);
		// clear input
		clearInput();
	}
}

function clearInput(){
	$('.message_input').val('');
}

function respond(input){
	// remove special chars
	var input = input.replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g, '').toLowerCase();
	// make words array
	var words = input.split(" ");
	// set defaults
	var retStrDef = "Unfortunately, I am not programmed to handle this, or I do not understand what you meant. Can you rephrase?";
	var retStr = retStrDef;
	// match with dict
	words.forEach(function(word) {
		if(word in translations){
			retStr = keywordDictionary[translations[word]];
		}
	});
	if (retStr == retStrDef){
		for(var key in translations){
			if(input.indexOf(key)>-1){
				retStr = keywordDictionary[translations[key]];
			}
		}
	}
	// edge cases
	var greeting = ["hello","whats up", "who are you", "whatsup", "hi","hey","heyy","yo"];
	var thanks = ["thanks","thank you"];
	var affirmitive = ["cool","dope","awesome","great","okay","sweet","dank","ok"]
	var amusement = ["lol","lmao","lmfao","ha","hah","haha","hahah","hahaha","hahahah","hahahaha","hahahahah"];
	var bye = ["goodbye","good bye","bye"]
	if(input == ""){
		retStr = "Don't be shy, I can't judge, I'm just a program.";
	}
	else if(greeting.indexOf(input)>-1){
		retStr = "Hi! I am Saqbot, created to represent Saqif on the internet. Ask me anything you'd like to know about Saqif and I will do my best to assist you.";
	}
	else if(thanks.indexOf(input)>-1){
		retStr = "No problem, just doing my job.";
	}
	else if(affirmitive.indexOf(input)>-1){
		retStr = "Let me know if you would like to know anything else.";
	}
	else if(amusement.indexOf(input)>-1){
		retStr = "Saqif loves to laugh as well. You two would get along.";
	}
	else if(bye.indexOf(input)>-1){
		retStr = "You can end this conversation at any time! But I will always have the last word.";
	}
	// add response to messages
	var prependStr = '<div class="card animated bounceInDown"><p>Saqbot:</p><h3>'+retStr+'</h3></div>';
	$('.conversation').prepend(prependStr);
	if(voice){
		responsiveVoice.speak(retStr.replace(/<\/?[^>]+(>|$)/g, ""),
			'UK English Male', {rate: 1.2, onstart: function(){ talking = true; }, onend: function(){ talking = false; } });		
	}
}

// voice recognition settings
var settings = {
  continuous:true, // Don't stop never because i have https connection
  onResult:function(text){
    $('.message_input').val(text);
  },
  onStart:function(){
    // console.log("Dictation started by the user");
  },
  onEnd:function(){
    // console.log("Dictation stopped by the user");
  }
};
var UserDictation = artyom.newDictation(settings);
function startRecognition(){
  UserDictation.start();
}
function stopRecognition(){
  UserDictation.stop();
}

// dictation animation
var saqbot_vers = ['saqbot_0','saqbot_1','saqbot_2','saqbot_3','saqbot_4','saqbot_5'];
function animateSpeech(){
	setInterval(function(){
		var start = 'img/';
		var ending = '.png';
		if(talking){
			var rand = Math.floor(Math.random()*(saqbot_vers.length-1));
			$('.saqbot_head').attr('src',start+saqbot_vers[rand]+ending);
			$('.saqbot_head').attr('srcset',start+saqbot_vers[rand]+ending);
			$('.saqbot_head').attr('data-srcset',start+saqbot_vers[rand]+ending);
		}
		else{
			$('.saqbot_head').attr('src',start+saqbot_vers[0]+ending);
			$('.saqbot_head').attr('srcset',start+saqbot_vers[0]+ending);
			$('.saqbot_head').attr('data-srcset',start+saqbot_vers[0]+ending);
		}
	},70);
}

