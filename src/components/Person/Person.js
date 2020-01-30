import React from 'react'
import styled from 'styled-components'
// import './Person.css'

const StyledDiv = styled.div`
            border: 1px solid #eee;
            box-shadow: 0 2px 3px #ccc;
            margin: 20px auto;
            padding: 16px;
            text-align: center;
            width: 60%;
            
            @media (min-width: 500px) {
                width: 450px;
            }
        `

const person = (props) => {
    return (
        <StyledDiv>
            <p onClick={props.click}>My name is {props.name} and my age is {props.age} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
    )
}

export default person
