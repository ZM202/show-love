//1. Created a button called "Show Me The Love"
//2. Above the button, insert the heart image.
//3. A button should run a function that create alerts w/diff message based on the input.
//4. Ask the user what is their name.
//5. Ask the user what is their favorite color.
//6. Pick 3 of favorite colors & if the user types within the favorite colors, create alert w/positive message.
//7. If the user input different color, not within fav. color, then tell them we aren't compatiable.


// let button = document.createElement("button");
// button.id = "Show Me the Love";
// console.log(button);
// let baseMessage = `Hey! our ${favColor} matched.` 
// let baseMessage2 = `Sorry, we don't matched. Try again!`

let name = prompt ("What is your name?")
let favColor = prompt("What is your favorite color?")

if (color === "blue" || color ===  "red" || color === "green") {
    true;
    alert  (`Hey! our ${favColor} matched.`);
} else {
    false;
    alert (`Sorry, our ${favColor} don't matched. Try again!`);
}



