//Sara Palandeng
//RTW
//Assignment 4


//Declare array to keep track of Circle objects

var circles = [];

function setup(){
	createCanvas(500,500);
	
	

	for (var x = 50; x < width; x+=80){
		for(var y = 50; y < height; y+= 80){
			circles.push(new Circle(x,y));
		}
	}
	function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}
}

function draw(){
	//SET BACKGROUND COLOR
	background(248, 230, 210);
	

	//DISPLAY, SO ACTUALLY DRAW THE CIRCLE HERE
	for (var i = 0; i < circles.length; i++){
		circles[i].display();
	}


	
}

//DRAWING DATA
function sendDrawing(message){
	socket.emit('drawing', message);
	console.log(message);
}



//CIRCLE OBJECT

function Circle (tempX, tempY){
	// CONSTRUCTOR

	this.x = tempX;
	this.y = tempY; 
	this.size = 20;
	


	//METHODS
	this.display = function(){
		//FUNCTION TO DRAW CIRCLE
		noStroke();
		ellipse(this.x, this.y, this.size, this.size);
	}

	//MOUSE PRESSED FUNCTION
	this.mousePressed = function (){
		//MOUSE CLICK
		var d = dist(mouseX, mouseY, this.x, this.y);
		if (d < 100) {
			fill(235, 126, 87);
		}
	}
}

