
greet()
function greet(){
    console.log("jai shree ram")
    ask()
}

function ask(){
    console.log("kuch khaya")
    deny()
}

function deny(){
    console.log("nhi kahaya, abhi breakfast lata hu ")
}


function temp(n){
    
    if(n==0) return
    console.log("hello world")
    temp(n-1)
}
temp(5)