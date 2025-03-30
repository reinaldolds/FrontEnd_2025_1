import React from "react";
import game2 from "../assets/img/gamer2.jpg"

const TrabalhandoComImagens = ()=>{
    return(
        <div>
            <h1>Trabalhando com Imagens</h1>
            <br />
            <img src="gamesWallpaper.jpg" alt="imagem-public" />
            <br />
            <img src={game2} alt="imagem-assets" />
        </div>
    )
}
export default TrabalhandoComImagens;