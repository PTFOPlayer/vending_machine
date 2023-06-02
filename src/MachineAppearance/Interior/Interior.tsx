import "./interior.scss"
import MachineInstance from "../../Machine/MachineInstance";
import React, { useEffect, useState } from "react";
import Product from "../../Products/Product";
import { MachineVerify } from "../../Machine/MachineVerify";
import { motion } from "framer-motion";
import { MotionValue, useMotionValue as umv } from "framer-motion";

type nodesparams = {
  e: Product[]
}

export default function Interior(params: { buffer: string, setBuffer: React.Dispatch<React.SetStateAction<string>> }) {
  const [machine, setMachine] = useState<null | MachineInstance>(null);

  const x_arr: Array<Array<MotionValue<number>>> = [
      [umv(0), umv(0), umv(0), umv(0)], 
      [umv(0), umv(0), umv(0), umv(0)], 
      [umv(0), umv(0), umv(0), umv(0)], 
      [umv(0), umv(0), umv(0), umv(0)], 
      [umv(0), umv(0), umv(0), umv(0)]];
  
  const y_arr: Array<Array<MotionValue<number>>> = [
      [umv(0), umv(0), umv(0), umv(0)], 
      [umv(0), umv(0), umv(0), umv(0)], 
      [umv(0), umv(0), umv(0), umv(0)], 
      [umv(0), umv(0), umv(0), umv(0)], 
      [umv(0), umv(0), umv(0), umv(0)]];
  
  const scale_arr: Array<Array<MotionValue<number>>> = [
      [umv(1), umv(1), umv(1), umv(1)], 
      [umv(1), umv(1), umv(1), umv(1)], 
      [umv(1), umv(1), umv(1), umv(1)], 
      [umv(1), umv(1), umv(1), umv(1)], 
      [umv(1), umv(1), umv(1), umv(1)]];

  useEffect(() => {
    MachineInstance.init()
      .then((e) => setMachine(e))
      .catch((e) => console.log(e));

  }, []);

  if (machine) {
    let mv = new MachineVerify(machine);
    mv.verify() ? console.log("verified") : console.log("error in specs");
  }

  useEffect(() => {
    if (machine) {
      for (let i = 0; i < machine.slots.width; i++) {
        for (let j = 0; j < machine.slots.heigth; j++) {
          if (machine.get_products()[i][j].get_id() === params.buffer) {
            machine.get_products()[i][j].set_dropdown(true);
            params.setBuffer("");

          }

        }
      }
    }
  }, [params.buffer]);
  
  let Node = (params: nodesparams) => {
    return (
      <div className="node">
        {
          params.e.map((e, key) => {
            const animation = {
              y: [0, 0, 400 + (200 - (key * 100))],
              rotate: [0, 0, 360],
              scale: [1, 1.3, 1.3],
              transition: { duration: 4 },
            }
            let i = +e.get_id()[0];
            let j = +e.get_id()[1];
            return (
              <div className="segment" key={key} id={e.get_id()}>
                <motion.div className="item"
                  style={{ x: x_arr[i][j], y: y_arr[i][j], scale: scale_arr[i][j] }}
                  animate={e.get_dropdown() && !e.get_was_dropped() ? animation : false}
                  drag={true}
                >
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

  return (
    <div className="interior">
      {machine ?
        <div className="nodes">
          {machine.get_products().map((e, key) => <Node e={e} key={key} />)}
        </div> : null}
      <div className="glass" />
    </div>
  )
}