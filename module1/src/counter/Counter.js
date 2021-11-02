import React from "react";

export class Counter extends React.Component {
    state = {
        index: 0
    }

    increment= () => {
        this.setState({index: this.state.index + 1})
    }

    decrement = () =>{
        this.setState({index: this.state.index > 0 ? this.state.index - 1 : this.state.index})
    }
    
    render() {
        return (
            <React.Fragment>
                <h1>Counter Component</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <h3>{this.state.index}</h3>
            </React.Fragment>
        )
    }
}

