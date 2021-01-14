//setrotation



var ship;
var asteroid = [];

function setup() {
  createCanvas(windowWidth, windowHeight); 
  ship = new ship();
  
  
}
 

function draw(){
  background(0) // Laver vores baggrund sort
  ship.render(); //Tegner vores rumskib inde på canvasset
  ship.turn();
  ship.update();
  ship.edges();
  
  for (var i = 0; i < asteroid.length; i++) {
    asteroid [i].render();
  }
}

function keyReleased(){
      ship.setRotation(0.0);
// Funktionen gør at når jeg giver slip for tasten bliver den stående
      ship.boosting(false);
}

function keyPressed(){ //Funktion der gør at rumskibet drejer i forhold til hvilken knap der bliver trykket på
  if (keyCode == RIGHT_ARROW){
    ship.setRotation(0.1);
  } 
 else if (keyCode == LEFT_ARROW){
    ship.setRotation(-0.1);
  }
  else if (keyCode == UP_ARROW) {
    ship.boosting(true);
    
  }
  
}