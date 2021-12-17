import React from 'react'
import { BsFillEyeFill } from 'react-icons/bs';
import { FaThList } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';

const SideBar = (props) => {
    return (
        <div className='side-bar'>
            <div className='side-bar-name'>
                <ul>
                    <li className='name'>{props.name} </li>
                    <li className='sub-name'>{props.subContent} </li>
                </ul>
            </div>
            <div className='side-bar-menu'>
                <ul>
                    <li className='elements'>
                        <p className='icon'><FaThList /></p>
                        <p className='elem'>TIMETABLE</p>
                    </li>
                    <li className='elements'>
                        <p className='icon'><BsFillEyeFill /></p>
                        <p className='elem'>SCORE BUILTIN</p>
                    </li>
                    <li className='elements'>
                        <p className='icon'><AiFillMail /></p>
                        <p className='elem'>REQUEST DOCUCMENTS OR TAKE APOINTEMENTS</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar
