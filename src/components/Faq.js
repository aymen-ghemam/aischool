import React from 'react'

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
                    <ul>
                        <li>Academic leave</li>
                        <li>Schedules L1</li>
                        <li>Schedules L2 L3 M1 M2</li>
                        <li>Know my Section</li>
                        <li>Teaching follow-up</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h3 className='title blue'> Needing help</h3>  
                        <li>Plan of teaching premises</li>
                        <li>Schedules L1</li>
                        <li>Plan of blocks 100,200,300,400bis</li>
                        <li>How to create an account</li>
                        <li>? I don't know my login!</li>
                    </ul>
                </div>
            </div>
            <h3 className='title blue'>You can access to the same login and password</h3>
            <ul>
                <li>To the mailbox</li>
                <li>To the online lessons</li>
            </ul>
        </div>
    )
}

export default Faq
