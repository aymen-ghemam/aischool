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

    return (
        <div className='page'>
            {popup && <Popup togglePopup={togglePopup} />}
            <Navbar current={state.current} setCurrent={setCurrent} togglePopup={togglePopup} />
            <br/>
                {page === 'home' && <Home current={state.current} />}
                {page === 'login' && <Login />}

                {page === 'student' && <Student />}
        </div>
    )
}

export default App;
