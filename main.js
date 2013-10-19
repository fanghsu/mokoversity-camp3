
var gameModule = (function (){ 

	

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

	}

	return {
		hello: start
	}
}) ();

gameModule.hello();
