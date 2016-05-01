$(document).ready( function(){
	numberOfRows = 16;
	numberofCols = 16;
	for (var i = 0; i < (numberofCols * numberOfRows); i++) {
		$(".container").append("<div></div>");
	};

})