var targetNumber;
var counter;
var win = 0;
var losses = 0;


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
function newGame(){
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    targetNumber=getRandomArbitrary(19,120);
    console.log(targetNumber);
$("#number-to-guess").text(targetNumber);
 counter = 0;
 $("#current-number").html(counter);
 var crystal = $(".crystal-image > img");

crystal.each(function(){

var newArr = arr.sort(function (a, b) {
    
    return 0.5 - Math.random()
});
console.log(newArr);
console.log("newArr ", newArr.pop());
$(this).attr("data-random", newArr.pop());
});
}



// var x=getRandomArbitrary(0,11);
// $(".crystal-image").attr("data-crystalvalue", x);


   
$(".crystal-image > img").on("click",function(){
    var crystalValue=($(this).attr("data-random"));
    crystalValue=parseInt(crystalValue);
    console.log(crystalValue);
    counter=counter+crystalValue;
    console.log(counter);
    // alert("current value:"+counter);
    $("#current-number").html(counter);

    if (counter===targetNumber){
        alert("you win")
        win=win+1;
        $("#win").html(win);
        newGame();
    }
    else if (counter>=targetNumber){
        alert("You lose!");
        losses=losses+1;
        $("#losses").html(losses);
        newGame();
    }
});
newGame();