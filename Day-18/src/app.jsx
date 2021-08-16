import "./style.css";

const App = () => {
    return (
        <div>
            <h1 className="head"> Score Card </h1>
            <div className="container">
                <div className="card">
                    <h2 className="player">Player 1</h2>
                    <h2 className="score">0</h2>
                </div>
                <div className="card">
                    <h2 className="player">Player 2</h2>
                    <h1 className="score">0</h1>
                </div>
                <div className="card">
                    <h2 className="player">Player 3</h2>
                    <h1 className="score">0</h1>
                </div>
                <div className="card">
                    <h2 className="player">Player 4</h2>
                    <h1 className="score">0</h1>
                </div>
            </div>
        </div>
    )
}

export default App;