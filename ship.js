function Ship() {
    this.pos = createVector(width/2, height/2);
    this.r = 20;
    this.heading = 0;
    this.rotation = 0; 
    this.vel = createVector(0, 0);
    this.isBoosting = false;

     this.boosting = function(b){
          this.isBoosting = b;
     }

    this.update = function() {
        if (this.isBoosting) {
            this.boost();
    }
        this.pos.add(this.vel); 
        this.vel. mult(0.9)
    } 

    this.boost = function (){
         var force = p5.Vector.fromAngle(this.heading);
         force.mult(0.5);
         this.vel.add(force);
    }

    this.hits = function(asteroid) {
        var d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
        if (d < this.r + asteroid.r) {
            return true;
        } else {
            return false
        }
    }


    this.render = function() {
     if (isUp) { //når w bliver trykket ned bliver boost rendert
        push ();
        translate(this.pos.x, this.pos.y);
        rotate(this.heading + PI/2);
        fill(0);
        stroke(255);
        triangle(-this.r, this.r, this.r, this.r, 0, -this.r); 
// kode nedenunder er for boost animation
        stroke(255);
        fill (color = "red")  
        triangle(-this.r, this.r, this.r, this.r, 0, this.r*2);
        noStroke(0);
        fill (color = "orange")  
        triangle(-this.r, this.r, this.r, this.r, 0, this.r*1.5);
        noStroke();
        fill (color = "red")  
        triangle(-this.r, this.r, this.r, this.r, 0, this.r*1.25);
            } else { //"else" hvis ikke, så bliver det normale sorte skib rendert 

        push ();
        translate(this.pos.x, this.pos.y);
        rotate(this.heading + PI/2);
        fill(0);
        stroke(255);
        triangle(-this.r, this.r, this.r, this.r, 0, -this.r); 
        }

    }

    this.movement = function() { //kode for movement
        if (isUp) {
            push();
            ship.boosting;
            pop();
        }
        ship.boosting(isUp)

        if (isRight) {
            ship.setRotation (0.1);
        }

        if (isLeft) {
            ship.setRotation (-0.1);
        }
        if (!isLeft && !isRight || isLeft && isRight) {
            ship.setRotation (0);
        }

    }

    this.edges = function() { //kode for at skibet bliver inde i skærmen
        if (this.pos.x > width +  this.r) {
            this.pos.x = -this.r;     
        } else if (this.pos.x < -this.r) {
            this.pos.x = width + this.r;
        }

        if (this.pos.y > height + this.r) {
            this.pos.y = -this.r;   
        } else if (this.pos.y < -this.r) {
            this.pos.y = height + this.r;
        }
    }

    this.setRotation = function(a) {
        this.rotation = a;
    }

    this.turn = function() {
        this.heading += this.rotation;
    }
}