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
});
