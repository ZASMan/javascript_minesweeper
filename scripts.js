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
					//Next To Mine
					this.gameBoard[i][j-1]++;
					this.gameBoard[i][j+1]++;
					//Above the mine
					//this.gameBoard[i-1][j]++;					
					//Below the mine
					//this.gameBoard[i+1][j]++;
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
				currentRow.innerHTML +="<td>"+  this.gameBoard[i][j] + "</td>";
				};
			};
		};
	},

};

game.addMines(game.gameBoard);
console.log(game.gameBoard);
game.drawGame();
