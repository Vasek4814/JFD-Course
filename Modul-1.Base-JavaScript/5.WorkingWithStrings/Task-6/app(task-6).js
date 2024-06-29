let userText = prompt('Введите текст');
userText = userText.trim();
let wordFromText = prompt('Введите слово из текста');
wordFromText = wordFromText.trim();

const indexOfword = userText.indexOf(wordFromText);
const resultString = userText.slice(0, indexOfword);
alert(`Результат: ${resultString}`);
