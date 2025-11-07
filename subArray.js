let arr = [ 1, 2,3 ,4 ,5]
for(let i = 0 ; i< arr.length ; i++){
    let sub = []
    for(let j = i ; j < arr.length; j++){
        sub += arr[j]
        console.log(sub)
    }
}