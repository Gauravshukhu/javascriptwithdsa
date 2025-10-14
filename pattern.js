let prompt = require('prompt-sync')();
let n = Number(prompt("Enter the number: "));

for (let i = 1; i <= n; i++) {
  // left spaces
  for (let j = 1; j <= n; j++) {
    process.stdout.write(" * ");
  }
  // stars
  for (let j = 1; j <= n- 1; j++) {
    process.stdout.write(" ");
  }
  console.log();
}
