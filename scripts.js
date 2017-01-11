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
				//Add Square to row (HTMl values are added temporarily for testing)
				currentRow.innerHTML +="<td id='" + squareId +
				"'style='background-color: #d3d3d3; width: 50px; height: 50px'"+
				"onClick='game.selectMine(this.id)'" +
				"oncontextmenu='game.setFlag(this.id)'>"+ 
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
			//Explode clicked mine and reveal all mines
			this.explodeMine(squareRow, squareRowPosition);
			alert("Game over!");
		} else if (this.gameBoard[squareRow][squareRowPosition] === "0") {
			//Reveal that mine
			console.log("Revealing blank mine");
			this.revealBlank(squareRow, squareRowPosition);
		};
	},

	explodeMine: function(row, position) {
		var squareRow = row;
		var squareRowPosition = position;
		var clickedMineElement = document.getElementById(squareRow + "#" + squareRowPosition);
		clickedMineElement.style.backgroundColor = "#a8a8a8";
		clickedMineElement.style.color = "red";
		clickedMineElement.innerHTML = "*";
		clickedMineElement.style.textAlign = 'center';
		//Change original array value so that the color does not change to black
		//when iterating through other mines
		this.gameBoard[squareRow][squareRowPosition] = "Exploded";
		var tdCollection = document.getElementsByTagName("td");
		var idArray = [];
		for (i = 0; i < tdCollection.length; i++) {
			var parsedId = tdCollection[i].id.replace(/[#]/g, "");
			idArray.push(parsedId);
		};
		for (j=0; j < idArray.length; j++) {
			var squareRow = idArray[j][0];
			var squareRowPosition = idArray[j][1];
			if (this.gameBoard[squareRow][squareRowPosition] == "M") {
				var mineElement = document.getElementById(squareRow + "#" + squareRowPosition);
				mineElement.style.backgroundColor = "#a8a8a8";
				mineElement.style.color = 'black';
				mineElement.innerHTML = "*";
				mineElement.style.textAlign = 'center';
			};
		};	
	},

	revealBlank: function(row, position) {
		var squareRow = row;
		var squareRowPosition = position;
		var clickedMineElement = document.getElementById(squareRow + "#" + squareRowPosition);
		clickedMineElement.style.backgroundColor = "#a8a8a8";
	},

	//Right Click
	setFlag: function(squareId) {
		console.log("Right clicked square " + squareId);
		var rightClickedSquare = document.getElementById(squareId);
		rightClickedSquare.style.color = "blue";
		rightClickedSquare.innerHTML = "<1";
		rightClickedSquare.style.textAlign = 'center';
		var boardPosition = squareId.replace(/[#]/g, "");
		var squareRow = boardPosition[0];
		var squareRow = boardPosition[1];
		
	},

};

game.addMines(game.gameBoard);
game.drawGame();
