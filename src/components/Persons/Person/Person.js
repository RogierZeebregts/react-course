import React, { Component } from 'react'
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types'
import classes from './Person.module.css'
import AuthContext from '../../../context/auth-context'

class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef()
    }

    static contextType = AuthContext

    componentDidMount() {
        this.inputElementRef.current.focus()
        // this.inputElement.focus()
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] render')
        return (
            <div>
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}

                <p onClick={this.props.click}>
                    My name is {this.props.name} and my age is {this.props.age}
                </p>
                <p>{this.props.children}</p>
                <input
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text"
                    value={this.props.name}
                    onChange={this.props.changed}
                />
            </div>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
}

export default withClass(Person, classes.Person)
