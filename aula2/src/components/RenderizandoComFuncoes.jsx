import React from "react";

const RenderizandoComFuncoes = () => {

    function escolherRenderizacao(oQueRenderizar){
        if(oQueRenderizar === 'h1'){
            return <h1>Renderizando com Função em h1</h1>
        }else{
            return <h2>Renderizando com Função em h2</h2>
        }}
    return(
        <div>
            {escolherRenderizacao("h1")}
            <br />
            {escolherRenderizacao("h2")}
        </div>
    )
}
export default RenderizandoComFuncoes