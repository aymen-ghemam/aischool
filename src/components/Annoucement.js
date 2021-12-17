import React from 'react'
import { IoIosMegaphone } from 'react-icons/io'

const Annoucement = (props) => {
    return (
        <div className='announcement row'> 
            <div><IoIosMegaphone size='1.5em' color='#F80404' /></div>
            <div><span>{props.text}</span></div>
        </div>
    )
}

export default Annoucement
