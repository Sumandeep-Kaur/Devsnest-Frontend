import Card from "./card";
import "../style.css";

const App = () => {
    return (
        <div>
            <h1 className="head">Calorie Chart</h1>
            <div className="container">
                <Card title ="Pizza" cal="56"/>
                <Card title ="Burger" cal="69"/>
                <Card title ="Coke" cal="500"/>
                <Card title ="Browne" cal="180"/>
                <Card title ="Fried Rice" cal="90"/>
                <Card title ="Lassania" cal="200"/>
                <Card title ="Pani Puri" cal="10"/>
                <Card title ="Ice-cream" cal="205"/>
            </div>
        </div>
    )
}

export default App;