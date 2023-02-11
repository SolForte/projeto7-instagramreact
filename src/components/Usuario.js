import { useState } from "react";
export default function Usuario(props){
    //Feito baseado no DrivenFlix
    const fotoInicial = "assets/img/profiles/catanacomics.svg"
    const [nomeDoUsuario, setNomeDoUsuario] = useState("catanacomics");
    const [foto, setFoto] = useState(fotoInicial)
    
    function trocaNomeDoUsuario() {
        const novoNome = prompt("Qual é o seu nome?")
        if (novoNome.length!==0){
            setNomeDoUsuario(novoNome)
        }
    }

    function trocarFoto() {
        const novaFoto = prompt("Insira o link da sua nova foto")
        if (novaFoto.length!==0){
          setFoto(novaFoto)
        }  
    }


    return(
        <div className="usuario">
          <img data-test="profile-image" src={foto} alt="imagem de perfil" onClick={trocarFoto}/>
          <div className="texto">
            <span>
              <strong data-test="name">{nomeDoUsuario}</strong>
              <ion-icon data-test="edit-name" name="pencil" onClick={trocaNomeDoUsuario}></ion-icon>
            </span>
          </div>
        </div>
    )
}