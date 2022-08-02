// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number = prompt( `enter a number?`)
if ( number%2 == 0) {
  alert( `number is even`)
 } else if( number %2 !== 0) {
  alert(`number is odd`)
}
// // 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let number1 = prompt(`enter number 1 `)
let number2 = prompt(`enter number 2 `)
if ( number1 === number2){
  alert(`both are equal`)
} else if ( number1>number2){
  alert(`number1`)
} else{
  alert(` number2`)
}
// 3. Convert the above code using`?` terniary operator
let num1 = prompt(`enter number 1 `)
let num2 = prompt(`enter number 2 `)
num1>num2 ? alert(num1) : alert(num2)

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
// */
let houseName = prompt(`enter house name ?`)
if( houseName === 'stark'){
  alert(`winter is coming`)
} else if( houseName === 'lannister'){
  alert(`A lannister always pays his debt`)
}else{
  alert(`All men must die`)
}
// 5. Convert the above code using`?` terniary operator
let houseName2 = prompt(`enter house name ?`)
houseName2 === 'stark'?  alert(`winter is coming`) : houseName2 === 'lannister' ? alert(`A lannister always pays his debt`)
 :  alert(`All men must die`)

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let monthNumber =prompt(` enter a number (1-12)`)
if (monthNumber ===  '1' || monthNumber === '3' || monthNumber ===  '5' || monthNumber ===  '7' || monthNumber ===  '10' || monthNumber === '8' || monthNumber === '12'){
  alert( `31`)
}
/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = prompt(`enter your salary`)
if ( salary <= '20000'){
  alert( `Your in-Hand ammount is ${ salary- salary/10}`)
} else if ( salary <= '40000'){
  alert( `Your in-Hand ammount is ${ salary- salary/20}`)
} else if ( salary >= '50000'){
  alert( `Your in-Hand ammount is ${ salary- salary/30}`)
}


//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = prompt(`enter your marks`)
if( marks>'100'){
  alert(`Marks can't be greater than 100`)
} else if ( marks >='80' && marks <='100') {
  alert(`Grade A`)
} else if ( marks >'50' && marks <'80') {
  alert(`Grade B`)
} else if ( marks >'30' && marks <'50') {
  alert(`Grade C`)
} else if ( marks >'0') {
  alert(`Grade D`)
}
/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather= prompt(` What is the weather like outside?`)
if ( weather === `sunny`){
  alert(`Wear a t-shirt`)
} else if( weather === `rainy`){
  alert(`Don't forget to take your raincoat`)
}else if( weather === `hot`){
  alert(`get a hankey`)
}else if( weather === `freezing`){
  alert(`Get your sweater on`)
}else {
  alert(`Not a valid option`)
}
