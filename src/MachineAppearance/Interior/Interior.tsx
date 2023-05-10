import "./interior.scss"
import MachineInstance from "../../Machine/MachineInstance";
import React, { useEffect, useState } from "react";
import Product from "../../Products/Product";
import { MachineVerify } from "../../Machine/MachineVerify";

type nodeparams = {
  e: {
    amount: number;
    product: string | Product;
  }[]
}

type nodesparams = {
  e: {
    amount: number;
    product: string | Product;
  }[][]
}

export default function Interior() {
  const [machine, setMachine] = useState<null | MachineInstance>(null);

  useEffect(() => {
    MachineInstance.init()
      .then((e) => setMachine(e))
      .catch((e) => console.log(e));
  }, []);

  if (machine) {
    let mv = new MachineVerify(machine);
    mv.verify() ? console.log("verified") : console.log("error in specs");
  }

  let Spiral = () => {
    return (
      <div className="spiral">
        <div className="innerspiral">
          <div className="circle_hide" />
        </div>
      </div>
    )
  }

  let Node = (params: nodeparams) => {
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

  let Nodes = (params: nodesparams) => {
    return (
      <div className="nodes">
        {params.e.map((e, key) => <Node e={e} key={key} />)}
      </div>
    )
  }

  return (
    <div className="interior">
      {machine ? <Nodes e={machine.slots.content} /> : null}
      <div className="glass" />
    </div>
  )
}