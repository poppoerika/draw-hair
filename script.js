var monkeyPic = document.getElementById("monkey-pic");
var onMouseMove = function(e) {
	var hair = document.createElement("div");
	hair.className = "beard";
	document.body.appendChild(hair);
	hair.style.top = e.clientY + "px";
	hair.style.left = e.clientX + "px";
};

monkeyPic.addEventListener("mousemove", onMouseMove);