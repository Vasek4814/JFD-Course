const javaScriptDescription =
  'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений';
const index = Math.floor(javaScriptDescription.length / 2);
javaScriptDescription = javaScriptDescription
  .slice(0, index)
  .replaceAll('a', 'A')
  .replaceAll('а', 'А')
  .replaceAll(' ', '')
  .repeat(3);
console.log(javaScriptDescription.charAt(index));
console.log(javaScriptDescription);
