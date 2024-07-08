let javaScriptDescription =
  'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений';
let sliceString = javaScriptDescription.length / 2;
(sliceString = Math.floor(sliceString)), Number(sliceString);
javaScriptDescription = javaScriptDescription
  .slice(0, sliceString)
  .replaceAll('a', 'A')
  .replaceAll('а', 'А')
  .replaceAll(' ', '')
  .repeat(3);
console.log(
  javaScriptDescription,
  javaScriptDescription.length / 2,
  Math.floor(javaScriptDescription.length / 2)
);
