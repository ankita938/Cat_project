function switchOff(){
    document.getElementById("blub").src="./img/blubOff.png"
    document.getElementById("cat").src="./img/cat-eyes-img.png"
    document.getElementById("switch").textContent="switched off"
    document.getElementById("on").style.backgroundColor="green"
    document.getElementById("off").style.backgroundColor="grey"
}

function switchOn(){
    document.getElementById("blub").src="./img/blub.png";
    document.getElementById("cat").src="./img/cat.png"
    document.getElementById("switch").textContent="switched on"
    document.getElementById("off").style.backgroundColor="red"
    document.getElementById("on").style.backgroundColor="grey"

}
