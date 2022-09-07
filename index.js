const divide = (num = 2000, num2 = 100) => {
 console.log(`math ${num}`)
 console.log(`math ${num2}`)
 return num / num2;
}


const square = (parameter1) => {
        console.log(`multiply ${parameter1}`)
        return parameter1 * parameter1;
    }


const add = (a = 3, b = 4) => {
    console.log(`add ${a}`)
    console.log(`add ${b}`)
    return a + b;
}