import React from 'react'

function FunctionalComponent() {
    let count = 0
    return (
        <div>
            <h1>Counter App using Functional Component</h1>
            <p>Count: {count}</p>
            <button onClick={() => count + 1}>Addddddd</button>
        </div>
    )
}


export default FunctionalComponent 