var tmp1 = 0;
var inputOne = true;
var tmp2 = 0;
var inputTwo = false;
var operator;
var final = true;
showOutput(tmp1);


function showOutput(numOutput){
  document.getElementById("output").innerHTML = numOutput;
}

function inputNumber(num) {

  if(inputOne){
     if(num == '-1'){
      tmp1 = -1 * tmp1;
    } else if (num == '.' && tmp1.indexOf('.') == -1 && tmp1.toString().length < 11){
      tmp1 = tmp1 + '.';
    } else if(tmp1 == 0){
      tmp1 = num;
    } else if(tmp1.toString().length < 11 && num != '.'){
      tmp1 = tmp1 + "" + num;
    }

    showOutput(tmp1);

    } else {

      if (final && num == '-1'){
        tmp1 = -1 * tmp1;
        showOutput(tmp1);
        return;
      }

      if(num == -1){
        tmp2 = -1 * tmp2;
      } else if(tmp2 == 0){
        tmp2 = num;
      } else if(num == '.' && tmp2.indexOf('.') == -1 && tmp2.toString().length < 11){
        tmp2 = tmp2 + '.';
      } else if(tmp2.toString().length < 11 && num != '.'){
        tmp2 = tmp2 + "" + num;
      }

      final = false;

      showOutput(tmp2);
  }
}

function operation(inputOperator){

  inputOne = false;

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
  } else if(inputOperator == '/'){
    output = tmp1/tmp2;
  } else if(inputOperator == '*'){
    output = tmp1*tmp2;
  } else if(inputOperator == '-'){
    output = tmp1-tmp2;
  } else if(inputOperator == '+'){
    output = tmp1+tmp2;
  } else{
    calculation(operator);
    inputTwo = false;
    return;
  }

  if(output > 99999999999){
    alert("Output is too large");
    reset();
  } else if(output.toString().length > 11){
    showOutput(output.toString().substring(0,11));
  } else{
    showOutput(output);

    tmp1 = output;
    tmp2 = 0;
    final = true;
  }
}

function reset(){
  tmp1 = 0;
  inputOne = true;
  tmp2 = 0;
  inputTwo = false;
  operator = null;

  showOutput(tmp1);
}
