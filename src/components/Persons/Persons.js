import React, { PureComponent } from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {
    // static getDerivedStateFromProps (props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps')
    //     return state
    // }
    
    // COMMENTED BECAUSE CHANGED TO PURECOMPONENT
    // shouldComponentUpdate (nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate')
    //     return (
    //         nextProps.persons !== this.props.persons
    //         || nextProps.changed !== this.props.changed
    //         || nextProps.clicked !== this.props.clicked
    //     )
    // }
    
    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return {message: 'Snapshot!'}
    }
    
    componentDidUpdate (prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate')
        console.log(snapshot)
    }
    
    componentWillUnmount () {
        console.log('[Persons.js] componentWillUnmount')
    }
    
    render () {
        return this.props.persons.map((person, index) => {
            console.log('[Persons.js] render')
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
