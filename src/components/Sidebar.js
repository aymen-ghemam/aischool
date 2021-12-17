import React from 'react'

const SideBar = (props) => {
    return (
        <div className='side-bar'>
            <div>
                <h3 className='name'> {props.name} </h3>
                <h5 className='sub-name'> {props.subContent} </h5>
            </div>
            <div className='side-bar-menu'>
                <h5 className=''> TIMETABLE </h5>
                <h5 className=''> SCORE BUILTIN </h5>
                <h5 className=''> REQUEST DOCUCMENTS OR TAKE APOINTEMENTS </h5>
            </div>
        </div>
    )
}

export default SideBar
