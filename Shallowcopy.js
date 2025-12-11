//deepcopy
let obj= {
  name : 'gaurav',
  age: '25'
}

let obj2 = {...obj}
obj.name = "rahul"
console.log(obj)

console.log(obj2)

//shallow copy

let obj3 = { a: 1, b: { c: 2 } };

let deep = JSON.parse(JSON.stringify(obj3));

deep.b.c = 99;

console.log(obj3.b.c); // 2 → original not changed
