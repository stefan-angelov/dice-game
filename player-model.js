function playerModel(name, knockOutNum, dice) {
	
	function Player() {
		this.name = name;
		this.knockOutNum = knockOutNum;
		this.score = 0;
	}

	Player.prototype.throw = function () {
		var result = dice.roll() + dice.roll();
		if (result !== knockOutNum) {
			this.score += result;
			return result;
		} else {
			return false;
		}
	}

	var knockOutMin = getKnockOutNum(dice.minInt); 
	var knockOutMax = getKnockOutNum(dice.maxInt);
	
	if (knockOutMin <= knockOutNum && knockOutNum <= knockOutMax) {
		// knockout number is valid
		return new Player();
	} else {
		// knockout number is NOT valid
		return false;
	}
}

function getKnockOutNum (num) {
	return num*2
}
