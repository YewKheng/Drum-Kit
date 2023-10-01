// Detect when button is clicked
// Get the number of buttons
const numOfDrumButtons = document.querySelectorAll(".drum").length;

// Add click listener for all the buttons
for (let i = 0; i < numOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        let buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML); // Sound is added when button is clicked

        buttonAnimation(buttonInnerHTML); // Animation is added when button is clicked
    });
}

// Detecting when key is pressed
document.addEventListener("keydown", function(onPressed) {
    
    makeSound(onPressed.key); // Sound is added by when key is pressed

    buttonAnimation(onPressed.key); // Animation is added when key is pressed
});

// Add sound when button is clicked or pressed
function makeSound(keyName) {

    switch (keyName) {
        case "q":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "w":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "e":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "r":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "i":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "o":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "p":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(buttonInnerHTML);
            break;

    }
};
// Set Animation when key is pressed
function buttonAnimation(currentKeyPressed) {

    let activeKey = document.querySelector("." + currentKeyPressed);

        activeKey.classList.add("pressed");

        // Remove Animation based on timer
        setTimeout(function() {
            activeKey.classList.remove("pressed");
        }, 100);
}




