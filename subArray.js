let arr = [ 1, 2,3 ,4 ]
for(let i = 0 ; i< arr.length ; i++){
    let sub = []
    for(let j = i ; j < arr.length; j++){
        sub += arr[j]
        console.log(sub)
    }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr1 = [1,2,3,4,5,6,7,8,9,10];

rl.on('line', (input) => {
  let [n, s] = input.split(' ').map(Number);
  solve(arr, n, s);
  rl.close();
});

function solve(arr, n, s) {
  // Write your code here
  let count = 0 ;
  for(let i = 0 ; i< n ; i++){
       count += arr[i]
         
  }
  if(count ===s){
    console.log("YES")
      return
  }

   for (let i = n; i < arr.length; i++) {
    count += arr[i] - arr[i - n]; // add next, remove first
    if (count === s) {
      console.log("YES");
      return;
    }
  }

  console.log("NO");

  
}