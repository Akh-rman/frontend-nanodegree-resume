// $("#main").append("Roman Akhmetshin");
/*
var email = "roman@udacity.com";
var newEmail = email.replace("udacity", "gmail");

console.log(email);
console.log(newEmail);

var awesomeThoughts = "My name is Roman and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

console.log(awesomeThoughts);
console.log(funThoughts);

$("#main").append(funThoughts);
*/
/*
var name = "Akhmetshin Roman";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);*/

var bio = {
    "name": "Roman Akhmeshin",
    "role": "Web Developer",
    "contacts": {
        "email": "akh-rman@rambler.ru",
        "mobile": "+79137771955",
        "github": "Akh-rman"
    },
    "welcomeMessage": "Ldfhdjfhjfd ndbfjbdfu",
    "skills": [
        "HTML", "CSS", "JavaScript", "AngularJS", "git", "gulp"
    ],
    "bioImage": "images/photo.png"
};

var work = {};
work.position = "Junior Front-End developer";
work.employer = "Tomsk";
work.years = "0.3";

var education = {};
education["name"] ="Tomsk Polytechnic University";
education["years"] = "2012-2018";
education["city"] = "Tomsk";

//$("#main").append(bio.name);
$("#main").append(work["position"]);
$("#main").append(education.name);