// loop

// for(var i = 1 ; i<22 ; i++){
//   console.log(i)
// }

// for(let i = 23 ; i<54; i++){
//   console.log(i)
// }

// sum of natural no 

// var sum = 0 ;
// for(var i = 1; i<=sum; i++){
 
//   sum = sum + i ;

// }
// console.log(i)


var n = 1234 
var rev = 0

while(n>0){

  var rem = n % 10 ;
  
  rev = rev*10 + rem ;
  n = Math.floor(n/10);

}
console.log(rev)
  