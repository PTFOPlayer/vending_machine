import React from "react";
import './machineApp.scss'
//import Machine from "../Machine/Machine";

export default function View() {
  let buffer: string = "";
  const handle_click = (e: number) => {
    buffer += e;
  }

  let Numpad = () => {
    return (
      <div className="numpad">
          <ul className="col">
            <ul className="row">
              <button>1</button>
              <button>2</button>
              <button>3</button>
            </ul>
            <ul className="row">
              <button>4</button>
              <button>5</button>
              <button>6</button>
            </ul>
            <ul className="row">
              <button>7</button>
              <button>8</button>
              <button>9</button>
            </ul>
            <ul className="row">
              <button>0</button>
              <button>E</button>
              <button>C</button>
            </ul>
          </ul>
      </div>
    )
  }

  return (<>
    <div className="box">
      <div className="column1">

        <div className="interior"></div>
        <div className="push">
          <h1>PUSH</h1>
        </div>
      </div>
      <div className="column2">
        <div className="window">
        </div>
        <Numpad/>
        <div className="coins">
          <p>coins</p>
        </div>

      </div>

    </div>
  </>
  )
}




