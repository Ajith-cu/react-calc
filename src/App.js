import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (event) => {
    setResult(result.concat(event.target.name));
  };

  const handlebackspace = () => {
    setResult(result.slice(0, -1));
  };

  const handleResult = () => {
    try {
      setResult(eval(result).toString());
    }catch(err){
      console.log(err);
    }
  };

  const clear = () => {
    setResult("");
  };

  return (
    <div className="app">
      <div className="calc-wrapper">
        <div className="row">
          <form>
            <input className="input" value={result}></input>
          </form>
        </div>
        <div className="row">
          <button className="button" name="7" onClick={handleClick}>
            7
          </button>
          <button className="button" name="8" onClick={handleClick}>
            8
          </button>
          <button className="button" name="9" onClick={handleClick}>
            9
          </button>
          <button className="button" name="/" onClick={handleClick}>
            /
          </button>
        </div>
        <div className="row">
          <button className="button" name="4" onClick={handleClick}>
            4
          </button>
          <button className="button" name="5" onClick={handleClick}>
            5
          </button>
          <button className="button" name="6" onClick={handleClick}>
            6
          </button>
          <button className="button" name="*" onClick={handleClick}>
            *
          </button>
        </div>
        <div className="row">
          <button className="button" name="1" onClick={handleClick}>
            1
          </button>
          <button className="button" name="2" onClick={handleClick}>
            2
          </button>
          <button className="button" name="3" onClick={handleClick}>
            3
          </button>
          <button className="button" name="+" onClick={handleClick}>
            +
          </button>
        </div>
        <div className="row">
          <button className="button" name="." onClick={handleClick}>
            .
          </button>
          <button className="button" name="0" onClick={handleClick}>
            0
          </button>
          <button className="button" onClick={handleResult}>
            =
          </button>
          <button className="button" name="-" onClick={handleClick}>
            -
          </button>
        </div>
        <div className="row">
          <button className="clear-btn" onClick={clear}>
            Clear
          </button>
          <button className="clear-btn" onClick={handlebackspace}>
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
