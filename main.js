
var gameModule = (function (){ 

	var timeoutVar, count = 0;

	function start() {
	var canvas=document.getElementById('game');
	var ctx=canvas.getContext('2d');
	var ballX = Math.floor(Math.random() * 300); // 0..300
	var ballY = Math.floor(Math.random() * 500);
	var ballR = Math.floor(Math.random() * 100);

	canvas.width = 480;
	canvas.height = 320;

	ctx.fillstyle ='black';
	ctx.beginPath();
	ctx.arc(ballX, ballY, ballR, 0, Math.PI, true)
	ctx.fill();

	

		if (count <=10){

			timeoutVar = setTimeout(start, 1000);
			count = count +1;
			//console.log("CounterA: " + count);
		}
		else{

		}
	}

	function gameOver(){
		if (count <=10){
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

