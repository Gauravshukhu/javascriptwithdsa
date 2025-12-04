// Insterion Sort 

let arr = [8,3,5,2,6,4]

for(let i = 0 ; i<arr.length-1 ; i++){
    let j = i+1;
    while(j>0 && arr[j]<arr[j-1]){
        let temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp 
    }
    j--
}
console.log(arr)