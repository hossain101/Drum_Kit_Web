//This is the code for the button press event listener from the course.

// const drum = document.querySelectorAll(".drum");

// for(let i=0; i<drum.length; i++){
//     drum[i].addEventListener("click", function(){
//         var buttonInnerHTML = this.innerHTML;
//         switch(buttonInnerHTML){
//             case "w":
//                 let audio = new Audio("sounds/tom-1.mp3");
//                 audio.play();
//                 break;
//             case "a":
//                 let audio1 = new Audio("sounds/tom-2.mp3");
//                 audio1.play();
//                 break;
//             case "s":
//                 let audio2 = new Audio("sounds/tom-3.mp3");
//                 audio2.play();
//                 break;
//             case "d":
//                 let audio3 = new Audio("sounds/tom-4.mp3");
//                 audio3.play();
//                 break;
//             case "j":
//                 let audio4 = new Audio("sounds/snare.mp3");
//                 audio4.play();
//                 break;
//             case "k":
//                 let audio5 = new Audio("sounds/crash.mp3");
//                 audio5.play();
//                 break;
//             case "l":
//                 let audio6 = new Audio("sounds/kick-bass.mp3");
//                 audio6.play();
//                 break;
//             default:
//                 console.log("No sound");
//         }
//     });
// }

//This basically adds an event listener to all the buttons and this will substitute the forloop. this uses the arrow function and the event object to get the target element and then we use the switch statement to play the sound.

document.addEventListener("click", (e) => {
  if (e.target.matches(".drum")) {
    var buttonCharacter = e.target.innerHTML;
    playSound(buttonCharacter);
  }
});

document.addEventListener("keypress", (e) => {
  playSound(e.key);
});

function playSound(buttonCharacter) {
  switch (buttonCharacter) {
    case "w":
      let audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      let audio1 = new Audio("sounds/tom-2.mp3");
      audio1.play();
      break;
    case "s":
      let audio2 = new Audio("sounds/tom-3.mp3");
      audio2.play();
      break;
    case "d":
      let audio3 = new Audio("sounds/tom-4.mp3");
      audio3.play();
      break;
    case "j":
      let audio4 = new Audio("sounds/snare.mp3");
      audio4.play();
      break;
    case "k":
      let audio5 = new Audio("sounds/crash.mp3");
      audio5.play();
      break;
    case "l":
      let audio6 = new Audio("sounds/kick-bass.mp3");
      audio6.play();
      break;
    default:
      console.log("No sound");
  }
}
