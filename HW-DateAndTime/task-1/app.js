const getDateFormat = (date, separator) => {
  let day = date.getDate();
  let months = date.getMonth() + 1;
  let year = date.getFullYear();

  if (day < 10) {
    day = '0' + day;
  }

  if (months < 10) {
    months = '0' + months;
  }
  return `${day}${separator}${months}${separator}${year}`;
};

const date = new Date(1996, 10, 1);
const separation = '.';
console.log(getDateFormat(date, separation));
