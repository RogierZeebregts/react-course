import React from 'react'
import { deletePersonHandler, nameChangedHandler } from './Person/_helpers'
import Person from './Person/Person'

const persons = (props) => props.persons.map((person, index) => {
        return <Person
            key={person.id}
            name={person.name}
            age={person.age}
            changed={(event) => nameChangedHandler(event, person.id, props.this)}
            click={_ => deletePersonHandler(index, props.this)}
        />
    })

export default persons
