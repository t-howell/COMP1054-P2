// Switch product image
// Got help on this from w3c and stack overflow https://www.w3schools.com/jsref/event_onclick.asp
function changeImage(a) {
	document.getElementById("product").src=a;
}
document.getElementById("blueYarn").onclick = function() {changeImage("contents/Woolspun-blue.jpg")};
document.getElementById("greenYarn").onclick = function() {changeImage("contents/Woolspun-green.jpg")};
document.getElementById("greyYarn").onclick = function() {changeImage("contents/Woolspun-grey.jpg")};
document.getElementById("beigeYarn").onclick = function() {changeImage("contents/Woolspun-1.jpg")};


