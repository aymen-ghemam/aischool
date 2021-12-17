import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

const Login = () => {
    return (
        <div className='login'>
            <div className='row'>
                <div className='left'>
                    <img src='../assets/login.svg' alt='' />
                    <Button className='blue long' text = 'USE FACIAL RECOGNITION' />
                </div>
                <div className='right'>
                    <h3 className='title'>Signin to access your dashboard</h3>
                    <h5 className='secondary'>you can use your credentials or scan your facial features</h5>
                    <form>
                        <Input type = 'email' name = 'email' placeholder = 'example@example.com' />
                        <Input type = 'number' name = 'id' placeholder = '171739074376' />
                        <Input type = 'password' name = 'pass' placeholder = 'password' />
                    </form>
                    <Button className='white long' text = 'LOGIN WITH CREDENTIALS' />
                </div>
            </div>
        </div>
    )
}

export default Login
