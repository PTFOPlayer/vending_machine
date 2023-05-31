import "./coins.scss"

export default function Coins(params: { balance: number, setBalance: React.Dispatch<React.SetStateAction<number>> }) {
  return (
    <div className="Coins">
      <button className="pln1" onClick={() => { params.setBalance(params.balance + 1) }}><p>1</p></button>
      <button className="pln2" onClick={() => { params.setBalance(params.balance + 2) }}><p>2</p></button>
      <button className="pln5" onClick={() => { params.setBalance(params.balance + 5) }}><p>5</p></button>
    </div>
  )
}