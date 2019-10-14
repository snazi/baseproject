import React, {Component} from 'react';
import logo from '../../../../src/assets/images/logo.svg';
import '../functiondemo/style.module.css'

class MapsDemo extends Component {

    constructor() {
        super();

        this.state = {
             Users: [
                 {
                     name: 'Angelo',
                     id: '1'
                 },
                 {
                    name: 'Juice',
                    id: '2'
                 },
                 {
                    name: 'Sharl',
                    id: '3'
                 },
                 {
                     name: 'Allen',
                     id: '4'
                 }
             ]
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {
                        this.state.Users.map(User => 
                            <h1 key={User.id}>{User.name}</h1>
                        )
                    }
                </header>
            </div>
        )
    } 
}

export default MapsDemo;