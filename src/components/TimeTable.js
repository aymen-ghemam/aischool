import React from 'react'

const TimeTable = () => {

    return (


        <div className = 'page time-table row' style={{
            backgroundImage: 'url(../assets/velo.svg)',
            backgroundPosition: 'bottom',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '25%'
        }}>
        <div className='container'>
            <h1 className='title'>M1 Computer Vision Timetable</h1>
            <h4 className='secondary'>Check out the latest updates on your timeline</h4>
            <div style={{marginTop: '2rem'}}>
                <img src='../assets/table.svg' alt='' />
            </div>
        </div>


        </div>
    )
}

export default TimeTable
