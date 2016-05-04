
defaultSize = 16;
var screenWidth = $(window).width() - 10;
console.log(screenWidth);

$(document).ready( function(){
	drawGrid(defaultSize);
})

function getUserEntry(){
	clearGrid();
	var newNumberOfColumns = prompt("Hello!\n How many squares do you want per side, bud?", defaultSize);
    if (newNumberOfColumns > 0 && newNumberOfColumns < 500){
    	numberofCols = newNumberOfColumns;
    }else{
    	numberofCols = defaultSize;
    }
    drawGrid(numberofCols);
}

function drawGrid(gridSize){
	// Add divs as children of .container
	for (var i = 0; i < (gridSize * gridSize); i++) {
		$(".container").append("<div></div>");
	};

	// Must create divs before you can add styling to them
	// Always start with generic and work towards specific to avoid override!!
	divWidth = screenWidth/gridSize - 2;
	$("div").width( String(divWidth) + "px" );
	$("div").height( String(divWidth) + "px" );
	$(".container").width( String(screenWidth) + "px" );
	$(".container").height( String(screenWidth) + "px" );

	// Does not work when declared outside ready. Must be immedaitely applied to existing divs when outside?
	$(".container > div").hover( function(){
		$(this).addClass("changed");
	})
}

function clearGrid(){
	// $(".container > div").remove();
	$(".container").empty();
}





