export default function Usuario(props) {
  return (
    <div className="usuario">
      <img
        data-test="profile-image"
        src={props.foto}
        alt="imagem de perfil"
        onClick={props.trocarFoto}
      />
      <div className="texto">
        <span>
          <strong data-test="name">{props.nomeDoUsuario}</strong>
          <ion-icon
            data-test="edit-name"
            name="pencil"
            onClick={props.trocaNomeDoUsuario}
          ></ion-icon>
        </span>
      </div>
    </div>
  );
}
