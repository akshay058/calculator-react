/* eslint no-eval: 0 */

import React from "react";
import { useState } from "react"; // importing hook

import "./Calculator.css"; // importing css of calculator

export default function Calculator() {
  // used hook here useState...
  const [result, setResult] = useState("");

  // function to concatinate entered value in input box with result
  function handleClick(e) {
    if (result.length === 1 && result === "0") {
      setResult(e.target.value);
    } else {
      setResult(result.concat(e.target.value));
    }
  }

  // function to clear all inputs from screen
  function clearDisplay() {
    setResult("");
  }

  // function to delete only last input from screen
  function backspace() {
    setResult(result.slice(0, -1));
  }

  //function to calculate result of entered string in input box
  function evaluate() {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  }

  return (
    <div id="calculator">
      <input
        type="text"
        placeholder="0"
        className="input-box"
        value={result}
      ></input>

      {/* all buttons for display on web screen */}
      <button className="btn" onClick={handleClick} value="7">
        7
      </button>
      <button className="btn" onClick={handleClick} value="8">
        8
      </button>
      <button className="btn" onClick={handleClick} value="9">
        9
      </button>
      <button className="btn" onClick={handleClick} value="/">
        /
      </button>
      <button className="btn" onClick={handleClick} value="4">
        4
      </button>
      <button className="btn" onClick={handleClick} value="5">
        5
      </button>
      <button className="btn" onClick={handleClick} value="6">
        6
      </button>
      <button className="btn" onClick={handleClick} value="*">
        &times;
      </button>

      <button className="btn" onClick={handleClick} value="1">
        1
      </button>
      <button className="btn" onClick={handleClick} value="2">
        2
      </button>
      <button className="btn" onClick={handleClick} value="3">
        3
      </button>

      <button className="btn" onClick={handleClick} value="-">
        -
      </button>
      <button className="btn" onClick={handleClick} value="0">
        0
      </button>

      <button className="btn" onClick={handleClick} value="%">
        %
      </button>
      <button className="btn" onClick={handleClick} value=".">
        .
      </button>

      <button className="btn" onClick={handleClick} value="+">
        +
      </button>

      <button className="btn" id="clear" onClick={backspace}>
        C
      </button>
      <button className="btn" id="reset" onClick={clearDisplay}>
        reset
      </button>
      <button className="btn" id="result" onClick={evaluate}>
        =
      </button>
    </div>
  );
}
