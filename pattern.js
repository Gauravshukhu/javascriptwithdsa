// 

let prompt = require('prompt-sync')();
let n = Number(prompt("Enter the number: "));

for (let i = 1; i <= n; i++) {
  // left spaces
  process.stdout.write("  ");
  for (let j = 1; j <= n; j++) {
    process.stdout.write(" * ");
  }
  
}
