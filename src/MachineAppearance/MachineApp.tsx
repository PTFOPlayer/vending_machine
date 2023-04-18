import React, { useState } from "react";
import './machineApp.scss'
import Numpad from './Numpad/Numpad'

export default function View() {

  const [buffer, setBuffer] = useState("");
  
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
          <p style={{"color":"white"}}>{buffer}</p>
        </div>
        <Numpad buffer={buffer} setBuffer={setBuffer}/>
        <div className="coins">
          <p>coins</p>
        </div>

      </div>

    </div>
  </>
  )
}




