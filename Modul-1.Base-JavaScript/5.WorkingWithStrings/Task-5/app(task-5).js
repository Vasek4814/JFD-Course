let userString = prompt('Введите текст для обрезки');
userString = userString.trim();
let startSliceIndex = +prompt(
  'Введите индекс, с которого нужно начать обрезку строки'
);
console.log(startSliceIndex);
let endSliceIndex = +prompt(
  'Введите индекс, которым нужно закончить обрезку строки'
);
console.log(endSliceIndex);
let result = userString.slice(startSliceIndex, endSliceIndex);
console.log(result);
alert(result);
