
var gameModule = (function (){ 

	var timeoutVar, count = 0;
    
	function touchEvent(evt){
		var x = evt.clientX, 
			y = evt.clientY;

			console.log("Click:" + x + "," + y);

	}

    function start(){
    	document.getElementById("main").addEventListener("click", touchEvent, false);
    	startGame();
    } 



	function startGame() {
		var canvas=document.getElementById('game');
		var ctx=canvas.getContext('2d');
		var ballX = Math.floor(Math.random() * 500); // 0..300
		var ballY = Math.floor(Math.random() * 600);
		var ballR = Math.floor(Math.random() * 100);
		var colorR = Math.floor(Math.random() * 256)%256;
		var colorG = Math.floor(Math.random() * 256)%256;
		var colorB = Math.floor(Math.random() * 256)%256;

		canvas.width = 640;
		canvas.height = 480;

		ctx.fillStyle = "#"+ colorR.toString(16) + colorG.toString(16) + colorB.toString(16);
		
		//ctx.fillStyle = '#ff0000';
		ctx.beginPath();
		ctx.arc(ballX, ballY, ballR, 0, Math.PI*2, true);
		ctx.fill();

		if (count >=10){

		} else{

			timeoutVar = setTimeout(startGame, 1000);
			count = count +1;
			//console.log("CounterA: " + count);

		}
	}

	function gameOver(){
		if (count >=10){

		}else{
			timeoutVar = setTimeout(gameOver, 1000);
			console.log("CounterB: " + count);
		}
	}

	return{
		sstart: start,
		ggameOver: gameOver
	}


}) ();	

gameModule.sstart();


