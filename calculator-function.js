var numOutput = 0;
var tmp1 = 0;
var inputOne = false;
var tmp2 = 0;
var inputTwo = false;
var operator;

showOutput(numOutput);

function showOutput(numOutput){
  var newOutput = document.getElementById("output");
  newOutput.innerHTML = numOutput;
}

function inputNumber(num) {
  if(!inputOne){

    if(num == '-1'){
      tmp1 = -1 * tmp1;
    } else if (num == '.'){
      if(tmp1.indexOf('.') > -1){
        return;
      } else {
        tmp1 = tmp1 + '.';
      }
    } else if(tmp1 == 0){
      tmp1 = num;
    } else{
      tmp1 = tmp1 + "" + num;
    }
    showOutput(tmp1);

  } else {

    if(num == -1){
      tmp2 = -1 * tmp2;
    } else if(tmp2 == 0){
      tmp2 = num;
    } else if(num == '.'){
      if(tmp2.indexOf('.') > -1){
        return;
      } else {
        tmp2 = tmp2 + '.';
      }
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

  tmp1 = parseFloat(tmp1);
  tmp2 = parseFloat(tmp2);

  if(inputOperator == '%'){
    output = tmp1%tmp2;
    showOutput(output);
  } else if(inputOperator == '/'){
    output = tmp1/tmp2;
    showOutput(output);
  } else if(inputOperator == '*'){
    output = tmp1*tmp2;
    showOutput(output);
  } else if(inputOperator == '-'){
    output = tmp1-tmp2;
    showOutput(output);
  } else if(inputOperator == '+'){
    output = tmp1+tmp2;
    showOutput(output);
  } else{
    calculation(operator);
    inputTwo = false;
  }

  tmp1 = output;
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
