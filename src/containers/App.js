import React, { Component } from 'react'
import classes from './App.module.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
    state = {
        persons: [
            {id: '1', name: 'Rogier', age: 37},
            {id: '2', name: 'Ilse', age: 38},
            {id: '3', name: 'Marc', age: 39},
        ],
        showPersons: false,
    }
    
    render () {
        let persons = null
        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons persons={this.state.persons} this={this}/>
                </div>
            )
        }
        
        return (
            <div className={classes.App}>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    t={this}
                />
                {persons}
            </div>
        )
    }
}

export default App
