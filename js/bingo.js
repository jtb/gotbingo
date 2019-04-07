// See ../util/list_characters.py for helper method in maintaining the list if files are modified.
var icons = [
  "characters/Beric Dondarrion.png",
  "characters/Daario Naharis.jpeg",
  "characters/Gilly.jpg",
  "characters/Sansa Stark.jpg",
  "characters/The Mountain.png",
  "characters/Eddison Tollett.jpg",
  "characters/Daenerys Targaryen.jpg",
  "characters/Arya Stark.jpg",
  "characters/Yara Greyjoy.jpg",
  "characters/The Night King.jpg",
  "characters/Davos Seaworth.jpg",
  "characters/Lyanna Mormont.png",
  "characters/Missandei.png",
  "characters/Jaqen Hghar.jpg",
  "characters/Theon Greyjoy.jpg",
  "characters/Lord Varys.jpeg",
  "characters/Samwell Tarly.jpg",
  "characters/Jon Snow.jpg",
  "characters/Tormund Giantsbane.jpg",
  "characters/Qyburn.jpg",
  "characters/Brienne Tarth.jpg",
  "characters/Red Women.jpeg",
  "characters/Bran Stark.png",
  "characters/The Hound.jpg",
  "characters/Bronn.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Cersei Lannister.jpg",
  "characters/Jaime Lannister.jpeg",
  "characters/Jorah Mormont.jpg",
  "characters/Euron Greyjoy.png",
  "characters/Gendry.jpg",
  "characters/Podrick Payne.jpg",
  "characters/Grey Worm.jpg",
]

// Knuth shuffle: https://github.com/coolaj86/knuth-shuffle
function shuffle(array, seed) {
  Math.seedrandom(''+seed);
  var curr = array.length - 1;

  // Starting from the end of the array.
  // While there remain elements to shuffle...
  while (0 !== curr) {
    // Pick a remaining element...
    let rand = Math.floor(Math.random() * curr);
     // And swap it with the current element.
    let tmp = array[curr];
    array[curr] = array[rand];
    array[rand] = tmp;

    curr -= 1;
  }

  return array;
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getJsonFromUrl(url) {
    if(!url) url = location.search;
    var query = url.substr(1);
    var result = {};
    query.split("&").forEach(function(part) {
	    var item = part.split("=");
	    result[item[0]] = decodeURIComponent(item[1]);
	});
    return result;
}

// Shuffle all characters.

// seed = getRandomArbitrary(100000, 999999);
params = getJsonFromUrl();
var seed = params["seed"];
if (seed === undefined ) {
  seed = getRandomArbitrary(100000, 999999);
}

var mydiv = document.getElementById("link");
var aTag = document.createElement('a');
var url = window.location.href.split('?')[0] + '?seed=' + seed;
aTag.setAttribute('href', url);
//aTag.innerHTML = "Get link for this Bingo Card";
aTag.innerHTML = url;
mydiv.appendChild(aTag);

//window.history.pushState(null, null, '?seed=' + seed);
tiles = shuffle(icons, seed);
var names = [];
for (let i = 0; i < tiles.length; i++) {
  // Each tiles file is of the format <path>/<name_of_character>.<file_type>.
  // Here we extract the filename.
  names.push(tiles[i].split("/")[1].split(".")[0]);
}

// Use "GoT.png" for the center of the bingo tile (index = 12)
tiles[12] = "GoT.png";
names[12] = "";

for (let i = 0; i < 25; i++) {
  var img = document.createElement("img");
  img.className = 'tile';
  img.src = tiles[i];
  var src = document.getElementById("img" + (i+1));
  src.appendChild(img);

  var txtDiv = document.createElement("div");
  var txt = document.createTextNode(names[i]);
  txtDiv.appendChild(txt);
  txtDiv.className = 'txt';
  src.appendChild(txtDiv);
}
