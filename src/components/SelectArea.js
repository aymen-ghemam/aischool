import React, { useState } from 'react'
import Radio from '../components/Radio'

const SelectArea = () => {
    const [state, setstate] = useState(
        {
            selects: [
                'Classes', 
                'Amphitheatres', 
                'Restorations', 
                'Pharmacies', 
                'Vending Machines', 
                'WC', 
                'Recycling Bins', 
                'Faculties']
        })

    return (
        <div className='select-area'>
            {
                state.selects.map((select, index) => 
                    <Radio key={index} text={select} name='area' />
                )
            }
        </div>
    )
}

export default SelectArea
