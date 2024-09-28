let inputNumber = Number(document.querySelector(".input").value);
let randomNumber = Math.floor(Math.random() * inputNumber + 1);
document.querySelector(".confirm").addEventListener("click", function () {
    inputNumber = Number(document.querySelector(".input").value);
    randomNumber = Math.floor(Math.random() * inputNumber + 1);
    if (randomNumber < 10) {
        document.querySelector(".randomNumber").textContent = `0${randomNumber}`;
    } else {
        document.querySelector(".randomNumber").textContent = randomNumber;
    }
}
    )

//reset
document.querySelector(".reset").addEventListener("click", function () {
    document.querySelector(".randomNumber").textContent = "  ?  ";
    document.querySelector(".input").textContent = "";
    });