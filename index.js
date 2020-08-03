var lengthOfDrums = document.querySelectorAll(".drum").length;
for (var i=0; i<lengthOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}
document.addEventListener("keydown",handleKeydown);

function handleKeydown(e){
    whichKey(e.key);
    myAnimation(e.key);
}

function handleClick(){
    var alphabet=this.textContent;
    whichKey(alphabet);
    myAnimation(alphabet);
}

// soundGenerator...

function whichKey(alpha){
    var audio;
    switch(alpha){
        case "w":audio=new Audio("sounds/tom-1.mp3"); break;
        case "a":audio=new Audio("sounds/tom-2.mp3"); break; 
        case "s":audio=new Audio("sounds/tom-3.mp3"); break;
        case "d":audio=new Audio("sounds/tom-4.mp3"); break;
        case "j":audio=new Audio("sounds/snare.mp3"); break;
        case "k":audio=new Audio("sounds/crash.mp3"); break;
        case "l":audio=new Audio("sounds/kick-bass.mp3"); break; 
    }
    audio.play();
}

// animator...

function myAnimation(key){
    var pressed=document.querySelector("."+key);
    pressed.classList.add("pressed");
    setTimeout(function(){
        pressed.classList.remove("pressed");
    },200);
}