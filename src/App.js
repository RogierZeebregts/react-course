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
        showPersons: false,
    }
    
    nameChangedHandler = event => {
        this.setState({
            persons: [
                {name: 'Rogier', age: 27},
                {name: event.target.value, age: 21},
                {name: 'Marc', age: 39},
            ],
        })
    }
    
    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons
        persons.splice(personIndex, 1)
        this.setState({persons: persons})
    }
    
    togglePersonsHandler = () => {
        this.setState({showPersons: !this.state.showPersons})
    }
    
    render () {
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
                                name={person.name}
                                age={person.age}
                                click={_ => this.deletePersonHandler(index)}
                            />
                        })
                    }
                    
                    {/*<Person*/}
                    {/*    name={this.state.persons[0].name}*/}
                    {/*    age={this.state.persons[0].age}*/}
                    {/*/>*/}
                    {/*<Person*/}
                    {/*    name={this.state.persons[1].name}*/}
                    {/*    age={this.state.persons[1].age}*/}
                    {/*    click={_ => this.switchNameHandler('NAAM 2')}*/}
                    {/*    changed={this.nameChangedHandler}*/}
                    {/*>Child value</Person>*/}
                    {/*<Person*/}
                    {/*    name={this.state.persons[2].name}*/}
                    {/*    age={this.state.persons[2].age}*/}
                    {/*/>*/}
                </div>
            )
        }
        
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons
                </button>
                
                {persons}
            </div>
        )
    }
}

export default App
