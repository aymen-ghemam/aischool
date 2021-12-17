import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import Home from "./pages/Home";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Popup from "./components/Popup";
import Login from "./pages/Login";
import Student from "./pages/Student";
import styled from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const App = () => {
    const [user, setUser] = useState({});
    const [state, setstate] = useState({current: 'home', popup: false});
    const [popup, setPopup] = useState(false);
    const [page, setPage] = useState('student');

    const togglePopup = () => {
        setPopup(!popup);
    }

    const setCurrent = (current) => {
        setstate({current: current});
    }

    const steps = [
        {
          id: '0',
          message: 'Welcome to react chatbot!',
          trigger: '1',
        },
        {
          id: '1',
          message: 'Bye!',
          start: true,
        },
    ];

    return (
        <div className='page'>
            {popup && <Popup togglePopup={togglePopup} />}
            <Navbar current={state.current} setCurrent={setCurrent} togglePopup={togglePopup} />
            <br/>
            {page === 'home' && <Home current={state.current} />}
            {page === 'login' && <Login />}

            {page === 'student' && <Student />}

            {/* <div className='bot'>
                <ChatBot steps={steps} />
            </div> */}
            
        </div>
    )
}

export default App;
