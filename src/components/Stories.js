import Story from "./Story"
export default function Stories() {
	const itens = [
        {name: "9gag", img: "assets/img/9gag.svg"},
        {name: "meowed", img: "assets/img/meowed.svg"},
        {name: "barked", img: "assets/img/barked.svg"},
        {name: "nathanwpylestrangeplanet", img: "assets/img/nathanwpylestrangeplanet.svg"},
        {name: "wawawicomics", img: "assets/img/wawawicomics.svg"},
        {name: "respondeai", img: "assets/img/respondeai.svg"},
        {name: "filomoderna", img: "assets/img/filomoderna.svg"},
        {name: "memeriagourmet", img: "assets/img/memeriagourmet.svg"}
    ]

	return (
        <div className="stories">

            {itens.map(
                (array,index) => (
                    <Story propName={array.name} propImg={array.img} key={index}/>
                ))}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
	)
}