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

type interior_params = {
  buffer: string, setBuffer: React.Dispatch<React.SetStateAction<string>>,
  balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>,
  confirm: boolean
}

export default function Interior(params: interior_params) {
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

  // logika związana z kupowaniem produktów
  useEffect(() => {
    if (machine) {
      for (let i = 0; i < machine.slots.width; i++) {
        for (let j = 0; j < machine.slots.heigth; j++) {
          let product = machine.get_products()[i][j];
          if (product.get_id() === params.buffer && params.balance >= product.get_price() && !product.get_was_dropped()) {
            product.set_dropdown(true);
            params.setBuffer("");
            params.setBalance(params.balance - product.get_price());
          } else if (params.balance <= product.get_price() && !product.get_was_dropped()) {
            new Promise((resolve, reject) => {
              params.setBuffer("za malo srodkow");
              setTimeout(() => {
                params.setBuffer("");
              }, 10000);
            });
          }

        }
      }
    }
  }, [params.confirm == true]);

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