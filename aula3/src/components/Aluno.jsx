import React from "react";

const Aluno = ({nome, email, curso}) =>{
    return(
        <li>{nome} - {email} - {curso}</li>
    )
}
export default Aluno;