import React, { useEffect, useRef, useContext } from 'react'
import classes from './Cockpit.module.css'
import AuthContext from '../../context/auth-context'

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null)
    const authContext = useContext(AuthContext)

    useEffect(_ => {
        console.log('[Cockpit.js] useEffect')
        toggleBtnRef.current.click()
        return _ => {
            // clearTimeout(timer)
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    }, [])

    useEffect(_ => {
        console.log('[Cockpit.js] 2nd useEffect')
        return _ => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect')
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
            <button ref={toggleBtnRef} className={btnClass.join(' ')} onClick={props.clicked}>Toggle Persons</button>
                <button onClick={authContext.login}>{authContext.authenticated === true ? 'Log out' : 'Log in'}</button>
        </div>
    )
}

export default React.memo(Cockpit)
