import React from 'react'

const Button = (props) => {
    return (
        <button className={props.type}>{props.text}</button>
    )
}

export default Button
