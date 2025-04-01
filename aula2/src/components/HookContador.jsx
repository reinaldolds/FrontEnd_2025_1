import React, { useState } from "react";

const HookContador = () =>{
    const [count, setCount] = useState(0);
    
    return(
        <div>
            <h1>Contador com useStates</h1>
        <p>Voçê apertou o {count} o botão.</p>
        <button onClick={()=>{setCount(count + 1)}}>Contar</button>
        <button onClick={()=>{setCount(count - 1)}}>Diminuir</button>

        </div>
    )
}
export default HookContador;