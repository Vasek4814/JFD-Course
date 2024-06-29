const userName = prompt('Как вас зовут?').trim().toLowerCase();
console.log(userName);
const userAge = Number(prompt('Сколько вам лет?').trim());
console.log(userAge);
// alert(`Вас зовут ${userName} и вам ${userAge}`)
// Не переобразуеться из string в number, хотя в консоле, подсвет синий

// if (typeof userAge === 'number') {
//     alert(`Вас зовут ${userName} и вам ${userAge}`)
// } else {
//     alert('Досвидания!!!')
// }
if (Number.isNaN(userAge)) {
  alert('Досвидания!!!');
} else {
  alert(`Вас зовут ${userName} и вам ${userAge}`);
}
