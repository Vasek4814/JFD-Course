// const addDays = (date, days = 1) => {
//   const result = new Date(date + days);
//   return result;
// };

// const toDayDate = new Date(Date.now());
// console.log(addDays(toDayDate, 5));

// const addDays = (date, days = 1) => {
//  const
// };

// console.log(addDays(0, 5));

const date = new Date('July 15, 2021');

function addDays(date, days = 1) {
  const ms = days * 86400000;
  const result = new Date(date.getTime() + ms);
  return result.toString();
}

console.log(addDays(date, 2));
