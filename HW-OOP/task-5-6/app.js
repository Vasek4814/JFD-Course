class Dictionary {
  #name;
  #words;
  constructor(name) {
    this.#name = name;
    this.#words = {};
  }

  get mainName() {
    return this.#name;
  }
  set setMainName(valueName) {
    this.#name = valueName;
  }

  get allWords() {
    return this.#words;
  }
  set addNewWord(valueWords) {
    this.#words = valueWords;
  }
  addNewWord(word, description) {
    if (this.words[word]) {
      return console.error('Такое слово уже есть в словаре!');
    } else this.words[word] = { word: word, description: description };
  }

  add(word, description) {
    this.allWords[word] = { word: word, description: description };
  }
  remove(word) {
    delete this.allWords[word];
  }
  get(word) {
    return this.allWords[word];
  }
  showAllWords() {
    for (const key in this.allWords) {
      const { word, description } = this.allWords[key];
      console.log(`${word}, ${description}`);
    }
  }
}
class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name);
  }
  add(word, description) {
    this.allWords[word] = {
      word: word,
      description: description,
      isDifficult: true,
    };
  }
}
const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
hardWordsDictionary.add(
  'дилетант',
  'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.'
);
hardWordsDictionary.add(
  'неологизм',
  'Новое слово или выражение, а также новое значение старого слова.'
);
hardWordsDictionary.add(
  'квант',
  'Неделимая часть какой-либо величины в физике.'
);

hardWordsDictionary.remove('неологизм');
hardWordsDictionary.showAllWords();

console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.setMainName = 'Новый Словарь';
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова дилетант и квант
