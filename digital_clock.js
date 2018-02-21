function showTime(){
	var date = new Date();
	var hr = date.getHours();
	var mn = date.getMinutes();
	var sec = date.getSeconds();
	var session = 'AM';
	
	if (hr == 0){
		hr = 12;
	}
	if (hr > 12){
		hr = hr - 12;
		session = 'PM';
	}
	hr = (hr < 10)? '0' + hr : hr;
	mn = (mn < 10)? '0' + mn : mn;
	sec = (sec < 10)? '0' + sec: sec;
	var time = hr + ':' + mn + ':' + sec + session;
	document.getElementById("myClockDisplay").innerHTML = time;
	
	
	
	setTimeout(showTime, 1000);
	
	
}
showTime();
(function (){
		var audio = new Audio();
		 audio.src = "_24__Themed_Countdown_Clock_(1_Minute).m4a";
		 audio.play();
		 audio.loop = true;
		
	})();
