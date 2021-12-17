import React from 'react'
import { FaQuestion, FaMapMarkerAlt } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';
import { AiOutlineUnorderedList, AiOutlineEye, AiFillMail, AiFillBook } from 'react-icons/ai';

const Faq = () => {
    return (
        <div className='faq' style={{
            backgroundImage: 'url(../assets/faq.svg)',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '40%'
        }}>
            <h3 className='title'>Frequently asked questions</h3>
            <h5 className='secondary title'>Get your answer from our list of most frequently asked questions</h5>
            <br/>
            <div className='row'>
                <div>
                <h3 className='title blue'> > Access without authentication  </h3>
                    <ul>
                        <li><BiTime />  Academic leave</li>
                        <li><BiTime />  Schedules L1</li>
                        <li><BiTime />  Schedules L2, L3, M1, M2</li>
                        <li><AiOutlineUnorderedList />  Know my Section</li>
                        <li><AiOutlineEye />  Teaching follow-up</li>
                    </ul>
                </div>
                <div>
                <h3 className='title blue'> > Needing help</h3>
                    <ul>
                        <li><FaMapMarkerAlt /> Plan of teaching premises</li>
                        <li><FaMapMarkerAlt /> Plan of blocks 100,200,300,400bis</li>
                        <li><FaQuestion /> How to create an account</li>
                        <li><FaQuestion /> I don't know my login!</li>
                    </ul>
                </div>
            </div>
            <br/><br/>
            <h3 className='title blue'> > You can access to the same login and password</h3>
            <ul>
                <li><AiFillMail /> To the mailbox</li>
                <li><AiFillBook />To the online lessons</li>
            </ul>
        </div>
    )
}

export default Faq
