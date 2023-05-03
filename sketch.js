//The setup function only happens once
var scarface=0;
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(49, 104, 132 ); //an RGB color for the canvas' background
  //circle
  stroke(207, 93, 44 ) // an RGB color for the circle's border
  fill(130,200,127,scarface); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,200,150); // center of canvas, 20px dia
  rect(150,scarface,150,200); 
}


function mousePressed()  { 
if (scarface>=100)
{sandy=0} else 
{scarface=scarface+1;}
}
