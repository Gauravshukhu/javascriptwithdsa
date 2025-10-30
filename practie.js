// let arr = [10,40 ,60 ,80]
// let rev = [];
// for(let i = arr.length ; i>=0 ;i--){
//     rev += " " + arr[i]
// }
// console.log(rev)

let arr = [10 , 20 , 30 , 40 , 50]
let temp = new Array(arr.length)
let j = 0
for(let i = arr.length -1; i>=0 ; i--){
   temp[j] = arr[i];
   j++

}
console.log(temp) 