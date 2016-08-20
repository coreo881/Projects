var StateLevel0 = {

	create: function(){
		w = game.world.width;
		h = game.world.height;
		bkg = game.add.tileSprite(0,0,w,h, 'imgBkg');
		
		//PADDLE
		myPaddle = new Paddle();
		
		//BALL
		ball = new Ball();
		
		//Set the stage
		gameSetup(myPaddle, ball);

		//BRICKS
		this.numCols = 10;
		this.numRows = 4;
		this.bricks = game.add.group();
		this.bricks.enableBody = true;
		this.bricks.bodyType = Phaser.Physics.ARCADE;
		var brickImages = [
			'imgBrickGreen',
			'imgBrickPurple',
			'imgBrickRed',
			'imgBrickYellow'
		];

		var i, j;
		for(i = 0; i< this.numRows; i++){
			var img = brickImages[i];
			for(j=0; j<this.numCols; j++){
				var brick = this.bricks.create(0,0,img);
				brick.body.immovable = true;
				brick.x = brick.width*j;
				brick.y = brick.height*i;
			}
		}

		resetPaddle();

		game.input.onDown.add(shootBall,this);



	},

	update: function(){
		
		game.physics.arcade.collide(ball.ball, myPaddle.paddle, hitPaddle, null, this);
		game.physics.arcade.collide(ball.ball, this.bricks, removeBrick, null, this);

		//control paddle with arrow keys
		var isLeftDown = game.input.keyboard.isDown(Phaser.Keyboard.LEFT);
		var isRightDown = game.input.keyboard.isDown(Phaser.Keyboard.RIGHT);

		if(myPaddle.prevX != game.input.x){
			myPaddle.paddle.x = game.input.x;
		}else if(isRightDown && !isLeftDown){
			myPaddle.paddle.x += myPaddle.paddleVelX * game.time.physicsElapsedMS;
		}else if(!isRightDown && isLeftDown){
			myPaddle.paddle.x -= myPaddle.paddleVelX * game.time.physicsElapsedMS;
		}

		//control paddle with mouse
		myPaddle.prevX = game.input.x;

		//constrain to the stage's borders
		if(myPaddle.paddle.x - myPaddle.paddleHalf < 0)
			myPaddle.paddle.x = myPaddle.paddleHalf;
		if (myPaddle.paddle.x + myPaddle.paddleHalf > game.world.width)
			myPaddle.paddle.x = game.world.width - myPaddle.paddleHalf;

		if(ball.isShot === false){
			ball.ball.x = myPaddle.paddle.x;
		}

		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
			shootBall();
		}
	}

};

