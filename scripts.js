var game = {

	//Each array is one row
	gameBoard: [
		[1,2,3,4,5,6,7,8,9],

	],

	initiateBoard: function() {
		for (row = 0; row < this.gameBoard.length; row++) {
			//Loop through each row element
			var randNum = Math.random() * 9) + 1;
			var mine = "mine";
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

