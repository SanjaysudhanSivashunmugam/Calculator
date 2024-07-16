function display(a) {
    document.getElementById("display").value = document.getElementById("display").value + a;
}
function clr() {
    document.getElementById("display").value = "";
}
function cal() {
    document.getElementById("display").value = eval(document.getElementById("display").value);   
}
function mode(){
    document.body.classList.toggle("lt")
}