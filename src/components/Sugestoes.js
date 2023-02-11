import Sugestao from "./Sugestao"

    const suggestionArray = [
        {name: "bad.vibes.memes", img: "assets/img/bad.vibes.memes.svg"},
        {name: "chibidart", img: "assets/img/chibirdart.svg"},
        {name: "razoesparaacreditar", img: "assets/img/razoesparaacreditar.svg"},
        {name: "adorable_animals", img: "assets/img/adorable_animals.svg"},
        {name: "smallcutecats", img: "assets/img/smallcutecats.svg"}
    ];

export default function Sugestoes(){
    return(
        <div className="sugestoes">
          <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
        {suggestionArray.map((array, index) => (<Sugestao suggestedProfileName={array.name} suggestedProfilePicture={array.img} key={index}/>))}
        </div>
    )
}