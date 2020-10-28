// <!-- don't call hooks inside loops, condition, or nested function -->

import React, { useEffect, useState } from 'react'

function Usestate() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('')

    useEffect(() => {
        console.log(`useEffect has been upated`);
        document.title = `clicked ${count} times`;
    }, [count])

    return (
        <div>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Count First {count}</button>   
        </div>
    )
}

export default Usestate
