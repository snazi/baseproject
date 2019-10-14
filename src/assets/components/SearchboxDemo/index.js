import React, {Component} from 'react';
import logo from '../../../../src/assets/images/logo.svg';
import '../functiondemo/style.module.css'
import {CardList} from './components/card-list/card-list.component'

class SearchboxDemo extends Component {

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
             ],

             searchField: ''
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <CardList>

                    <input type="search" placeholder="Look for a user here"  onChange={e => this.setState({ searchField: e.target.value}, () => console.log(this.state) )} />
                    
                    {
                        this.state.Users.map(User => 
                            <h1 key={User.id}>{User.name}</h1>
                        )
                    }
                    </CardList>
                </header>
            </div>
        )
    } 
}

export default SearchboxDemo;