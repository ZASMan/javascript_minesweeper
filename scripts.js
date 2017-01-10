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

	gameOver: false,
	
	addMines: function(gameBoard) {
		//Loop through each row
		var board = this.gameBoard
		for (i = 0; i < board.length; i++) {
			var randNum = Math.floor(Math.random() * 9) + 1;
			//Loop through each square in each row
			var singleRow = this.gameBoard[i]
			for (j =0; j < singleRow.length; j++) {
				if (j === randNum) {
					//Set equal to mine if square index 
					this.gameBoard[i][j] = "M";
					//Set adjacent squares
					//Increment number of mines next To Mine
					if (this.gameBoard[i][j-1] != "M") {	
						this.gameBoard[i][j-1]++;
					};
					if (this.gameBoard[i][j+1] != "M") {
						this.gameBoard[i][j+1]++;
					};
					//Increment number of mines above it the mine
					if (i >=1 && this.gameBoard[i-1][j] != "M" ) {
						this.gameBoard[i-1][j]++;
					};
					//Increment number of mines below the mine
					if (i < 8 && this.gameBoard[i+1][j] != "M") {
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
			//Identify their type by class and location in array by id
			//Also add onclick event for selecting
			for(j=0; j < this.gameBoard[i].length; j++) {
				var squareRow = i;
				var squareRowPosition = j;
				var squareValue = this.gameBoard[i][j];
				var squareId = squareRow + "#" + squareRowPosition;
				console.log("Square value is " + squareValue);
				//Add Square to row
				currentRow.innerHTML +="<td id='" + squareId +
				"'style='background-color: #A9A9A9; width: 50px; height: 50px'"+
				"onClick='game.selectMine(this.id)'>"+ 
				squareValue + "</td>";
			};
		};
		console.log("Game Board drawing complete.");
	},
	
	//Left Click
	selectMine: function(squareId) {
		console.log("Clicked square " + squareId);
		var boardPosition = squareId.replace(/[#]/g, "");
		console.log("board position is " + boardPosition);
		var squareRow = boardPosition[0];
		var squareRowPosition = boardPosition[1];
		if (this.gameBoard[squareRow][squareRowPosition] === "M") {
			//Explode that mine
			this.explodeMine(squareRow, squareRowPosition);
			//Explode all other mines
			var tdCollection = document.getElementsByTagName("td");
			var idArray = [];
			for (i = 0; i < tdCollection.length; i++) {
				var parsedId = tdCollection[i].id.replace(/[#]/g, "");
				idArray.push(parsedId);
			};
			for (j=0; j < idArray.length; j++) {
				var boardSquareRow = idArray[j][0];
				var boardSquareRowPos = idArray[j][1];
				if (this.gameBoard[boardSquareRow][boardSquareRowPos] == "M") {
					this.explodeMine(boardSquareRow, boardSquareRowPos);
				};
			};
			//Loop through the tdCollection node list and then push all of the
			//id's to an array
			//parse the # out from the id's and then compare them with the board
			//array and see if they are m or not
			alert("Game over!");
		} else {
			//Parse value to number
			var numNearbyMines = parseInt(this.gameBoard[squareRow][squareRowPosition]);
			
		};
	},

	explodeMine: function(row, position) {
		var boardSquareRow = row;
		var boardSquareRowPos = position;
		var mineId = document.getElementById(boardSquareRow + "#" + boardSquareRowPos);
		mineId.style.backgroundColor = 'red';
		mineId.innerHTML = "*";
		mineId.style.textAlign = 'center';
	},

	//Right Click
	setFlag: function() {

	},

};

game.addMines(game.gameBoard);
game.drawGame();
