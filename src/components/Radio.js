import React from 'react'

const Radio = (props) => {
    return (
        <div className='radio'>
            <input type="radio" name={props.name} />
            <span>{props.text}</span>
        </div>
    )
}

export default Radio
