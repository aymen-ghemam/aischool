import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import MapView from '../components/MapView'
import Button from '../components/Button'
import Radio from '../components/Radio'
import SelectArea from '../components/SelectArea'
import {AiFillRightCircle} from 'react-icons/ai'
import Popup from '../components/Popup'

const Home = () => {
    const [state, setstate] = useState({current: 'home', popup: false});

    const setCurrent = (current) => {
        setstate({current: current});
    }

    const togglePopup = () => {
        setstate({...state, popup: !state.popup});
    }
    return (
        <div className='home'>
            {state.popup && <Popup togglePopup={togglePopup} />}
            <Navbar current={state.current} setCurrent={setCurrent} togglePopup={togglePopup} />
            <br/>
            {
                state.current === 'faq'?
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
                            <h3 className='title blue'> Access without authentication</h3>
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
                </div>
                :
                <div className='container'>
                    {
                        state.current === 'home' ?
                        <div className='filters'>
                            <h3 className='title'>Search interactive map</h3>
                            <h5 className='secondary title'>15 vending machines found</h5>
                            <br/>
                            <div className='row'>
                                <Button type='grey' text='Nearby' />
                                <Button type='blue' text= 'All' />
                            </div>

                            <br/>   
                            <h5>Select area</h5>
                            <div className=''>
                                <SelectArea />
                            </div>
                            
                            <br/>
                            <h5>Keywords</h5>
                            <div className='keywords'>
                        </div>
                        
                    </div>
                    : ''
                    }
                    {
                        state.current === 'report' ?
                        <div className='filters'> 
                            <h3 className='title'>Report an emergency</h3>
                            <h5 className='secondary title'>Position the Pin icon near the place of the emergency</h5>
                            <br/>
                            <h5>Who to call?</h5>
                            <div>
                                {
                                    ['Ambulance', 'Security'].map((select, index) => 
                                        <Radio key={index} text={select} name='call' />
                                    )
                                }
                            </div>
                            
                            <br/>

                            <h5>Anything to note?</h5>
                            <textarea className='textarea' placeholder='Enter your message here' />

                            <br/>
                            
                            <AiFillRightCircle className='right-arrow' size='3em' color='#F80404'/>
                            <br/>
                            <br/>
                            <p>
                            If help doesn't come out in record time, it is advised to call the targeted authorities.
                            </p>

                            <div className='emergency-numbers'>
                                <span>Medical Assistance</span>
                                <span>115</span>
                                <span>Civil Protection</span>
                                <span>14 or 1021</span>
                                <span>Gendarmerie</span>
                                <span>1055</span>
                                <span>Police</span>
                                <span>17 or 1548</span>
                            </div>
                        </div>
                        : ''
                    }
                    <div className='map'>
                        <MapView />
                    </div>
                </div>
            }
        </div>
    )
}

export default Home
