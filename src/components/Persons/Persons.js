import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
    // static getDerivedStateFromProps (props, state) {
    //     console.debug('[Persons.js] getDerivedStateFromProps')
    //     return state
    // }
    
    shouldComponentUpdate (nextProps, nextState) {
        console.debug('[Persons.js] shouldComponentUpdate')
        return nextProps.persons !== this.props.persons
    }
    
    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.debug('[Persons.js] getSnapshotBeforeUpdate')
        return {message: 'Snapshot!'}
    }
    
    componentDidUpdate (prevProps, prevState, snapshot) {
        console.debug('[Persons.js] componentDidUpdate')
        console.debug(snapshot)
    }
    
    componentWillUnmount () {
        console.debug('[Persons.js] componentWillUnmount')
    }
    
    render () {
        return this.props.persons.map((person, index) => {
            console.debug('[Persons.js] render')
            return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}
                click={_ => this.props.clicked(index, this.props.this)}
            />
        })
    }
}

export default Persons
