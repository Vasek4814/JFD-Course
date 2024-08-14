const checkQuestionAnswer = (question, correctAnswer) => {
  const questionUser = prompt(question);
  if (questionUser.trim().toLowerCase() === correctAnswer.toLowerCase()) {
    alert('Ответ верный');
  } else {
    alert('Ответ не верный');
  }
};
