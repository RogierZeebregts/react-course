import React, { Component } from 'react'
import classes from './App.module.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import AuthContext from '../context/auth-context'

class App extends Component {
    constructor(props) {
        super(props)
        console.log('[App.js] constructor')
    }

    state = {
        persons: [
            { id: '1', name: 'Rogier', age: 37 },
            { id: '2', name: 'Ilse', age: 38 },
            { id: '3', name: 'Marc', age: 39 },
        ],
        showPersons: false,
        showCockpit: true,
        changeCounter: 0,
        authenticated: false,
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props)
        return state
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[App.js] shouldComponentUpdate')
        return true
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js] componentDidUpdate')
    }

    deletePersonHandler = personIndex => {
        const persons = [...this.state.persons]
        persons.splice(personIndex, 1)
        this.setState({ persons })
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => p.id === id)
        const person = { ...this.state.persons[personIndex] }

        person.name = event.target.value
        const persons = [...this.state.persons]
        persons[personIndex] = person

        this.setState((prevState, props) => {
            return {
                persons,
                changeCounter: prevState.changeCounter + 1,
            }
        })
    }

    togglePersonsHandler = () => {
        this.setState({ showPersons: !this.state.showPersons })
    }

    loginHandler = () => {
        this.setState({ authenticated: !this.state.authenticated })
    }

    render() {
        console.log('[App.js] render')
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
            <>
                <br/>
                <button onClick={_ => {
                    this.setState({ showCockpit: !this.state.showCockpit })
                }}>Toggle Cockpit
                </button>
                <AuthContext.Provider
                    value={{
                        authenticated: this.state.authenticated,
                        login: this.loginHandler
                    }}
                >
                    {this.state.showCockpit ?
                        <Cockpit
                            title={this.props.appTitle}
                            showPersons={this.state.showPersons}
                            personsLength={this.state.persons.length}
                            clicked={this.togglePersonsHandler}
                        /> : null}
                    {persons}
                </AuthContext.Provider>
            </>
        )
    }
}

export default withClass(App, classes.App)
