// // 12345667 => _*_*_**_
// function convert_even_odd(num){
//     let num_str = num.toString()
//     let new_str = ""
//     for(let i = 0; i < num_str.length ; i++){
//         if (parseInt(num_str[i])%2 == 0 ){
//             new_str += "*"
//         }
//         else{
//             new_str += "_"
//         }
//     }
//     return new_str;
// }

// console.log(convert_even_odd(12345667)); // _*_*_**_


// **************************************
// 123456789222, 2 => 2 is repeat 4 times
function count_digit(num, digit){
    let num_str = num.toString();
    let count = 0;

    for(let i = 0; i < num_str.length ; i++){
        if (num_str[i] == digit ){
            count++
        }
    }
    return `${digit} is repeated ${count} times.`
}

console.log(count_digit(123456789222, 2));
// 2 is repeated 4 times.