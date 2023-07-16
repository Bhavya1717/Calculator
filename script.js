let num1 = 0, num2 = 0 ;
var add=0,sub=0,mul=0,div=0;
var display = document.getElementById("numbers");
document.getElementById('ac').addEventListener('click', function() {
	location.reload();
});
function appendValue(value) {
	var currentValue = display.value;
	if(value == 11) {
		num1 = currentValue;
		add = 1;
		currentValue = ' ';
		display.value = currentValue;
	}
	else if(value == 12) {
		num1 = currentValue;
		sub = 1;
		currentValue = ' ';
		display.value = currentValue;
	}
	else if(value == 13) {
		num1 = currentValue;
		mul = 1;
		currentValue = ' ';
		display.value = currentValue;
	}
	else if(value == 14) {
		num1 = currentValue;
		div = 1;
		currentValue = ' ';
		display.value = currentValue;
	}
	else if(value == 99) {
		display.value = currentValue + '.';
		num2 = currentValue + '.';
	}
	else {
		display.value = currentValue + value;
		num2 = currentValue + value;
	}	
}
function Answer() {
	if(add!=0) {
		display.value= parseFloat(num1) + parseFloat(num2);
	}
	else if(sub!=0) {
		display.value= parseFloat(num1) - parseFloat(num2);
	}
	else if(mul!=0) {
		display.value= parseFloat(num1) * parseFloat(num2);
	}
	else if(div!=0) {
		display.value= parseFloat(num1) / parseFloat(num2);
	}
    else if(display.value == 1234) {
        location.href = "./dark-web.html";
    }
	else {
		display.value = "Use Operation!"
	}
}
