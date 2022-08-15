alert ("Hello World!");

var name = prompt("Enter your Name");

var amount = prompt("Enter an amount");
var taxRate = prompt("Enter tax rate");

var amountAndTaxRate = parseInt(amount) * parseInt(taxRate);

var taxAmount = parseFloat(amountAndTaxRate / 100) + parseFloat(amount);

