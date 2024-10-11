// Question
var numbers = [5, 7, 9, 8, 10, 4, 3, 2];

// Values Of Arrays
var a = 5;
var b = 7;
var c = 9;
var d = 8;
var e = 10;
var f = 4;
var g = 3;
var h = 2;

// Result 
var result = [];

// expected result  
// var result = [2, 3, 4, 5, 7, 8, 9, 10];

// Swaping Operations
var a = a - g ; // 2
var b = e - (f + g) ; // 3
var c = d - f ; // 4
var d = a + b ; // 5
var e = d + a ; // 7
var f = d + b ; // 8
var g = h + e ; // 9
var h = c + a + c ; // 10 

result = [a, b, c, d, e, f, g, h];

document.write("Before <br />", numbers);
document.write("<br /> After <br />", result);