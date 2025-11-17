// These are normal  function 

// sum
function sum(a,b){
    console.log(a+b)
}
sum(10, 20 )

// sub
function sub(o,l){
    console.log(o-l)
}
sub(20,10)

// mul
function mul(m,n){
    console.log(m*n *q)
}
mul(20,30, 80)

function div(q , p){
    console.log(q/p)
}
div(20,2)

function all(c,v){
    console.log(c+v);
    console.log(c-v);
    console.log(c*v);
     console.log(c/v)


}
all(20,2)

// these are functional expression 

const Cars = function(model = "none"){
    return "HELLO" + " " +model
}

console.log(Cars("Hyndaii"))
console.log(Cars("Toyta"))

// arrow function


// 1st condition
const add = (a,b) =>{
    return a+b ;
}
console.log(add(1,10))

//2nd condition

const add1 = (a,b) => a+b
console.log(add1(1,10))
