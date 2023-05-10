import "./interior.scss"
import MachineInstance from "../../Machine/MachineInstance";
import React, { useEffect, useState } from "react";
import Product from "../../Products/Product";

export default function Interior() {
  const [machine, setMachine] = useState<null | MachineInstance>(null);

  useEffect(() => {
    MachineInstance.init()
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

  console.log(machine?.slots.content);

  let Spiral = () => {
    return (
      <div className="spiral">
        <div className="innerspiral">
          <div className="circle_hide" />
        </div>
      </div>
    )
  }

  let Node = (params: {
    e: {
      amount: number;
      product: string | Product;
    }[]
  }) => {
    return (
      <div className="node">
        {
          params.e.map((e, key) => {
            return (
              <div className="segment" key={key}>
                <div className="bottle" />
                <div className="base" />
                <Spiral />
              </div>
            )
          })
        }
      </div>
    )
  }

  let Nodes = (params: {
    e: {
      amount: number;
      product: string | Product;
    }[][]
  }) => {
    return (
      <div className="nodes">
        {params.e.map((e, key) => <Node e={e} key={key} />)}
      </div>
    )
  }

  return (
    <div className="interior">
      {machine ? <Nodes e={ machine.slots.content} /> : null }
      <div className="glass" />
    </div>
  )
}