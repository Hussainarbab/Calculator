const display =document.getElementById("display");


function appendToDisplay(input){
display.value += input;

}


function clearDisplay(){


    display.value = "";
}



function calculate(){
try{
display.value = eval(display.value);

}catch(error){

    display.value = "error"
}

}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}



function changeBackground() {
  const calculator = document.getElementById("calculator");

  // Toggle between two background colors
  if (calculator.style.backgroundColor === "lightblue") {
    calculator.style.backgroundColor = "#333";  // Dark theme
    calculator.style.color = "#fff";
  } else {
    calculator.style.backgroundColor = "lightblue"; // Light theme
    calculator.style.color = "#000";
  }
}
