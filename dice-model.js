function Dice (minInt, maxInt) {
	this.minInt = minInt;
	this.maxInt = maxInt;
}

Dice.prototype.roll = function () {
	 return getRandomInt(this.minInt,this.maxInt); 
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}