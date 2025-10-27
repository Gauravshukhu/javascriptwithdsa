// // 

// let prompt = require('prompt-sync')();
// let n = Number(prompt("Enter the number: "));

// for (let i = 1; i <= n; i++) {
//   // left spaces
//   process.stdout.write("  ");
//   for (let j = 1; j <= n; j++) {
//     process.stdout.write(" * ");
//   }
  
// }

// 1-right triangle pattern question 
// const n = 5;
// for (let i = 1; i <= n; i++) {
//   console.log("*".repeat(i));
// }

// 2-inverted right triangle 
// const n = 5;
// for (let i = n; i >= 1; i--) {
//   console.log("*".repeat(i));
// }

// 3-Pyramid Pattern
// const n = 5;
// for (let i = 1; i <= n; i++) {
//   const spaces = " ".repeat(n - i);
//   const stars = "*".repeat(2 * i - 1);
//   console.log(spaces + stars);
// }


// 4-Inverted Pyramid

// const n = 5;
// for (let i = n; i >= 1; i--) {
//   const spaces = " ".repeat(n - i);
//   const stars = "*".repeat(2 * i - 1);
//   console.log(spaces + stars);
// }

// 5-Diamond Pattern
// const n = 5;

// // Upper pyramid
// for (let i = 1; i <= n; i++) {
//   console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
// }
// // Lower pyramid
// for (let i = n - 1; i >= 1; i--) {
//   console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
// }

// 6- Number Triangle

// const n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += j;
//   }
//   console.log(row);
// }


// character patternss

//  const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.on("line", (input) => {
//   let n = Number(input);
  
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j <= i; j++) {
//       // Calculate the character code (A=65)
//       let charCode = 65 + (i + j) % 26; 
//       row += String.fromCharCode(charCode);
//     }
//     console.log(row);
//   }

//   rl.close();
// });


let m = 0 ;
let n = 200 ;


  for (let num = m; num <= n; num++) {
    let digits = num.toString().split("");
    let power = digits.length;
    let sum = 0;

    for (let d of digits) {
      sum += Math.pow(Number(d), power);
    }

    if (sum === num) {
      console.log(num);
    }
  }






