import React, { useState } from "react";
import propTypes from 'prop-types';

const CounterApp = ({ value = 0 }) => {

    const [counter, setCounter] = useState(value);

    const aumentarClicks = () => setCounter(counter + 1)
    //setCounter (counter + 1)
    //setCounter ( (e) => c + 1 )

    const restarClicks = () => setCounter(counter - 1)
    //setCounter ( (e) => c + 1 )

    const reset = () => setCounter(value)
    //setCounter (counter - 1){}
    //setCounter ( (e) => c + 1 )


    return (
        <>
            <div className="container">
                <h1>CounterApp</h1>
                <h2> Haz dado: {counter} clicks</h2>

                <button onClick={aumentarClicks}>Aumentar +1</button>
                <button onClick={reset}>Reset</button>
                <button onClick={restarClicks}>Disminuir -1</button>
            </div>

        </>
    )
}

CounterApp.propTypes = {
    value: propTypes.number

}

export default CounterApp;