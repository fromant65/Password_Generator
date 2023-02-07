import { normalCharacters, rareCharacters } from "./charactersSets";

export function capitalizeWords(wordList) {
  let newWordList = [];
  for (let index in wordList) {
    let word = wordList[index];
    word = word.toLowerCase();
    const firstLetter = word.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = word.slice(1);
    const capitalizedWord = firstLetterCap + remainingLetters;
    newWordList.push(capitalizedWord);
  }
  return newWordList;
}

export function capitalizedWordsRandom(wordList) {
  let newWordList = [];
  for (let index in wordList) {
    let word = wordList[index];
    let newWord = "";
    for (let char in word) {
      let isCapitalized = Math.floor(Math.random() * 2);
      newWord = newWord.concat(
        isCapitalized ? word[char].toUpperCase() : word[char].toLowerCase()
      );
    }
    newWordList.push(newWord);
  }
  return newWordList;
}

export function randomNumberString(stringLength) {
  let numbersAdded = 0;
  let numberString = "";
  for (let i = stringLength; i < 15 || numbersAdded < 3; i++, numbersAdded++) {
    let randomNumber = Math.floor(Math.random() * 10);
    numberString = numberString.concat(`${randomNumber}`);
  }
  return numberString;
}

export function randomCharString(stringLength) {
  let charsAdded = 0;
  let charString = "";
  for (let i = stringLength; i < 15 || charsAdded < 3; i++, charsAdded++) {
    let randomChar =
      normalCharacters[Math.floor(Math.random() * normalCharacters.length)];
    charString = charString.concat(`${randomChar}`);
  }
  return charString;
}

export function fullCapitalization(wordList) {
  let newWordList = [];
  for (let index in wordList) {
    let word = wordList[index];
    let newWord = "";
    for (let char in word) {
      newWord = newWord.concat(word[char].toUpperCase());
    }
    newWordList.push(newWord);
  }
  return newWordList;
}
