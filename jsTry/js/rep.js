// var regex = /hello/;
// console.log( regex.test("hello") ); 

// var regex = /ab{2,5}c/;
// var string = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
// console.log( string.match(regex) );

// var regex = /a[123]b/g;
// var string = "a0b a1b a2b a3b a4b";
// console.log( string.match(regex) ); 
// 
// var regex = /\d{2,5}/g;
// var string = "123 1234 12345 123456";
// console.log( string.match(regex) ); 
// // => ["123", "1234", "12345", "12345"]

var regex = /\d{2,5}?/g;
var string = "123 1234 12345 123456";
console.log( string.match(regex) ); 
// => ["12", "12", "34", "12", "34", "12", "34", "56"]
// 
var regex = /good|nice/g;
var string = "good idea, nice try.";
console.log( string.match(regex) ); 
// => ["good", "nice"]
// 
var result = "hello".replace(/^|$/g, '#');
console.log(result); 
// => "#hello#"
// 
var result = "I\nlove\njavascript".replace(/^|$/gm, '#');
console.log(result);
/*
#I#
#love#
#javascript#
*/
var result = "[JS] Lesson_01.mp4".replace(/\b/g, '#');
console.log(result); 
// => "[#JS#] #Lesson_01#.#mp4#"

var result = "hello".replace(/(?=l)/g, '#');
console.log(result); 
// => "he#l#lo"