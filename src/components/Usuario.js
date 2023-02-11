import { useState } from "react";
export default function Usuario(){
    //Feito baseado no DrivenFlix
    const fotoInicial = "assets/img/catanacomics.svg"
    const [nomeDoUsuario, setNomeDoUsuario] = useState("catanacomics");
    const [foto, setFoto] = useState(fotoInicial)
    
    function trocaNomeDoUsuario() {
        const novoNome = prompt("Qual é o seu nome?")
        if (!/\S/.test(novoNome) || novoNome===null || novoNome.length===0){
            return
        } else {
            setNomeDoUsuario(novoNome)
        }
    }

    function trocarFoto() {
        const novaFoto = prompt("Insira o link da sua nova foto")
        let url;
        try {
          url = new URL(novaFoto);
        } catch (_) {
          return false;
        }
        if (url == novaFoto){
            setFoto(novaFoto)
        }  
    }


    return(
        <div className="usuario">
          <img src={foto} alt="imagem de perfil" onClick={trocarFoto}/>
          <div className="texto">
            <span>
              <strong>{nomeDoUsuario}</strong>
              <ion-icon name="pencil" onClick={trocaNomeDoUsuario}></ion-icon>
            </span>
          </div>
        </div>
    )
}