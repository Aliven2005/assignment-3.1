// game function
function game() {
    // var x with random gen from 1 to 6
    var x = Math.floor((Math.random()*6)+1);
     // var x with random gen from 1 to 6
    var y = Math.floor((Math.random()*6)+1);
    // var car with som of x and y
    var car = x + y;

    // if car equals 7 or 11 code runs
    if (car==7 || car ==11){
        // getelementById that changes p tag with id push
        document.getElementById("push").innerHTML="Dice 1:" + " " + x + "<br>" + "Dice 2:" + " " + y + "<br>" + "You lose!";
    } // else if x equals y and x is an even number code runs
    else if (x ==y && x%2 ==0 ){
         // getelementById that changes p tag with id push
        document.getElementById("push").innerHTML="Dice 1:" + " " + x + "<br>" + "Dice 2:" + " " + y + "<br>" + "You win!";
    } // Runs if none of the previous conditions are met
    else{
         // getelementById that changes p tag with id push
        document.getElementById("push").innerHTML="Dice 1:" + " " + x + "<br>" + "Dice 2:" + " " + y + "<br>" + "you pushed!";
    }
}