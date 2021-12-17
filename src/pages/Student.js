import React from 'react'
import Annoucement from '../components/Annoucement'

const Student = () => {
    return (
        <div className = 'page student row'>
            <div>

            </div>
            <div className='container'>
                <h1 className='title'>Check out the latest announcements</h1>
                <h4 className='secondary'>Find the most recent announcements in one place</h4>
                <br/>

                <Annoucement text = 'Please complete your medical file for the Preventive Medicine Unit' />
                <Annoucement text = 'The registration fee to be paid (200 DA)' />
                <br/>

                <h1 className='title'>Don't forget your deadlines</h1>
                <h4 className='secondary'>Find the most recent announcements in one place</h4>
                <br/>

                <Annoucement text = 'Introduction to Security audit risk assessment project on Monday 04th January 2022' />
                <Annoucement text = 'Exercice 4 of Serie 3 Modular Arithmetics, Deadline: Tomorrow' />
            </div>
        </div>
    )
}

export default Student
