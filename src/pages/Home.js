import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import MapView from '../components/MapView'
import Button from '../components/Button'
import Radio from '../components/Radio'
import SelectArea from '../components/SelectArea'
import {AiFillRightCircle} from 'react-icons/ai'
import Popup from '../components/Popup'
import Faq from '../components/Faq'

const Home = (props) => {
    return (            
        <div className='home'>
            {
                props.current === 'faq'?
                <Faq />
                :
                <div className='container'>
                    {
                        props.current === 'home' ?
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
                        props.current === 'report' ?
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
