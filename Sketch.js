var ship;
var asteroids = [];
var lasers = [];
var isRight = false;
var isLeft = false;
var isUp = false; 


function setup() {
    createCanvas(windowWidth, windowHeight);
    ship = new Ship();
    for (var i = 0; i < 20; i++) {
    asteroids.push(new Asteroid());
} 
}

function draw(){
    background(0);
    

    for (var i = 0; i < asteroids.length; i++) {
        if (ship.hits(asteroids[i])) {
            console.log("ups");
        }
        asteroids[i].render();
        asteroids[i].update();
        asteroids[i].edges();

    }

    for (var i = lasers.length-1; i >=0; i--) {
        lasers[i].render();
        lasers[i].update();
        if (lasers[i].offscreen()) {
            lasers.splice(i, 1);
        } else {
        for (var j = asteroids.length-1; j >= 0; j--){
        if (lasers[i].hits(asteroids[j])) {
         if (asteroids[j].r > 20){
         var newasteroids = asteroids[j].breakup();
         asteroids = asteroids.concat(newasteroids);
         } 
         asteroids.splice(j, 1);
         lasers.splice(i, 1);
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

    if (keyCode == 68) {
        isRight = false
    } 
    if (keyCode == 65) {
        isLeft = false
    }
    if (keyCode == 87) {
        isUp = false
    }

 }

function keyPressed () {
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
    }
 }
