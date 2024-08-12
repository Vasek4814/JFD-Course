const checkQuestionAnswer = (question, correctAnswer) => {
  let questionUser = prompt(question);
  let answerUser = prompt(correctAnswer);
  if (
    questionUser.trim().toLocaleLowerCase() === answerUser.toLocaleLowerCase()
  ) {
    alert('Ответ верный');
  } else {
    alert('Ответ не верный');
  }
};
checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
