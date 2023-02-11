export default function Story(props){
    return(
    <div className="story">
    <div className="imagem">
      <img src={props.propImg} alt={props.propName}/>
    </div>
    <div className="usuario">
      {props.propName}
    </div>
  </div>
  )
}