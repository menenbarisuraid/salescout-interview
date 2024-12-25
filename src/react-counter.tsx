// Implement a Counter component with two buttons:
// “Increase” and “Decrease”, which displays the current counter value.
import React, {useState} from 'react'

function Counter() {
    // Initialize the counter state with a default value of 0
    const [counter, setCounter] = useState(0);

    // Function to increase the counter by 1
    const increase = () => setCounter(counter + 1);

    // Function to decrease the counter by 1
    const decrease = () => setCounter(counter - 1);

    return (<>
        <div>
            <p>Current Count: {counter}</p>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    </>)
}

export default Counter