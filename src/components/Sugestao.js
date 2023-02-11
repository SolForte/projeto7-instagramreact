export default function Sugestao(props){
    return(
        <div className="sugestao">
        <div className="usuario">
          <img src={props.suggestedProfilePicture} alt={props.suggestedProfileName}/>
          <div className="texto">
            <div className="nome">{props.suggestedProfileName}</div>
            <div className="razao">Segue você</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>
    )
}