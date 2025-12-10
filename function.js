// // These are normal  function 

// // sum
// function sum(a,b){
//     console.log(a+b)
// }
// sum(10, 20 )

// // sub
// function sub(o,l){
//     console.log(o-l)
// }
// sub(20,10)

// // mul
// function mul(m,n){
//     console.log(m*n *q)
// }
// mul(20,30, 80)

// function div(q , p){
//     console.log(q/p)
// }
// div(20,2)

// function all(c,v){
//     console.log(c+v);
//     console.log(c-v);
//     console.log(c*v);
//      console.log(c/v)


// }
// all(20,2)

// // these are functional expression 

// const Cars = function(model = "none"){
//     return "HELLO" + " " +model
// }

// console.log(Cars("Hyndaii"))
// console.log(Cars("Toyta"))

// // arrow function


// // 1st condition
// const add = (a,b) =>{
//     return a+b ;
// }
// console.log(add(1,10))

// //2nd condition

// const add1 = (a,b) => a+b
// console.log(add1(1,10))




function frequencyDigit(n,d){
    let count = 0 ; 
    let str = n.toString();

    for(let i = 0 ; i< str.length; i++){
        if(str[i] === d.toString()){
            count++
        }
    }
    return count
}

console.log(frequencyDigit(986272,2 ))


function addNumber (a,b){
    let sum = a+b;

    return sum

}
console.log(addNumber(10 , 20))


// 3️⃣ Write a function to check if a number is even or odd.
function checkevenodd(n) {
 if(n % 2 == 0 ){
  return "even"
 }else{
    return "odd"
 }
}

console.log(checkevenodd(45))

// 15️⃣ Function to reverse an array.


function reversearr(arr){
    let start = 0 ;
    let end = arr.length-1;

    while(start<end){
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp 

        start++
        end--
    }
    return arr 
}

console.log(reversearr([3 , 10 , 9 , 7 , 6]))


// 19️⃣ Function to sort array in ascending order.
function sortAscending(arr){
  
    for(let i = 0 ; i< arr.length-1 ; i++){
        let j = i+1;
        while(j>0 && arr[j]<arr[j-1]){
            let temp = arr[j]
            arr[j] = arr[j-1]
            arr[j-1] = temp 
            j--
        }
    }
    return arr
}

console.log(sortAscending([15, 19, 13, 14 , 10]))


// 20️⃣ Function to sort array in descending order.

function sortDscending(arr){
  
    for(let i = 0 ; i< arr.length-1 ; i++){
        let j = i+1;
        while(j>0 && arr[j]>arr[j-1]){
            let temp = arr[j]
            arr[j] = arr[j-1]
            arr[j-1] = temp 
            j--
        }
    }
    return arr
}

console.log(sortDscending([15, 19, 13, 14 , 10]))





