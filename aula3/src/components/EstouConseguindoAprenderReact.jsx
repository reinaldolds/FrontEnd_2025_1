import React from "react";

const EstouConseguindoAprenderReact = (props) =>{
    const estouConseguindo = props.isLoggedIn;
    return(
        <div>
            {estouConseguindo ? <h1>Estou indo bem</h1> : <h1>Preciso estudar mais</h1>}
        </div>
    )
}
export default EstouConseguindoAprenderReact;