let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "https://images.pexels.com/photos/2690807/pexels-photo-2690807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") {
        myImage.setAttribute("src", "images/p2.jpeg");
    } else {
        myImage.setAttribute("src", "https://images.pexels.com/photos/2690807/pexels-photo-2690807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "你好，欢迎" + myName;
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "你好，欢迎" + storedName;
}

myButton.onclick = function () {
    setUserName();
};

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "你好，欢迎" + myName;
    }
}
