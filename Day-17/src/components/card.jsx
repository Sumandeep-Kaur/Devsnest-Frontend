import "../style.css";

const Card = (props) => {
    const{title,cal} = props;
    return (
        <div className="card">
            <h2> {title} </h2>
            <p> You have consumed {cal} calories today! </p>
        </div>
    )
}
export default Card;