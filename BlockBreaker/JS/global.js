var g_txtLives = "lives: ";
var g_txtPoints = " points";
var g_txtGameOver = "GAME OVER";
var g_txtCongrats = "CONGRATULATIONS";
var g_lives = 3;
var g_points = 0;
var txtLives, txtPoints, w, h;
var sfxHitBrick, sfxHitPaddle, sfxLoseLife, bgmMusic;
var bkg;
var myPaddle;
var ball;

function Paddle(){
	this.paddleVelX= 500/1000;
	this.prevX = game.input.x;
	this.paddle=game.add.sprite(0,0,'imgPaddle');
	this.paddleHalf = this.paddle.width/2;
	game.physics.arcade.enable(this.paddle);
	this.paddle.body.enable = true;
	this.paddle.body.immovable = true;
	this.paddle.anchor.setTo(0.5,1);

	
}

function Ball(){
	this.ball = game.add.sprite(0,0,"imgBall");
	this.isShot = false;
	this.iniVelX= 200;
	this.iniVelY= -400;
	game.physics.arcade.enable(this.ball);
	this.ball.body.enable = true;
	this.ball.body.bounce.set(1);
	this.ball.body.collideWorldBounds = true;
	this.ball.checkWorldBounds = true;

}

function gameSetup(paddle, ball){
	//INFO BAR & BACKGROUND
	h = paddle.paddle.height;
	var blackLine = game.add.tileSprite(0,0,w,h,'imgBlack');
	blackLine.anchor.set(0,1);
	blackLine.y = game.world.height;

	var txtPointsConfig = {
		font: '18px Overclock',
		fill: "#ffffff",
		align: "right"
	};

	var txtLivesConfig = {
		font: '18px Overclock',
		fill: '#ffffff',
		align: 'left'
	};

	txtLives = game.add.text(0,0,g_txtLives + g_lives, txtLivesConfig);
	txtLives.y = game.world.height;
	txtLives.anchor.set(0,1);

	txtPoints = game.add.text(0,0,g_points + g_txtPoints, txtPointsConfig);
	txtPoints.anchor.set(1);
	txtPoints.x = game.world.width;
	txtPoints.y = game.world.height;

	//SOUND
	sfxHitBrick = game.add.audio('sfxHitBrick');
	sfxHitPaddle = game.add.audio('sfxHitPaddle');
	sfxLoseLife = game.add.audio('sfxLoseLife');
	bgmMusic = game.add.audio('bgmMusic');
	bgmMusic.loop = true;
	// bgmMusic.play();

	//Ball Behavior: when ball goes off screen, lose 1 life.  Then reset everything back to the starting position
	ball.ball.events.onOutOfBounds.add(loseLife, this);

	// resetPaddle(paddle.paddle, ball.ball);
}

function resetPaddle() {
	myPaddle.paddle.x = game.world.centerX;
	myPaddle.paddle.y = game.world.height - myPaddle.paddle.height;
	ball.ball.x = myPaddle.paddle.x;
	ball.ball.y = myPaddle.paddle.y - myPaddle.paddle.height*2;
	ball.ball.body.velocity.set(0);
	ball.isShot = false;
}

function loseLife() {
	resetPaddle();
	g_lives--;
	txtLives.text = g_txtLives + g_lives;
	sfxLoseLife.play();
	if(g_lives === 0){
		goToOver();
	}
}

function goToOver()  { 
	bgmMusic.stop();
	game.lives = g_lives;
	game.points = g_points;
	g_lives = 3;
	game.state.start('StateOver');
}

function removeBrick(ball, brick){
	brick.kill();
	g_points += 10;
	txtPoints.text = g_points + g_txtPoints;
	sfxHitBrick.play();
	if(this.bricks.countLiving() === 0){
		goToOver();
	}
}

function hitPaddle(){
	sfxHitPaddle.play();
	var velX;
	var velY = ball.iniVelY;
	if(ball.ball.x < myPaddle.paddle.x){
		if(ball.ball.body.velocity.x < 0) 
			return;
		else if(ball.ball.body.velocity.x > 0)
			velX = ball.ball.body.velocity.x *=-1;
	} else if(ball.ball.x > myPaddle.paddle.x){
		if(ball.ball.body.velocity.x > 0) 
			return;
		else if(ball.ball.body.velocity.x < 0)
			velX = ball.ball.body.velocity.x *=-1;	
	}

	ball.ball.body.velocity.set(velX,velY);

}

function shootBall() {
	if(ball.isShot)
		return;
	var velX = ball.iniVelX;
	var velY = ball.iniVelY;
	var rand = Math.floor(Math.random()*2);
	if(rand % 2 === 0)
		velX*=-1;
	ball.isShot = true;
	var state = game.state.getCurrentState();
	ball.ball.body.velocity.set(velX,velY);
	sfxHitPaddle.play();
}