const getSumOfSequence = (number) => {
    let arr = []
    for(let i = 0; i <= number; i++) {
        arr.push(i)
        console.log('arr: ', arr)
    }
    return arr[0] + arr[arr.length-1]
    

}
console.log('getSumOfSequence: ', getSumOfSequence(5))