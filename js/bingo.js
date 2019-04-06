var icons = [
  "characters/Tyrion Lannister.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Tyrion Lannister.jpg",
  "characters/Tyrion Lannister.jpg"
]


for (var i = 0; i < icons.length; i++) {
  var img = document.createElement("img");
  img.className = 'tile';
  img.src = icons[i];
  var src = document.getElementById("img" + (i+1));
  src.appendChild(img)
}

