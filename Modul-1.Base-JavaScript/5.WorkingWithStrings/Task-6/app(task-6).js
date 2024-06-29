let userText = prompt('Введите текст').trim();
let wordFromText = prompt('Введите слово из текста').trim();

const indexOfword = userText.indexOf(wordFromText);
const resultString = userText.slice(0, indexOfword);
alert(`Результат: ${resultString}`);
