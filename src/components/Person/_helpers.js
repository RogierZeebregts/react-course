/**
 * @param event
 * @param id
 * @param t
 */
const nameChangedHandler = function (event, id, t) {
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
const deletePersonHandler = function (personIndex, t) {
    const persons = [...t.state.persons]
    persons.splice(personIndex, 1)
    t.setState({persons})
}

/**
 * @param t
 */
const togglePersonsHandler = function(t) {
    t.setState({showPersons: !t.state.showPersons})
}

/**
 * @returns {{deletePersonHandler: deletePersonHandler, nameChangedHandler: nameChangedHandler, togglePersonsHandler: togglePersonsHandler}}
 */
export function personHelper () {
    return {
        nameChangedHandler,
        deletePersonHandler,
        togglePersonsHandler
    }
}
