import React from 'react'
import {IoIosMegaphone} from 'react-icons/io'
import Annoucement from './Annoucement'

const Popup = (props) => {
    return (
        <div className='popup'>
            <div>
               <h2 className='title'>Check out the latest announcements</h2> 
               <h6 className='secondary title'>Find the most recent announcements in one place</h6>
               <br/>
               <br/>
               <Annoucement text = 'Please complete your medical file for the Preventive Medicine Unit' />
                <br/>
               <Annoucement text = 'The registration fee to be paid (200 DA)' />

               <button onClick={props.togglePopup}>OK</button>
            </div>
        </div>
    )
}

export default Popup
