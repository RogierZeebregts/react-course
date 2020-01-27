import React, { Component } from 'react'
import Person from './components/Person/Person'
import './App.css'

class App extends Component {
    state = {
        persons: [
            {name: 'Rogier', age: 37},
            {name: 'Ilse', age: 38},
            {name: 'Marc', age: 39},
        ],
    }
    
    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 27},
                {name: 'Nee', age: 21},
                {name: 'Marc', age: 39},
            ],
        })
    }
    
    render () {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <button onClick={this.switchNameHandler.bind(this, 'NAAM 1')}>Switch name</button> // Ineffeicient
                
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={_ => this.switchNameHandler('NAAM 2')}
                >Child value</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                />
            </div>
        )
    }
}

export default App
