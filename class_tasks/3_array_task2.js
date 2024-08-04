// task 1
let names = ["sunita", "ravi", "manoj", "mohini"];

let nameObjArr = names.map((e) => {
    let obj = {"name":`${e}`}
    return obj;
});
console.log("🚀 ~ nameObjArr ~ nameObjArr:", nameObjArr)


// task 2
let arrObj = [1, 2, 3, 4, 5];
let hasEvenNumber = arrObj.some((e) => e % 2 === 0);
console.log(hasEvenNumber);


// task 3
let arrAsc = [1, 5, 3, 4, 2, 6, 2, 22, 33]; 
arrAsc.sort((a, b) => a - b); 
console.log("🚀 ~ arrAsc:", arrAsc)

let arrDesc = [1, 5, 3, 4, 2, 6, 2, 22, 33]; 
arrDesc.sort((a, b) => b - a); 
console.log("🚀 ~ arrDesc:", arrDesc)

let arr = [1, 5, 3, 4, 2, 6, 2, 22, 33]; 
arr.reverse(); 
console.log("🚀 ~ arr:", arr)


// task 3
// reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.




