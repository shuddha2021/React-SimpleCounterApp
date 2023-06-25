// Counter.tsx

import React, { useState, useEffect } from 'react';

const Counter = (): JSX.Element => {
    // Initialize state variable count with initial value 0
    const [count, setCount] = useState(0);

    // Define handler functions for incrementing and decrementing count
    const increment = () => {
        // Update count by adding one
        setCount(count + 1);
    };

    const decrement = () => {
        // Update count by subtracting one
        setCount(count - 1);
    };

   /* // Define a handler function for resetting count
    const reset = () => {
        // Set count to zero
        setCount(0);
    };*/


    // Use useEffect hook to perform side effects based on count value
    useEffect(() => {
        // Log the count value to the console
        console.log(`The current count is ${count}`);
    }, [count]); // Only run the effect when count changes

    // Return JSX elements for rendering counter app
    return (
        <div className="counter">
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
             {/*Add a reset button that sets the count value to zero
            <button onClick={reset}>Reset</button>*/}
        </div>
    );
};

export default Counter; // Export the Counter component as a default export
