const getSumOfSequence = (number) => {
    const getSumOfSequenceArray = []
    for (let i = 0; i <= number; i++) {
        getSumOfSequenceArray.push(i)
    }
    console.log('getSumOfSequenceArray', getSumOfSequenceArray)
    return getSumOfSequenceArray[0] + getSumOfSequenceArray[number]
    
    
}
getSumOfSequence(5)

// const listOfOrders = 'Майка, шорты, кроссовки, рюкзак'
// const listOfOrdersArray = listOfOrders.split(', ')
// console.log(listOfOrdersArray)