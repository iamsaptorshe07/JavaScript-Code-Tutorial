/*
For More Javascript String Function search on Google 
javascript String Function
*/
var name = prompt("Hey User Enter Your Name ");
document.write("Your Name is ",name,"<br>");
document.write("Lenth Of your name is ",name.length,'<br>'); // This is the way to get the lenth of any string in javascript
//Index of any string
document.write(name.indexOf('a'),"<br>"); // If there is no such word it will return -1 else it will return the desire value
//String slicing as we do in Python
document.write(name.slice(0,5),"<br>"); // It is simillar to Python 
// Replacing a string with another string
var rep = prompt("Enter the string");
document.write(name.replace(name,rep));
