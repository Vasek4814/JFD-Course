const myName = 'Вася';
const course = 'курс';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Владилена Минина';
const reasonText = 'это круто, интересно, и хороший доход';
const numberOfMonth = '6';

const myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) programmingLanguage ${numberOfMonth} месяцев(а). Я уверен(а), что пройду данный курс до конца!`;
console.log(myInfoText);
console.log(
  myInfoText.replaceAll(programmingLanguage, programmingLanguage.toLowerCase())
);
console.log(myInfoText.replaceAll(course, course.toUpperCase()));
console.log(myInfoText.length);
console.log(myInfoText.indexOf('В'));
console.log(myInfoText[0]);
console.log(myInfoText[myInfoText.length - 1]);
