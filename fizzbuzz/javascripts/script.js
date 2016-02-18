var main = function () {
	"use strict"

	var element;

	for (var count = 1; count <= 100; count++) {
		element = $("<p>");
		if(count % 3 === 0 && count % 5 === 0) {
			element.append("FizzBuzz");
		} else if (count% 3 === 0) {
			element.append("Fizz");
		} else if (count % 5 === 0){
			element.append("Buzz");
		}
		else {
			element.append(count);
		}
		$("main").append(element);
	}
}

$(document).ready(main);