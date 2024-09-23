const numbers = [10, 4, 100, -5, 54, 2]

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] ** 3;
    console.log(sum);
    console.log('i', i)
}
// {
//     let sum = 0;
//     for (let number of numbers)
//         sum += number ** 3;
//     console.log(sum);
// }
// {
//     let sum = 0;
//     numbers.forEach(number => {
//         sum += number ** 3;
//     });
//     console.log(sum);
// }
// {
//     let sum = numbers.reduce((a, b) => a += b ** 3);
//     console.log(sum);
// }