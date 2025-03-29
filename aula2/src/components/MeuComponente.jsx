import React from "react";

const MeuComponente = () =>{
    function aviso(){
        alert("Botão Clicado com Sucesso.");
    }
    return(
        <div>
            <h1>O botão de alerta</h1>
            <br />
            <button onClick={aviso}>Clique Aqui</button>
        </div>
    )
}
export default MeuComponente;