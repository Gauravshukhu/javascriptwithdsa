// finding the hcf and lcm

let a = 4 ;
let b = 18 ;

let min = Math.min(a,b);
let max = Math.max(a,b)

while(min !== 0){
  
  let rem = max % min ;
  max = min ;
  min= rem ;
  
}
console.log(max)
