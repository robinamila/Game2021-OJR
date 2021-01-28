//forskellige variabler
                        // HUSK AT TILFØJE SPAWN PROTECTION
var ship;
var asteroids = [];
var lasers = [];
var isRight = false;
var isLeft = false;
var isUp = false; 
var level = 0;
var score = 0;
let a = 1



function spawnAsteroid(){ // Denne funktion bruger vi senere til at lave flere asteroider
    for (var i = 0; i < level + 10; i++) { //Denne kode er den der bestemmer hvor mange asteroider der er 
        asteroids.push(new Asteroid());
    } 
}

function setup() { //kode der laver canvasset og bestemmer hvor mange asteroider der bliver tilføjet
    createCanvas(windowWidth, windowHeight);
    ship = new Ship();
    spawnAsteroid();
}


function draw(){
    background(0);


    for (var i = 0; i < asteroids.length; i++) { //kode der render asteroider
        if (ship.hits(asteroids[i])) {
           location.reload();
        }

      asteroids[i].render();
        asteroids[i].update();
        asteroids[i].edges();
    }

    for (var i = lasers.length-1; i >=0; i--) { //kode der render laser skud 
        lasers[i].render();
        lasers[i].update();
        if (lasers[i].offscreen()) {
            lasers.splice(i, 1);
        } else {
    for (var j = asteroids.length-1; j >= 0; j--){ //kode der ødelægger asteroiderne 
        if (lasers[i].hits(asteroids[j])) {
        if (asteroids[j].r > 100){ 
        var newasteroids = asteroids[j].breakup();
        asteroids = asteroids.concat(newasteroids);
        }
       
        asteroids.splice(j, 1);
        lasers.splice(i, 1);
        if(asteroids.length == 0) {
            level++;
            spawnAsteroid();
        } 
        break;
        }
   
    }
    }
}


        ship.render();
        ship.turn();
        ship.update(); 
        ship.edges();
        ship.movement();
       



}  

function keyReleased (){
    ship.setRotation (0);
    ship.boosting(false);
    // WDA
    if (keyCode == 68) {
        isRight = false
    } 
    if (keyCode == 65) {
        isLeft = false
    }
    if (keyCode == 87) {
        isUp = false
    } //Piltaster
    if (keyCode == 39) {
        isRight = false
    } 
    if (keyCode == 37) {
        isLeft = false
    }
    if (keyCode == 38) {
        isUp = false
    }

 }

function keyPressed () { //kode til at ske noget når man trykker på forskellige knapper
    //WDA
    if (keyCode == 32){ 
        lasers.push(new Laser(ship.pos, ship.heading));
    }  
    if (keyCode == 68) {
        isRight = true
    }
    if (keyCode == 65) {
        isLeft = true
    }
    if (keyCode == 87) {
        isUp = true
    } //Piltaster
    if (keyCode == 219) {
        for (var i = 0; i < 10; i++) { //Denne kode er den der bestemmer hvor mange asteroider der er 
            asteroids.push(new Asteroid());
        } 
    }
    if (keyCode == 37) {
        isLeft = true
    }
    if (keyCode == 38) {
        isUp = true
    }
    if (keyCode == 80){
        window.location.href = "https://www.youtube.com/watch?v=iik25wqIuFo&ab_channel=Rickroll%2Cbutwithadifferentlink"
    }
   if (keyCode == 72){
    window.location.href   

   }
    // 32 = mellemrum
    // 68 = D 
    // 65 = A
    // 87 = W
    // 80 = P (rickRoll)
}
