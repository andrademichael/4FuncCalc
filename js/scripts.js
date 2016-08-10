//back-end!

var add = function(num1, num2){
  return num1 + num2;
}

var subtract = function(num1, num2){
	return num1-num2;
}

var multiply = function(num1, num2){
  return num1 * num2;
}

var divide = function(num1, num2){
	return num1/num2;
}

var remainder = function(num1, num2){
	return num1%num2;
}

//ui!
$(document).ready(function(){
  $("form#add").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
  $("form#subtract").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
  });
  $("form#multiply").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#mult1").val());
    var number2 = parseInt($("#mult2").val());
    var result = multiply(number1, number2);
    $("#output").text(result);
  });
  $("form#divide").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#div1").val());
    var number2 = parseInt($("#div2").val());
    var result = divide(number1, number2);
    $("#output").text(result);
  });
});
