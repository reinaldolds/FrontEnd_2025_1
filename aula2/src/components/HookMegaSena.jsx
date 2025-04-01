import React, { useState } from "react";

const HookMegaSena = () =>{
    const [numeroSorteado, setNumeroSorteado] = useState(null);
    const [numerosSorteados, setNumerosSorteados] = useState([]);
    
    const sortearNumero = () =>{
        if(numerosSorteados.length > 6){
            alert("Você já sorteou os 6 números");
            return;
        }
        let novoNumero;
        do{
            novoNumero = Math.floor(Math.random() * 60) + 1;
        }while (numerosSorteados.includes(novoNumero));
        setNumeroSorteado(novoNumero);
        setNumerosSorteados([...numerosSorteados, novoNumero]);


    }

    return(
        <div>
            <h1>Sorteador da Mega em React! :</h1>
            <button onClick={sortearNumero}>Sortear Número</button>
            <h2>Último Número Sorteado: {numeroSorteado !== null ? numeroSorteado : "-"}</h2>
            <h3>Sorteados: {numerosSorteados.join(" - ")}</h3>
        </div>
    )
}
export default HookMegaSena;