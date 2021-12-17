import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import MapView from '../components/MapView'
import Button from '../components/Button'
import SelectArea from '../components/SelectArea'

const Home = () => {
    const [state, setstate] = useState({current: 'home'});

    const setCurrent = (current) => {
        setstate({current: current});
    }

    return (
        <div className='home'>
            <Navbar current={state.current} setCurrent={setCurrent} />
            <br/>
            <div className='container'>
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

                <div className='map'>
                    <MapView />
                </div>
            </div>
        </div>
    )
}

export default Home
