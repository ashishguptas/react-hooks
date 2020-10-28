import React, { useState, useEffect, useRef } from 'react'

function UseRefTwo() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(PrevTimer =>  PrevTimer + 1)
        }, 1000)
        return() => {
            clearInterval(intervalRef)
        }
    }, [])
    return (
        <div>
            Timer {timer}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
        </div>
    )
}

export default UseRefTwo
