import React, { useEffect, useState } from "react";
import "./logo.css";
import WebFont from "webfontloader";

const correctText = "Password Generator";

const Logo = () => {
  const [currentText, setCurrentText] = useState(
    generateRandomString(correctText.length)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGrowing, setIsGrowing] = useState(true);
  const [resto, setResto] = useState(0);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["PT Mono"],
      },
    });
  }, []);
  useEffect(() => {
    let interval = 50;
    if (currentText === correctText && resto === 2) {
      interval = 2000 + (Math.random() - 0.5) * 1400;
      //console.log(interval);
    }
    //console.log(interval, currentIndex, currentText, isGrowing, resto);
    setTimeout(() => {
      if (isGrowing && currentIndex < 18) {
        //console.log("grow ", currentIndex);
        setCurrentIndex(currentIndex + 1);
      } else if (!isGrowing && currentIndex > 0) {
        //console.log("shrink ", currentIndex);
        setCurrentIndex(currentIndex - 1);
      }
      if (currentIndex >= 0 || currentIndex <= correctText.length - 1) {
        setCurrentText(changeCharacters(currentIndex));
      }
      //console.log(resto, currentIndex, currentText);
      setResto((resto + 1) % 3);
      if (resto % 3) return;
      //console.log(currentText);
      if (currentIndex >= correctText.length - 1 && isGrowing) {
        setIsGrowing(false);
      }
      if (currentIndex <= 0 && !isGrowing) {
        setIsGrowing(true);
      }
    }, interval);
  });

  return <div className="logo_container">{currentText}</div>;
};

function changeCharacters(index) {
  let newText = "";
  for (let i = 0; i < index; i++) {
    if (i === 8) {
      newText = newText.concat(" ");
    } else {
      newText = newText.concat(correctText[i]);
    }
  }
  const alphabet =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = index; i < correctText.length; i++) {
    if (i === 8) {
      newText = newText.concat(" ");
    } else {
      let newChar = alphabet[Math.floor(Math.random() * alphabet.length)];
      newText = newText.concat(newChar);
    }
  }
  return newText;
}

function generateRandomString(length) {
  let string = "";
  const alphabet =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = 0; i < length; i++) {
    if (i === 8) {
      string = string.concat(" ");
      continue;
    }
    let char = alphabet[Math.floor(Math.random() * alphabet.length)];
    string = string.concat(char);
  }
  return string;
}

export default Logo;
