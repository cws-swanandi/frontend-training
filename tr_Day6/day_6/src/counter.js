import {useState} from "react";

function Counter (){
    const [count,setCount]=useState(0);
    return(
        <div id="counter" className="counter">
            <h3>Counter: {count}</h3>
            <button onClick={() => setCount(count + 1)}> Increase </button>
            <button onClick={() => setCount(count - 1)}> Decrease </button>
            <button onClick={() => setCount(0)}> Reset </button>
        </div>
    );
} 
export default Counter;
