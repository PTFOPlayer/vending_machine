import React, { useEffect, useState } from "react";
import './test.scss'
import Machine from "../Machine/Machine";

export default function Test() {            //export - funkcja jest dostępna dla innych programów po zaimportowaniu
    let arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let lamb = (a: number) => {
        return <p>{a}</p>
    }

    let maybe: number | null = null;
    const [machine, setMachine] = useState<null | Machine>(null)
    
    // let l = async () => {
        // let d = await Machine.create()
        // d ? setMachine(d) : {};
    // }
    useEffect(() => {
        Machine.init().then(e => setMachine(e))
    },[])
    return (<>
        <div className="mydiv">
            <h1>tekst w h1</h1>
            <h2>tekst w h2</h2>
        </div>
        <p className="tekst">To jest tekst próbny.</p>
        {
            arr.map((a) => lamb(a))
        }
        {maybe ? <p>{maybe}</p> : null}

        { machine ? 
            <>
                <p>{machine.get_coordinates().x}</p>

                <p>{machine.get_coordinates().y}</p>

                <p>{machine.get_id()}</p>

                <p>{machine.get_payment()}</p>
            </> : null
        }
        {machine ? 

        machine.get_content()?.map((e) => {
            return <>
                {
                    e.map((e) => {
                        console.log(e)
                        return <p>{e.amount}</p>
                    })
                }
            </>
        }) : null

        }
    </>)
}