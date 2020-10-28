import React, { useContext } from 'react'
import { CounterContext } from '../App';

function AFirst() {

    const counterContext = useContext(CounterContext)

    return (
        <div>
        Compo A {counterContext.countState}
            <button onClick={() => counterContext.CountDispatch('increnment')}>Increment</button>
            <button onClick={() => counterContext.CountDispatch('decrement')}>Decrement</button>
            <button onClick={() => counterContext.CountDispatch('reset')}>Reset</button>
        </div>
    )
}

export default AFirst
