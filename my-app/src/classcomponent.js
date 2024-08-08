import React from 'react'

class ClassComponentDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.incrementVariable = this.increment.bind(this)
        this.decrementVariable = this.decrement.bind(this)
    }
    increment() {
        this.setState({ count: this.state.count+1})
    }
    decrement() {
        this.setState({ count: this.state.count-1})
    }
    render() {
        return (
            <div>
                <h1>count increment using calss component </h1>
                <p>count: {this.state.count}</p>
                <button onClick = {this.incrementVariable}>Add</button>
                <button onClick = {this.decrementVariable}>Subtract</button>

            </div>
        )
    }
}


export default ClassComponentDemo