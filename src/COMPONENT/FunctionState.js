import React, { useState } from "react";


const FunctionState = () => {


    const [counter, setCounter] = useState(0)
    const [compte, setCompte] = useState(0)


    // const addOne = () => {
    //     setCounter(counter + 1)
    // }

    const addOneone = () => {
        setCompte(compte - 1)

    }
    return (
        <div>
            <h3>Function State: {counter}</h3>
            <h3>Function State: {compte}</h3>
            <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>State dans function +</button>
            <button onClick={addOneone}>State dans function -</button>


        </div>
    )
}
export default FunctionState;