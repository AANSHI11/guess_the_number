// random value generated
  var y = Math.floor(Math.random() *10 + 1);
// counting the number of guesses
function playAgain(){
    y= Math.floor(Math.random() * 10+1);
}
// made for correct Guess
if(x ==y)
{
    alert("CONGRATULATIONS MASTER GUESSER!!!"+playername+"YOU GUESSED IT RIGHT IN" + guess + "GUESS");
    guess=1;
}
else if(x > y)
{
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else
{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER")
}
// function for number guessed by user
var x = document.getElementById("guessField").ariaValueMax;     
