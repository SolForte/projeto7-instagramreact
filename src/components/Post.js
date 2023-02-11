import { useState } from "react";
export default function Post(props) {
  //Correção de Code Smells: Define a constant instead of duplicating string literals.

  const bookmarkIconOutline = "bookmark-outline";
  const heartIconOutline = "heart-outline";
  const emptyString = "";
  const hiddenClass = "hidden";
  const filledHeartState = "heart";

  const postAlt = "postagem de " + props.postUserName;
  const [bookmarkState, setBookmarkState] = useState(bookmarkIconOutline);
  const [likes, setLikes] = useState(props.likes);
  const [likeHeartState, setLikeHeartState] = useState(heartIconOutline);
  const [heartClass, setHeartClass] = useState(emptyString);
  const [haachama, setHaachama] = useState(hiddenClass);

  function likeFunction() {
    if (likeHeartState !== filledHeartState) {
      setLikeHeartState(filledHeartState);
      setHeartClass("akai-haato");
      setLikes(likes + 1);
    } else {
      setLikeHeartState(heartIconOutline);
      setHeartClass(emptyString);
      setLikes(likes - 1);
    }
  }

  return (
    <div data-test="post" className="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.postUserProfilePicture} alt={props.postUserName} />
          {props.postUserName}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img
          data-test="post-image"
          src={props.postImage}
          alt={postAlt}
          onDoubleClick={() => {
            if (likeHeartState !== "heart") {
              setLikeHeartState("heart");
              setHeartClass("akai-haato");
              setLikes(likes + 1);
              setHaachama("dokidoki");
              setTimeout(() => {
                setHaachama("hidden");
              }, 500);
            }
          }}
        />
        <ion-icon name="heart" class={haachama}></ion-icon>
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              data-test="like-post"
              name={likeHeartState}
              class={heartClass}
              onClick={likeFunction}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              data-test="save-post"
              name={bookmarkState}
              onClick={() => {
                if (bookmarkState !== bookmarkIconOutline) {
                  setBookmarkState(bookmarkIconOutline);
                } else {
                  setBookmarkState("bookmark");
                }
              }}
            ></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img
            src="assets/img/profiles/adorable_animals.svg"
            alt="adorable_animals"
          />
          <div className="texto">
            Curtido por <strong>adorable_animals</strong> e{" "}
            <strong data-test="likes-number">outras {likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
