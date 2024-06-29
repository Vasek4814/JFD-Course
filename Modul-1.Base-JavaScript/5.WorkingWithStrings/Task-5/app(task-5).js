const userString = prompt('Введите текст для обрезки');
console.log(userString.trim());
const startSliceIndex = +prompt(
  'Введите индекс, с которого нужно начать обрезку строки'
);
console.log(startSliceIndex);
const endSliceIndex = +prompt(
  'Введите индекс, которым нужно закончить обрезку строки'
);
console.log(endSliceIndex);
const result = userString.slice(startSliceIndex, endSliceIndex);
console.log(result);
alert(result);
