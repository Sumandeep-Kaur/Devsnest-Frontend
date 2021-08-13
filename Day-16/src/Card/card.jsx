const card = {
    border: "2px solid",
    padding: "5px",
    textAlign: "center",
    width: "300px",
    margin: '120px auto',
    height: 'fit-content',
    borderRadius: "10px"
}

const Card = () => {
    return (
        <div style= {card}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="img" />
            <h2>Hello React!</h2>
            <p>This is a react card.</p>
        </div>
    )
} 
export default Card;