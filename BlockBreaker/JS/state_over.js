var StateOver = {

	create: function() {
		//Setting the stage
		var points = game.points;
		var lives = game.lives;
		var sfxWinLose;
		var w = game.world.width;
		var h = game.world.height;
		this.bkg = game.add.tileSprite(0,0,w,h,'imgBkg');
		this.sfxFirework = game.add.audio('sfxFirework');

		//Back to Intro Button
		var outFrame = 0;
		var overFrame = 1;
		var downFrame = 2;
		var margin = 30;
		var btnBack = game.add.button(0,0,'btnBack', this.goToIntro, this, overFrame, outFrame, downFrame);
		btnBack.anchor.set(0.5,1);
		btnBack.x = game.world.centerX;
		btnBack.y = game.world.height - margin;

		//screen text
		var txtOverConfig = {
			font: "40px Overclock",
			fill: "#ffffff",
			align: "center"
		};

		var txtPointsConfig = {
			font: "28px Overclock",
			fill: "#ffffff",
			align: "center"
		};

		var txtOver = game.add.text(0, 0, g_txtGameOver, txtOverConfig);
		txtOver.anchor.x = 0.5;
		txtOver.x = game.world.centerX;
		txtOver.y = margin *  2;

		var txtPoints = game.add.text(0, 0, points + g_txtPoints, txtPointsConfig);
		txtPoints.anchor.x = 0.5;
		txtPoints.x = game.world.centerX;
		txtPoints.y = game.world.centerY - margin;

		//play some sounds when I (win/lose)
		if(lives  > 0){
			sfxWinLose = game.add.audio('sfxWin');
			txtOver.fill = "#e0d700";
			txtOver.text = g_txtCongrats;
			//particles
			this.sfxFirework = game.add.audio('sfxFirework');
			var maxParticles = 100;
			this.fireworks = game.add.emitter(0,0,maxParticles);
			this.fireworks.makeParticles('imgStar');
			this.fireworks.gravity.y = 500;
			this.topTime = 1;
			this.timer = this.topTime;
		}else{
			sfxWinLose = game.add.audio('sfxLose');
		}

		sfxWinLose.play();


	},

	update: function() {
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
			this.goToIntro();
		}

		this.timer -= game.time.physicsElapsed;
		if (this.timer < 0) {
			this.timer = this.topTime;
			var randX = Math.random() * game.world.width;
			var randY = Math.random() * game.world.height;
			this.fireworks.x = randX;
			this.fireworks.y = randY;
			var duration = 800;
			var numStars  = 10;
			this.fireworks.start(true, duration,null,numStars);
			this.sfxFirework.play();
		}

		if(this.lives === 0){
			return;
		}
	},

	goToIntro: function() {
		game.state.start("StateIntro");
	}

};