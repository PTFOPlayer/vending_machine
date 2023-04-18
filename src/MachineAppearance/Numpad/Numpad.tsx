import "./numpad.scss"

export default function Numpad(state: {buffer: string, setBuffer: React.Dispatch<React.SetStateAction<string>>}) {

  const handle_click = (e: number) => {
    state.setBuffer(state.buffer + e);
  }

  const clearBuffer = () => {
    state.setBuffer("");
  }

  return (
    <div className="numpad">
      <ul className="col">
        <ul className="row">
          <button onClick={() => handle_click(1)}>1</button>
          <button onClick={() => handle_click(2)}>2</button>
          <button onClick={() => handle_click(3)}>3</button>
        </ul>
        <ul className="row">
          <button onClick={() => handle_click(4)}>4</button>
          <button onClick={() => handle_click(5)}>5</button>
          <button onClick={() => handle_click(6)}>6</button>
        </ul>
        <ul className="row">
          <button onClick={() => handle_click(7)}>7</button>
          <button onClick={() => handle_click(8)}>8</button>
          <button onClick={() => handle_click(9)}>9</button>
        </ul>
        <ul className="row">
          <button onClick={() => handle_click(0)}>0</button>
          <button onClick={() => clearBuffer()}>C</button>
        </ul>
        <button> Confirm </button>
      </ul>
    </div>
  )
}