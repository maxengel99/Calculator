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
    if(tmp2 == 0){
      tmp2 = num;
    } else{
      tmp2 = tmp2 + "" + num;
    }
    showOutput(tmp2);
  }
}

function operation(operator){

  inputOne = true;

   if(operator == "%"){
    modulus = true;

    division = false;
    multiplication = false;
    subtraction = false;
    addition = false;

  } else if(operator =="/"){
    division = true;

    modulus = false;
    multiplication = false;
    subtraction = false;
    addition = false;
  } else if(operator == "x"){
    multiplication = true;

    modulus = false;
    division = false;
    subtraction = false;
    addition = false;
  } else if(operator == "-"){
    subtraction = true;

    modulus = false;
    division = false;
    multiplication = false;
    addition = false;
  } else {
    addition = true;

    modulus = false;
    division = false;
    multiplication = false;
    subtraction = false;
  }
}

function calculation(){

  tmp1 = parseInt(tmp1);
  tmp2 = parseInt(tmp2);

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

function reset(){
  tmp1 = 0;
  inputOne = false;
  tmp2 = 0;
  tmp2 = false;

  modulus = false;
  division = false;
  multiplication = false;
  subtraction = false;
  addition = false;

  showOutput(tmp1);
}
