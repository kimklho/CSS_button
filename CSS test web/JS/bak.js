let r = 255;
let g = 0;
let b = 0;

// function sleep(ms) {
//   const wakeUpTime = Date.now() + ms;
//   while (Date.now() < wakeUpTime) {}
// }

// rainbow color chage
function myTimer () {
	if (r < 255 && g == 0 && b == 0) {
    	r++
    } else if (r == 255 && g < 255 && b == 0) {
        g++
    } else if (r > 0 && g == 255 && b == 0) {
        r--
    } else if (r == 0 && g == 255 && b < 255) {
        b++
    } else if (r == 0 && g > 0 && b == 255) {
        g--
    } else if (r < 255 && g == 0 && b == 255) {
    	r++
    } else if (r == 255 && g== 0 && b > 0) {
        b--
    }
    document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
}
// 무지개 배경 초기화
let interval = setInterval(myTimer, 70);
clearInterval(interval);

let Night_Day = 0;
let rain_bak = 0;
let bakremoves = 0;

// 모든 배경 버튼
function removeBack(){
	if(bakremoves == 0){
		bakremoves = 1;
		document.querySelector('.backGrondBtn').style.transition='1.5s';
		document.querySelector('#switchAll').disabled=true;
		$('#removbk').fadeOut('slow', function(){
			document.querySelector('.backGrondBtn').style.height='40px';
			setTimeout(function(){
				document.querySelector('#switchAll').disabled=false;
			}, 1450);
		});
	}else if(bakremoves == 1) {
		bakremoves = 0;
		document.querySelector('.backGrondBtn').style.transition='1.5s';
		document.querySelector('.backGrondBtn').style.height='110px';
		document.querySelector('#switchAll').disabled=true;
		setTimeout(function() {
			$('#removbk').fadeIn('slow');
			document.querySelector('#switchAll').disabled=false;
			document.querySelector('.backGrondBtn').style.transition='0s';
		}, 1100);
	}
}

// 버튼 1 다크모드
function NightDay() {
	// rainbow 해제
	clearInterval(interval);
	const AudioPlay = document.getElementById("AudioPlay")
	AudioPlay.pause();
	document.getElementById("switch2").checked=false;

	// 조건문
	rain_bak = 0;		
	if (Night_Day == 0) {
		document.querySelector('#switch').disabled=true;
		document.querySelector('body').style.transition='0.6s';
		$('.tun, .darkMode, .rianbowIkon').fadeOut(450, function(){
			document.querySelector('body').style.color='white';
			$('.tun').fadeIn(450);
			$('.lightMode').fadeIn(450);	
			$('.rianbowIkon').fadeIn(450);
			document.querySelector('#switch').disabled=false;
		});
		document.querySelector('body').style.backgroundColor='black'; 
		Night_Day = 1;
	}else{
		document.querySelector('body').style.transition='0.6s';
		document.querySelector('#switch').disabled=true;
		$('.tun, .lightMode, .rianbowIkon').fadeOut(450, function(){
			document.querySelector('body').style.color='black';
			$('.tun').fadeIn(450);
			$('.darkMode').fadeIn(450);	
			$('.rianbowIkon').fadeIn(450);
			document.querySelector('#switch').disabled=false;
		});
		document.querySelector('body').style.backgroundColor='white'; 
		Night_Day = 0; 
	}
}

// 버튼 2 rainbow배경 
function RainBak() {
	// 아이콘 변경 및 색상 조정
	document.querySelector('body').style.transition='0.4s';
	document.getElementById("switch").checked = false;
	let para = document.querySelector('.darkMode');
	let compStyles = window.getComputedStyle(para);
    if(compStyles.getPropertyValue('display') === 'none'){
    	$('.tun, .lightMode, .rianbowIkon').fadeOut(800, function(){
			$('.tun').fadeIn(800);
			$('.darkMode').fadeIn(800);	
			$('.rianbowIkon').fadeIn(800);
			document.querySelector('body').style.color='black';
		});
    }else{
    	document.querySelector('body').style.color='black';
    }

	// 오디오 객체 불러오기
	const AudioPlay = document.getElementById("AudioPlay")

	// 조건문
	Night_Day = 0;
	if (rain_bak == 0) {
		interval;
		rain_bak = 1;
		interval = setInterval(myTimer, 20);
		// AudioPlay.play();
	}else{
		clearInterval(interval);
		document.querySelector('body').style.backgroundColor='white';
		rain_bak = 0;
		AudioPlay.pause();
	}
}

