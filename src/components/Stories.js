import Story from "./Story";

const itens = [
  { name: "9gag", img: "assets/img/profiles/9gag.svg" },
  { name: "meowed", img: "assets/img/profiles/meowed.svg" },
  { name: "barked", img: "assets/img/profiles/barked.svg" },
  { name: "nathanwpylestrangeplanet", img: "assets/img/profiles/nathanwpylestrangeplanet.svg"},
  { name: "wawawicomics", img: "assets/img/profiles/wawawicomics.svg" },
  { name: "respondeai", img: "assets/img/profiles/respondeai.svg" },
  { name: "filomoderna", img: "assets/img/profiles/filomoderna.svg" },
  { name: "memeriagourmet", img: "assets/img/profiles/memeriagourmet.svg" },
];
export default function Stories() {
  return (
    <div className="stories">
      {itens.map((array, index) => (
        <Story propName={array.name} propImg={array.img} key={index} />
      ))}

      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
