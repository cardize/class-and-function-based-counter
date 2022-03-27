import React from 'react'

class ClassComponent extends React.Component {
  state = {
    counter: 0,
  }

  increase = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <div className="box">
        <h2>Class Component</h2>
        <h3>Counter: {this.state.counter}</h3>
        <button onClick={() => this.increase()}>Increase</button>
      </div>
    )
  }
}

export default ClassComponent
