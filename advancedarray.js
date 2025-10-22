// right rotation by 1 element 
let arr = [1,2,3,4,5]
let last = arr[arr.length-1];
for(let i = arr.length-1;i> 0 ;i--){
   arr[i] = arr[i-1]
}
arr[0]= last 
console.log(arr)

// left rotation by 1 element
let rotate = [1,2,3,4,5]
let first = arr[0]
for(let i = 0 ; i<=arr.length-1 ;i++){
   arr[i] = arr[i+1]
}
arr[arr.length-1] = first

console.log(arr)

// reverse the string 
let str = "gaurav"
let rev = ""
for(let i = str.length-1  ; i>=0; i--){
   rev += str[i];
}
console.log(rev)