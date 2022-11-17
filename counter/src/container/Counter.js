import './Counter.css'
import {useState} from "react";
const Counter = () => {
    const [counter, setCounter]  = useState(0);

    const incerment = () =>{
        setCounter(counter + 1)
    }

    const decrement = () => {
        if(counter > 0){
            setCounter(counter - 1)
        }
    }
    return (
        
        <><body>
            <header>
            <div className="heading">
                Counter App
            </div>
        </header>
            <section>
                <div className="counter-screen">
                    <span>{counter}</span>
                </div>
                <div className="counter-button">
                    <div className="counter-buttons">
                        <button onClick={incerment} className="action-btn incerment">Increase</button>
                        <button onClick={decrement} className="action-btn decrement">Decrease</button>
                    </div>
                </div>
            </section>
        </body>
        </>
    )
}

export default Counter;
