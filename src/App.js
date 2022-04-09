import "./App.css";
import "./global.css";
import {useState} from "react";

function App() {

  const [equation, setEquation] = useState("")
  const btn = [ "{}", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", ".", "0","."]
  const clicar = (ev) => {
   setEquation(equation + ev.target.textContent)
  }
  
  const limpar = (lim) => {
    setEquation("0")
  }
  return (
    <div id="page">
      <div className="calc">
        <div id="calc_result"> {equation}</div>
        <div id="calc_barra"> </div>
        <div id="calc_keyboard">
          <button className="calc_button" onClick={limpar}>C</button>
          
          {btn.map((txt) => <button className="calc_button" onClick={clicar}>{txt} </button>)  }

          <button className="calc_button" onClick={()=> setEquation(eval(equation)) }>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
