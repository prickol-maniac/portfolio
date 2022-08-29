let loopers1 = document.getElementsByClassName('loo');
let loop_num1 = 0;
for (var i = loopers1.length - 1; i >= 0; i--) {
	loopers1[i].style.display = 'none';
}
loopers1[0].style.display = 'inline-block';
loopers1[1].style.display = 'inline-block';
loopers1[2].style.display = 'inline-block';

function loops() {
	loopers1[loop_num1+3].style.display = "inline-block";
	loopers1[loop_num1].style.display = "none";	
	loop_num1+=1;
	}

function loopn() {
	loopers1[loop_num1-1].style.display = "inline-block";
	loopers1[loop_num1+2].style.display = "none";	
	loop_num1-=1;
	}

let loopers2 = document.getElementsByClassName('lo');
let loop_num2 = 0;
for (var i = loopers2.length - 1; i >= 0; i--) {
	loopers2[i].style.display = 'none';
}
loopers2[0].style.display = 'inline-block';
loopers2[1].style.display = 'inline-block';
loopers2[2].style.display = 'inline-block';

function loope() {
	loopers2[loop_num2+3].style.display = "inline-block";
	loopers2[loop_num2].style.display = "none";	
	loop_num2+=1;
	}

function loopw() {
	loopers2[loop_num2-1].style.display = "inline-block";
	loopers2[loop_num2+2].style.display = "none";	
	loop_num2-=1;
	}

function goSummer() {
	document.getElementById('winter').style.display='none';
	document.getElementById('summer').style.display='none';
	document.getElementById('spring').style.display='none';
	document.getElementById('autumn').style.display='inline-block';
	document.getElementById('me').src = "images/summer.png"
}
function goAutumn() {
	document.getElementById('autumn').style.display='none';
	document.getElementById('summer').style.display='none';
	document.getElementById('spring').style.display='none';
	document.getElementById('winter').style.display='inline-block';
	document.getElementById('me').src = "images/autumn.png"
}
function goWinter() {
	document.getElementById('winter').style.display='none';
	document.getElementById('summer').style.display='none';
	document.getElementById('autumn').style.display='none';
	document.getElementById('spring').style.display='inline-block';
	document.getElementById('me').src = "images/winter.png"
}
function goSpring() {
	document.getElementById('winter').style.display='none';
	document.getElementById('autumn').style.display='none';
	document.getElementById('spring').style.display='none';
	document.getElementById('summer').style.display='inline-block';
	document.getElementById('me').src = "images/spring.png"
}
