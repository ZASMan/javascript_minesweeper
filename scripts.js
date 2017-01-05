//Initial planning

var game = {

	//Each array is one row
	gameBoard: [
		[0,1,2,3,4,5,6,7,8,9],
		[0,1,2,3,4,5,6,7,8,9],
		[0,1,2,3,4,5,6,7,8,9],
		[0,1,2,3,4,5,6,7,8,9],
		[0,1,2,3,4,5,6,7,8,9],
		[0,1,2,3,4,5,6,7,8,9],
		[0,1,2,3,4,5,6,7,8,9],
		[0,1,2,3,4,5,6,7,8,9],
		[0,1,2,3,4,5,6,7,8,9],	
	],

	initiateBoard: function() {
		//Randomly place all of the mine
		//If a square has a mine around it,
		//First loop through the board rows
		for (row = 0; row < game.gameBoard.length; row++) {
			//Loop through each row element
			var randNum = Math.random() * (9 - 0) + 0;
			var mine = "mine";
			//Map each array, if random number is equal to
			//the number index of the array, make it equal to "mine"
			row.forEach(function(square, index) {
				if (row[index] === randNum) {
					row[index] = mine;
				} else {
					row[index] = "";
				};
			});
		};
	},

	gameTime: 0,

	selectSquare: function() {
		//Check if square has a mine
	},

};

game.initiateBoard();

