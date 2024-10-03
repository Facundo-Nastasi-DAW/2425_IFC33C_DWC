
function heads(){
    return Math.floor(Math.random() * 2 + 1) % 2 == 1;
}

function flip(){
    const coin = document.getElementById("coin");
    const message = document.getElementById("message");
    let result;

    if(heads()){
        coin.src = "img/heads.svg";
        result = "cara";
    }
    else{
        coin.src = "img/tails.svg";
        result = "cruz";
    }
    message.innerHTML = "Ha ganado " + result + "!";
}

window.onload = function (){
    const button = document.querySelector("button");
    const coin = document.getElementById("coin");

    button.addEventListener('click', () => {
        coin.src = "img/gambling.svg";
        for(let i = 0; i < 3; i++){
            setTimeout(() => message.innerHTML = i + 1, 1000 * i);
        }
        setTimeout(() => flip(), 3000);
    });
}