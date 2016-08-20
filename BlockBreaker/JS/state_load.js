var StateLoad = {
	preload: function() {
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.physics.arcade.checkCollision.down = false;


		var progVoid = game.add.image(0,0,'imgProgVoid');
		progVoid.x = game.world.centerX - progVoid.width/2;
		progVoid.y = game.world.centerY;

		var progFull = game.add.image(0,0,'imgProgFull');
		progFull.anchor.x = progVoid.anchor.x;
		progFull.x = progVoid.x;
		progFull.y = progVoid.y;

		game.load.setPreloadSprite(progFull);

		game.load.image('imgPaddle', '../../assets/paddle.png');
		game.load.image('imgBrickGreen', '../../assets/brick_green.png');
		game.load.image('imgBrickPurple', '../../assets/brick_purple.png');
		game.load.image('imgBrickRed', '../../assets/brick_red.png');
		game.load.image('imgBrickYellow', '../../assets/brick_yellow.png');
		game.load.image('imgBall', '../../assets/ball.png');
		game.load.image('imgBkg', '../../assets/bg_blue.png');
		game.load.image('imgBlack', '../../assets/bg_black.png');

		game.load.audio('sfxHitBrick', '../../assets/sounds/fx_hit_brick.wav');
		game.load.audio('sfxHitPaddle', '../../assets/sounds/fx_hit_paddle.wav');
		game.load.audio('sfxLoseLife', '../../assets/sounds/fx_lose_life.ogg');
		game.load.audio('bgmMusic', '../../assets/sounds/bgm_electric_air.ogg');

		game.load.image('imgStar', '../../assets/star.png');
		game.load.spritesheet('btnBack', '../../assets/btn_back.png',190, 49);

		game.load.audio('sfxLose', '../../assets/sounds/fx_lose.ogg');
		game.load.audio('sfxWin', '../../assets/sounds/fx_win.ogg');
		game.load.audio('sfxFirework', '../../assets/sounds/fx_firework.ogg');

		game.load.image('imgLogo', '../../assets/blockBreakerv3_logo.png');
		game.load.spritesheet('btnStart', '../../assets/btn_start.png',190, 49);
	},

	create: function(){
		game.state.start('StateIntro');
	}
};