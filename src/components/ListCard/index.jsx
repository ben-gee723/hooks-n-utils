export default function ListCard (props) {
    const {img, title, text} = props;
    
    return (
        <div className="list-card">
            <img src={img} alt="" />
            <h2> {title} </h2>
            <p> {text} </p>
        </div>
    )
}