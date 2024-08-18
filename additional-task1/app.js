const showSuccessMessage = (message) => {
  console.log(message);
  return;
};

const showErrorMessage = (message) => {
  console.error(message);
};

const checkTextOnErrorSymbol = (
  text,
  errorSymbol,
  successCallback,
  errorCallback
) => {
  let hasErrorSymbol = false;

  for (i = 0; i < text.length; i++) {
    if (text[i] === errorSymbol) {
      hasErrorSymbol = true;
      const errorMassage = `Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`;
      errorCallback(errorMassage);
    }
  }
  if (!hasErrorSymbol) {
    successCallback('В данном тексте нет запрещенных символов');
  }
};

const text = 'Привет! Как дела! Давно мы с тобой не виделись.';
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);
checkTextOnErrorSymbol(text, 'г', showSuccessMessage, showErrorMessage);
