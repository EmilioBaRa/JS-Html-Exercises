/*PART 1 Q1*/
function letterCount(text, letterRepeated){
	
	var repetitions = 0;
	for(var i = 0; i < text.length; i++){
		var actual = text[i];
		
		if(actual == letterRepeated){
			repetitions++;
		}
		
	}
	
	return repetitions;
};

var text = prompt("Enter an string");
var letterRepeated = prompt("Enter a charcter");

document.write("<div id='questions'>Part 1 question 1</div><br>");
document.write("<b>The string is:</b> " + text + "<br><br>");
document.write("The letter '" + letterRepeated + "' appears " + letterCount(text, letterRepeated) +" times<br><br>");

/*PART 1 Q2*/
document.write("<br><br><div id='questions'>Part 1 question 2</div><br>");
var month = prompt("Enter a month by number");
var year = prompt("Enter a year");
var hourlyWage = prompt("Enter a hourly wage");

var days = daysInMonth(month, year);

var totalWorkDays = days - weekDaysCount(days, month, year)

function daysInMonth(month, year){
	
	return new Date(year, month, 0).getDate();
};

function weekDaysCount(days, month, year){
	var actualDay;
	var countWeekDays = 0;
	
	for(var i = 1; i < (days + 1); i++){
		actualDay = new Date(year, month, i);
		if(actualDay.getDay() == 0 || actualDay.getDay() == 6){
			countWeekDays++;
		}
		
	}
	
	return countWeekDays;
	
};

if(month > 12){
	month = month % 12;
}
if(month == 1){
	document.write("Month: January<br><br>");
}
else if(month == 2){
	document.write("Month: February<br><br>");
}
else if(month == 3){
	document.write("Month: March<br><br>");
}
else if(month == 4){
	document.write("Month: April<br><br>");
}
else if(month == 5){
	document.write("Month: May<br><br>");
}
else if(month == 6){
	document.write("Month: June<br><br>");
}
else if(month == 7){
	document.write("Month: July<br><br>");
}
else if(month == 8){
	document.write("Month: August<br><br>");
}
else if(month == 9){
	document.write("Month: September<br><br>");
}
else if(month == 10){
	document.write("Month: October<br><br>");
}
else if(month == 11){
	document.write("Month: November<br><br>");
}
else if(month == 12){
	document.write("Month: December<br><br>");
}

document.write("Year: " + year + "<br><br>");
document.write("Weekdays: " + totalWorkDays + "<br><br>");
document.write("Salary: $" + parseFloat(hourlyWage) + "<br><br>");
document.write("Pay: $" + parseFloat(hourlyWage*7.5*totalWorkDays) + "<br><br>");

/*PART 2 Q1*/
document.write("<br><br><div id='questions'>Part 2 question 1</div><br>");

function calcFutureValue(principal, rate, years){
	
	try{
		var noErrors = true;
		if(principal <= 0){ throw "Error: Principal value must be greater than zero<br><br>";
			noErrors = false;
		}
		if(rate <= 0){ throw "Error: Rate value must be greater than zero<br><br>"; 
			noErrors = false;
		}
		if(years <= 0){ throw "Error: Years value must be greater than zero<br><br>"; 
			noErrors = false;
		}
		if(noErrors){
			var monthlyRate = rate/12/100;
			var months = years*12;
			var futureValue = 0;
	
			for(var i = 0; i < months; i++){
			
				futureValue = ((parseFloat(futureValue) + parseFloat(principal))*(1 + parseFloat(monthlyRate)));
			}
		
			document.write("The future value is : " + futureValue.toFixed(2) + "<br><br>");
		}
	}
	catch(error){
		document.write(error);
	}
};

var investment = 10;
var annualRate = 4;
var years = 5;

calcFutureValue(investment, annualRate, years);

var investment = 10;
var annualRate = 3;
var years = 10;

calcFutureValue(investment, annualRate, years);

var investment = 8;
var annualRate = 6;
var years = 3;

calcFutureValue(investment, annualRate, years);

var investment = 3;
var annualRate = -4;
var years = 20;

calcFutureValue(investment, annualRate, years);