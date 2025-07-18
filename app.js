const display =document.getElementById("display");
function appendToDisplay(input){
display.value += input;

}
// clear fun 

function clearDisplay(){


    display.value = "";
}


// error message 
function calculate(){
try{
display.value = eval(display.value);

}catch(error){

    display.value = "error"
}

}
// delete fun 

function deleteLast() {
  display.value = display.value.slice(0, -1);
}


// toogle buttun
function changeBackground() {
  const calculator = document.getElementById("calculator");


  if (calculator.style.backgroundColor === "lightblue") {
    calculator.style.backgroundColor = "#333";  
    calculator.style.color = "#fff";
  } else {
    calculator.style.backgroundColor = "lightblue"; 
    calculator.style.color = "#000";
  }
}
