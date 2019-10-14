import React, {Component} from 'react';
import '../functiondemo/style.module.css'

class functiondemo extends Component {

    constructor() {
        super();

        this.state = {
            string: 'hello! Angelo!',
            newState: 'Im a new state!'
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                    {this.state.string}
                    </p>
                    <button onClick={() => this.setState({ string: 'Hello! trainee!'})}>
                        Change text
                    </button>
                </header>
            </div>
        )
    } 
}

export default functiondemo;