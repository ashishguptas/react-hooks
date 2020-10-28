import React, { useContext } from 'react'
import { CounterContext } from '../App';

function DFirst() {

    const counterContext = useContext(CounterContext)

    return (
        <div>
            compo D {counterContext.countState}
            <button onClick={() => counterContext.CountDispatch('increnment')}>Increment</button>
            <button onClick={() => counterContext.CountDispatch('decrement')}>Decrement</button>
            <button onClick={() => counterContext.CountDispatch('reset')}>Reset</button>
        </div>
    )
}

export default DFirst
