// // task 1 sorting of this objects according to age

// let arrObj = [
//     { name: "sunita", age: 10 },
//     { name: "ravi", age: 23 },
//     { name: "manoj", age: 16 },
//     { name: "mohini", age: 26 },
//   ];

// let age_asc = arrObj.sort( (a,b) => a['age']-b['age'] )
// console.log("🚀 ~ age_asc", age_asc)


// let age_desc = arrObj.sort( (a,b) => b['age']-a['age'] )
// console.log("🚀 ~ age_desc", age_desc)


// let name_asc = arrObj.sort()
// console.log("🚀 ~ name_asc", name_asc)


// let name_desc = arrObj.sort()
// console.log("🚀 ~ name_desc", name_desc)


let arrObj = [
  { name: "sunita", age: 10 },
  { name: "ravi", age: 23 },
  { name: "manoj", age: 16 },
  { name: "mohini", age: 26 }
];

// Sorting by age in ascending order
let age_asc = arrObj.slice().sort((a, b) => a.age - b.age);
console.log("🚀 ~ age_asc", age_asc);

// Sorting by age in descending order
let age_desc = arrObj.slice().sort((a, b) => b.age - a.age);
console.log("🚀 ~ age_desc", age_desc);

// Sorting by name in ascending order
let name_asc = arrObj.slice().sort((a, b) => a.name.localeCompare(b.name));
console.log("🚀 ~ name_asc", name_asc);

// Sorting by name in descending order
let name_desc = arrObj.slice().sort((a, b) => b.name.localeCompare(a.name));
console.log("🚀 ~ name_desc", name_desc);
