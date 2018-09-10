const ot = require('ot');


function updateSTR() {
	var str = document.getElementById("strtotal");
	var sb = parseInt(document.getElementById("strbase").innerHTML);
	var se = parseInt(document.getElementById("strequip").innerHTML);
	var sm = parseInt(document.getElementById("strmod").value);
	if (isNaN(sm)) sm = 0;
	str.innerHTML = sb + se + sm;
}
function updateDEX() {
	var dex = document.getElementById("dextotal");
	var db = parseInt(document.getElementById("dexbase").innerHTML);
	var de = parseInt(document.getElementById("dexequip").innerHTML);
	var dm = parseInt(document.getElementById("dexmod").value);
	if (isNaN(dm)) dm = 0;
	dex.innerHTML = db + de + dm;
}
function updateSPE() {
	var spe = document.getElementById("spetotal");
	var spb = parseInt(document.getElementById("spebase").innerHTML);
	var speq = parseInt(document.getElementById("speequip").innerHTML);
	var spm = parseInt(document.getElementById("spemod").value);
	if (isNaN(spm)) spm = 0;
	spe.innerHTML = spb + speq + spm;
}
function updateVIT() {
	var vit = document.getElementById("vittotal");
	var vb = parseInt(document.getElementById("vitbase").innerHTML);
	var ve = parseInt(document.getElementById("vitequip").innerHTML);
	var vm = parseInt(document.getElementById("vitmod").value);
	if (isNaN(vm)) vm = 0;
	vit.innerHTML = vb + ve + vm;
}
function submit() {
	var data = {
		str: document.getElementById('strmod').value,
		dex: document.getElementById('dexmod').value,
		spe: document.getElementById('spemod').value,
		vit: document.getElementById('vitmod').value
	};
	localStorage.setItem("testJSON", JSON.stringify(data));
	updateSTR();
}
function load() {
  
}