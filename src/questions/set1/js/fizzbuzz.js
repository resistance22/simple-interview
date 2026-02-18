function fizbuzz(numbers){
    const result = {
        fizz: 0,
        buzz: 0,
        fizzbuzz:0
    }

    for (let i=0; i<numbers.length; i++){
        const num = numbers[i]
        if(num % 3 === 0 && num % 5 ===0){
            result.fizzbuzz += 1
        }
        else if (num % 3 === 0){
            result.fizz += 1
        }
        else if (num % 5 === 0){
            result.buzz += 1
        }
    }

    return result
}

console.log(fizbuzz([1,2,3,4,5,6,7,8,9,10,15]))
