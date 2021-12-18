import React from 'react'

const Message = (props) => {
    return (
        <div className={`message ${props.type === 'left'? 'left': 'right'}`}>
            <p >
            {props.text}
        </p>
        </div>
    )
}

export default Message
