import "./interior.scss"
import MachineInstance from "../../Machine/MachineInstance";
import React, { useEffect, useState } from "react";
import Product from "../../Products/Product";
import { MachineVerify } from "../../Machine/MachineVerify";

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

  type nodeparams = {
    e: Product[],
    k: number
  }

  type nodesparams = {
    e: Product[][],
  }

  let Node = (params: nodeparams) => {
    return (
      <div className="node">
        {
          params.e.map((e, key) => {
            return (
              <div className="segment" key={key}>
                <div className="item">
                  {e.get_icon()}
                </div>
                <div className="base">
                  <p>
                    {""+ key + params.k}
                  </p>
                  <p>
                    {e.get_price()}zł
                  </p>
                </div>
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
        {params.e.map((e, key) => <Node e={e} key={key} k={key} />)}
      </div>
    )
  }

  return (
    <div className="interior">
      {machine ? <Nodes e={machine.get_products()} /> : null}
      <div className="glass" />
    </div>
  )
}