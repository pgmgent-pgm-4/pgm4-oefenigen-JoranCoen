import react, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        </div>
    );
}
