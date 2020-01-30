/**
 * @param event
 * @param id
 * @param t
 */
export function nameChangedHandler(event, id, t) {
    const personIndex = t.state.persons.findIndex(p => p.id === id)
    const person = {...t.state.persons[personIndex]}
    
    person.name = event.target.value
    const persons = [...t.state.persons]
    persons[personIndex] = person
    t.setState({persons})
}

/**
 * @param personIndex
 * @param t
 */
export function deletePersonHandler(personIndex, t) {
    const persons = [...t.state.persons]
    persons.splice(personIndex, 1)
    t.setState({persons})
}

/**
 * @param t
 */
export function togglePersonsHandler(t) {
    t.setState({showPersons: !t.state.showPersons})
}
