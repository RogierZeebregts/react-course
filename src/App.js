import React, { Component } from 'react'
import Person from './components/Person/Person'
import { personHelper } from './components/Person/_helpers'
import './App.css'

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
        const {
            nameChangedHandler,
            deletePersonHandler,
            togglePersonsHandler,
        } = personHelper()
        
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
        }
        
        let persons = null
        if (this.state.showPersons) {
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
        
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <button
                    style={style}
                    onClick={_ => togglePersonsHandler(this)}>Toggle Persons
                </button>
                
                {persons}
            </div>
        )
    }
}

export default App
