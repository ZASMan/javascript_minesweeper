var game = {

	//Each array is one row
	gameBoard: [
		[0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0]
	],
	
	addMines: function(gameBoard) {
		//Loop through each row
		for (i = 0; i < this.gameBoard.length; i++) {
			var randNum = Math.floor(Math.random() * 9) + 1;
			//Loop through each square in each row
			for (j =0; j < this.gameBoard[i].length; j++) {
				if (j === randNum) {
					//Set equal to mine if square index 
					this.gameBoard[i][j] = "mine";
					//Set adjacent squares
					//Next To Mine
					this.gameBoard[i][j-1]++;
					this.gameBoard[i][j+1]++;
				}
			}
		};
	},

};

game.addMines(game.gameBoard);
console.log(game.gameBoard);
