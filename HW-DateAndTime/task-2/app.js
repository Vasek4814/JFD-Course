const getDaysBeforeBirthday = (nextBirthdayDate) => {
  const todayDate = new Date(2024, 11, 18);
  return nextBirthdayDate - todayDate;
};

const myBirthday = new Date(2025, 10, 1);
const resultTime = getDaysBeforeBirthday(myBirthday);
console.log('resultTime:', resultTime);

const convertMsToDays = (convert) => {
  convert = convert / 1000 / 60;
  return Math.round(convert);
};
const resultTimeConvert = convertMsToDays(resultTime);
console.log('resultTimeConvert:', resultTimeConvert);
// console.log('todayDate:', todayDate);
// console.log('myBirthday:', myBirthday);
