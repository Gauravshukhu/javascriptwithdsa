function quickSort (arr) {
    if(arr.length == 1 || arr.length == 0){
        return arr
    }


    let pivot = arr[arr.length - 1]
    let sm = []
    let lg = []

    for(let i = 0 ; i < arr.length -1 ; i++){

        if(arr[i] < pivot){

            sm.push(arr[i])

        }else{
            lg.push(arr[i])
        }
    }

    let sortedsm = quickSort(sm);
    let sortedlg = quickSort(lg)

    return [...sortedsm, pivot , ...sortedlg]


}
console.log(quickSort([1,23,4,5,6,7]))
