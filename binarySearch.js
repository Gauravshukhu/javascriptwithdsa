// Binary search always in sorted manner 

// let bi = [3, 7, 12, 18, 25, 30, 42, 56, 60, 75]
// let target = 25
 

// let fi = 0;
// let li = bi.length - 1;

// for(let i = 0 ; i<bi.length; i++){
//     let mid = Math.floor((fi+li)/2);

//     if (bi[mid] === target){
//      console.log(mid)
//      break;
//     }else if(target>bi[mid]){
//         fi = mid+1;
//     }else{
//         li = mid - 1
//     }

    
// }

// first occurence and last occurence in through binary search

let bi = [3, 7, 12, 17, 25, 25, 25, 56, 60, 75]
let target = 25
 

let fi = 0;
let li = bi.length - 1;

while(fi<li){
    let mid = Math.floor((fi+li)/2);

    if (bi[mid] === target){    
     firstocc = fi
      
         
    }else if(target>bi[mid]){
     fi = mid+1
    }

       console.log(fi , li)

    
}
