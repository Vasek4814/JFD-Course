const userName = prompt('Как вас зовут?').trim().toLowerCase();
console.log(userName);
const userAge = Number(prompt('Сколько вам лет?').trim());
console.log(userAge);
if (Number.isNaN(userAge)) {
  alert('Досвидания!!!');
} else {
  alert(`Вас зовут ${userName} и вам ${userAge}`);
}
