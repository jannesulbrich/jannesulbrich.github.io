// haarscharf Preview
var haarscharfLinkTag = document.getElementById('link-hs');
// gif einblenden:
haarscharfLinkTag.addEventListener("mouseover", function() {
document.querySelector('div.pre-hs').style.display = "block";
});
// gif ausblenden:
haarscharfLinkTag.addEventListener("mouseout", function() {
document.querySelector('div.pre-hs').style.display = "none";
});

//Sick n Wrong Preview
var sicknwrongLinkTag = document.getElementById('link-snw');
var sicknwrongImgTag = document.querySelector('div.pre-snw');
  // gif einblenden:
sicknwrongLinkTag.addEventListener("mouseover", function() {
  sicknwrongImgTag.style.display = "block";
  // document.querySelector('p.projects').style.backgroundColor = "black";
});
  // gif ausblenden:
sicknwrongLinkTag.addEventListener("mouseout", function() {
  sicknwrongImgTag.style.display = "none";
});

// ZweiteHaut Preview
var zweiteHautLinkTag = document.getElementById('link-zh');
// gif einblenden:
zweiteHautLinkTag.addEventListener("mouseover", function() {
document.querySelector('div.pre-zh').style.display = "block";
});
// gif ausblenden:
zweiteHautLinkTag.addEventListener("mouseout", function() {
document.querySelector('div.pre-zh').style.display = "none";
});
