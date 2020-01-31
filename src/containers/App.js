import React, { Component } from 'react'
import classes from './App.module.css'
import {togglePersonsHandler} from '../components/Persons/Person/_helpers'
import Persons from '../components/Persons/Persons'

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
        let btnClass = [classes.Button]
        
        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons persons={this.state.persons} this={this}/>
                </div>
            )
            
            btnClass.push(classes.Red)
        }
        
        const assignedClasses = []
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red)
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold)
        }
        
        return (
            <div className={classes.App}>
                <h1>Hi, I'm a React App</h1>
                <p className={assignedClasses.join(' ')}>Dit is een paragraaf</p>
                <button className={btnClass.join(' ')} onClick={_ => togglePersonsHandler(this)}>Toggle Persons</button>
                
                {persons}
            </div>
        )
    }
}

export default App
