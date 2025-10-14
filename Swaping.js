// let a = 10 ;
// let b = 20 ;

// // swapping using third variable 

//  c = a ; 
//  a = b ;
//  b = c ; 

//  console.log(a , b)

// let a = 10 ;
// let b = 20 ;

// a = a + b;
// b = a- b ;
// a = a - b;

// console.log( a ,b)

// sum of no digits

let num = 1234;
let sum = 0;

while (num > 0) {
  let digit = num % 10;  // get last digit
  sum += digit;          // add it to sum
  num = Math.floor(num / 10);  // remove last digit
}

console.log(sum); // Output = 10

// valid voters
let age = 19;

if(age > 18 ){
  console.log("eligible to vote ")
}else{
  console.log("not eligible to vote ")
}



