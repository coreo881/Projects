var style = { font: 'italic 18px Arial', align: 'left', wordWrap: true, wordWrapWidth: 640, fill:'#36afc7'};

var myStates, text;
var saveLastKey; 
var checkSignal = new Phaser.Signal();

var States = {
	cell:1,
	sheet_0:2,
	barredWindow:3,
	examineWindow:4,
	cell_Examined:5,
	door_0:6,
	sheet_1:7,
	door_1:8,
	corridor_0:9,
	downTheSteps:10,
	ironDoor_0:11,
	closet_0:12,
	desk_0:13,
	desk_top:14,
	desk_left:15,
	desk_right:16,
	ironDoor_1:17,
	closet_1:18,
	desk_1:19,
	stairs:20,
	endgame_0:21,
	endgame_1:22
};

//switches
var wasExamined = false;
var wasKeyTaken = false;
var afterCreep = false;
var areClothesOn = false;

var playState = {	
		
	create: function(){

		game.add.sprite(0,25,'gameLogo');

		//make some controls
		game.input.active = true;

	    text = game.add.text(80,150,"",style);

	    myStates=States.cell;

	    
	},

	update: function(){
		if(myStates == States.cell)							{this.state_cell();} 
		else if(myStates == States.sheet_0)					{this.state_sheet_0();}
		else if(myStates == States.barredWindow)		    {this.state_barredWindow();}
		else if(myStates == States.examineWindow)	        {this.state_examineWindow();}
		else if(myStates == States.cell_Examined)		    {this.state_cell_Examined();}
		else if(myStates == States.door_0)					{this.state_door_0();}
		else if(myStates == States.sheet_1)					{this.state_sheet_1();}
		else if(myStates == States.door_1)					{this.state_door_1();}
		else if(myStates == States.corridor_0)				{this.state_corridor_0();}
		else if(myStates == States.downTheSteps)		    {this.state_downTheSteps();}
		else if(myStates == States.ironDoor_0)			    {this.state_ironDoor_0();}
		else if(myStates == States.closet_0)				{this.state_closet_0();}
		else if(myStates == States.desk_0)					{this.state_desk_0();}
		else if(myStates == States.desk_top)				{this.state_desk_Top();}
		else if(myStates == States.desk_left)				{this.state_desk_Left();}
		else if(myStates == States.desk_right)				{this.state_desk_Right();}
		else if(myStates == States.ironDoor_1)			    {this.state_ironDoor_1();}
		else if(myStates == States.closet_1)				{this.state_closet_1();}
		else if(myStates == States.desk_1)					{this.state_desk_1();}
		else if(myStates == States.stairs)					{this.state_stairs();}
		else if(myStates == States.endgame_0)				{this.state_endGame_0();}
		else if(myStates == States.endgame_1)				{this.state_endGame_1();}

		saveLastKey=game.input.keyboard.lastKey.timeDown;

	},
//blah blah blah functions

 	state_cell: function(){
		text.text = "You awake in a prison cell with a throbbing headache.  Maybe that last bit of mouthing off "+
			"about the judge's daughter during trial finally pissed off the right people.  You simply expressed " +
				"your thoughts on how she is a grown woman who can lay with whomever she desires.  "+
				"Even if that includes half the patrons of Vicky's Inn.  The sooner he accepts that, "+
				"the less the feeling to inform him (and most of the district) of her accomplishments will persist.\n\n"+
				"You may as well have a look around your new lodgings.\n\nThere are some dirty sheets on the bed, "+
				"a barred window, and it looks like the cell door is locked from the outside.\n\n"+
				"Press 'Left' to view the dirty sheets.\nPress 'Down' to view the barred window.\nPress 'Up' to view the cell door.";
		
		if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			myStates = States.sheet_0;
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
			myStates = States.barredWindow;
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
			myStates = States.door_0;
		}
	},

	 state_cell_Examined: function(){
		text.text = "You thumb the skeleton key in your palm.  It's unlike anything you've ever seen before" +
			"...outside of the old tomes in Veritas' massive libraries that is.\n\n" +
				"Press 'Left' to view the dirty sheets.\nPress 'Down' to view the barred window.\nPress 'Up' to view the cell door.";
		
		if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			myStates = States.sheet_1;
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
			myStates = States.examineWindow;
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
			myStates = States.door_1;
		}
	},
	
	 state_sheet_0: function(){
		text.text = "These sheets are horrific.  Do they honestly expect you to sleep on these?\n\n"+
			"Press 'R' to return to roaming your tiny cell";
		
		if(game.input.keyboard.isDown(Phaser.Keyboard.R)){
			myStates = States.cell;
		}
	},

	 state_sheet_1: function(){
		text.text = "The thought of asking a guard for some decent bedding crossed your mind, " +
			"but it seems you will not be staying the night.\n\n"+
				"Press 'R' to return to roaming your tiny cell";
		
		if(game.input.keyboard.isDown(Phaser.Keyboard.R)){
			myStates = States.cell_Examined;
		}
	},
	
	 state_barredWindow: function(){
		text.text = "A quick look outside reveals that you are at least six stories high.  You make a mental note " +
							"to thank Mr. Judge Joseph Burgundy for placing you in a cell with a window " +
							"after sentencing you to death.  Such generosity.  For what it's worth, it's just after " +
							"sundown and the sky looks lovely tonight.  You try to find some solace in that." +
							"\n\n\nYou've come up empty.\n\n" +
							"Press 'C' to take a closer look\n" +
							"Press 'R' to return to roaming your cell";
		
		if(game.input.keyboard.isDown(Phaser.Keyboard.R)){
			myStates = States.cell;
		} else if(game.input.keyboard.isDown(Phaser.Keyboard.C)){
			myStates = States.examineWindow;
		}
	},
	
	 state_examineWindow: function(){
		if(!wasExamined){
			//CUTSCENE
			text.text = "You take a closer look at the window bars.\n\nWhat's this?  There's something " +
								"attached behind one of these bars.  You remove it carefully....it's a skeleton key!  A skeleton key?  No one could have " +
								"climbed this high, or roped their way down from the tower walls without getting caught.  Someone " +
								"had you placed in this cell.  Maybe your bottomless wit managed to impress some one important..." +
								"\n\nPress 'R' to return to roaming your cell";
		}else{
			text.text = "There's nothing else to see here but the night sky.\n\nPress 'R' to return to roaming your cell";
		}
		
		if(game.input.keyboard.isDown(Phaser.Keyboard.R)){
			myStates = States.cell_Examined;
			wasExamined = true;
		}
	},
	
	 state_door_0: function(){
		text.text = "You give the door a tug.  It's locked, but you knew that.  You were just checking.\n\n" +
							"Press 'R' to return to roaming your cell";
		if(game.input.keyboard.isDown(Phaser.Keyboard.R)){
			myStates = States.cell;
		}
	},


	 state_door_1: function(){
		text.text = "They wouldn't have given you the wrong key...would they?  That would be cruel...\n\n" +
							"Press 'K' to use the key on the locked cell door\n"+
							"Press 'R' to return to roaming your tiny cell";
		
		if(game.input.keyboard.isDown(Phaser.Keyboard.R)){
			myStates = States.cell_Examined;
		}else if(game.input.keyboard.isDown(Phaser.Keyboard.K)){
			myStates = States.downTheSteps;
		}
	},

	//CUTSCENE
	 state_downTheSteps: function(){
		text.text = "You slowly turn the key, and let out a sigh as you hear the latch open.  " +
							"You look both ways as you step from your cell.  " +
							"'Out of the cage and into a maze,' you think to yourself as you begin " +
							"your descent down the spiral steps...\n\nPress 'SPACE' to continue";

				if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
					myStates = States.corridor_0;
		}
	},

	 state_corridor_0: function(){
		if(!afterCreep){
			text.text = "After creeping past the other prisoner cells, being careful not to rouse any suspicion, " +
								"you reach the end of the steps.  You pass through a door to a large corridor.  There isn't anyone on " +
								"guard duty in here; between the skirmishes abroad, the prince's lavish parties, and unrest in the districts, " +
								"they can't even spare a man to look after you.\n\nThis is your lucky night.  " +
								"For some unexplained reason you suddenly feel very cautious...\n\nOn your left is a closet, your right " +
								"a guard's desk.  On the other side of the corridor is a heavy iron door; that must be the exit.\n\n" +
								"Press 'Up' to open the heavy iron door\nPress 'Down' to go back to the stairs\n" +
								"Press 'Left' to check the closet\nPress 'Right' to examine the guard's desk.";
		}else{
			text.text ="What to do, what to do...\n\nPress 'Up' to open the heavy iron door\nPress 'Down' to go back to the stairs\n" +
								"Press 'Left' to check the closet\nPress 'Right' to examine the guard's desk.";
		}

		if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
			if(!areClothesOn){
				myStates = States.ironDoor_0;
				afterCreep = true;
			}
			else{
				myStates = States.ironDoor_1;
				afterCreep = true;
			}
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
			myStates = States.stairs;
			afterCreep = true;
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			if(!areClothesOn){
				myStates = States.closet_0;
				afterCreep = true;
			}
			else{
				myStates = States.closet_1;
				afterCreep = true;
			}
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			if(!wasKeyTaken){
				myStates = States.desk_0;
				afterCreep = true;
			}
			else{
				myStates = States.desk_1;
				afterCreep = true;
			}
		}

	},

	 state_ironDoor_0: function(){
		text.text = "You undo the latch and pull on the heavy iron door...\n\nA large group of " +
			"guards and jailers fix their gaze on you.\nJailer: -- Who's he?\nKnight Commander -- A rat that's trying to escape that's who!\n" +
			"Guard -- Sir!  I believe this prisoner is threatening my well being.  Permission to respond with force sir!\n" +
			"Knight Commander -- Hah!  Permission granted!\n\nYou were beaten to a bloody pulp and thrown" +
			"back in your cell to await your impending death.\n\nGame Over\n\nPress 'SPACE' to restart the game";
	
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
			myStates = States.cell;
			wasExamined = false;
			wasKeyTaken = false;
			afterCreep = false;
			areClothesOn = false;
		}
	},

	 state_ironDoor_1: function(){
		text.text = "You undo the latch and pull on the heavy iron door...\n\nA large group of " +
			"guards and jailers fix their gaze on you.\nJailer: -- Who's he?\nKnight Commander " +
				"-- You're late trainee!  Fall in!\n\nYou make your way to back of the group, carefully " +
				"aing prolonged eye contact with anyone.\n\nPress 'SPACE' to continue...";
		
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
			console.log(game.input.keyboard.lastKey);
			myStates = States.endgame_0;
		}
	},



	 state_desk_0: function(){
		text.text = "Which part do you examine?\n\nPress 'Up' to examine the desk top\n" +
							"Press 'Left' to examine the left drawer\nPress 'Right' to examine the right drawer" +
							"\n\nPress 'R' to keep looking around the large corridor";

		if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
			myStates = States.desk_top;
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			myStates = States.desk_left;
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			console.log(saveLastKey);

			if(saveLastKey < game.input.keyboard.lastKey.timeDown)
				myStates = States.desk_right;
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.R)){
			myStates = States.corridor_0;
		}
	},

	 state_desk_1: function(){
		text.text = "Nothing much of interest here now.\n\nPress 'Up' to examine the desk top\n" +
			"Press 'Left' to examine the left drawer\nPress 'Right' to examine the right drawer\n\n" +
				"Press 'R' to keep looking around the large corridor";
		
		if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
			myStates = States.desk_top;
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			myStates = States.desk_left;
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			if(saveLastKey < game.input.keyboard.lastKey.timeUp)
				myStates = States.desk_right;
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.R)){
			myStates = States.corridor_0;
		}
		
	},

	 state_desk_Top: function(){
		text.text = "You check the desk top and find what looks like an itinerary.  It appears that the " +
							"knight commander of the city guard is having a meeting with his troops.  Here's " +
							"hoping they aren't close by...\n\nPress 'Down' to examine other parts of the desk\n" +
							"Press 'R' to keep looking around the large corridor";
		if(!wasKeyTaken){
			if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
				myStates = States.desk_0;
			}
			else if(game.input.keyboard.isDown(Phaser.Keyboard.R)){
				myStates = States.corridor_0;
			}
		}
		else{
			if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
				myStates = States.desk_1;
			}
			else if(game.input.keyboard.isDown(Phaser.Keyboard.R)){
				myStates = States.corridor_0;
			}
		}
	},

	 state_desk_Left: function(){
		if(!wasKeyTaken){
			text.text = "You open the left drawer and find a small key.\n\nPress 'T' to take the key\n" +
								"Press 'Down' to examine other parts of the desk\nPress 'R' to keep looking" +
								" around the large corridor";

			if(game.input.keyboard.isDown(Phaser.Keyboard.T)){
				wasKeyTaken = true;
				myStates = States.desk_1;
			}
			else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
				myStates = States.desk_0;
			}
			else if(game.input.keyboard.isDown(Phaser.Keyboard.R)){
				myStates = States.corridor_0;
			}
		}
		else{
			text.text = "There's nothing else here.\n\nPress Down' to examine other parts of the desk\n" +
								"Press 'R' to keep looking around the large corridor";

			if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
				myStates = States.desk_1;
			}
			else if(game.input.keyboard.isDown(Phaser.Keyboard.R)){
				myStates = States.corridor_0;
			}
		}
	},

	 state_desk_Right: function(){
/*		text.text = "You open the right drawer.  You find a number of leaflets routinely handed out" +
							"local shop owners.\n\nPress 'V' to view the the leaflets\nPress 'Down' " +
							"to examine other parts of the desk\nPress 'R' to keep looking around the large corridor";*/
								console.log(game.input.keyboard.lastKey.timeDown);
								console.log(game.input.keyboard.lastKey.timeUp);
				text.text = "You open the right drawer.  You find a number of leaflets routinely handed out" +
									"local shop owners.\n\nPress 'Down' to examine other parts of the desk\n" +
									"Press 'R' to keep looking around the large corridor";

		if(!wasKeyTaken){
			if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
				myStates = States.desk_0;
			}
			else if(game.input.keyboard.isDown(Phaser.Keyboard.R)){
				myStates = States.corridor_0;
			}
		}
		else{
			if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
				myStates = States.desk_1;
			}
			else if(game.input.keyboard.isDown(Phaser.Keyboard.R)){
				myStates = States.corridor_0;
			}
		}

	},


	 state_closet_0: function(){
		if(!wasKeyTaken){
			text.text = "You try to open the closet...\n\n...but it's locked.  The skeleton key must only work for cell doors?\n\n" +
				"Press 'R' to keep looking around the large corridor";
		}else{
			text.text = "You use the small key to open the closet door.  There are some guard trainee " +
				"clothes in here.\n\nPress 'P' to put on the trainee clothes\n" +
					"Press 'R' to keep looking around the large corridor";
		}
		
		if(game.input.keyboard.isDown(Phaser.Keyboard.P)){
			myStates = States.closet_1;
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.R)){
			myStates = States.corridor_0;
		}
	},

	 state_closet_1: function(){
		if(!areClothesOn){
			text.text = "You put on the guard trainee clothes.  You're a regular master of disguise!\n\n" +
				"Press 'R' to keep looking around the large corridor";
	}
	else{
			text.text = "There isn't much else in the closet.\n\n" +
				"Press 'R' to keep looking around the large corridor";
		}

 	if(game.input.keyboard.isDown(Phaser.Keyboard.R)){
			areClothesOn = true;
			myStates = States.corridor_0;
		}
	},

	 state_stairs: function(){
		text.text = "No reason to go back there.\n\nPress 'R' to keep looking around the large corridor";
		if(game.input.keyboard.isDown(Phaser.Keyboard.R)){
			myStates = States.corridor_0;
		}
	},

	 state_endGame_0: function(){
		text.text = "The meeting ends and suddenly a tremendous pain in your midsection causes you to double-over" +
							"and excuse yourself from the crowd.  You make your way out side of the prison tower " +
							"when the sound of large bells cross your ears.\n\nAbout time they caught on.  Now how " +
							"to get away from here...\n\nA Stable!  You steal a horse from under the distracted guards and " +
							"take off into the night.\n\nYou wonder for a moment the identity of your anonymous saviour, " +
							"but only for a moment. Escaping this prison was just the beginning...\n\nPress 'SPACE' to continue";
		
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
			if(saveLastKey < game.input.keyboard.lastKey.timeUp)
				myStates = States.endgame_1;
		}
	},

	 state_endGame_1: function(){
		text.text = "Story by Corey Holmes\nThanks for playing!\n" +
							"Press 'R' to return to roaming your tiny cell (restart the game)";
		
		if(game.input.keyboard.isDown(Phaser.Keyboard.R)){
			myStates = States.cell;
			wasExamined = false;
			wasKeyTaken = false;
			afterCreep = false;
			areClothesOn = false;
		}
	}								
};

function GetKeyDown(keycodes){
	// var i = game.input.keyboard.addKey(Phaser.KeyCode.keycode);

	if(game.input.keyboard.isDown(keycodes)){
		
		return true;
	}
}

