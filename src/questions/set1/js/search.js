function search(condidate, numbers){
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] === condidate){
            return i
        }

        if(numbers[i] > condidate)
            break
    }
    return null
}


console.log(search(10, [1,3,5,6,10,13]))
console.log(search(2, [1,3,4,5,7,9,11]))
