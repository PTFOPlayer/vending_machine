import React, { useEffect, useState } from "react";
import "./machineApp.scss";
import Numpad from "./Numpad/Numpad";
import Machine from "../Machine/Machine";

export default function View() {
  const [machine, setMachine] = useState<null | Machine>(null);

  useEffect(() => {
    Machine.init()
      .then((e) => setMachine(e))
      .catch((e) => console.log(e));
  }, []);
  const [buffer, setBuffer] = useState<string>("");
  const [balance, setBalance] = useState<number>(0);

  const dimensions: [number, number] = [4, 5];
  let arr: Array<Array<Number>> = [];

  for (let i = 0; i < dimensions[0]; i++) {
    let t_arr: Array<number> = [];
    for (let j = 0; j < dimensions[1]; j++) {
      t_arr.push(j);
    }
    arr.push(t_arr);
  }

  console.log(arr);

  return (
    <>
      <div className="box">
        <div className="column1">
          <div className="interior">
            <div className="nodes">
              {arr.map((e) => {
                return (
                  <div className="node">
                    {e.map((f) => {
                      return <p>{f.toString()}</p>;
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="push">
            <h1>PUSH</h1>
          </div>
        </div>
        <div className="column2">
          <div className="window">
            <p>balance: {balance}</p>
          </div>
          <div className="window">
            <p style={{ color: "white" }}>{buffer}</p>
          </div>
          <Numpad buffer={buffer} setBuffer={setBuffer} />
          <div className="coins">
            <p>coins</p>
          </div>
        </div>
      </div>
    </>
  );
}
