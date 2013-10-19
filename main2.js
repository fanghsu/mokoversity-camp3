

var gameModule = (function (){ 

	var timeoutVar, count = 0;
	var canvas=document.getElementById('game');
	var ctx=canvas.getContext('2d');
	canvas.width = 640;
	canvas.height = 480;

	function start() {

	var ballX = Math.floor(Math.random() * 400); // 0..300
	var ballY = Math.floor(Math.random() * 500);
	var ballR = Math.floor(Math.random() * 100);
	var colorR = Math.floor(Math.random() * 256)%256;
	var colorG = Math.floor(Math.random() * 256)%256;
	var colorB = Math.floor(Math.random() * 256)%256;


	ctx.fillStyle = "#"+ colorR.toString(16) + colorG.toString(16) + colorB.toString(16);
	
	//ctx.fillStyle = '#ff0000';
	ctx.beginPath();
	ctx.arc(ballX, ballY, ballR, 0, Math.PI*2, true)
	ctx.fill();

	

		if (count >=10){

		}
		else{

			timeoutVar = setTimeout(start, 1000);
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
gameModule.ggameOver();

