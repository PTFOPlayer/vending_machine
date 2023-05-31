import React, {useState } from "react";
import "./machineApp.scss";
import Numpad from "./Numpad/Numpad";
import Interior from "./Interior/Interior";
import Coins from "../CoinsGui/Coins";

export default function View() {

  const [buffer, setBuffer] = useState<string>("");
  const [balance, setBalance] = useState<number>(0);

  return (
    <>
      <div className="box">
        <div className="column1">
          <Interior buffer={buffer} />
          <div className="push">
            <h1>PUSH</h1>
          </div>
        </div>
        <div className="column2">
          <div className="window">
            <p>balance: {balance}</p>
          </div>
          <div className="window">
            <p style={{ color: "white" }}>nr: {buffer}</p>
          </div>
          <Numpad buffer={buffer} setBuffer={setBuffer} />
          <div className="coins">
            <p>coins</p>
          </div>
        </div>
      </div>
      <Coins balance={balance} setBalance={setBalance} />
    </>
  );
}
