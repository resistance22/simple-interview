function countCharacter(str) {
    const count = {}
    for(let i=0; i<str.length; i++){
        let ch = str[i]
        if(count[ch]){
            count[ch] += 1
        }
        else {
            count[ch] = 1
        }
    }
    return count
}

console.log(countCharacter("aavvmdeeeehds"))
