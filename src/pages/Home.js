import React from 'react'
import Navbar from '../components/Navbar'
import MapView from '../components/MapView'
import Button from '../components/Button'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <br/>
            <div className='container'>
                <div className='filters'>
                    <div className='row'>
                        <Button type='grey' text='Nearby' />
                        <Button type='blue' text= 'All' />
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
