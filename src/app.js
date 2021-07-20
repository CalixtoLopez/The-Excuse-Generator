/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code
  document.querySelector("#new-generator").addEventListener("click", () => {
    document.querySelector("#generator").innerHTML = newGenerator();
  });

  console.log("Hello Rigo from the console!");
};

let newGenerator = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let whoRandom = Math.floor(Math.random() * who.length);
  let actionRandom = Math.floor(Math.random() * action.length);
  let whatRandom = Math.floor(Math.random() * what.length);
  let whenRandom = Math.floor(Math.random() * when.length);
  let space = " ";
  let generatorRandom =
    who[whoRandom] +
    " " +
    action[actionRandom] +
    space +
    what[whatRandom] +
    space +
    when[whenRandom];
  console.log(generatorRandom);
  return generatorRandom;
};
