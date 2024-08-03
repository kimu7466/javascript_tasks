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
let arrAsc = [1, 5, 3, 4, 2, 6, 2, 22, 33]; // initial array
arrAsc.sort((a, b) => a - b); // proper sorting for numbers
console.log("🚀 ~ arrAsc:", arrAsc)

let arrDesc = [1, 5, 3, 4, 2, 6, 2, 22, 33]; // initial array
arrDesc.sort((a, b) => b - a); // proper sorting for numbers
console.log("🚀 ~ arrDesc:", arrDesc)

let arr = [1, 5, 3, 4, 2, 6, 2, 22, 33]; // initial array
arr.reverse(); // reversing the sorted array
console.log("🚀 ~ arr:", arr)


// task 3
// reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.




