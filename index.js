

const drum = document.querySelectorAll(".drum");

// for(let i=0; i<drum.length; i++){
//     drum[i].addEventListener("click", handleClick);
// }


//This basically adds an event listener to all the buttons and this will substitute the forloop.
document.addEventListener("click", e=>{
    if(e.target.matches(".drum")){
        handleClick();
    }
} );



function handleClick(){
    alert("I got clicked");
}