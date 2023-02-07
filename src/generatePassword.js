import {
  capitalizeWords,
  capitalizedWordsRandom,
  randomNumberString,
  randomCharString,
  fullCapitalization,
} from "./auxiliarFunctions";

import { normalCharacters, rareCharacters } from "./charactersSets";

export function generatePassword(randomLevel, wordList) {
  let password = "";
  switch (randomLevel.toString()) {
    case "1":
      //console.log("lvl1");
      password = passwordLvl1(wordList);
      break;
    case "2":
      //console.log("lvl2");
      password = passwordLvl2(wordList);
      break;
    case "3":
      //console.log("lvl3");
      password = passwordLvl3(wordList);
      break;
    case "4":
      //console.log("lvl4");
      password = passwordLvl4(wordList);
      break;
    case "5":
      //console.log("lvl5");
      password = passwordLvl5(wordList);
      break;
    default:
      alert("El nivel de aleatoriedad ingresado no es válido.");
      break;
  }
  return password;

  //setAreWordsSet(true);
}

export function passwordLvl1(wordList) {
  /*Capitaliza las palabras, pone puntos entre ellas y 
    termina el string con una secuencia aleatoria de al menos tres números*/
  let newWordList = capitalizeWords(wordList);
  let newPassword = "";
  for (let word in newWordList) {
    newPassword = newPassword.concat(`${newWordList[word]}.`);
  }
  newPassword = newPassword.concat(randomNumberString(newPassword.length));
  return newPassword;
}

export function passwordLvl2(wordList) {
  /*Capitaliza las palabras, pone caracteres especiales aleatorios entre ellas y 
    termina el string con una secuencia aleatoria de números*/
  const newWordList = capitalizeWords(wordList);
  let newPassword = "";
  for (let word in newWordList) {
    newPassword = newPassword.concat(
      `${newWordList[word]}${
        normalCharacters[Math.floor(Math.random() * normalCharacters.length)]
      }`
    );
  }
  newPassword = newPassword.concat(randomNumberString(newPassword.length));
  return newPassword;
}

export function passwordLvl3(wordList) {
  /*Capitaliza aleatoriamente las palabras, pone caracteres especiales aleatorios entre ellas y
    pone una secuencia aleatoria de numeros en algun lugar aleatorio entre ellas*/
  let newWordList = capitalizedWordsRandom(wordList);
  let wordLengths = newWordList.length;
  //Empieza en la longitud del array de palabras para tener en cuenta los caracteres agregados
  for (let i in newWordList) {
    wordLengths += newWordList[i].length;
  }
  let newPassword = "";
  let numberAddingPosition = Math.floor(Math.random() * newWordList.length);
  for (let word in newWordList) {
    //console.log(numberAddingPosition, word);
    newPassword = newPassword.concat(
      `${newWordList[word]}${
        word === numberAddingPosition.toString()
          ? randomNumberString(wordLengths)
          : normalCharacters[
              Math.floor(Math.random() * normalCharacters.length)
            ]
      }`
    );
  }
  return newPassword;
}

export function passwordLvl4(wordList) {
  /*Capitaliza aleatoriamente las palabras, pone caracteres especiales aleatorios entre ellas y
    pone una secuencia aleatoria de caracteres o numeros en algun lugar aleatorio entre ellas*/
  let newWordList = capitalizedWordsRandom(wordList);
  let newPassword = "";
  let wordLengths = newWordList.length;
  //Empieza en la longitud del array de palabras para tener en cuenta los caracteres agregados
  for (let i in newWordList) {
    wordLengths += newWordList[i].length;
  }
  let numberAddingPosition = Math.floor(Math.random() * newWordList.length);
  for (let word in newWordList) {
    //console.log(numberAddingPosition, word);
    newPassword = newPassword.concat(
      `${newWordList[word]}${
        word === numberAddingPosition.toString()
          ? randomCharString(wordLengths)
          : normalCharacters[
              Math.floor(Math.random() * normalCharacters.length)
            ]
      }`
    );
  }
  return newPassword;
}

export function passwordLvl5(wordList) {
  /*Pone todas las palabras en mayúsculas y mezcla caracteres aleatorios raros entre ellas*/
  let newWordList = fullCapitalization(wordList);
  let newPassword = "";
  for (let word in newWordList) {
    for (let char in newWordList[word]) {
      let isRandomCharAdded = Math.floor(Math.random() * 2);
      let randomChar =
        rareCharacters[Math.floor(Math.random() * rareCharacters.length)];
      newPassword = newPassword.concat(
        `${newWordList[word][char]}${isRandomCharAdded ? randomChar : ""}`
      );
    }
  }
  while (newPassword.length < 15) {
    let randomChar =
      rareCharacters[Math.floor(Math.random() * rareCharacters.length)];
    let randomPos = Math.floor(Math.random() * newPassword.length);
    let firstPart = newPassword.substring(0, randomPos);
    let secondPart = newPassword.substring(randomPos);
    newPassword = firstPart + randomChar + secondPart;
  }
  return newPassword;
}
