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
					this.gameBoard[i][j] = "M";
					//Set adjacent squares
					//Increment number of mines next To Mine
					this.gameBoard[i][j-1]++;
					this.gameBoard[i][j+1]++;
					//Increment number of mines above it the mine
					if (i >=1 ) {
						console.log("Adding to previous line. Previous line is now " + this.gameBoard[i-1][j]);
						this.gameBoard[i-1][j]++;
					};
					//Increment number of mines below the mine
					if (i < 8) {
					this.gameBoard[i+1][j]++;
					};
				}
			}
		};
	},

	drawGame: function() {
		var gameArea = document.getElementById('game-area');
		gameArea.innerHTML += "<table id='game-board'></table>";	
		var gameBoard = document.getElementById('game-board');
		//Create rows
		for (i=0; i < this.gameBoard.length; i++) {
			gameBoard.innerHTML += "<tr id='row-" + i + "'></tr>";
		};
		//Create Squares for each row based on the gameBoard arrays
		for (i=0; i < this.gameBoard.length; i++) {
			var currentRow = document.getElementById('row-' + i);
			for(j=0; j < this.gameBoard[i].length; j++) {
				//NaN randomly appearing as 10th array element
				if (this.gameBoard[i][j] === NaN) {
					//How to not add td with NaN if NaN appears?
				} else {
				currentRow.innerHTML +="<td class='start-mine'>"+  this.gameBoard[i][j] + "</td>";
				};
			};
		};
		console.log("Game Board drawing complete.");
	},

};

game.addMines(game.gameBoard);
game.drawGame();
