// let arr = [1, 2, 3 ,4 , [] ,[11, 12]]

// console.log(arr[5][1])


// let arr = [
//   [1, 2, 3, 4],
//   [2, 3, 4, 5],
//   [1, 1, 4, 5, [11, 12, 13, 14]]
// ];
// console.log(arr[2][4][0])

// let arr2 = [[1,2,3,4],[9,10,14,16],[8,7,9,[4,5,6,9,[2,4,78, "gaurav"]]]]
// console.log(arr2[2][3][4][3])

// 2D ARRAY 
let arr1 = [
[1,2,3],
[4,5,6],
[7,8,9],
]
for(let i = 0 ; i< arr1.length; i++){
    let innerArray = arr1[i]
    for(let j = 0 ; j< innerArray.length ; j++){
    console.log(innerArray[j])
    }
}
