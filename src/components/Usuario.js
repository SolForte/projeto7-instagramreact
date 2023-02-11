import { useState } from "react";
export default function Usuario(){
    //Feito baseado no DrivenFlix
    const fotoInicial = "assets/img/catanacomics.svg"
    const [nomeDoUsuario, setNomeDoUsuario] = useState("catanacomics");
    const [foto, setFoto] = useState(fotoInicial)
    
    function trocaNomeDoUsuario() {
        const novoNome = prompt("Qual é o seu nome?")
            //Nome de usuario no Instagram não pode ter espaços.
            //Usa-se outros caracteres como ponto ou underline no lugar de espaços
            //Logo, validação de dados.
        if (!/\S/.test(novoNome) || !/^\s+$/.test(novoNome) || novoNome===null || novoNome.length===0){
            return
        } else {
            //Nome de usuario no Instagram é em LowerCase
            //Logo, conversão.
            setNomeDoUsuario(novoNome.toLowerCase())
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
        //Apesar de desnecessário.
        //A fim de atender requisitos de projeto, primeiro verifica-se se é vazio.
        if (!/\S/.test(novaFoto) || novaFoto===null || novaFoto.length===0){
          return
        }
        else if (url == novaFoto){
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