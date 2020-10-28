import React, { useEffect, useState } from 'react'

function UseEffectOne() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You have clicked ${count} times`;
    })

    return (
        <div>

            <button onClick={() => setCount(count + 1)}>Count: {count} times</button>
            
        </div>
    )
}

export default UseEffectOne


// useeffect run after every render and update