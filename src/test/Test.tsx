import React from "react";
import './test.scss'

export default function Test() {            //export - funkcja jest dostępna dla innych programów po zaimportowaniu
    let arr: Array<number> = [1,2,3,4,5,6,7,8,9]; 

    let lamb = (a:number) => {
        return <p>{a}</p>
    }

    let maybe: number | null = null;

    return (<>
        <div className="mydiv">
            <h1>tekst w h1</h1>
            <h2>tekst w h2</h2>
        </div>
        <p className="tekst">To jest tekst próbny.</p>
        {
            arr.map((a)=>lamb(a))
        }
        {maybe ? <p>{maybe}</p> : null}
    </>)
}