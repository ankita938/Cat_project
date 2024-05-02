let ON=document.getElementById("on")
let OFF=document.getElementById("off")
let SWITCH=document.getElementById("switch")


// ON.style.backgroundColor="green";
// OFF.style.backgroundColor="red";
// SWITCH.textContent="Switched on";
function ankita(a){
        if (a==1){
        pic="./img/blub.png";
        photo="./img/cat.png";
        SWITCH.textContent="Switched on";
        ON.style.backgroundColor="red";
    }
    else{
        pic="./img/bluboff.png";
        photo="./img/eyes.png";
        SWITCH.textContent="Switched off";
        ON.style.backgroundColor="green";

    }
    document.getElementById("blub").src=pic;
    document.getElementById("cat").src=photo;


}


