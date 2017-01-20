function multiplesOfThreeAndFive() {
	var sum = 0;
	for (var i = 1; i < 1000; i++) {
		if (i % 3 == 0 || i % 5 == 0) {
			sum += i;
		}
	}
	document.getElementById("answer1").innerHTML = "The answer is " + sum;
}

function evenFibonacciNumbers() {
	var sum = 0;
	var i = 1;
	var f = fibonacci(1);
	while (f <= 4000000) {
		if (f % 2 == 0) {
			sum += f;
		}
	f = fibonacci(++i);
	}
	document.getElementById("answer2").innerHTML = "The answer is " + sum;
}

function fibonacci(x) {
	if (x == 0 || x == 1) {
		return 1;
	}
	else {
		return fibonacci(x - 1) + fibonacci(x - 2);
	}
}

function largestPrimeFactor() {
	
}
