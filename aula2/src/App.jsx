import React from 'react'
import MeuComponente from './components/MeuComponente'
import RenderizandoComFuncoes from './components/RenderizandoComFuncoes'
import TrabalhandoComImagens from './components/TrabalhandoComImagens'
import HookContador from './components/HookContador'
import HookMegaSena from './components/HookMegaSena'

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
      <br /><br />
      <HookContador/>
      <br /><br />
      <HookMegaSena/>
    </div>
  )
}

export default App