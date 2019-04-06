// See ../util/list_characters.py for helper method in maintaining the list if files are modified.
var icons = [
  "characters/Beric Dondarrion.png",
  "characters/Daario Naharis.jpeg",
  "characters/Gilly.jpg",
  "characters/Sansa Stark.jpg",
  "characters/Eddison Tollett.jpg",
  "characters/Gregor Clegane (The Mountain).png",
  "characters/Daenerys Targaryen.jpg",
  "characters/Arya Stark.jpg",
  "characters/Yara Greyjoy.jpg",
  "characters/The Knight King.jpg",
  "characters/Davos Seaworth.jpg",
  "characters/Lyanna Mormont.png",
  "characters/Missandei.png",
  "characters/Theon Greyjoy.jpg",
  "characters/Lord Varys.jpeg",
  "characters/Samwell Tarly.jpg",
  "characters/Jon Snow.jpg",
  "characters/Melisandre (Red Women).jpeg",
  "characters/Sandor Clegane (The Hound).jpg",
  "characters/Tormund Giantsbane.jpg",
  "characters/Qyburn.jpg",
  "characters/Brienne Tarth.jpg",
  "characters/Bran Stark.png",
  "characters/Bronn.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Cersei Lannister.jpg",
  "characters/Jaime Lannister.jpeg",
  "characters/Jorah Mormont.jpg",
  "characters/Euron Greyjoy.png",
  "characters/Gendry.jpg",
  "characters/Podrick Payne.jpg",
  "characters/Jaqen H’ghar.jpg",
  "characters/Grey Worm.jpg",
]


for (var i = 0; i < icons.length; i++) {
  var img = document.createElement("img");
  img.className = 'tile';
  img.src = icons[i];
  var src = document.getElementById("img" + (i+1));
  src.appendChild(img)
}

