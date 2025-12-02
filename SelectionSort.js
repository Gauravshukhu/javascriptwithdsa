let arr = [100,50,25,-10,0,6]

for(let i=0; i<arr.length-1; i++){
    let minIndex = i
    for(let j= i +1 ; j<arr.length; j++){
        if(arr[j]<arr[minIndex]) minIndex = j
    }
    if(minIndex!=i){
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
}
console.log(arr)