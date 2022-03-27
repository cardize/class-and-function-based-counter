import React, { useState } from 'react'

const FunctionComponent = () => {
  const [counter, setCounter] = useState(0)

  const increase = () => {
    setCounter(counter + 1)
  }

  return (
    <div className="box">
      <h2>Function Component</h2>
      <h3>Counter: {counter}</h3>
      <button onClick={() => increase()}>Increase</button>
    </div>
  )
}

export default FunctionComponent
