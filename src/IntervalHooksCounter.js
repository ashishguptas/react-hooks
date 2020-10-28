import React, { useEffect, useState } from 'react'

function IntervalHooksCounter() {

    const [count, setCount] = useState(0)
    const tick = () => {
        setCount(count + 1)
    }

    useEffect(() => {

        // if you want use multiple useeffect than call function inside the useeffect

        const interval = setInterval(tick, 1000)

        return(() => {
            clearInterval(interval)
        })
        
    }, [])

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHooksCounter
