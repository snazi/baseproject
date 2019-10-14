import React, {Component} from 'react';
import logo from '../../../../src/assets/images/logo.svg';
import '../functiondemo/style.module.css'
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class SearchboxDemo extends Component {

    constructor() {
        super();

        this.state = {
             users: [
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

        const { users, searchField } = this.state

        const filteredUsers = users.filter( user =>
            user.name.toLowerCase().includes(searchField.toLowerCase())
        )

        return (
            <div className="App">
                <header className="App-header">
                    <CardList>

                    <SearchBox  
                        placeholder='pls enter user here!'
                        handleChange={e => this.setState(
                            {searchField: e.target.value}, 
                            () => console.log(this.state)
                        )}
                    />
                    
                    {
                        filteredUsers.map(User => 
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