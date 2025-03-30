import React from 'react'
import MeuComponente from './components/MeuComponente'
import RenderizandoComFuncoes from './components/RenderizandoComFuncoes'
import TrabalhandoComImagens from './components/TrabalhandoComImagens'

const App = () => {
  return (
    <div>
      <h1>Página Principal(pai)</h1>
      <br />
      <MeuComponente/>
      <br /><br />
      <RenderizandoComFuncoes/>
      <br /><br />
      <TrabalhandoComImagens/>
    </div>
  )
}

export default App