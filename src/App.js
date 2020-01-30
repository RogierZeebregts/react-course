import React, { Component } from 'react'
import Person from './components/Person/Person'
import './App.css'
import {
    nameChangedHandler,
    deletePersonHandler,
    togglePersonsHandler,
} from './components/Person/_helpers'

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
        const style = {}
        
        let persons = null
        if (this.state.showPersons) {
            style.backgroundColor = 'red'
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black',
            }
            
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person
                                key={person.id}
                                name={person.name}
                                age={person.age}
                                changed={(event) => nameChangedHandler(event, person.id, this)}
                                click={_ => deletePersonHandler(index, this)}
                            />
                        })
                    }
                </div>
            )
        }
        
        const classes = []
        if (this.state.persons.length <= 2) {
            classes.push('red')
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold')
        }
        
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>Dit is een paragraaf</p>
                <button className="button" onClick={_ => togglePersonsHandler(this)}>Toggle Persons</button>
                
                {persons}
            </div>
        )
    }
}

export default App
