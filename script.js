var css = document.querySelector('h3');
var dcss = document.querySelector('h4');
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementsByTagName("button");

function defaultColor() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";
    dcss.textContent = body.style.background + ";";
}
function setGradient () {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background + ";";
}
function randm(){
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
}
btn.addEventListener("click",function () {
    randm();
});
body.addEventListener("onload",defaultColor);
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);