import React, { Component } from 'react'

class ClassState extends Component {



    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }

    addOne = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    addmin = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    render() {
        return (
            <div>
                <p>Class state: {this.state.counter}</p>
                <button onClick={this.addOne}>State dans class +</button>
                <button onClick={this.addmin}>State moins -</button>

            </div>
        )
    }
}

export default ClassState
