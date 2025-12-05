// this question solved without using any sorting algo without space  
// merging the sorted array 
// let arr1= [1,3,4,5,6,100]
// let arr2 = [1,2,7,99]

// function mergeTwoSortedArrays(a1,a2){
//     let ans= []
//     let i = 0 ;
//     let j = 0 ;

//     while(a1 < a1.length && j < a2.length ){
//         if(a1[i] < a2[j]){
//             ans.push(a1[i])
//             i++
//         }else{
//             ans.push(a2[j])
//             j++
//         }
//     }

//     while(i<a1.length){
//         ans.push(a1[i])
//         i++
//     }

//     while(j<a2.length){
//         ans.push(a2[j])
//         j++
//     }

//     return ans 
// }

// // console.log(mergeTwoSortedArrays(arr1,arr2))


// now i am adding the code for unsorted to sorted via merge sort 

function mergeTwoSortedArrays(a1, a2) {
    let ans = [];
    let i = 0;
    let j = 0;

    while (i < a1.length && j < a2.length) {
        if (a1[i] < a2[j]) {
            ans.push(a1[i]);
            i++;
        } else {
            ans.push(a2[j]);
            j++;
        }
    }

    while (i < a1.length) {
        ans.push(a1[i]);
        i++;
    }

    while (j < a2.length) {
        ans.push(a2[j]);
        j++;
    }

    return ans;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2)-1;
    let left = mergeSort(arr.slice(0, mid+1));
    let right = mergeSort(arr.slice(mid+1));

    return mergeTwoSortedArrays(left, right);
}

console.log(mergeSort([99, 55, 60, 1, -10]));








