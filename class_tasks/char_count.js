let string_ = "my name is imroz khan.";


function charCount(string){
    let obj = {}
    for(let char of string){
        if (obj[char]){
            obj[char] += 1;
        }
        else{
            obj[char] = 1;
        }
    };
    return obj;
}

console.log(charCount(string_));

