import { useState } from "react";
import { generatePassword } from "./generatePassword";
import { copyURI } from "./copyLink";
import Logo from "./Logo";
import "./App.css";

function App() {
  const [randomLevel, setRandomLevel] = useState(1);
  const [wordCount, setWordCount] = useState(0);
  const [isFormSet, setIsFormSet] = useState(false);
  const [wordsLeft, setWordsLeft] = useState(0);
  const [wordList, setWordList] = useState([]);
  const [word, setWord] = useState("");
  const [areWordsSet, setAreWordsSet] = useState(false);
  const [password, setPassword] = useState("");

  function handleFirstForm(event) {
    event.preventDefault();
    //console.log(randomLevel);
    setIsFormSet(true);
    setWordsLeft(wordCount);
    if (wordCount.toString() === "0") {
      setAreWordsSet(true);
      setPassword(generatePassword(randomLevel, wordList));
    }
  }

  function handleWordForm(event) {
    event.preventDefault();
    let auxWordList = wordList;
    let newWord = document.getElementById("word").value;
    auxWordList.push(newWord);
    setWord("");
    setWordList(auxWordList);
    if (wordsLeft <= 1) {
      setPassword(generatePassword(randomLevel, wordList));
      setAreWordsSet(true);
    }
    setWordsLeft(wordsLeft - 1);
  }

  return (
    <div className="App">
      <h1 className="titulo">Generador de contraseñas seguras</h1>
      <div className="content_container">
        <div className="form_div">
          {isFormSet ? (
            ""
          ) : (
            <form
              className="form"
              id="first_form"
              action=""
              onSubmit={(e) => handleFirstForm(e)}
            >
              <label
                className="label"
                id="label_random_level"
                htmlFor="randomLevel"
              >
                Nivel de aleatoriedad: {randomLevel}
              </label>
              <input
                className="input"
                id="input_random_level"
                name="randomLevel"
                type="range"
                min="1"
                max="5"
                onChange={(e) => setRandomLevel(e.target.value)}
                value={randomLevel}
              />
              <label className="label" id="label_word_count" htmlFor="">
                Cantidad de palabras personalizadas
              </label>
              <input
                className="input"
                id="input_word_count"
                type="number"
                name="wordCount"
                value={wordCount}
                onChange={(e) => setWordCount(e.target.value)}
              />
              <input
                className="submit"
                id="submit_form-1"
                type="submit"
                value="Aceptar"
              />
            </form>
          )}

          {isFormSet && wordsLeft && !areWordsSet > 0 ? (
            <form
              className="form"
              id="form-2"
              action=""
              onSubmit={(e) => handleWordForm(e)}
            >
              <label className="label" id="label_words" htmlFor="word">
                Ingrese una palabra. Palabras restantes: {wordsLeft}
              </label>
              <input
                className="input"
                type="text"
                name="word"
                id="word"
                value={word}
                onChange={(e) => setWord(e.target.value)}
              />
              <input
                className="submit"
                id="submit_form-2"
                type="submit"
                value="Aceptar"
              />
            </form>
          ) : (
            ""
          )}
          {areWordsSet ? (
            <div className="password_container">
              La contraseña generada es:{" "}
              <a
                className="link"
                href="#"
                password={password}
                onClick={(e) => copyURI(e)}
              >
                {password}
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="logo_container">
          <Logo />
        </div>
      </div>

      <div className="info">
        <p className="info__parrafo-1">Una contraseña para ser segura:</p>
        <ul className="info__lista">
          <li>Tiene al menos 12 caracteres (si son 14 o más, mejor)</li>
          <li>Tiene una combinación de mayúsculas y minúsculas</li>
          <li>
            No debe ser una palabra que pueda ser encontrada en un diccionario
            ni un nombre propio
          </li>
          <li>
            Debe ser significativamente diferente a tus anteriores contraseñas
          </li>
          <li>Debe ser facil de recordar pero dificil de adivinar</li>
        </ul>
        <p className="info__parrafo-2">
          Esta app se encarga de generar contraseñas seguras, cumpliendo los
          requisitos antes mencionados, además de agregar números y caracteres
          especiales. El usuario debe pedir un numero de palabras personalizadas
          que quiera que su contraseña tenga y la app se encargará de generar
          una contraseña segura utilizando dichas palabras y al menos 14
          caracteres. Además, el usuario podrá elegir entre un mayor o menor
          nivel de aleatoriedad en los caracteres extra que agregue la app. Con
          un nivel menor de aleatoriedad, la contraseña será más fácil de
          recordar, y con un nivel mayor será más segura
        </p>
      </div>
    </div>
  );
}

export default App;
