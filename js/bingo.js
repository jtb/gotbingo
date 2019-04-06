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
  "characters/The Knight King.jpg",
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
function shuffle(array) {
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

// Shuffle all characters.
tiles = shuffle(icons);
var names = [];
for (let i = 0; i < tiles.length; i++) {
  // Each tiles file is of the format <path>/<name_of_character>.<file_type>.
  // Here we extract the filename.
  names.push(tiles[i].split("/")[1].split(".")[0]);
}

// Use "GoT.png" for the center of the bingo tile (index = 12)
tiles[12] = "Got.png";
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
