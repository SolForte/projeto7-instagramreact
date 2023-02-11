import { useState } from "react"
export default function Post(props){
    const postAlt=("postagem de "+props.postUserName)
    const [bookmarkState, setBookmarkState] = useState("bookmark-outline") 
    return(
        <div className="post">
        <div className="topo">
          <div className="usuario">
            <img src={props.postUserProfilePicture} alt={props.postUserName}/>
            {props.postUserName}
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div className="conteudo">
          <img src={props.postImage} alt={postAlt} />
        </div>

        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name={bookmarkState} onClick={() => {
                if (bookmarkState !== "bookmark-outline"){
                  setBookmarkState("bookmark-outline")}
                else setBookmarkState("bookmark");
              }}
              ></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src="assets/img/adorable_animals.svg" alt="adorable_animals"/>
            <div className="texto">
              Curtido por <strong>NOME</strong> e <strong>outras X pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    )
}