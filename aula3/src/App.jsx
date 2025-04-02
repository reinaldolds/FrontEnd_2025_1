import React from "react";
import EstouConseguindoAprenderReact from "./components/EstouConseguindoAprenderReact";
import Aluno from "./components/Aluno";

const App = () =>{
  const alunos = [
    {nome: "Junior", email: "junio@hotmail.com", curso: "Medicina"},{nome: "Boby", email: "Bob@hotmail.com", curso: "Engenheiro"},{nome: "Batman", email: "Batbat@hotmail.com", curso: "Vaqueiro"}
  ]
  return(
    <div>
      <h1>React App</h1>
      <br /><br />
      <EstouConseguindoAprenderReact isLoggedIn ={true} />
      <br /><br />
      <h2>Lista de Alunos</h2>
      <ul>
        {alunos.map((aluno, index) =>(
          <Aluno key={index} {...aluno}/>
        ))}
      </ul>
    </div>
  )
}
export default App;