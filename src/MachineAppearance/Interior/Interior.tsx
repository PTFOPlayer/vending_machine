import "./interior.scss"
import MachineInstance from "../../Machine/MachineInstance";
import React, { useEffect, useState } from "react";
import Product from "../../Products/Product";
import { MachineVerify } from "../../Machine/MachineVerify";
import { motion } from "framer-motion";
import e from "express";
export default function Interior(par: { buffer: string }) {
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
    e: Product[]
  }

  type nodesparams = {
    e: Product[][],
  }
  useEffect(() => {
    if (machine) {

      for (let i = 0; i < machine.slots.width; i++) {
        for (let j = 0; j < machine.slots.heigth; j++) {
          if (machine.get_products()[i][j].get_id() === par.buffer) {
            machine.get_products()[i][j].set_dropdown(true);
          } else {
            machine.get_products()[i][j].set_dropdown(false);
          }
        }
      }
    }
  });
  let Node = (params: nodeparams) => {
    return (
      <div className="node">
        {
          params.e.map((e, key) => {
            return (
              <div className="segment" key={key} id={e.get_id()}>
                <motion.div className="item" animate={{ y: e.get_dropdown() ? 400 : 0, rotate: e.get_dropdown() ? 360 : 0 }} >
                  {e.get_icon()}
                </motion.div>
                <div className="base">
                  <p>
                    {e.get_id()}
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
        {params.e.map((e, key) => <Node e={e} key={key} />)}
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