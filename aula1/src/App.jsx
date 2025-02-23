import Adicao from "./components/Adicao"
import Divisao from "./components/Divisao"
import Multiplicacao from "./components/Multiplicacao"
import Subtracao from "./components/Subtracao"
import "./styles/App.css"

const App = () => {
  return (
    <div className="conteiner">
      <h2>Adição</h2>
      <Adicao num1={3} num2={2}/>
      <br />
      <Subtracao num1={5} num2={2}/>
      <br />
      <Divisao num1={8} num2={2}/>
      <br />
      <Multiplicacao num1={7} num2={2}/>
      <br />
    </div>
  )
}

export default App