// // right rotation by 1 element 
// let arr = [1,2,3,4,5]
// let last = arr[arr.length-1];
// for(let i = arr.length-1;i> 0 ;i--){
//    arr[i] = arr[i-1]
// }
// arr[0]= last 
// console.log(arr)

// // left rotation by 1 elements
// let rot = [1,2,3,4,5]
// let first = arr[0]
// for(let i = 0 ; i<=arr.length-1 ;i++){
//    arr[i] = arr[i+1]
// }
// arr[arr.length-1] = first

// console.log(arr)

// finding the second largest no in array
let arr = [10, 20 , 7 , -9 , 10 , 78] 
let max = - Infinity
let sMax = -Infinity

for(let item of arr){

   if(item>max){
      sMax = max
      max= item
   }

   if(item >sMax && item < max ){
      sMax = item
   }
   console.log(sMax)
}

