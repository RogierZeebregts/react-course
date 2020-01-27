import React, { useState } from 'react'
import Person from './components/Person/Person'
import './App.css'

const app = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Rogier', age: 37},
            {name: 'Ilse', age: 38},
            {name: 'Marc', age: 39},
        ],
    })
    
    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                {name: 'JA', age: 27},
                {name: 'Nee', age: 21},
                {name: 'Marc', age: 39},
            ],
        })
    }
    
    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <button onClick={switchNameHandler}>Switch name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        </div>
    )
}

export default app
