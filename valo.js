var Pop = document.getElementById("PopUp");
let HoverFX = new Audio("HoverFX.mp3");

function popUp() {
    Pop.style.display = "block";
    HoverFX.play();
}

function hoverSound() {
}

window.onclick = function(event) {
    if (event.target == Pop) {
        Pop.style.display = "none";
    }
}

document.querySelectorAll(".card").forEach(item => {
    item.addEventListener('click',()=>{
        console.log(item.id);
        document.getElementById('InfoImage').src= "images/"+item.id+".jpg";
  })
});