// var gamemodeEasy = [25,50];
// var gamemodeMedium = [50,100];               Til senere hvor man eventuelt kan tilføje sværhedsgrader 
// var gamemodeHard = sadsad

function Asteroid(pos, r) { //kode nedenunder laver asteroiderne 
    if (pos) {
        this.pos = pos.copy();
    } else {
    this.pos = createVector(random(width), random (height));
    }
    if (r) {
    this.r = r*0.5;
    } else {
        this.r = random(25,50); // kode der bestemmer hvor store asteroiderne er 
    }



    this.vel = p5.Vector.random2D();
    this.total = floor (random(5,15)) // kode der bestemmer hvor skarpe asteroiderne er 
    this.offset = [];
    for (var i = 0; i < this.total; i++) {
        this.offset [i] = random(-this.r*0.3, this.r*0.3)
    }

    this.update = function () {
        this.pos.add (this.vel); 
    }

    this.render = function () {
        push ();
        stroke (color = "white");
        fill(color = "grey"); 
        translate(this.pos.x, this.pos.y);
        
      
    beginShape();
    for (var i = 0; i < this.total; i++) {
        var angle = map(i, 0 , this.total, 0, TWO_PI); 
        var r = this.r + this.offset[i]; 
        var x = r * cos(angle); 
        var y = r * sin(angle);
        vertex (x,y);

    }
    endShape(CLOSE);
    pop ();
    }

    this.breakup = function() { //kode der bestemmer de nye ødelagte asteroider ved hjælp af arrays
        var newA = [];
        newA[0] = new Asteroid(this.pos, this.r);
        newA[1] = new Asteroid(this.pos, this.r);
        return newA;
    }

    this.edges = function() { //sørger for at asteroiderne bliver inde i skærmen
        if (this.pos.x > width +  this.r) {
            this.pos.x = -this.r;     
        } else if (this.pos.x < -this.r) {
            this.pos.x = width + this.r;
        }

        if (this.pos.y > height +  this.r) {
            this.pos.y = -this.r;   
        } else if (this.pos.y < -this.r) {
            this.pos.y = height + this.r;
        }
    }
}