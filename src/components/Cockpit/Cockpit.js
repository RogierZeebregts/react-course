import React, { useEffect } from 'react'
import classes from './Cockpit.module.css'

const Cockpit = (props) => {
    useEffect(_ => {
        console.debug('[Cockpit.js] useEffect')
        const timer = setTimeout(_ => {
            alert('d')
        }, 1000)
        
        return _ => {
            clearTimeout(timer)
            console.debug('[Cockpit.js] cleanup work in useEffect')
        }
    }, [])
    
    useEffect(_ => {
        console.debug('[Cockpit.js] 2nd useEffect')
        return _ => {
            console.debug('[Cockpit.js] cleanup work in 2nd useEffect')
        }
    })
    
    let assignedClasses = []
    let btnClass = [classes.Button]
    
    if (props.showPersons) {
        btnClass.push(classes.Red)
    }
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red)
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold)
    }
    
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Dit is een paragraaf</p>
            <button className={btnClass.join(' ')} onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}

export default React.memo(Cockpit)
