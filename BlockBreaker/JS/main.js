 // game's global variable
 var game;
 // after everything is loaded, then
 window.onload = function () {
	 // initialize the game object
	 game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');
	 game.state.add("StateIntro", StateIntro);
	  game.state.add("StateOver", StateOver);
	 game.state.add("StateLevel0", StateLevel0);
	 game.state.add("StateInit", StateInit);
	 game.state.add("StateLoad", StateLoad);
	 game.state.start("StateInit");
 };