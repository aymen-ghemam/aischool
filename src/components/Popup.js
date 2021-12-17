import React from 'react'
import {IoIosMegaphone} from 'react-icons/io'

const Popup = (props) => {
    return (
        <div className='popup'>
            <div>
               <h2 className='title'>Check out the latest announcements</h2> 
               <h6 className='secondary title'>Find the most recent announcements in one place</h6>
               <br/>
               <br/>
               <div className='row'> 
                    <div><IoIosMegaphone size='1.5em' color='#F80404' /></div>
                    <div><span>Please complete your medical file for the Preventive Medicine Unit</span></div>
               </div>
                <br/>
               <div className='row'>
                    <div><IoIosMegaphone size='1.5em' color='#F80404' /></div>
                    <div><span>The registration fee to be paid (200 DA)</span></div>
               </div>

               <button onClick={props.togglePopup}>OK</button>
            </div>
        </div>
    )
}

export default Popup
