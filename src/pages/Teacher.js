import React from 'react'
import Annoucement from '../components/Annoucement'

const Teacher = () => {
    return (
        <div className = 'page student row'>
            <div>

            </div>
            <div className='container'>
                <Annoucement text = 'Please complete your medical file for the Preventive Medicine Unit' />
                <Annoucement text = 'Applications for Spring 2022 Paraprofessional Pathways Project due Nov. 5' />
                <Annoucement text = 'New Student Ambassador Program to Enhance New Student Recruitment Efforts' />
                <Annoucement text = 'CTE Graduate Program Information Sessions' />
                <Annoucement text = 'Teacher Development and Resources Library adjusted hours Sept. 15-17' />
            </div>
        </div>
    )
}

export default Teacher
