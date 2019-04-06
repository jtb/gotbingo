var icons = [
  "icons/Tyrion Lannister.jpg",
  "icons/Tyrion Lannister.jpg",
  "icons/Tyrion Lannister.jpg",
  "icons/Tyrion Lannister.jpg",
  "icons/Tyrion Lannister.jpg",
  "icons/Tyrion Lannister.jpg",
  "icons/Tyrion Lannister.jpg",
  "icons/Tyrion Lannister.jpg",
  "icons/Tyrion Lannister.jpg",
  "icons/Tyrion Lannister.jpg",
  "icons/Tyrion Lannister.jpg",
  "icons/Tyrion Lannister.jpg",
  "icons/Tyrion Lannister.jpg",
  "icons/Tyrion Lannister.jpg",
  "icons/Tyrion Lannister.jpg",
  "icons/Tyrion Lannister.jpg",
  "icons/Tyrion Lannister.jpg",
  "icons/Tyrion Lannister.jpg",
  "icons/Tyrion Lannister.jpg",
  "icons/Tyrion Lannister.jpg",
  "icons/Tyrion Lannister.jpg",
  "icons/Tyrion Lannister.jpg",
  "icons/Tyrion Lannister.jpg",
  "icons/Tyrion Lannister.jpg",
  "icons/Tyrion Lannister.jpg"
]


for (var i = 0; i < icons.length; i++) {
  var img = document.createElement("img");
  img.src = icons[i];
  var src = document.getElementById("img" + (i+1));
  src.appendChild(img)
}

