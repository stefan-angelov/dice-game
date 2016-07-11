function getSettings (settings) {
	settings = settings || {};
	return {
		diceMin: settings.diceMin || 0,
		diceMax: settings.diceMax || 35,
		endScore: settings.endScore || 100
	};  
};
// Game
function GameRules(endScore) {
	this.endScore = endScore;
}

GameRules.prototype.findWinner = function(players){
	var len = players.length;
	var winners = [];

	for (var i = 0; i < len; i++) {
		var player = players[i];
		if (this.endScore <= player.score) {
			winners.push(player);
		}
	}
	return winners;
};

function App(players, gameRules) {
	this.players = players;
	this.gameRules = gameRules;
	this.roundNum = 0;
};

App.prototype.playRound = function(){
	this.roundNum++;
	console.log('Round '+ this.roundNum);
	var players = this.players;
	var len = players.length;

	for (i=0; i < len; i++) {
		var player = players[i];
	 	var dices = player.throw();
	 	dices = dices || "Knockout";

	 	console.log('Player name: '+player.name+' Score: '+player.score+' Dices: '+dices);
	} 

	 var winners = this.gameRules.findWinner(players);
	 if (winners.length) {
	 	console.log(winners);
	 	return winners;
	} else {
	 	return this.playRound();
	}
};

var settings = getSettings({
	diceMin:45,
	diceMax:583,
	endScore:20000
});

var dice = new Dice(settings.diceMin, settings.diceMax);

var player1 = playerModel("Pesho",567,dice);
var player2 = playerModel("Gosho",99,dice);
var player3 = playerModel("Mitko",987,dice);
var player4 = playerModel("Asen",255,dice);
var player5 = playerModel("Ivan",1100,dice);

var players = [player1,player2,player3,player4,player5];

var gameRules = new GameRules(settings.endScore);

var app = new App(players, gameRules);
app.playRound();
