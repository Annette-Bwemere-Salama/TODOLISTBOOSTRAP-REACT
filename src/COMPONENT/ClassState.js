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
        this.setState(prevState => {
            return {
                counter: prevState.counter - 1
            }

        }

        )
    }
    render() {
        return (
            <div>
                <h3>Class state: {this.state.counter}</h3>
                {/* <p>Class state: </p> */}
                <button onClick={this.addOne}>State dans class +</button>
                <button onClick={this.addmin}>State moins -</button>

            </div>
        )
    }
}

export default ClassState
