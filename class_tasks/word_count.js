string_ = "my name is imroz khan ... and i am a full stack developer ... full stack developer ... imroz khan"

function word_count(string) {
    let obj =  {}
    let str_arr = string.split(" ")
    for (let word of str_arr){
        if (obj[word]){
            obj[word] += 1
        }
        else{
            obj[word] = 1
        }
    }
    return obj
}

console.log(word_count(string_));


