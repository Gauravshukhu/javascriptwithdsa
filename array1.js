// let arr = [10 , 20 , 30 , 40 , 50]
// let temp = new Array(arr.length)
// let j = 0
// for(let i = arr.length -1; i>=0 ; i--){
//    temp[j] = arr[i];
//    j++

// }
// console.log(temp)    


// swapping the array without space 
let arr = [10 , 20 , 30 , 40 , 50];
 let i = 0 ; 
 let j = arr.length-1;
 while(i!=j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
     i++
     j--   

 }
 console.log(arr)
 


// swapping the 0, one side and one, one side\
// let arr2=[0,1,0,1,0,0,0,1,1,0]
// let m = 0 ; let n = 0;
// while(m<arr2.length){
//     if(arr2[m]== 0){
//         let temp = arr2[m]
//         arr2[m]=arr2[n]
//         arr2[n] = temp;
//         n++
//     }
//     m++
// }
// console.log(arr2)


