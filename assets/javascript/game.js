
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

var targetNumber=getRandomArbitrary(19,120);
console.log(targetNumber);
$("#number-to-guess").text(targetNumber);
var counter = 0;
var win = 0;
var losses = 0;

// var x=getRandomArbitrary(0,11);
// $(".crystal-image").attr("data-crystalvalue", x);
var crystal = $(".crystal-image");

crystal.each(function(){
  var random = getRandomArbitrary(0,11);
  console.log(random);
  $(this).attr("data-random", random);
});

   
$(".crystal-image").on("click",function(){
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
        $("#wins").html(win);
    }
    else if (counter>=targetNumber){
        alert("You lose!");
        losses=losses+1;
        $("#losses").html(losses);

    }
});