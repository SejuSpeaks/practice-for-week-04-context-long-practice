class Calculator {
	constructor(total = 0) {
		this.total = total;
	}

	add(num) {
		this.total = num + this.total;
		return this.total
	}

	subtract(num) {
		this.total = this.total - num
		return this.total;
	}

	divide(num) {
		this.total = this.total / num
		return this.total;
	}

	multiply(num) {
		this.total = this.total * num;
		return this.total;
	}
}

let calculator = new Calculator();
console.log(calculator.add(50));      // => 50
console.log(calculator.subtract(35)); // => 15
console.log(calculator.multiply(10)); // => 150
console.log(calculator.divide(5));    // => 30
console.log(calculator.total)         // => 30


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}
