let javaScriptDescription =
  'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений';
let finalString = Math.floor(javaScriptDescription.length / 2);
finalString = Number(finalString);
javaScriptDescription = javaScriptDescription
  .slice(0, finalString)
  .replaceAll('a', 'A')
  .replaceAll('а', 'А')
  .replaceAll(' ', '')
  .repeat(3);
console.log(javaScriptDescription.charAt(finalString));
console.log(javaScriptDescription);
