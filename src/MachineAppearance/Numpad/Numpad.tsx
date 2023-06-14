import React from "react";
import "./numpad.scss"

type numpad_params = {
  buffer: string, setBuffer: React.Dispatch<React.SetStateAction<string>>,
  confirm: boolean, setConfirm: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function Numpad(state:numpad_params) {
  const handle_click = (e: number) => {
    if (state.buffer.length < 2) {
      state.setBuffer(state.buffer + e);
    }
  }

  const clearBuffer = () => {
    state.setBuffer("");
  }

  const handle_confirm = () => {
    state.setConfirm(true);
    new Promise((resolve, reject) => {
      setTimeout(() => {
        state.setConfirm(false);
      }, 10000);
    });
  }

  return (
    <div className="numpad">
      <ul className="col">
        <ul className="row">
          <button onClick={() => handle_click(1)}>1</button>
          <button onClick={() => handle_click(2)}>2</button>
          <button onClick={() => handle_click(3)}>3</button>
        </ul>
        <ul className="row">
          <button onClick={() => handle_click(4)}>4</button>
          <button onClick={() => handle_click(5)}>5</button>
          <button onClick={() => handle_click(6)}>6</button>
        </ul>
        <ul className="row">
          <button onClick={() => handle_click(7)}>7</button>
          <button onClick={() => handle_click(8)}>8</button>
          <button onClick={() => handle_click(9)}>9</button>
        </ul>
        <ul className="row">
          <button onClick={() => handle_click(0)}>0</button>
          <button onClick={() => clearBuffer()}>C</button>
        </ul>
        <button onClick={()=> handle_confirm()}> Confirm </button>
      </ul>
    </div>
  )
}