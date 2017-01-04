var numOutput = 0;
var tmp1 = 0;
var inputOne = false;
var tmp2 = 0;
var tmp2 = false;

var modulus = false;
var division = false;
var multiplication = false;
var subtraction = false;
var addition = false;

showOutput(numOutput);

function showOutput(numOutput){
  var newOutput = document.getElementById("output");
  newOutput.innerHTML = numOutput;
}

function inputNumber(num) {
  if(!inputOne){
    if(tmp1 == 0){
      tmp1 = num;
    } else{
      tmp1 = tmp1 + "" + num;
    }
    showOutput(tmp1);
  } else {
    tmp2 = tmp2 + "" + num;
    showOutput(tmp2);
  }
}

function operation(operator){

  inputOne = true;

   if(operator == "%"){
    modulus = true;
  } else if(operator =="/"){
    division = true;
  } else if(operator == "x"){
    multiplication = true;
  } else if(operator == "-"){
    subtraction = true;
  } else (operator == "+")
    addition = true;
}

function calculation(){
  if(modulus){
    output = tmp1%tmp2;
    showOutput(output);
    modulus = false;
  } else if(division){
    output = tmp1/tmp2;
    showOutput(output);
    division = false;
  } else if(multiplication){
    output = tmp1*tmp2;
    showOutput(output);
    multiplication = false;
  } else if(subtraction){
    output = tmp1-tmp2;
    showOutput(output);
    subtraction = false;
  } else{
    output = tmp1+tmp2;
    showOutput(output);
    addition = false;
  }
}
