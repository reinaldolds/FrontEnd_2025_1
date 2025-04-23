import React from 'react'
import ExercicioInline from './components/ExercicioInline'

const App = () => {
  return (
    <div>
      <h1>Página Principal(pai)</h1>
      <br/>
      <p>Olá Pessoal, este é um teste de texto</p>
      <br/>
      <img src='yamamoto.jpg' alt='imagem-yamamoto'/>
      <br />
      <ExercicioInline />

    </div>
  )
}

export default App