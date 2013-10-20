
var gameModule = (function (){ 

	var timeoutVar, 
		count = 0,
		ballX,
		ballY,
		ballR,
		score=0;
    
	function touchEvent(evt){
		var x = evt.clientX, 
			y = evt.clientY,
			tmp;

			tmp = (ballX-x)*(ballX-x) + (ballY-y)*(ballY-y);
			//console.log("click:" + ballX + "," + x);

			if(tmp<ballR*ballR){
				score += 100 - ballR;
				console.log("Hit: +" + (100 - ballR));

			}

			

	}

    function start(){
    	document.getElementById("main").addEventListener("click", touchEvent, false);
    	startGame();
    } 



	function startGame() {
		var canvas=document.getElementById('game');
		var ctx=canvas.getContext('2d');

		var colorR = Math.floor(Math.random() * 256)%256;
		var colorG = Math.floor(Math.random() * 256)%256;
		var colorB = Math.floor(Math.random() * 256)%256;


		ballX = Math.floor(Math.random() * 500); // 0..300
		ballY = Math.floor(Math.random() * 600);
		ballR = Math.floor(Math.random() * 100);

		canvas.width = 640;
		canvas.height = 480;

		ctx.fillStyle = "#"+ colorR.toString(16) + colorG.toString(16) + colorB.toString(16);
		
		//ctx.fillStyle = '#ff0000';
		ctx.beginPath();
		ctx.arc(ballX, ballY, ballR, 0, Math.PI*2, true);
		ctx.fill();

		if (count >=20){
			gameOver();
		} else{

			timeoutVar = setTimeout(startGame, 1000);
			count = count +1;
			//console.log("CounterA: " + count);

		}
	}

	function gameOver(){
		
		console.log("Score: " + score);
		ballR = 0;
	
	}

	return{
		sstart: start,
		ggameOver: gameOver
	}


}) ();	

gameModule.sstart();


