import React, { Component } from 'react'
import classes from './App.module.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
    constructor (props) {
        super(props)
        console.debug('[App.js] constructor')
    }
    
    state = {
        persons: [
            {id: '1', name: 'Rogier', age: 37},
            {id: '2', name: 'Ilse', age: 38},
            {id: '3', name: 'Marc', age: 39},
        ],
        showPersons: false,
        showCockpit: true,
    }
    
    static getDerivedStateFromProps (props, state) {
        console.debug('[App.js] getDerivedStateFromProps', props)
        return state
    }
    
    componentDidMount () {
        console.debug('[App.js] componentDidMount')
    }
    
    shouldComponentUpdate (nextProps, nextState, nextContext) {
        console.debug('[App.js] shouldComponentUpdate')
        return true
    }
    
    componentDidUpdate (prevProps, prevState, snapshot) {
        console.debug('[App.js] componentDidUpdate')
    }
    
    deletePersonHandler = personIndex => {
        const persons = [...this.state.persons]
        persons.splice(personIndex, 1)
        this.setState({persons})
    }
    
    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => p.id === id)
        const person = {...this.state.persons[personIndex]}
        
        person.name = event.target.value
        const persons = [...this.state.persons]
        persons[personIndex] = person
        this.setState({persons})
    }
    
    togglePersonsHandler = () => {
        this.setState({showPersons: !this.state.showPersons})
    }
    
    render () {
        console.debug('[App.js] render')
        let persons = null
        if (this.state.showPersons) {
            persons = (
                <>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    />
                </>
            )
        }
        
        return (
            <div className={classes.App}>
                <br/>
                <button onClick={_ => {this.setState({showCockpit: !this.state.showCockpit})}}>Toggle Cockpit</button>
                {this.state.showCockpit ?
                    <Cockpit
                        title={this.props.appTitle}
                        showPersons={this.state.showPersons}
                        personsLength={this.state.persons.length}
                        clicked={this.togglePersonsHandler}
                    /> : null}
                {persons}
            </div>
        )
    }
}

export default App
