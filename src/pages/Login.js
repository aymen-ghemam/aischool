import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

const Login = (props) => {
    return (
        <div className='login'>
            <div className='row'>
                <div className='left'>
                    <img src='../assets/login.svg' alt='' />
                    <Button className='blue long' text = 'USE FACIAL RECOGNITION' onClick={() => {props.user('../assets/sophie.jpg'); props.setPage('student')}}/>
                </div>
                <div className='right'>
                    <h3 className='title'>Signin to access your dashboard</h3>
                    <h5 className='secondary'>you can use your credentials or scan your facial features</h5>
                    <form>
                        <Input type = 'email' name = 'email' placeholder = 'example@example.com' />
                        <Input type = 'number' name = 'id' placeholder = '171739074376' />
                        <Input type = 'password' name = 'pass' placeholder = 'password' />
                    </form>
                    <Button className='white long' text = 'LOGIN WITH CREDENTIALS' onClick={() => {props.setPage('student')}} />
                </div>
            </div>
        </div>
    )
}

export default Login
