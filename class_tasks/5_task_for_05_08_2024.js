// 1_reverse_string >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let name = "urvish"; // => "hsivru"
function reverse_string(string) {
    let rev_str_arr = string.split("").reverse()
    let res_str = rev_str_arr.join("")
    return res_str
}
console.log("1_reverse_string => ",reverse_string("imroz khan pathan"));
console.log("1_reverse_string => ",reverse_string("urvish v patel"));

// 2_reverse_order >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// "urvish v patel" -> "patel v urvish"
function reverse_order(string) {
    let rev_arr = string.split(" ").reverse()
    let result = rev_arr.join(" ")
    return result  
}
console.log("2_reverse_order => ",reverse_order("imroz khan pathan"));
console.log("2_reverse_order => ",reverse_order("urvish v patel"));

// 3_replace_space >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// "urvish v patel" -> "urvish_v_patel"
function replace_space(string, char = "_") {
    let new_string = string.replaceAll(" ", `${char}`)
    return new_string;
}
console.log("3_replace_space => ",replace_space("imroz khan pathan", "="));
console.log("3_replace_space => ",replace_space("urvish v patel"));


// 4_uppercase_coice >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// "urvish v patel"/3 -> "urVisH v paTel"
function uppercase_coice(string, choice = 3){
    let count=0;
    let str_arr = string.split("")
    let new_arr = str_arr.map( (char) => {
        count++;
        if (count%choice==0){
            return char = char.toUpperCase();
        }
        else{
            return char;
        }
    });     
    let new_str = new_arr.join("")
    return new_str
}

console.log("4_uppercase_coice => ",uppercase_coice("imroz khan pathan"));
console.log("4_uppercase_coice => ",uppercase_coice("urvish v patel"));

// 5_uppercase_sequence >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// "abcdefghijklmnopqrstuvwxyz"/3 -> "AbCdeFghiJklmnOPqRstUvwxYz" if choice=5
function uppercase_sequence(string, choice = 5){
    let pos_count = 0;
    let next_captl = 1;
    let str_arr = string.split("");
    let new_arr = str_arr.map( (char) => {
        pos_count++;
        if ( pos_count === next_captl ){
            if ( next_captl >= choice ){
                next_captl = 1;
            }
            else{
                next_captl++;
            }
            pos_count = 0;
            return char.toUpperCase();
        }
        else{
            return char;
        }
    });     
    let new_str = new_arr.join("");
    return new_str;
}

console.log("5_uppercase_sequence => ",uppercase_sequence("imroz khan pathan",3)); 
//ImRoz KhAn PAtHan
console.log("5_uppercase_sequence => ",uppercase_sequence("abcdefghijklmnopqrstuvwxyz"));
// AbCdeFghiJklmnOPqRstUvwxYz

// 6_uppercase_sequence_rev >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// "abcdefghijklmnopqrstuvwxyz" -> "abcdEfhgIjkLmNOpqrsTuvwXyz" if choice=5
function uppercase_sequence_rev(string, choice = 5){
    let pos_count = 0;
    let next_captl = choice;
    let str_arr = string.split("");
    let new_arr = str_arr.map( (char) => {
        pos_count++;
        if ( pos_count === next_captl ){
            if ( next_captl <= 1 ){
                next_captl = choice;
            }
            else{
                next_captl--;
            }
            pos_count = 0;
            return char.toUpperCase();
        }
        else{
            return char;
        }
    });     
    let new_str = new_arr.join("");
    return new_str;
}

console.log("6_uppercase_sequence_rev => ",uppercase_sequence_rev("imroz khan pathan",3)); 
// imRoZ khAn PatHaN
console.log("6_uppercase_sequence_rev => ",uppercase_sequence_rev("abcdefghijklmnopqrstuvwxyz"));
// abcdEfghIjkLmNOpqrsTuvwXyz

