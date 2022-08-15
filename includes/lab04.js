/*P1 Q1*/
function checkKey(key, array){
	
	var repetitions = 0;
	var actual;
	for(let i = 0; i < array.length; i++){
		actual = array[i];
		if(actual == key){
			repetitions++;
		}
	}
	
	return repetitions;
}

var firstString = prompt("Enter a string");

var strArray = Array.from(firstString);

var key = prompt("Enter a character key");

var keyRepetitions = checkKey(key, strArray)

var strWithoutKey = firstString.replace(key, "");

for(let i = 0; i < keyRepetitions - 1; i++){
	strWithoutKey = strWithoutKey.replace(key, "");
}

document.write("<div id='questions'>Part 1 question 1</div><br>");
document.write("<b>The string is:</b> " + firstString + "<br><br>");
document.write("<b>The key is:</b> " + key + "<br><br>");
document.write("The character " + key + " occurs " + keyRepetitions + " times in the array<br><br>");
document.write("<b>The new string is:</b> " + strWithoutKey + "<br><br>");

/*P1 Q2*/
document.write("<div id='questions'>Part 1 question 2</div><br>");

function cards(suits, numbers){
	let randomSuit = Math.floor((Math.random() * suits.length) + 0);
	let randomNumber = Math.floor((Math.random() * numbers.length) + 0);
	
	result1 = numbers[randomNumber];
	result2 = suits[randomSuit];
	
	return result1 + " of " + result2;
}
var suits = ["Hearts","Spades","Clubs","Diamonds"];
var numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

var randomSuit = Math.floor((Math.random() * suits.length) + 0);
var randomNumber = Math.floor((Math.random() * numbers.length) + 0);

document.write("<b>Card 1 is:</b> " + cards(suits, numbers) + "<br><br>");
document.write("<b>Card 2 is:</b> " + cards(suits, numbers) + "<br><br>");

/*P2 Q1*/

document.write("<div id='questions'>Part 2 question 1</div><br>");

function addToTable() {
  var table = document.getElementById("sampleTable");
  var addingRow = table.insertRow(1);
  var firstCell = addingRow.insertCell(0);
  var secondCell = addingRow.insertCell(1);
  firstCell.innerHTML = "New Cell1";
  secondCell.innerHTML = "New Cell2";
}