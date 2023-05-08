import "./interior.scss"
import Machine from "../../Machine/Machine";
import React, { useEffect, useState } from "react";

export default function Interior() {
  const [machine, setMachine] = useState<null | Machine>(null);

  useEffect(() => {
    Machine.init()
      .then((e) => setMachine(e))
      .catch((e) => console.log(e));
  }, []);

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
      <div className="glass" />
    </div>
  )
}