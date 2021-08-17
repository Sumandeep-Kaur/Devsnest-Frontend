import { useState } from "react";
import "../style.css";

const Count = () => {
    const [count,setCount] = useState(0);
    return(
       <button className="score" onClick={ () => {
               const newcount = count + 1;
               setCount(newcount);
           }
       }>
           {count}
       </button>
    )
}
export default Count;