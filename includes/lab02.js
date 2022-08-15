
var num1 = prompt("Enter a number");
var num2 = prompt("Enter a number");
var num3 = prompt("Enter a number");

var nummiddle = 0;
if((parseInt(num2) < parseInt(num1) && parseInt(num1) < parseInt(num3)) || (parseInt(num3) < parseInt(num1) && parseInt(num1) < parseInt(num2))){
	
	nummiddle = num1;
	
}
else if((parseInt(num1) < parseInt(num2) && parseInt(num2) < parseInt(num3)) || (parseInt(num3) < parseInt(num2) && parseInt(num2) < parseInt(num1))){
	
	nummiddle = num2;
	
}
else{
	
	nummiddle = num3;
}
	
	
var grade = prompt("Enter your grade");
var letter;
if(parseInt(grade) >= 0 && parseInt(grade) <= 49){
	
	letter = 'F';
}
else if(parseInt(grade) >= 0 && parseInt(grade) <= 64){
	
	letter = 'D';
}
else if(parseInt(grade) >= 0 && parseInt(grade) <= 79){
	
	letter = 'C';
}
else if(parseInt(grade) >= 0 && parseInt(grade) <= 89){
	
	letter = 'B';
}
else if(parseInt(grade) >= 0 && parseInt(grade) <= 100){
	
	letter = 'A';
}
else{
	
	letter = "Incorrect - not between 0-100";
}

var backwards = false;
document.write("<br><br>");
for(let i = 0; i < 5 && i >= 0; ){
	
	for(let j = -1; j < i; j++){
		
		document.write("# ")
		
	}
	
	if(i == 4){
		backwards = true;
	}
	if(!backwards){
		i++;
		
	}
	if(backwards){
		
		i--;
	}
	
	document.write("<br>");
}
document.write("<br><br>");

var fogSize = 100;
var minutes = 0; 
var middleMins;
var middleFog = true;
while(fogSize < 125000){
	
	fogSize = parseFloat(fogSize * 1.06); 
	minutes = parseInt(minutes) + 1;
	
	if(parseInt(fogSize) >= (125000/2) && middleFog){
		middleMins = parseInt(minutes);
		middleFog = false;
	}
}

document.write("<br>Fully envelop Bangkok in MINUTES: "+ parseInt(minutes));
document.write("<br>Half envelop Bangkok in MINUTES: " + parseInt(middleMins));