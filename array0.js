// let arr1 =[20, 30 , 50 , 60, 100]
// let arr2 = [120, 140 , 160, 180 , 200]
// let add = arr1.concat(arr2)
// console.log(add)


// let target = 80;
// let arr = [20, 30 , 50 , 60, 100]
// for(let i= 0; i<arr.length; i++){
//     for(let j = i+1 ; j<arr.length; j++){
//         if(arr[i]+arr[j]===target){
//             console.log(i , j)
//         }
//     }
// }

// let prompt = require('prompt-sync')();

// // take target input
// let target = Number(prompt("Enter target: "));

// // take array input (space separated numbers)
//let arr = prompt("Enter array elements separated by space: ").split(' ').map(Number);

// // find pairs
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === target) {
//       console.log(`Indices: ${i}, ${j}  →  Values: ${arr[i]}, ${arr[j]}`);
//     }
//   }
// }

// let prompt = require('prompt-sync')();
// let arr = prompt("Enter array elements separated by space: ").split(' ').map(Number);
// let sum = 0 ;
// for (let i = 0; i < arr.length; i++){
    
//         sum = sum + arr[i]
    
//     console.log(sum)}

// finding the min array
// let arr = [10,20,40, 60 ,70];
// let min = arr[0]
// for(let i= 1; i<=arr.length ; i++){
// if(min>arr[i]){
//     min= arr[i]
// }
// }
// console.log(min)

//reverse the  array with space


let arr = [10 , 20 , 30 , 40 , 50]
let tems = new Array(arr.length)
let j = 0
for(let i = arr.length -1; i>=0 ; i--){
   tems[j] = arr[i];
   j++

}
console.log(tems)


let sort1 = [29, 38, 38, 98, 57, 76, 86, 75, 24, 76, 98, 176, 98];

for (let i = 0; i < sort1.length; i++) {
  for (let j = i + 1; j < sort1.length; j++) {
    if (sort1[i] > sort1[j]) {
      // swap the numbers
      let temp = sort1[i];
      sort1[i] = sort1[j];
      sort1[j] = temp;
    }
  }
}

console.log(sort);



