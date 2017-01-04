var numOutput = 0;
var tmp1 = 0;
var inputOne = false;
var tmp2 = 0;
var inputTwo = false;
var operator;

showOutput(numOutput);

function showOutput(numOutput){
  calcOutput = document.getElementById("output");
  calcOutput.innerHTML = numOutput;
}

function inputNumber(num) {
  if(!inputOne){
    if(num == -1){
     tmp1 = -1 * tmp1;
    } else if(tmp1 == 0){
      tmp1 = num;
    } else{
      tmp1 = tmp1 + "" + num;
    }
    showOutput(tmp1);
  } else {
    if(num == -1){
      tmp2 = -1 * tmp2;
    } else  if(tmp2 == 0){
      tmp2 = num;
    } else{
      tmp2 = tmp2 + "" + num;
    }
    showOutput(tmp2);
  }
}

function operation(inputOperator){

  inputOne = true;

  if(inputTwo){
    calculation(operator);
  } else {
    inputTwo = true;
  }

  operator = inputOperator;
}

function calculation(inputOperator){

  tmp1 = parseInt(tmp1);
  tmp2 = parseInt(tmp2);

  if(inputOperator == '%'){
    numOutput = tmp1%tmp2;
    showOutput(numOutput);
  } else if(inputOperator == '/'){
    numOutput = tmp1/tmp2;
    showOutput(numOutput);
  } else if(inputOperator == '*'){
    numOutput = tmp1*tmp2;
    showOutput(numOutput);
  } else if(inputOperator == '-'){
    numOutput = tmp1-tmp2;
    showOutput(numOutput);
  } else if(inputOperator == '+'){
    numOutput = tmp1+tmp2;
    showOutput(numOutput);
  } else{
    calculation(operator);
    inputTwo = false;
  }

  tmp1 = numOutput;
  tmp2 = 0;
}

function reset(){
  tmp1 = 0;
  inputOne = false;
  tmp2 = 0;
  inputTwo = false;
  operator = null;

  showOutput(tmp1);
}
