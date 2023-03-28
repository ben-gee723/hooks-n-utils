import ListCard from './Cart'
import store from './store/Context'
// ODER
import data from './data/data.json'

let objExample = {
    img: "url",
    title: "Modelling1",
    text: "Ich habe was cooles gemacht"
};

let listOfImages = [
    {
        img: "url",
        title: "Modelling1",
        text: "Ich habe was cooles gemacht"
    },
    {
        img: "url",
        title: "Modelling1",
        text: "Ich habe was cooles gemacht"
    },
    {
        img: "url",
        title: "Modelling1",
        text: "Ich habe was cooles gemacht"
    },
]


export default function Gallery (){
    return (
        <div className='gallery'>
            <h1>Gallery</h1>
            {listOfImages.map(pic => <ListCard 
                img={pic.img} 
                title={pic.title}
                text={pic.text}
                />)}
        </div>
    )
}