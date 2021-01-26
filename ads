function blah(){
    for (var i = 0; i < asteroids.length; i++) { //kode der render asteroider
        if (ship.hits(asteroids[i])) {
        //skal skrive en kode hvilken enten reloader siden eller tilføje liv
        location.reload();    
    }
        asteroids[i].render();
        asteroids[i].update();
        asteroids[i].edges();

    }
}

   if (ship.hits(asteroids[i])) {
        //skal skrive en kode hvilken enten reloader siden eller tilføje liv
        location.reload();    
    }