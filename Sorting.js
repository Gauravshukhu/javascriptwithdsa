// SORTING IN STRING 

// single string ke case main yeh sort ho jayega agar hum arr.sort kare toh 
let arr = ["z", "d","f","p","w"]

// arr.sort()// sorts lexographically(dictionary order ) 

arr.sort((a,b)=>{
    return a.localeCompare(b) // a-z ke basis pr sort karega 
// return b.localeCompare(a) // z-a basis pr sort karega 
})


console.log(arr)


// SORTING IN BOOLEAN

let arr1 = [false, true , false , true ]
// arr1.sort() // 
arr1.sort((a,b)=>{return b-a})
console.log(arr1)

//SORTING IN NUMBERS
let arr2 = [90.-3,89,76,65,45,]
// arr2.sort()
arr2.sort((a,b)=>{
return b-a
})
console.log(arr2)


const users = [
  { name: "Gaurav", age: 21, paid: true },
  { name: "Aman", age: 20, paid: false },
  { name: "Riya", age: 22, paid: true },
  { name: "Neha", age: 19, paid: false },
  { name: "Sahil", age: 23, paid: true },
  { name: "Karan", age: 24, paid: false }
];
// sorting with the name 
// users.sort()
// users.sort((x,z)=>
// //   x.name.localeCompare(z.name)
// //  z.name.localeCompare(x.name)
// )


//sort with age 
// users.sort((x,z)=>x.age - z.age)
// users.sort((x,z)=>z.age - x.age)


//sort with boolean
// users.sort((x,z)=>x.paid - z.paid)
users.sort((x,z)=>z.age - x.age)

console.log(users)




