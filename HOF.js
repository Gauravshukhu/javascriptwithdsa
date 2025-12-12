function a(){
    
   return () =>{
     console.log("hello gaurav ")
   }
}

const rs = a();
rs()



function fun() {
    console.log("Hello, World!");
}
function fun2(action) {
    action();
    action();
}

fun2(fun);