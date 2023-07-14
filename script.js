let counter = 0;
let playerCount = 0;
let computerCount = 0;
let winnerName = "";

const clicked = (mode) => {
	counter++;
	const player = document.querySelector('.player');
	if (player && counter < 6) {
		player.style.background = `url("./assets/${mode}.jpg")`;
		player.style.backgroundSize = 'contain';
		const compValue = computerTurn();
		winner(mode, compValue);
	}

	if (counter == 5) {
		const winner = document.querySelector('.winner');

		if (playerCount == computerCount) {
			winnerName = "No One";
		} else if (playerCount > computerCount) {
			winnerName = "Player";
		} else if (playerCount < computerCount) {
			winnerName = "Computer";
		}
		winner.textContent = `🎈 ${winnerName} WINS ✅`;
	}
}

const computerTurn = () => {
	const val = ['rock', 'paper', 'scissors'];
	const rand = Math.floor(Math.random()*val.length);

	const computer = document.querySelector('.computer');
	if (computer) {
		computer.style.background = `url("./assets/${val[rand]}.jpg")`;
		computer.style.backgroundSize = 'contain';
	}

	return (val[rand]);
}

const winner = (plyVal, compVal) => {
	if (plyVal == 'rock' && compVal == 'paper') {
		computerCount++;
	} else if (plyVal == 'paper' && compVal == 'rock') {
		playerCount++;
	} else if (plyVal == 'rock' && compVal == 'scissors') {
		playerCount++;
	} else if (plyVal == 'scissors' && compVal == 'rock') {
		computerCount++;
	} else if (plyVal == 'paper' && compVal == 'scissors') {
		computerCount++;
	} else if (plyVal == 'scissors' && compVal == 'paper') {
		playerCount++;
	}

	const scoreboard = document.querySelector('.score');
	scoreboard.textContent = `${playerCount} ${computerCount}`;
}

const resetgame = () => {
	counter = 0;
	playerCount = 0;
	computerCount = 0;
	winnerName = "";

	const scoreboard = document.querySelector('.score');
	scoreboard.textContent = `${playerCount} ${computerCount}`;

	const winner = document.querySelector('.winner');
	winner.textContent = "";

	const player = document.querySelector('.player');
	player.style.background = 'gray';

	const computer = document.querySelector('.computer');
	computer.style.background = 'gray';
}